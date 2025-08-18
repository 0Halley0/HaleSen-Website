import { Paper, Typography, TextField, Button } from "@mui/material";

export default function DemoForm1() {
  return (
    <Paper sx={{ p: 4, borderRadius: 2, minWidth: 280 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Login Form
      </Typography>
      <TextField fullWidth label="Email" type="email" sx={{ mb: 2 }} />
      <TextField fullWidth label="Password" type="password" sx={{ mb: 2 }} />
      <Button variant="contained" fullWidth>
        Login
      </Button>
    </Paper>
  );
}
