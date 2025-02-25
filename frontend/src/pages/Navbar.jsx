import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  Divider,
  Link,
} from "@mui/material";
import {
  Menu as MenuIcon,
  VolunteerActivism as VolunteerActivismIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import mainLogo from "../assets/main-logo.png";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleLogin = () => navigate("/login");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleNavClick = (path) => {
    navigate(path);
  };

  const handleNayePankhClick = () => {
    navigate("/");
  };

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Certificates", path: "/certificates" },
    { text: "Newspaper", path: "/newspaper" },
    { text: "Donate", path: "/donation" }, // Fixed path from "/donation" to match previous consistency
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#FFFFFF", // Clean white background
          color: "#34495E", // Dark slate for text
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Softer shadow for depth
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 2,
            px: { xs: 2, md: 4 },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Link
              onClick={handleNayePankhClick}
              sx={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={mainLogo}
                alt="NayePankh Logo"
                style={{
                  height: "50px",
                  marginRight: "12px", // Slightly more spacing
                }}
              />
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  color: "#2ECC71", // Green for the title
                  fontWeight: 800,
                  textAlign: "center",
                  mb: 0,
                  fontSize: { xs: "1.2rem", md: "2.2rem" }, // Slightly larger for impact
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#27AE60", // Darker green on hover
                  },
                }}
              >
                NayePankh
              </Typography>
            </Link>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
              alignItems: "center",
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.text}
                onClick={() => handleNavClick(link.path)}
                sx={{
                  color: "#34495E", // Dark slate for nav items
                  textTransform: "uppercase",
                  fontWeight: 600,
                  fontSize: "1rem",
                  position: "relative",
                  "&:hover": {
                    color: "#2ECC71", // Green on hover
                    "&::after": {
                      width: "100%",
                    },
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "0",
                    height: "2px",
                    bottom: "-6px",
                    left: 0,
                    bgcolor: "#2ECC71", // Green underline
                    transition: "width 0.3s ease",
                  },
                }}
              >
                {link.text}
              </Button>
            ))}
          </Box>

          <IconButton
            edge="end"
            aria-label="Open menu"
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: "flex", md: "none" },
              color: "#2ECC71", // Green for menu icon
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 280,
            bgcolor: "#FFFFFF", // White background
            height: "100%",
            boxShadow: "-2px 0px 10px rgba(0,0,0,0.1)",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box
            sx={{
              p: 3,
              bgcolor: "#2ECC71", // Green header
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderBottom: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <img
              src={mainLogo}
              alt="NayePankh Logo"
              style={{
                height: "45px",
                marginRight: "12px",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#FFFFFF", // White text on green
                textTransform: "uppercase",
              }}
            >
              NayePankh
            </Typography>
          </Box>
          <List sx={{ py: 2 }}>
            {navLinks.map((link) => (
              <ListItem key={link.text} disablePadding>
                <Button
                  onClick={() => handleNavClick(link.path)}
                  sx={{
                    width: "100%",
                    justifyContent: "flex-start",
                    textTransform: "uppercase",
                    color: "#34495E", // Dark slate
                    fontWeight: 500,
                    py: 1.5,
                    px: 3,
                    "&:hover": {
                      bgcolor: "rgba(46, 204, 113, 0.1)", // Light green hover
                      color: "#2ECC71", // Green text
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  {link.text}
                </Button>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ borderColor: "rgba(46, 204, 113, 0.2)" }} />
          <List>
            <ListItem disablePadding>
              <Button
                variant="contained"
                startIcon={<VolunteerActivismIcon />}
                onClick={() => handleNavClick("/donation")}
                fullWidth
                sx={{
                  m: 2,
                  bgcolor: "#F1C40F", // Yellow button
                  color: "#34495E", // Dark slate text
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  borderRadius: 4,
                  py: 1.5,
                  "&:hover": {
                    bgcolor: "#F39C12", // Darker yellow
                  },
                }}
              >
                Donate Now
              </Button>
            </ListItem>
            <ListItem disablePadding></ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
