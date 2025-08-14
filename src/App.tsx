import { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline, Stack, Box } from "@mui/material";
import { getTheme } from "./theme";
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

      <Box
        sx={{
          pt: { xs: 2, sm: 4, md: 8 },
          maxWidth: 900,
          mx: "auto",
        }}
      >
        <Stack spacing={{ xs: 8, sm: 16, md: 50 }}>
          <Home />
          <Timeline />
          <ContactForm />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
