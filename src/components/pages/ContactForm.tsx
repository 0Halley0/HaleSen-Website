import React, { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
  Container,
} from "@mui/material";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Mesajınız gönderildi, teşekkürler ${form.name}!`);
  };

  return (
    <Box
      id="contact"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            maxWidth: 600,
            margin: "auto",
            borderRadius: 3,
            backgroundColor: "background.paper",
          }}
        >
          <Typography variant="h5" mb={3} sx={{ fontWeight: "bold" }}>
            İletişim
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <TextField
              fullWidth
              label="Adınız"
              name="name"
              value={form.name}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Mesajınız"
              name="message"
              multiline
              rows={4}
              value={form.message}
              onChange={handleChange}
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                mt: 3,
                textTransform: "none",
                borderRadius: 2,
              }}
            >
              Gönder
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
