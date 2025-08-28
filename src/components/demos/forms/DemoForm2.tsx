import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
  MenuItem,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import UserTerms from "../../shared/UserTerms";
import { useState } from "react";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  dateOfBirth: Yup.mixed<Dayjs>()
    .nullable()
    .test(
      "max",
      "Date of Birth cannot be in the future",
      (value) => !value || value.isBefore(dayjs().add(1, "day"))
    )
    .required("Date of Birth is required"),

  gender: Yup.string().required("Gender is required"),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  postalCode: Yup.string()
    .matches(/^\d{4,10}$/, "Enter a valid postal code")
    .required("Postal Code is required"),
  address: Yup.string().required("Address is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10,15}$/, "Enter a valid phone number")
    .required("Phone Number is required"),
  emergencyContact1: Yup.string()
    .matches(/^\d{10,15}$/, "Enter a valid emergency contact number")
    .required("Emergency Contact 1 is required"),
  emergencyContact2: Yup.string()
    .matches(/^\d{10,15}$/, "Enter a valid emergency contact number")
    .nullable(),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  terms: Yup.boolean().oneOf([true], "You must accept the terms"),
});

export default function DemoForm2() {
  const [openTerms, setOpenTerms] = useState(false);
  const initialValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: null as Dayjs | null,
    gender: "",
    country: "",
    city: "",
    postalCode: "",
    address: "",
    email: "",
    phone: "",
    emergencyContact1: "",
    emergencyContact2: "",
    password: "",
    confirmPassword: "",
    terms: false,
  };
  const genders = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  const countries = [
    { value: "us", label: "United States" },
    { value: "turkiye", label: "Türkiye" },
    { value: "china", label: "China" },
  ];
  const cityOptions: Record<string, { value: string; label: string }[]> = {
    us: [
      { value: "nyc", label: "New York" },
      { value: "la", label: "Los Angeles" },
      { value: "chi", label: "Chicago" },
    ],
    turkiye: [
      { value: "ist", label: "İstanbul" },
      { value: "ank", label: "Ankara" },
      { value: "izm", label: "İzmir" },
    ],
    china: [
      { value: "bj", label: "Beijing" },
      { value: "sh", label: "Shanghai" },
      { value: "gz", label: "Guangzhou" },
    ],
  };
  return (
    <Box>
      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 2, maxWidth: "840px" }}>
        <Typography variant="h5" sx={{ pb: 4, fontWeight: 600 }}>
          Detailed Register Form
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log("Form submitted:", values)}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            setFieldValue,
          }) => (
            <Form>
              <Grid container spacing={1}>
                <Grid container size={{ xs: 12 }}>
                  <Box
                    sx={{
                      border: "2px solid",
                      borderColor: "secondary.main",
                      borderRadius: 2,
                      p: 2,
                      position: "relative",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        position: "absolute",
                        top: -24,
                        left: 16,
                        px: 1,
                        fontWeight: 600,
                        color: "secondary.main",
                      }}
                    >
                      Personal Info
                    </Typography>
                    <Grid container spacing={1}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="First Name"
                          color="secondary"
                          name="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.firstName && Boolean(errors.firstName)}
                          helperText={touched.firstName && errors.firstName}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Last Name"
                          color="secondary"
                          name="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.lastName && Boolean(errors.lastName)}
                          helperText={touched.lastName && errors.lastName}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            label="Date of Birth"
                            name="dateOfBirth"
                            value={values.dateOfBirth}
                            onChange={(newValue) => {
                              setFieldValue("dateOfBirth", newValue);
                            }}
                            maxDate={dayjs()}
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                color: "secondary",
                                error:
                                  touched.dateOfBirth &&
                                  Boolean(errors.dateOfBirth),
                                helperText:
                                  touched.dateOfBirth && errors.dateOfBirth,
                              },
                            }}
                          />
                        </LocalizationProvider>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          select
                          fullWidth
                          label="Gender"
                          name="gender"
                          color="secondary"
                          value={values.gender}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.gender && Boolean(errors.gender)}
                          helperText={touched.gender && errors.gender}
                        >
                          {genders.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <TextField
                          select
                          fullWidth
                          label="Country"
                          color="secondary"
                          name="country"
                          value={values.country}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.country && Boolean(errors.country)}
                          helperText={touched.country && errors.country}
                        >
                          {" "}
                          {countries.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <TextField
                          select
                          fullWidth
                          label="City"
                          color="secondary"
                          name="city"
                          value={values.city}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.city && Boolean(errors.city)}
                          helperText={touched.city && errors.city}
                          disabled={!values.country}
                        >
                          {(cityOptions[values.country] || []).map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <TextField
                          fullWidth
                          label="Postal Code"
                          color="secondary"
                          name="postalCode"
                          value={values.postalCode}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.postalCode && Boolean(errors.postalCode)
                          }
                          helperText={touched.postalCode && errors.postalCode}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          multiline
                          minRows={3}
                          label="Open Address"
                          color="secondary"
                          name="address"
                          value={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.address && Boolean(errors.address)}
                          helperText={touched.address && errors.address}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid container size={{ xs: 12 }}>
                  <Box
                    sx={{
                      border: "2px solid",
                      borderColor: "secondary.main",
                      borderRadius: 2,
                      p: 2,
                      mt: 4,
                      position: "relative",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        position: "absolute",
                        top: -24,
                        left: 16,
                        px: 1,
                        fontWeight: 600,
                        color: "secondary.main",
                      }}
                    >
                      Account Info
                    </Typography>
                    <Grid container spacing={1}>
                      <Grid size={{ xs: 12, sm: 6 }}>
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
                      <Grid size={{ xs: 12, sm: 6 }}>
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
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Emergency Contact 1"
                          color="secondary"
                          type="tel"
                          name="emergencyContact1"
                          value={values.emergencyContact1}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.emergencyContact1 &&
                            Boolean(errors.emergencyContact1)
                          }
                          helperText={
                            touched.emergencyContact1 &&
                            errors.emergencyContact1
                          }
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Emergency Contact 2"
                          color="secondary"
                          type="tel"
                          name="emergencyContact2"
                          value={values.emergencyContact2}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.emergencyContact2 &&
                            Boolean(errors.emergencyContact2)
                          }
                          helperText={
                            touched.emergencyContact2 &&
                            errors.emergencyContact2
                          }
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
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
                      <Grid size={{ xs: 12, sm: 6 }}>
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
                            touched.confirmPassword &&
                            Boolean(errors.confirmPassword)
                          }
                          helperText={
                            touched.confirmPassword && errors.confirmPassword
                          }
                        />
                      </Grid>
                    </Grid>
                  </Box>
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
                    label={
                      <Typography variant="body2">
                        I agree to the{" "}
                        <Typography
                          component="span"
                          color="secondary"
                          sx={{
                            cursor: "pointer",
                            textDecoration: "underline",
                          }}
                          onClick={() => setOpenTerms(true)}
                        >
                          User Terms and Privacy Policy
                        </Typography>
                      </Typography>
                    }
                  />
                  {touched.terms && errors.terms && (
                    <Typography variant="caption" color="error">
                      {errors.terms}
                    </Typography>
                  )}
                </Grid>
                <UserTerms
                  open={openTerms}
                  onClose={() => setOpenTerms(false)}
                />

                <Grid
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                  size={{ xs: 12 }}
                >
                  <Button color="secondary" type="submit" variant="contained">
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
