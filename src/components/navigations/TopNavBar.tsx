import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link as ScrollLink } from "react-scroll";

interface TopNavBarProps {
  toggleColorMode: () => void;
  mode: "light" | "dark";
}

export default function TopNavBar({ toggleColorMode, mode }: TopNavBarProps) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Demo Website
        </Typography>

        <Button
          color="inherit"
          component={ScrollLink}
          to="home"
          smooth={true}
          duration={500}
          offset={-64}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={ScrollLink}
          to="timeline"
          smooth={true}
          duration={500}
          offset={-64}
        >
          Timeline
        </Button>
        <Button
          color="inherit"
          component={ScrollLink}
          to="contact"
          smooth={true}
          duration={500}
          offset={-64}
        >
          Contact
        </Button>

        <IconButton
          sx={{ ml: 1 }}
          onClick={toggleColorMode}
          color="inherit"
          aria-label="toggle light/dark theme"
        >
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
