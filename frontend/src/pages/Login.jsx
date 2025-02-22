import { useState } from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Link,
  Grid,
} from "@mui/material";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://dana-mitra-zehy.vercel.app/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data.token)
      if (response.ok) {
        localStorage.setItem("token", data.token);
        window.location.href = "/dashboard";
      } else {
        console.error(data.msg);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh", // Updated to full height for consistency
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 4, // Increased padding for better spacing
        }}
      >
        <Card
          sx={{
            maxWidth: 450, // Matches Register page for modern feel
            width: "100%",
            boxShadow: "0px 6px 20px rgba(0,0,0,0.1)", // Softer shadow
            borderRadius: 2, // Rounded corners
          }}
        >
          <Box
            sx={{
              p: 3, // Increased padding
              textAlign: "center",
              borderTopLeftRadius: "inherit",
              borderTopRightRadius: "inherit",
              bgcolor: "bisque", // Changed to bisque background
            }}
          >
            <Typography
              variant="h4" // Larger for prominence, matches Register
              sx={{ color: "blue", fontWeight: "bold", letterSpacing: 1 }} // Blue text
            >
              Login
            </Typography>
          </Box>
          <CardContent sx={{ p: 4 }}> {/* Increased padding for content */}
            <Box component="form" onSubmit={handleLogin}>
              <Grid container spacing={3}> {/* Increased spacing */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    variant="outlined"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    type="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{
                      py: 1.5,
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      "&:hover": { bgcolor: "#D32F2F" }, // Darker red on hover
                    }}
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                  <Link href="/register" variant="body2" sx={{ color: "primary.main" }}>
                    New User? Register Now!
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Login;