import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { Link as ScrollLink } from "react-scroll";

interface TopNavBarProps {
  toggleColorMode: () => void;
  mode: "light" | "dark";
}

export default function TopNavBar({ toggleColorMode, mode }: TopNavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: "Home", to: "home" },
    { label: "Demo", to: "demo" },
    { label: "Timeline", to: "timeline" },
    { label: "Contact", to: "contact" },
  ];

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setMobileOpen(false)}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.to} disablePadding>
            <ListItemButton
              component={ScrollLink}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-64}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Hale Berin Şen
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {menuItems.map((item) => (
              <Button
                key={item.to}
                color="inherit"
                component={ScrollLink}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-64}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <IconButton
            sx={{ ml: 1 }}
            onClick={toggleColorMode}
            color="inherit"
            aria-label="toggle light/dark theme"
          >
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          <IconButton
            sx={{ display: { xs: "block", sm: "none" } }}
            color="inherit"
            edge="end"
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
