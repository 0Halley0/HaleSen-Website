import { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline, Stack } from "@mui/material";
import { getTheme } from "./theme"; // adjust path if needed
import TopNavBar from "./components/navigations/TopNavBar";
import Home from "./components/pages/Home";
import Timeline from "./components/pages/Timeline";
import ContactForm from "./components/pages/ContactForm";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopNavBar toggleColorMode={toggleColorMode} mode={mode} />
      <div style={{ paddingTop: 64, maxWidth: 900, margin: "auto" }}>
        <Stack spacing={80}>
          <Home />
          <Timeline />
          <ContactForm />
        </Stack>
      </div>
    </ThemeProvider>
  );
}

export default App;
