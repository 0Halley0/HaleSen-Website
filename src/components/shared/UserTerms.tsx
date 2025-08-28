import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

interface UserTermsProps {
  open: boolean;
  onClose: () => void;
}

export default function UserTerms({ open, onClose }: UserTermsProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>User Terms and Privacy Policy</DialogTitle>
      <DialogContent dividers>
        <Typography
          sx={{
            fontSize: "0.95rem",
            lineHeight: 1.6,
            mb: 2,
            color: "text.secondary",
          }}
        >
          These are the user terms and privacy policy. You can replace this text
          with your actual legal text.
        </Typography>

        <Typography
          component="div"
          sx={{
            fontSize: "0.95rem",
            lineHeight: 1.8,
          }}
        >
          <ol style={{ paddingLeft: "1.25rem", margin: 0 }}>
            <li>Users must follow the rules.</li>
            <li>Data is handled according to privacy regulations.</li>
            <li>By using this service, you accept these terms.</li>
          </ol>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary" variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
