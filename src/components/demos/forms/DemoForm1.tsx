import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10,15}$/, "Enter a valid phone number")
    .required("Phone Number is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  terms: Yup.boolean().oneOf([true], "You must accept the terms"),
});

export default function ValidatedForm() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  };

  return (
    <Box sx={{ p: 4 }}>
      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 2, maxWidth: "420px" }}>
        <Typography variant="h5" sx={{ pb: 4, fontWeight: 600 }}>
          Simple Register Form
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log("Form submitted:", values)}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Name"
                    color="secondary"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Email"
                    color="secondary"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    color="secondary"
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Password"
                    color="secondary"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    color="secondary"
                    type="password"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.confirmPassword && Boolean(errors.confirmPassword)
                    }
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <FormControlLabel
                    sx={{ width: "100%" }}
                    control={
                      <Checkbox
                        name="terms"
                        color="secondary"
                        checked={values.terms}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    }
                    label="User Terms and Privacy Policy"
                  />
                  {touched.terms && errors.terms && (
                    <Typography variant="caption" color="error">
                      {errors.terms}
                    </Typography>
                  )}
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button
                    color="secondary"
                    type="submit"
                    variant="contained"
                    fullWidth
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
}
