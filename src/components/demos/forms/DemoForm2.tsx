import { Paper, Typography, TextField, Button } from "@mui/material";

export default function DemoForm2() {
  return (
    <Paper sx={{ p: 4, borderRadius: 2, minWidth: 280 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Contact Form
      </Typography>
      <TextField fullWidth label="Name" sx={{ mb: 2 }} />
      <TextField fullWidth label="Email" type="email" sx={{ mb: 2 }} />
      <TextField fullWidth label="Message" multiline rows={4} sx={{ mb: 2 }} />
      <Button variant="contained" fullWidth>
        Send Message
      </Button>
    </Paper>
  );
}
