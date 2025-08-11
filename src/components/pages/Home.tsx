import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Banner from "../../assets/top_banner.png";
import {
  Divider,
  styled,
  Typography,
  Fade,
  useTheme,
  Chip,
  IconButton,
} from "@mui/material";
import { useState, useEffect } from "react";
import {
  GitHub,
  LinkedIn,
  Email,
  Folder,
  KeyboardArrowDown,
} from "@mui/icons-material";

export default function Home() {
  const theme = useTheme();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const GradientDivider = styled(Divider)(() => ({
    width: "100%",
    height: 3,
    borderRadius: 2,
    margin: "1.5rem auto",
    background: `linear-gradient(to right, ${theme.palette.primary.title}, ${theme.palette.secondary.main})`,
    border: "none",
    position: "relative",
    overflow: "hidden",
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "-100%",
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
    },
  }));

  const StyledTitle = styled(Typography)(() => ({
    fontFamily: '"Playfair Display", "Georgia", serif',
    fontWeight: 800,
    background: `linear-gradient(135deg, ${theme.palette.primary.title} 0%, ${theme.palette.secondary.main} 100%)`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 4px 8px rgba(0,0,0,0.1)",
    letterSpacing: "-0.02em",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-10px",
      left: "0",
      width: "60px",
      height: "4px",
      background: `linear-gradient(to right, ${theme.palette.primary.title}, ${theme.palette.secondary.main})`,
      borderRadius: "2px",
    },
  }));

  const StyledSubtitle = styled(Typography)(() => ({
    fontFamily: '"Inter", "Roboto", sans-serif',
    fontWeight: 600,
    background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.gradientStart} 100%)`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-0.01em",
    marginTop: "1.5rem",
  }));

  const StyledDescription = styled(Typography)(() => ({
    fontFamily: '"Source Sans Pro", "Arial", sans-serif',
    fontWeight: 400,
    color: theme.palette.text.secondary,
    textAlign: "justify",
    textJustify: "inter-word",
    "& strong": {
      color: theme.palette.text.primary,
      fontWeight: 600,
      position: "relative",
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "100%",
        height: "2px",
        background: `linear-gradient(to right, ${theme.palette.primary.title}, ${theme.palette.secondary.main})`,
        transform: "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.3s ease",
      },
      "&:hover::after": {
        transform: "scaleX(1)",
      },
    },
    position: "absolute",
    top: 150,
    left: 30,
    right: 0,
  }));

  const TechChip = styled(Chip)(() => ({
    margin: "4px",
    background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
    border: `1px solid ${theme.palette.primary.main}30`,
    color: theme.palette.text.primary,
    fontWeight: 500,
    transition: "all 0.3s ease",
    "&:hover": {
      background: `linear-gradient(135deg, ${theme.palette.primary.main}40, ${theme.palette.secondary.main}40)`,
      transform: "translateY(-2px)",
      boxShadow: `0 4px 12px ${theme.palette.primary.main}30`,
    },
  }));

  const SocialButton = styled(IconButton)(() => ({
    marginTop: "6rem",
    background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
    border: `1px solid ${theme.palette.primary.main}30`,
    color: theme.palette.text.primary,
    transition: "all 0.3s ease",
    "&:hover": {
      background: `linear-gradient(135deg, ${theme.palette.primary.main}30, ${theme.palette.secondary.main}30)`,
      transform: "translateY(-3px) scale(1.1)",
      boxShadow: `0 6px 20px ${theme.palette.primary.main}40`,
    },
  }));

  const ScrollIndicator = styled(Box)(() => ({
    position: "absolute",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    opacity: showScrollIndicator ? 1 : 0,
    transition: "opacity 0.5s ease",
  }));

  const FloatingElement = styled(Box)(() => ({
    position: "absolute",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
  }));

  const descriptions = [
    <>
      I am a <strong>Software Engineer</strong> with experience in building
      innovative <strong>Web and Mobile applications</strong>. My expertise lies
      in cutting-edge technologies such as{" "}
      <strong>
        JavaScript, TypeScript, Vue, Angular, React, Flutter, MUI, and Tailwind
      </strong>
      .
    </>,
    <>
      I'm passionate about working on <strong>innovative projects</strong> that
      solve real-world problems and constantly push myself to learn new
      technologies and improve my craft. Let's build something amazing together!
    </>,
  ];

  const techStack = [
    "TypeScript",
    "JavaScript",
    "React",
    "Vue",
    "Angular",
    "React",
    "Flutter",
    "Node.js",
    "Material-UI",
    "Tailwind CSS",
    "HTML5",
  ];

  const [descIndex, setDescIndex] = useState(0);

  useEffect(() => {
    const fadeDuration = 1000;
    const visibleDuration = 4000;
    const intervalDuration = fadeDuration * 2 + visibleDuration;

    const interval = setInterval(() => {
      setDescIndex((prev) => (prev === 0 ? 1 : 0));
    }, intervalDuration);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <FloatingElement sx={{ top: "20%", left: "10%" }} />
      <FloatingElement sx={{ top: "60%", right: "15%" }} />
      <FloatingElement sx={{ top: "80%", left: "20%" }} />

      <Box
        component="img"
        src={Banner}
        alt="Hale Berin Şen - Software Engineer"
        sx={{
          width: "100%",
        }}
      />
      <GradientDivider />

      <Container
        sx={{
          mt: 4,
          maxWidth: "800px",
          position: "relative",
          textAlign: "start",
          zIndex: 2,
        }}
      >
        <StyledTitle
          variant="h3"
          sx={{
            mb: 1,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
          }}
        >
          Hi, I'm Hale
        </StyledTitle>

        <StyledSubtitle
          variant="h4"
          sx={{ mb: 4, fontSize: { xs: "1.5rem", md: "2rem" } }}
        >
          Specializing in Web & Mobile Development 🚀
        </StyledSubtitle>
        <Box
          sx={{
            mb: 3,
          }}
        >
          <a href="https://github.com/0Halley0" target="_blank" rel="GitHub">
            <SocialButton>
              <GitHub />
            </SocialButton>
          </a>
          <a
            href="https://www.linkedin.com/in/hale-berin-sen"
            target="_blank"
            rel="Linkedin"
          >
            <SocialButton>
              <LinkedIn />
            </SocialButton>
          </a>
          <a
            href="https://drive.google.com/drive/folders/1raws_3wy84PayicCXvAIPuxBh7EttLMG"
            target="_blank"
            rel="Google Drive"
          >
            <SocialButton>
              <Folder />
            </SocialButton>
          </a>
        </Box>

        <Box
          sx={{
            mb: 4,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              color: theme.palette.text.secondary,
              fontWeight: 600,
            }}
          >
            Tech Stack
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {techStack.map((tech) => (
              <TechChip key={tech} label={tech} size="small" />
            ))}
          </Box>
        </Box>
        {descriptions.map((desc, i) => (
          <Fade
            key={i}
            in={descIndex === i}
            unmountOnExit
            mountOnEnter
            timeout={1000}
          >
            <Box>
              <StyledDescription variant="h5">{desc}</StyledDescription>
            </Box>
          </Fade>
        ))}
      </Container>
      <ScrollIndicator onClick={handleScrollDown}>
        <Typography
          variant="caption"
          sx={{
            color: theme.palette.text.secondary,
            mb: 1,
            fontWeight: 500,
          }}
        >
          Scroll Down
        </Typography>
        <KeyboardArrowDown
          sx={{
            color: theme.palette.primary.main,
            fontSize: "2rem",
          }}
        />
      </ScrollIndicator>
    </Box>
  );
}
