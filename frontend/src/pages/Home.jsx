import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Link,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  Group as GroupIcon,
  PersonAdd as PersonAddIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  BarChart as BarChartIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Star as StarIcon,
  VolunteerActivismOutlined,
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import fimg1 from "../assets/eduForAll.png";
import fimg2 from "../assets/cleanWater.png";
import fimg3 from "../assets/orphanages.png";
// Custom theme with Indian cultural colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#FF9933", // Saffron
    },
    secondary: {
      main: "#138808", // Green
    },
    background: {
      default: "#FFF4E6", // Light saffron tint for warmth
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif", // Modern font
  },
});

const carouselImages = [
  img1, // Replace with actual paths
  img2,
  img3,
];

export default function App() {
  const [copied, setCopied] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const navigate = useNavigate();
  // Carousel auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleCloseSnackbar = () => {
    setCopied(false);
  };

  const handleBtn = () => {
    navigate("/login");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.default",
        }}
      >
        {/* Hero Section */}
        <Box
          id="home" // Section ID for "Home"
          sx={{
            position: "relative",
            height: "80vh",
            backgroundImage: `url(${carouselImages[carouselIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background-image 1s ease-in-out",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4))",
            }}
          />
          <Container
            maxWidth="md"
            sx={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: "white",
                fontWeight: 800,
                textAlign: "center",
                mb: 2,
                fontSize: { xs: "2.5rem", md: "4.5rem" },
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              DanaMitra
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                color: "white",
                textAlign: "center",
                mb: 4,
                fontSize: { xs: "1.25rem", md: "1.75rem" },
                fontWeight: 300,
                maxWidth: "700px",
              }}
            >
              Empowering Generosity, Inspiring Change.
            </Typography>
            <Button
              variant="contained"
              onClick={handleBtn}
              startIcon={<VolunteerActivismOutlined />}
              sx={{
                bgcolor: "white",
                color: "primary.main",
                textTransform: "uppercase",
                fontWeight: "bold",
                borderRadius: 50,
                py: 1,
                px: 3,
                "&:hover": {
                  bgcolor: "#F5F5F5",
                  transform: "scale(1.05)",
                },
                transition: "all 0.3s ease",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
              }}
            >
              Donate Now
            </Button>
          </Container>
        </Box>

        {/* About Us Section */}
        <Box id="about" sx={{ py: 10 }}>
          <Container maxWidth="md">
            <Typography
              variant="h3"
              component="h2"
              sx={{
                textAlign: "center",
                mb: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "primary.main",
                fontWeight: 700,
              }}
            >
              <GroupIcon sx={{ mr: 1, fontSize: 40 }} />
              About Us
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                fontSize: "1.2rem",
                lineHeight: 1.8,
                color: "text.secondary",
                maxWidth: "800px",
                mx: "auto",
              }}
            >
              At DanaMitra, every act of generosity creates a ripple of hope.
              Our platform connects you with meaningful causes, empowering you
              to support, share, and witness the impact of your donations in
              real-time.
            </Typography>
          </Container>
        </Box>

        {/* How It Works Section */}
        <Box id="how-it-works" sx={{ py: 10, bgcolor: "#F9F9F9" }}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              component="h2"
              sx={{
                textAlign: "center",
                mb: 6,
                color: "primary.main",
                fontWeight: 700,
              }}
            >
              How It Works
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {[
                {
                  icon: <PersonAddIcon />,
                  title: "Sign Up",
                  desc: "Create your profile to start making a difference.",
                },
                {
                  icon: <FavoriteIcon />,
                  title: "Donate",
                  desc: "Choose a cause and contribute securely.",
                },
                {
                  icon: <ShareIcon />,
                  title: "Share",
                  desc: "Spread the word with your referral code.",
                },
                {
                  icon: <BarChartIcon />,
                  title: "Track Impact",
                  desc: "See the real-time impact of your generosity.",
                },
              ].map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
                      },
                      borderRadius: 3,
                      bgcolor: "white",
                    }}
                  >
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <Box
                        sx={{
                          bgcolor: "primary.light",
                          borderRadius: "50%",
                          width: 60,
                          height: 60,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 2,
                        }}
                      >
                        {React.cloneElement(item.icon, {
                          sx: { fontSize: 30, color: "primary.main" },
                        })}
                      </Box>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Impact/Featured Campaigns Section */}
        <Box id="campaigns" sx={{ py: 10 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              component="h2"
              sx={{
                textAlign: "center",
                mb: 5,
                color: "primary.main",
                fontWeight: 700,
              }}
            >
              Our Impact
            </Typography>
            <Grid container spacing={6} justifyContent="center" sx={{ mb: 8 }}>
              {[
                { value: "₹1,250,000", label: "Raised" },
                { value: "500", label: "Campaigns Funded" },
                { value: "10,000", label: "Donors" },
              ].map((stat, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Typography
                    variant="h4"
                    sx={{
                      textAlign: "center",
                      fontWeight: 700,
                      color: "secondary.main",
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "center", color: "text.secondary" }}
                  >
                    {stat.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>

            <Typography
              variant="h4"
              component="h3"
              sx={{
                textAlign: "center",
                mb: 5,
                color: "primary.main",
                fontWeight: 700,
              }}
            >
              Featured Campaigns
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  title: "Education for All",
                  desc: "Supporting education for underprivileged children.",
                  img: fimg1,
                },
                {
                  title: "Clean Water Initiative",
                  desc: "Providing safe drinking water to rural communities.",
                  img: fimg2,
                },
                {
                  title: "Healthcare Access",
                  desc: "Ensuring medical care for the underserved.",
                  img: fimg3,
                },
              ].map((campaign, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
                      },
                      borderRadius: 3,
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={campaign.img}
                      alt={campaign.title}
                      sx={{ borderTopLeftRadius: 3, borderTopRightRadius: 3 }}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {campaign.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {campaign.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Testimonials Section */}
        <Box sx={{ py: 10, bgcolor: "#F9F9F9" }}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              component="h2"
              sx={{
                textAlign: "center",
                mb: 6,
                color: "primary.main",
                fontWeight: 700,
              }}
            >
              What Our Donors Say
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  quote:
                    "DanaMitra makes giving so easy . I love seeing my impact!",
                  name: "Priya S.",
                },
                {
                  quote: "A fantastic platform to support causes I care about!",
                  name: "Rahul M.",
                },
                {
                  quote: "The transparency and ease of use are unmatched!",
                  name: "Anita K.",
                },
              ].map((testimonial, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      bgcolor: "white",
                      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "scale(1.03)" },
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mb: 2,
                        }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            sx={{ color: "#FFD700", fontSize: 24 }}
                          />
                        ))}
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          fontStyle: "italic",
                          mb: 2,
                          textAlign: "center",
                          color: "text.secondary",
                        }}
                      >
                        &quot;{testimonial.quote}&quot;
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{ textAlign: "center", fontWeight: 600 }}
                      >
                        - {testimonial.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Footer */}
        <Box
          id="contact" // Section ID for "Contact"
          component="footer"
          sx={{ mt: "auto", py: 4, bgcolor: "primary.main", color: "white" }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 2 }}
            >
              <Link href="#" color="inherit" underline="hover">
                About
              </Link>
              <Link href="#" color="inherit" underline="hover">
                FAQ
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Contact
              </Link>
              <IconButton
                aria-label="Facebook"
                href="https://facebook.com"
                sx={{ color: "white" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                href="https://twitter.com"
                sx={{ color: "white" }}
              >
                <TwitterIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              DanaMitra – Empowering generosity, inspiring change. Contact us at
              info@danamitra.com
            </Typography>
          </Container>
        </Box>

        <Snackbar
          open={copied}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            Referral code copied to clipboard!
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
}
