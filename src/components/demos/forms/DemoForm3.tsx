import {
  Paper,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

export default function DemoForm3() {
  return (
    <Paper sx={{ p: 4, borderRadius: 2, minWidth: 280 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Subscribe
      </Typography>
      <TextField fullWidth label="Email" type="email" sx={{ mb: 2 }} />
      <FormControlLabel
        control={<Checkbox />}
        label="I agree to receive updates"
        sx={{ mb: 2 }}
      />
      <Button variant="contained" fullWidth>
        Subscribe
      </Button>
    </Paper>
  );
}
