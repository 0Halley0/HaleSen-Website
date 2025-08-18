import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Switch,
  Slider,
  Button,
} from "@mui/material";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  age: Yup.number().min(18, "Must be at least 18").required("Age is required"),
  country: Yup.string().required("Country is required"),
});

export default function DemoForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      country: "",
      agree: false,
      notifications: true,
      satisfaction: 50,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          User Registration Form
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Age"
                name="age"
                type="number"
                value={formik.values.age}
                onChange={formik.handleChange}
                error={formik.touched.age && Boolean(formik.errors.age)}
                helperText={formik.touched.age && formik.errors.age}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                select
                fullWidth
                label="Country"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country}
              >
                <MenuItem value="tr">Turkey</MenuItem>
                <MenuItem value="us">USA</MenuItem>
                <MenuItem value="de">Germany</MenuItem>
              </TextField>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="agree"
                    checked={formik.values.agree}
                    onChange={formik.handleChange}
                  />
                }
                label="I agree to the terms & conditions"
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <FormControlLabel
                control={
                  <Switch
                    name="notifications"
                    checked={formik.values.notifications}
                    onChange={formik.handleChange}
                  />
                }
                label="Enable notifications"
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Typography gutterBottom>Satisfaction Level</Typography>
              <Slider
                value={formik.values.satisfaction}
                onChange={(_, value) =>
                  formik.setFieldValue("satisfaction", value)
                }
                step={10}
                marks
                min={0}
                max={100}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Button type="submit" variant="contained" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}
