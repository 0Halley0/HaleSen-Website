import React, { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
  Container,
  useTheme,
  styled,
  IconButton,
  Fade,
  Zoom,
  InputAdornment,
} from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  Send as SendIcon,
  Person as PersonIcon,
  Subject as SubjectIcon,
  Message as MessageIcon,
  Folder,
  GitHub,
  LinkedIn,
  Link,
} from "@mui/icons-material";
import Seperator from "../../assets/seperator2.png";
import { GradientDivider } from "../shared/GradientDivider";
import FloatingSquare from "../shared/FloatingSquare";

export default function ContactForm() {
  const theme = useTheme();
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert(`Message sent, thank you ${form.name}!`);
    setIsSubmitting(false);
    setForm({ name: "", surname: "", email: "", subject: "", message: "" });
  };

  const StyledPaper = styled(Paper)(({ theme }) => ({
    background: `linear-gradient(135deg, ${theme.palette.background.paper}f5, ${theme.palette.background.default}e8)`,
    backdropFilter: "blur(20px)",
    border: `1px solid ${theme.palette.divider}30`,
    borderRadius: 24,
    position: "relative",
    overflow: "hidden",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `linear-gradient(135deg, ${theme.palette.primary.gradientStart}05, ${theme.palette.secondary.main}05)`,
      zIndex: 0,
    },
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: `0 20px 60px ${theme.palette.primary.gradientStart}15`,
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
      minWidth: "auto",
      width: "100%",
      boxSizing: "border-box",
    },
  }));

  const ContactInfoCard = styled(Paper)(({ theme }) => ({
    background: `linear-gradient(135deg, ${theme.palette.secondary.main}10, ${theme.palette.primary.gradientStart}08)`,
    backdropFilter: "blur(10px)",
    border: `1px solid ${theme.palette.divider}40`,
    borderRadius: 16,
    padding: theme.spacing(3),
    textAlign: "center",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: `0 12px 30px ${theme.palette.secondary.main}20`,
    },
  }));

  const AnimatedButton = styled(Button)(({ theme }) => ({
    background: `linear-gradient(45deg, ${theme.palette.primary.gradientStart}, ${theme.palette.secondary.main})`,
    borderRadius: 12,
    padding: "12px 32px",
    fontSize: "1.1rem",
    fontWeight: 600,
    textTransform: "none",
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "-100%",
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
      transition: "left 0.6s",
    },
    "&:hover::before": {
      left: "100%",
    },
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
    },
  }));

  const StyledTextField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
      borderRadius: 12,
      transition: "all 0.3s ease",
      background: `${theme.palette.background.paper}80`,
      "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: `0 4px 12px ${theme.palette.primary.gradientStart}15`,
      },
      "&.Mui-focused": {
        transform: "translateY(-2px)",
        boxShadow: `0 8px 20px ${theme.palette.secondary.main}25`,
        "& fieldset": {
          borderColor: theme.palette.secondary.main,
          borderWidth: 2,
        },
      },
    },
    "& label.Mui-focused": {
      color: theme.palette.secondary.main,
      fontWeight: 600,
    },
  }));

  const PulsingIcon = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: "50%",
    background: `linear-gradient(45deg, ${theme.palette.primary.gradientStart}20, ${theme.palette.secondary.main}20)`,
    margin: "0 auto 16px",
    animation: "pulse 3s ease-in-out infinite",
    "@keyframes pulse": {
      "0%, 100%": {
        transform: "scale(1)",
        boxShadow: `0 0 0 0 ${theme.palette.secondary.main}40`,
      },
      "50%": {
        transform: "scale(1.05)",
        boxShadow: `0 0 0 20px ${theme.palette.secondary.main}00`,
      },
    },
  }));

  const BackgroundPattern = styled(Box)(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    opacity: 0.02,
    backgroundImage: `
      linear-gradient(45deg, ${theme.palette.primary.gradientStart} 25%, transparent 25%),
      linear-gradient(-45deg, ${theme.palette.primary.gradientStart} 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, ${theme.palette.secondary.main} 75%),
      linear-gradient(-45deg, transparent 75%, ${theme.palette.secondary.main} 75%)
    `,
    backgroundSize: "40px 40px",
    backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0px",
    animation: "drift 25s linear infinite",
    "@keyframes drift": {
      "0%": { transform: "translate(0, 0)" },
      "100%": { transform: "translate(-40px, -40px)" },
    },
  }));

  return (
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: `linear-gradient(135deg, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
        overflow: "hidden",
        py: 4,
      }}
    >
      <GradientDivider />
      <Box sx={{ width: "100%", position: "relative", zIndex: 2 }}>
        <img
          src={Seperator}
          alt="Contact Header"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
          }}
        />
      </Box>
      <GradientDivider />
      <BackgroundPattern />

      <FloatingSquare index={0} delay={0} sx={{ top: "8%", left: "5%" }} />
      <FloatingSquare index={1} delay={2.5} sx={{ top: "15%", right: "8%" }} />
      <FloatingSquare index={2} delay={5} sx={{ bottom: "20%", left: "6%" }} />
      <FloatingSquare
        index={0}
        delay={1.5}
        sx={{ bottom: "10%", right: "10%" }}
      />
      <FloatingSquare index={1} delay={3.5} sx={{ top: "40%", left: "2%" }} />
      <FloatingSquare index={2} delay={4.5} sx={{ top: "60%", right: "3%" }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              flex: "1 1 300px",
              minWidth: 300,
              boxSizing: "border-box",
            }}
          >
            <Fade in timeout={800}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <ContactInfoCard>
                  <PulsingIcon sx={{ justifyContent: "center" }}>
                    <EmailIcon
                      sx={{
                        fontSize: 30,
                        color: theme.palette.secondary.main,
                      }}
                    />
                  </PulsingIcon>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    Email
                  </Typography>
                  <Typography color="text.secondary">
                    haleberins@gmail.com
                  </Typography>
                </ContactInfoCard>

                <ContactInfoCard>
                  <PulsingIcon>
                    <PhoneIcon
                      sx={{ fontSize: 30, color: theme.palette.secondary.main }}
                    />
                  </PulsingIcon>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    Phone
                  </Typography>
                  <Typography color="text.secondary">
                    +90 (534) 018-5427
                  </Typography>
                </ContactInfoCard>

                <ContactInfoCard>
                  <PulsingIcon>
                    <Link
                      sx={{ fontSize: 30, color: theme.palette.secondary.main }}
                    />
                  </PulsingIcon>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    Social
                  </Typography>
                  <Box
                    sx={{ display: "flex", gap: 2, justifyContent: "center" }}
                  >
                    <IconButton
                      component="a"
                      href="https://github.com/0Halley0"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      sx={{ color: "inherit" }}
                    >
                      <GitHub />
                    </IconButton>

                    <IconButton
                      component="a"
                      href="https://www.linkedin.com/in/hale-berin-sen"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      sx={{ color: "inherit" }}
                    >
                      <LinkedIn />
                    </IconButton>

                    <IconButton
                      component="a"
                      href="https://drive.google.com/drive/folders/1raws_3wy84PayicCXvAIPuxBh7EttLMG"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Google Drive"
                      sx={{ color: "inherit" }}
                    >
                      <Folder />
                    </IconButton>
                  </Box>
                </ContactInfoCard>
              </Box>
            </Fade>
          </Box>

          <Box
            sx={{
              flex: "2 1 500px",
              minWidth: 500,
              boxSizing: "border-box",

              // Responsive adjustments for mobile:
              "@media (max-width:600px)": {
                flex: "1 1 100%",
                minWidth: "100%",
                width: "100%",
              },
            }}
          >
            <Zoom in timeout={1000}>
              <StyledPaper elevation={0} sx={{ p: 4 }}>
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Typography
                    variant="h4"
                    mb={3}
                    sx={{
                      fontWeight: "bold",
                      background: `linear-gradient(45deg, ${theme.palette.primary.gradientStart}, ${theme.palette.secondary.main})`,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textAlign: "center",
                    }}
                  >
                    Let's Get In Touch
                  </Typography>

                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ display: "flex", gap: 3, flexDirection: "column" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,

                        // Mobile: stack vertically
                        "@media (max-width:600px)": {
                          flexDirection: "column",
                        },
                      }}
                    >
                      <StyledTextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonIcon
                                sx={{ color: theme.palette.secondary.main }}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <StyledTextField
                        fullWidth
                        label="Surname"
                        name="surname"
                        value={form.surname}
                        onChange={handleChange}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonIcon
                                sx={{ color: theme.palette.secondary.main }}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>

                    <StyledTextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon
                              sx={{ color: theme.palette.secondary.main }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <StyledTextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SubjectIcon
                              sx={{ color: theme.palette.secondary.main }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <StyledTextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MessageIcon
                              sx={{ color: theme.palette.secondary.main }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <Box sx={{ textAlign: "center", mt: 2 }}>
                      <AnimatedButton
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={isSubmitting}
                        startIcon={isSubmitting ? null : <SendIcon />}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </AnimatedButton>
                    </Box>
                  </Box>
                </Box>
              </StyledPaper>
            </Zoom>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
