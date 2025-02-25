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
  Snackbar,
  Alert,
} from "@mui/material";
import {
  Star as StarIcon,
  VolunteerActivismOutlined,
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import aboutImg from "../assets/image.png";
import helpBg from "../assets/welcome-img.webp";
import fimg1 from "../assets/eduForAll.png";
import fimg2 from "../assets/cleanWater.png";
import fimg3 from "../assets/orphanages.png";
import Footer from "./Footer";
import logoImg1 from "../assets/loop-img-1.jpg";
import logoImg2 from "../assets/loop-img-2.jpg";
import logoImg3 from "../assets/loop-img-3.jpg";

// Updated theme to match Navbar
const theme = createTheme({
  palette: {
    primary: {
      main: "#2ECC71", // Emerald Green
    },
    secondary: {
      main: "#F1C40F", // Sunflower Yellow
    },
    background: {
      default: "#FFFFFF", // Clean white
    },
    text: {
      primary: "#34495E", // Dark Slate
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

// Carousel images array
const carouselImages = [img1, img2, img3];
const carouselLoopImages = [logoImg1, logoImg2, logoImg3];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselIndexLoop, setCarouselIndexLoop] = useState(0);
  const navigate = useNavigate();
  const text = "Think global, Act local";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  // Carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Carousel Loop effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndexLoop((prev) => (prev + 1) % carouselLoopImages.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  //Typewriting animation
  useEffect(() => {
    let timeout;

    if (index <= text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, index));
        setIndex(index + 1);
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 1500); // Pause before repeating (adjust as needed)
    }

    return () => clearTimeout(timeout);
  }, [index, text]);

  const handleCloseSnackbar = () => {
    setCopied(false);
  };

  const handleDonateBtn = () => {
    navigate("/donation");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.default",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Artistic Background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `
              radial-gradient(circle at 20% 30%, rgba(46, 204, 113, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(241, 196, 15, 0.15) 0%, transparent 50%)
            `,
            zIndex: 0,
          }}
        />

        {/* Hero Section with Carousel */}
        <Box
          id="home"
          sx={{
            position: "relative",
            height: "80vh",
            backgroundImage: `url(${carouselImages[carouselIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background-image 1s ease-in-out",
            zIndex: 1,
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
                "linear-gradient(to bottom, rgba(52, 73, 94, 0.7), rgba(52, 73, 94, 0.3))",
            }}
          />
          <Container
            maxWidth="md"
            sx={{
              position: "relative",
              zIndex: "2",
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
                color: "#FFFFFF",
                fontWeight: 800,
                textAlign: "center",
                mb: 2,
                fontSize: { xs: "2.5rem", md: "4.5rem" },
                textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
              }}
            >
              Welcome to NayePankh Foundation
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                color: "#E8F5E9",
                textAlign: "center",
                mb: 4,
                fontSize: { xs: "1.25rem", md: "1.75rem" },
                fontWeight: 300,
                maxWidth: "700px",
                textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
              }}
            >
              Giving Wings to Uplift Lives
            </Typography>
            <Button
              variant="contained"
              onClick={handleDonateBtn}
              startIcon={<VolunteerActivismOutlined />}
              sx={{
                bgcolor: "#F1C40F",
                color: "#34495E",
                textTransform: "uppercase",
                fontWeight: "bold",
                borderRadius: 50,
                py: 1.5,
                px: 4,
                "&:hover": {
                  bgcolor: "#F39C12",
                  transform: "scale(1.05)",
                },
                transition: "all 0.3s ease",
                boxShadow: "0px 6px 20px rgba(0,0,0,0.25)",
              }}
            >
              Donate Now
            </Button>
          </Container>
        </Box>

        {/* About Us Section */}
        <Box id="about" sx={{ py: 14, position: "relative", zIndex: 1 }}>
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
              {/* Text first on mobile */}
              <Grid item xs={12} md={8} order={{ xs: 1, md: 2 }}>
                <Box
                  sx={{
                    pl: { xs: 0, md: 25 },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                      fontWeight: 700,
                      color: "primary.main",
                      mb: 2,
                      fontSize: { xs: "1.75rem", md: "2.5rem" },
                      letterSpacing: "1px",
                    }}
                  >
                    About Us
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 800,
                      color: "text.secondary",
                      mb: 2,
                      fontSize: { xs: "2.5rem", md: "3rem" },
                      whiteSpace: "nowrap", // Prevents wrapping
                      overflow: "hidden", // Hides overflow
                    }}
                  >
                    {displayedText}
                    <span
                      style={{
                        display: index < text.length ? "inline-block" : "none",
                        borderRight: "0.1em solid",
                        animation: "blink 1s steps(2, start) infinite",
                      }}
                    />
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                      lineHeight: 1.8,
                      color: "text.primary",
                      maxWidth: "600px",
                      mx: { xs: "auto", md: 0 },
                    }}
                  >
                    "NayePankh Foundation" is a non governmental organisation
                    with a strong desire to help the society and make it a
                    better place for all, by doing everything in our power and
                    to make our vision successful we would require your vital
                    support. Service to mankind is the service to god. Let’s
                    revolutionise the society together!
                  </Typography>
                </Box>
              </Grid>
              {/* Image second on mobile */}
              <Grid item xs={12} md={4} order={{ xs: 2, md: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={aboutImg}
                    alt="About NayePankh"
                    style={{
                      width: "600px",
                      height: "500px",
                      borderRadius: "10%",
                      border: "8px solid #FFFFFF",
                      boxShadow: "0px 6px 20px rgba(0,0,0,0.2)",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* How You Can Help Section with Background */}
        <Box
          id="how-it-works"
          sx={{
            py: 14,
            position: "relative",
            zIndex: 1,
            backgroundImage: `url(${helpBg})`,
            backgroundSize: "cover",
            filter: "brightness(0.9)",
            backgroundPosition: "center",
            minHeight: "416px",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          <Container
            maxWidth="md"
            sx={{ position: "relative", zIndex: 2, textAlign: "center" }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                color: "#F1C40F", // Yellow for vibrancy and contrast
                fontWeight: 700,
                mb: 4,
                fontSize: { xs: "2rem", md: "3rem" },
                letterSpacing: "1px",
                textShadow: "2px 2px 8px rgba(0,0,0,0.5)", // Shadow for readability
              }}
            >
              It’s that easy to bring a{" "}
              <span style={{ color: "#FFFFFF" }}>Smile</span> on Their Faces
            </Typography>
            <Button
              variant="contahined"
              onClick={handleDonateBtn}
              startIcon={<VolunteerActivismOutlined />}
              sx={{
                bgcolor: "#F1C40F",
                color: "#34495E",
                textTransform: "uppercase",
                fontWeight: "bold",
                borderRadius: 50,
                py: 1.5,
                px: 5,
                mb: 4,
                "&:hover": {
                  bgcolor: "#F39C12",
                  transform: "scale(1.05)",
                },
                transition: "all 0.3s ease",
                boxShadow: "0px 6px 20px rgba(0,0,0,0.25)",
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              Donate Now
            </Button>
            <Typography
              variant="body1"
              sx={{
                bgcolor: "transparent",
                color: "#FFFFFF", // White base color
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                lineHeight: 1.8,
                maxWidth: "800px",
                fontWeight: 700,
                mx: "auto",
                textShadow: "1px 1px 4px rgba(0,0,0,0.5)", // Shadow for readability
              }}
            >
              We don’t ask for much, just{" "}
              <span style={{ color: "#F1C40F" }}>help us</span> with what you{" "}
              <span style={{ color: "#2ECC71" }}>can</span>—Be it{" "}
              <span style={{ color: "#2ECC71" }}>Money</span>,{" "}
              <span style={{ color: "#2ECC71" }}>Skill</span> or Your{" "}
              <span style={{ color: "#2ECC71" }}>Time</span>.
            </Typography>
          </Container>
        </Box>

        <Box
          sx={{
            position: "relative",
            height: { xs: "120px", lg: "416px" }, // Reduced height for mobile, full height for desktop
            width: "100%", // Ensures full width to prevent horizontal cut
            backgroundImage: `url(${carouselLoopImages[carouselIndexLoop]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background-image 1s ease-in-out", // Smooth transition
          }}
        />

        {/* Impact/Featured Campaigns Section */}
        <Box id="campaigns" sx={{ py: 14, position: "relative", zIndex: 1 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              component="h2"
              sx={{
                textAlign: "center",
                mb: 6,
                color: "primary.main",
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "3rem" },
                letterSpacing: "1px",
              }}
            >
              Our Impact
            </Typography>
            <Grid container spacing={6} justifyContent="center" sx={{ mb: 8 }}>
              {[
                { value: "200,000+", label: "Lives Touched" },
                { value: "Multiple", label: "Cities Reached" },
                { value: "Youth-Led", label: "Initiative" },
              ].map((stat, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Typography
                    variant="h4"
                    sx={{
                      textAlign: "center",
                      fontWeight: 700,
                      color: "secondary.main",
                      fontSize: { xs: "1.75rem", md: "2.25rem" },
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      color: "text.secondary",
                      fontSize: { xs: "1rem", md: "1.25rem" },
                    }}
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
                mb: 6,
                color: "primary.main",
                fontWeight: 700,
                fontSize: { xs: "1.75rem", md: "2.5rem" },
              }}
            >
              Our Initiatives
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  title: "Education Support",
                  desc: "Empowering children with learning opportunities.",
                  img: fimg1,
                },
                {
                  title: "Hygiene Awareness",
                  desc: "Providing sanitary napkins and education.",
                  img: fimg2,
                },
                {
                  title: "Food Distribution",
                  desc: "Feeding the underprivileged and strays.",
                  img: fimg3,
                },
              ].map((campaign, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0px 12px 30px rgba(0,0,0,0.2)",
                      },
                      borderRadius: 6,
                      bgcolor: "#FFFFFF",
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={campaign.img}
                      alt={campaign.title}
                      sx={{ borderTopLeftRadius: 6, borderTopRightRadius: 6 }}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: "text.primary",
                          fontSize: { xs: "1.1rem", md: "1.25rem" },
                        }}
                      >
                        {campaign.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                      >
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
        <Box
          sx={{ py: 14, bgcolor: "#F7F9FC", position: "relative", zIndex: 1 }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              component="h2"
              sx={{
                textAlign: "center",
                mb: 6,
                color: "primary.main",
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "3rem" },
                letterSpacing: "1px",
              }}
            >
              Voices of Support
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  quote: "NayePankh’s impact on education is inspiring!",
                  name: "Priya S.",
                },
                {
                  quote: "A youth-led movement that truly cares!",
                  name: "Rahul M.",
                },
                {
                  quote: "Making a difference, one step at a time.",
                  name: "Anita K.",
                },
              ].map((testimonial, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      p: 3,
                      borderRadius: 6,
                      bgcolor: "#FFFFFF",
                      boxShadow: "0px 6px 20px rgba(0,0,0,0.15)",
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
                            sx={{ color: "#F1C40F", fontSize: 26 }}
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
                          fontSize: { xs: "1rem", md: "1.1rem" },
                        }}
                      >
                        "{testimonial.quote}"
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textAlign: "center",
                          fontWeight: 600,
                          color: "text.primary",
                          fontSize: { xs: "1rem", md: "1.1rem" },
                        }}
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
        <Footer />

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
