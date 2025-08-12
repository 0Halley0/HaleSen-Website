import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import {
  Typography,
  useTheme,
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Divider,
  styled,
  Card,
  CardContent,
} from "@mui/material";
import Seperator from "../../assets/seperator.png";
import Square1 from "../../assets/square1.png";
import Square2 from "../../assets/square2.png";
import Square3 from "../../assets/square3.png";
import Square4 from "../../assets/square4.png";
import { GradientDivider } from "../shared/GradientDivider";

export default function WorkTimeline() {
  const theme = useTheme();

  const StyledTimelineCard = styled(Card)(({ theme }) => ({
    background: `linear-gradient(135deg, ${theme.palette.background.paper}ee, ${theme.palette.background.default}aa)`,
    backdropFilter: "blur(10px)",
    border: `1px solid ${theme.palette.divider}40`,
    borderRadius: 16,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `linear-gradient(135deg, ${theme.palette.primary.main}08, ${theme.palette.secondary.main}08)`,
      zIndex: 0,
    },
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: `0 12px 40px ${theme.palette.primary.main}20`,
      border: `1px solid ${theme.palette.primary.main}60`,
    },
  }));

  const FloatingSquare = styled(Box)(({ delay = 0 }) => ({
    position: "absolute",
    width: "40px",
    height: "40px",
    opacity: 0.1,
    animation: `float 6s ease-in-out infinite`,
    animationDelay: `${delay}s`,
    zIndex: 1,
    "@keyframes float": {
      "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
      "50%": { transform: "translateY(-20px) rotate(180deg)" },
    },
  }));

  const AnimatedTimelineDot = styled(TimelineDot)(
    ({ theme, variant = "primary" }) => ({
      position: "relative",
      overflow: "visible",
      "&::before": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        background: `linear-gradient(45deg, ${theme.palette[variant].main}, ${theme.palette[variant].light})`,
        animation: "pulse 2s ease-in-out infinite",
      },
      "@keyframes pulse": {
        "0%, 100%": {
          transform: "translate(-50%, -50%) scale(1)",
          opacity: 1,
        },
        "50%": {
          transform: "translate(-50%, -50%) scale(1.3)",
          opacity: 0.7,
        },
      },
    })
  );

  const BackgroundPattern = styled(Box)(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    opacity: 0.03,
    backgroundImage: `
      radial-gradient(circle at 20% 20%, ${theme.palette.primary.main} 2px, transparent 2px),
      radial-gradient(circle at 80% 80%, ${theme.palette.secondary.main} 2px, transparent 2px),
      radial-gradient(circle at 40% 60%, ${theme.palette.primary.main} 1px, transparent 1px)
    `,
    backgroundSize: "100px 100px, 150px 150px, 75px 75px",
    animation: "drift 20s linear infinite",
    "@keyframes drift": {
      "0%": { transform: "translate(0, 0)" },
      "100%": { transform: "translate(-100px, -100px)" },
    },
  }));

  return (
    <Box
      id="timeline"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",

        overflow: "hidden",
      }}
    >
      <BackgroundPattern />

      <FloatingSquare sx={{ top: "10%", left: "10%" }} delay={0}>
        <img src={Square1} alt="" style={{ width: "100%", height: "100%" }} />
      </FloatingSquare>
      <FloatingSquare sx={{ top: "20%", right: "15%" }} delay={2}>
        <img src={Square2} alt="" style={{ width: "100%", height: "100%" }} />
      </FloatingSquare>
      <FloatingSquare sx={{ bottom: "30%", left: "8%" }} delay={4}>
        <img src={Square3} alt="" style={{ width: "100%", height: "100%" }} />
      </FloatingSquare>
      <FloatingSquare sx={{ bottom: "15%", right: "12%" }} delay={1}>
        <img src={Square4} alt="" style={{ width: "100%", height: "100%" }} />
      </FloatingSquare>

      <GradientDivider />
      <Box sx={{ width: "100%", position: "relative", zIndex: 2 }}>
        <img
          src={Seperator}
          alt="Timeline Header"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
          }}
        />
      </Box>
      <GradientDivider />

      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Timeline position="alternate" sx={{ py: 4 }}>
          <TimelineItem>
            <TimelineOppositeContent
              color="text.secondary"
              sx={{
                fontWeight: 600,
                fontSize: "1.1rem",
                textShadow: "0 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              2025 - Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <AnimatedTimelineDot
                variant="secondary"
                sx={{
                  boxShadow: `0 0 0 4px ${theme.palette.primary.light}55`,
                }}
              />
              <TimelineConnector
                sx={{
                  background: `linear-gradient(to bottom, ${theme.palette.primary.main}40, ${theme.palette.secondary.main}40)`,
                }}
              />
            </TimelineSeparator>
            <TimelineContent>
              <StyledTimelineCard>
                <CardContent sx={{ position: "relative", zIndex: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    Front-End Developer at Hedef Computer
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ mb: 2, fontStyle: "italic" }}
                  >
                    Key technologies: Angular, TypeScript, REST APIs, Git
                  </Typography>
                  <List dense sx={{ pl: 1 }}>
                    <ListItem disablePadding sx={{ mb: 1 }}>
                      <ListItemText
                        primary="Developed a responsive front-end application using Angular and Angular Material."
                        sx={{
                          "& .MuiTypography-root": { fontSize: "0.95rem" },
                        }}
                      />
                    </ListItem>
                    <ListItem disablePadding sx={{ mb: 1 }}>
                      <ListItemText
                        primary={
                          <a
                            href="https://app.evdeacil.com/"
                            target="_blank"
                            rel="evdeacil"
                            style={{
                              color: theme.palette.secondary.main,
                              textDecoration: "none",
                              fontWeight: "500",
                              "&:hover": { textDecoration: "underline" },
                            }}
                          >
                            🔗 app.evdeacil.com
                          </a>
                        }
                      />
                    </ListItem>
                    <ListItem disablePadding sx={{ mb: 1 }}>
                      <ListItemText
                        primary="Designed reusable components and integrated RESTful APIs."
                        sx={{
                          "& .MuiTypography-root": { fontSize: "0.95rem" },
                        }}
                      />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemText
                        primary="Ensured performance optimization and cross-browser compatibility."
                        sx={{
                          "& .MuiTypography-root": { fontSize: "0.95rem" },
                        }}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </StyledTimelineCard>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              color="text.secondary"
              sx={{
                fontWeight: 600,
                fontSize: "1.1rem",
                textShadow: "0 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              2024 - 2025
            </TimelineOppositeContent>
            <TimelineSeparator>
              <AnimatedTimelineDot
                variant="primary"
                sx={{
                  boxShadow: `0 0 0 4px ${theme.palette.primary.light}55`,
                }}
              />
              <TimelineConnector
                sx={{
                  background: `linear-gradient(to bottom, ${theme.palette.primary.main}40, ${theme.palette.secondary.main}40)`,
                }}
              />
            </TimelineSeparator>
            <TimelineContent>
              <StyledTimelineCard>
                <CardContent sx={{ position: "relative", zIndex: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    Software Engineer at LASTFLOORS
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ mb: 2, fontStyle: "italic" }}
                  >
                    Key technologies: Vue.js, Node.js, Vuetify, Tailwind,
                    JavaScript
                  </Typography>
                  <List dense sx={{ pl: 1 }}>
                    <ListItem disablePadding sx={{ mb: 1 }}>
                      <ListItemText
                        primary="Designed the Lastfloors website using Vue.js, Node.js, and Tailwind."
                        sx={{
                          "& .MuiTypography-root": { fontSize: "0.95rem" },
                        }}
                      />
                    </ListItem>
                    <ListItem disablePadding sx={{ mb: 1 }}>
                      <ListItemText
                        primary={
                          <a
                            href="https://lastfloors.com/"
                            target="_blank"
                            rel="lastfloors"
                            style={{
                              color: theme.palette.secondary.main,
                              textDecoration: "none",
                              fontWeight: "500",
                            }}
                          >
                            🔗 lastfloors.com
                          </a>
                        }
                      />
                    </ListItem>
                    <ListItem disablePadding sx={{ mb: 1 }}>
                      <ListItemText
                        primary="Integrated REST APIs for dynamic data management and seamless interactions."
                        sx={{
                          "& .MuiTypography-root": { fontSize: "0.95rem" },
                        }}
                      />
                    </ListItem>
                    <ListItem disablePadding sx={{ mb: 1 }}>
                      <ListItemText
                        primary="Developed RESTful services for user authentication and project management."
                        sx={{
                          "& .MuiTypography-root": { fontSize: "0.95rem" },
                        }}
                      />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemText
                        primary="Integrated third-party APIs including Google Calendar for holiday management."
                        sx={{
                          "& .MuiTypography-root": { fontSize: "0.95rem" },
                        }}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </StyledTimelineCard>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              color="text.secondary"
              sx={{
                fontWeight: 600,
                fontSize: "1.1rem",
                textShadow: "0 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              2022 - 2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              <AnimatedTimelineDot
                variant="secondary"
                sx={{
                  boxShadow: `0 0 0 4px ${theme.palette.secondary.light}55`,
                }}
              />
              <TimelineConnector
                sx={{
                  background: `linear-gradient(to bottom, ${theme.palette.primary.main}40, ${theme.palette.secondary.main}40)`,
                }}
              />
            </TimelineSeparator>
            <TimelineContent>
              <StyledTimelineCard>
                <CardContent sx={{ position: "relative", zIndex: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                    Internships at Leading Companies
                  </Typography>
                  <List dense sx={{ pl: 1 }}>
                    <ListItem disablePadding sx={{ mb: 1.5 }}>
                      <ListItemText
                        primary="🏢 Hitit Computer Services: Airline reservation platform with Vue.js and REST APIs."
                        sx={{
                          "& .MuiTypography-root": { fontSize: "0.95rem" },
                        }}
                      />
                    </ListItem>
                    <ListItem disablePadding sx={{ mb: 1.5 }}>
                      <ListItemText
                        primary="🏦 Anadolubank: Full-stack reservation system with SQL, REST API, and Flutter."
                        sx={{
                          "& .MuiTypography-root": { fontSize: "0.95rem" },
                        }}
                      />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemText
                        primary="💳 Profilo Payment Systems: Mobile payment solutions with Android Studio and Java."
                        sx={{
                          "& .MuiTypography-root": { fontSize: "0.95rem" },
                        }}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </StyledTimelineCard>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              color="text.secondary"
              sx={{
                fontWeight: 600,
                fontSize: "1.1rem",
                textShadow: "0 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              2019 - 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <AnimatedTimelineDot
                variant="success"
                sx={{
                  boxShadow: `0 0 0 4px ${theme.palette.success.light}55`,
                }}
              />
            </TimelineSeparator>
            <TimelineContent>
              <StyledTimelineCard>
                <CardContent sx={{ position: "relative", zIndex: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    🎓 Bachelor's Degree in Software Engineering
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: "0.95rem" }}
                  >
                    Developed key skills in software development, databases, and
                    algorithms.
                  </Typography>
                </CardContent>
              </StyledTimelineCard>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </Box>
  );
}
