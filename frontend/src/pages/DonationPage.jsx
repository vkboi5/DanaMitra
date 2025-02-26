import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import donationBg from "../assets/donation-section-img.avif"; // Replace with your background image
import Footer from "./Footer"; // Assuming your Footer component is here

// Theme matching your site
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
    h1: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    body1: { fontWeight: 400 },
  },
});

function Donation() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            position: "relative",
            height: { xs: "50vh", md: "60vh" },
            backgroundImage: `url(${donationBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(to bottom, rgba(52, 73, 94, 0.7), rgba(52, 73, 94, 0.3))",
              zIndex: 1,
            },
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: "#F1C40F",
              textAlign: "center",
              fontSize: { xs: "2rem", sm: "3rem", md: "4.5rem" },
              textShadow: "4px 4px 12px rgba(0,0,0,0.7)",
              zIndex: 2,
              px: { xs: 2, md: 4 },
              lineHeight: 1.2,
              animation: "fadeIn 2s ease-in-out",
              "@keyframes fadeIn": {
                "0%": { opacity: 0, transform: "translateY(30px)" },
                "100%": { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            Together, Let’s Make a Difference!
          </Typography>
        </Box>

        {/* Donation Appeal Section */}
        <Box
          sx={{
            py: { xs: 6, md: 10 },
            bgcolor: "#F7F9FC",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h3"
              component="h2"
              sx={{
                textAlign: "center",
                color: "primary.main",
                mb: 4,
                fontSize: { xs: "1.75rem", md: "2.5rem" },
                letterSpacing: "1px",
                textShadow: "1px 1px 4px rgba(0,0,0,0.2)",
                animation: "fadeInUp 1s ease-in-out",
                "@keyframes fadeInUp": {
                  "0%": { opacity: 0, transform: "translateY(20px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              Together, Let’s Make a Difference!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.primary",
                fontSize: { xs: "1rem", md: "1.25rem" },
                lineHeight: 1.8,
                textAlign: "justify",
                mb: 4,
                animation: "fadeInUp 1.5s ease-in-out",
              }}
            >
              <strong>Dear Supporters and Friends,</strong>
              <br /><br />
              NayePankh Foundation was founded with a simple yet powerful vision - to uplift the underprivileged and marginalized communities and provide them with access to education, healthcare, and basic necessities that we often take for granted. We strongly believe that every child has the right to dream and achieve their aspirations, irrespective of their socio-economic background. We have been working relentlessly towards this goal, but we need <span style={{ color: "#2ECC71", fontWeight: 700 }}>your support</span> to continue our efforts and make a lasting impact.
              <br /><br />
              As you read this, countless children and families are struggling to survive without the most basic necessities. They lack access to clean water, sanitation, and proper healthcare facilities. Most of them are unable to attend school due to financial constraints or lack of infrastructure. They are trapped in a cycle of poverty and hopelessness, and they need <span style={{ color: "#F1C40F", fontWeight: 700 }}>our help</span>. We at NayePankh Foundation strive to break this cycle and provide a ray of hope to those in need.
              <br /><br />
              With your support, we can continue to provide <span style={{ color: "#2ECC71", fontWeight: 700 }}>education</span>, <span style={{ color: "#2ECC71", fontWeight: 700 }}>healthcare</span>, and other basic amenities to these communities. We can empower them to lead better lives and realize their true potential. Every donation, no matter how small, can make a <span style={{ color: "#F1C40F", fontWeight: 700 }}>huge difference</span>. Your support can provide a child with a school uniform, a pair of shoes, or even a nutritious meal. It can provide a family with access to clean water, sanitation, and healthcare facilities. It can change the trajectory of someone's life forever.
              <br /><br />
              We understand that times are tough, and everyone is going through their own struggles. But we urge you to think of those who are less fortunate and extend a helping hand. Your generosity can make a world of difference to someone in need. We know that we can count on your support to continue our mission. Your donations will help us reach more communities and make a meaningful impact in the lives of those who need it the most.
              <br /><br />
              Let’s come together and make a difference. Thank you for considering our cause and supporting NayePankh Foundation. Your support means the world to us and those we serve. Let’s work together to create a better world for all.
              <br /><br />
              With heartfelt gratitude,
              <br />
              <strong>Prashant Shukla</strong>
              <br />
              Founder & President, NayePankh Foundation
            </Typography>

            {/* Donate Now Button */}
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography
                variant="h5"
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: "1.25rem", md: "1.75rem" },
                }}
              >
                Donate Now
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.primary",
                  mb: 3,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                Click on the button below to donate to us
              </Typography>
              <Button
                variant="contained"
                href="https://pages.razorpay.com/pl_NUcVhpQzK8rI1b/view"
                target="_blank"
                rel="noopener noreferrer" // Recommended for security
                sx={{
                  bgcolor: "#F1C40F",
                  color: "#34495E",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  borderRadius: 50,
                  py: 1.5,
                  px: 6,
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  boxShadow: "0px 6px 20px rgba(0,0,0,0.25)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "#F39C12",
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 25px rgba(0,0,0,0.3)",
                  },
                }}
              >
                Donate Now
              </Button>
            </Box>

            {/* Closing Emotional Appeal */}
            <Box
              sx={{
                py: 6,
                bgcolor: "#FFFFFF",
                borderRadius: 8,
                boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",
                mx: { xs: 2, md: 0 },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "text.primary",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  lineHeight: 1.8,
                  textAlign: "center",
                  maxWidth: "800px",
                  mx: "auto",
                  px: { xs: 2, md: 4 },
                  animation: "fadeInUp 2s ease-in-out",
                }}
              >
                Imagine for a moment that you are struggling to make ends meet. You're worried about how you'll pay for basic necessities like food, shelter, and healthcare. Now, imagine that someone steps forward and offers a <span style={{ color: "#2ECC71", fontWeight: 700 }}>helping hand</span> - a small donation that can make all the difference in your life. That feeling of relief and gratitude is immeasurable. By donating to a cause you care about, you have the <span style={{ color: "#F1C40F", fontWeight: 700 }}>power</span> to make that difference in someone's life. You can provide hope and support to those who need it most, and create a ripple effect of kindness and generosity in the world. So, if you have the means to give, think about the <span style={{ color: "#2ECC71", fontWeight: 700 }}>impact</span> you can make. Your donation may just be the lifeline that someone desperately needs.
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default Donation;