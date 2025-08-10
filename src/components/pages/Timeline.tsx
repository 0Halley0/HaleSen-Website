import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography, useTheme, Box, Container } from "@mui/material";

export default function WorkTimeline() {
  const theme = useTheme();

  return (
    <Box
      id="timeline"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Timeline position="alternate" sx={{ py: 4 }}>
          <TimelineItem>
            <TimelineOppositeContent
              color="text.secondary"
              sx={{ fontWeight: 500 }}
            >
              2021 - Günümüz
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                color="secondary"
                sx={{
                  boxShadow: `0 0 0 4px ${theme.palette.primary.light}55`,
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Firma A
              </Typography>
              <Typography color="text.secondary">
                React & MUI geliştiricisi olarak çalışıyorum.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              color="text.secondary"
              sx={{ fontWeight: 500 }}
            >
              2019 - 2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                color="secondary"
                sx={{
                  boxShadow: `0 0 0 4px ${theme.palette.secondary.light}55`,
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Firma B
              </Typography>
              <Typography color="text.secondary">
                Frontend developer olarak görev aldım.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </Box>
  );
}
