import {
  Box,
  Paper,
  Typography,
  Button,
  Grid,
  TextField,
  MenuItem,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Checkbox,
} from "@mui/material";
import { Formik, Form } from "formik";
import Square1 from "../../../assets/square1.png";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import * as Yup from "yup";

dayjs.extend(isSameOrAfter);

const validationSchema = Yup.object({
  name: Yup.string().required("Fullname is required"),
  employeeId: Yup.string().required("Employee ID is required"),
  department: Yup.string().required("Department is required"),
  position: Yup.string().required("Position is required"),
  manager: Yup.string().required("Manager is required"),
  leaveType: Yup.string().required("Leave Type is required"),
  startDate: Yup.mixed<Dayjs>().nullable().required("Start Date is required"),
  endDate: Yup.mixed<Dayjs>()
    .nullable()
    .required("End Date is required")
    .test(
      "is-after-start",
      "End Date cannot be before Start Date",
      function (value) {
        const { startDate } = this.parent;
        return value && startDate
          ? value.isSameOrAfter(startDate, "day")
          : true;
      }
    ),
  reasonForLeave: Yup.string().required("Reason for leave is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^\+?\d{7,15}$/, "Enter a valid phone number"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  emergencyContact: Yup.string().required("Emergency contact is required"),
  approvalStatus: Yup.string().required("Approval status is required"),
  acknowledgement: Yup.boolean().oneOf(
    [true],
    "You must acknowledge to submit"
  ),
});

export default function DemoForm4() {
  const initialValues = {
    name: "",
    department: "",
    employeeId: "",
    position: "",
    manager: "",
    leaveType: "",
    startDate: dayjs(),
    endDate: null as Dayjs | null,
    numOfDays: 0,
    reasonForLeave: "",
    phoneNumber: "",
    email: "",
    emergencyContact: "",
    managersComments: "",
    approvalStatus: "",
    signature: "",
    acknowledgement: false,
  };

  const departments = [
    { value: "hr", label: "Human Resources" },
    { value: "it", label: "IT" },
    { value: "finance", label: "Finance" },
    { value: "marketing", label: "Marketing" },
    { value: "sales", label: "Sales" },
  ];

  const positions: Record<string, { value: string; label: string }[]> = {
    hr: [
      { value: "hr_manager", label: "HR Manager" },
      { value: "recruiter", label: "Recruiter" },
      { value: "payroll_specialist", label: "Payroll Specialist" },
    ],
    it: [
      { value: "software_engineer", label: "Software Engineer" },
      { value: "system_admin", label: "System Admin" },
      { value: "qa_tester", label: "QA Tester" },
    ],
    finance: [
      { value: "accountant", label: "Accountant" },
      { value: "financial_analyst", label: "Financial Analyst" },
      { value: "auditor", label: "Auditor" },
    ],
    marketing: [
      { value: "marketing_specialist", label: "Marketing Specialist" },
      { value: "seo_analyst", label: "SEO Analyst" },
      { value: "content_writer", label: "Content Writer" },
    ],
    sales: [
      { value: "sales_executive", label: "Sales Executive" },
      { value: "account_manager", label: "Account Manager" },
      { value: "business_development", label: "Business Development" },
    ],
  };

  const leaveTypes = [
    { value: "annual", label: "Annual" },
    { value: "sick", label: "Sick" },
    { value: "maternity", label: "Maternity" },
    { value: "unpaid", label: "Unpaid" },
  ];

  return (
    <Box>
      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 2, maxWidth: "840px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            pb: 4,
          }}
        >
          <img
            src={Square1}
            alt="Form Logo"
            style={{ width: 80, height: 80 }}
          />
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, textAlign: "center", flex: 1 }}
          >
            Employee Leave Request Form
          </Typography>
        </Box>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log("Form Submitted:", values)}
        >
          {({
            values,
            handleChange,
            setFieldValue,
            handleBlur,
            setFieldTouched,
            errors,
            touched,
          }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid container size={{ xs: 12 }}>
                  <Box
                    sx={{
                      border: "2px solid",
                      borderColor: "secondary.main",
                      borderRadius: 2,
                      p: 2,
                      position: "relative",
                      mb: 3,
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
                      Employee Info
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Fullname"
                          color="secondary"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={Boolean(errors.name && touched.name)}
                          helperText={
                            errors.name && touched.name ? errors.name : ""
                          }
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Employee ID"
                          color="secondary"
                          name="employeeId"
                          value={values.employeeId}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={Boolean(
                            errors.employeeId && touched.employeeId
                          )}
                          helperText={
                            errors.employeeId && touched.employeeId
                              ? errors.employeeId
                              : ""
                          }
                        />
                      </Grid>
                      <Grid size={{ xs: 6 }}>
                        <TextField
                          select
                          fullWidth
                          label="Department"
                          color="secondary"
                          name="department"
                          value={values.department}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={Boolean(
                            errors.department && touched.department
                          )}
                          helperText={
                            errors.department && touched.department
                              ? errors.department
                              : ""
                          }
                        >
                          {departments.map((dept) => (
                            <MenuItem key={dept.value} value={dept.value}>
                              {dept.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 6 }}>
                        <TextField
                          select
                          fullWidth
                          label="Position / Job Title"
                          color="secondary"
                          name="position"
                          value={values.position}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          disabled={!values.department}
                          error={Boolean(errors.position && touched.position)}
                          helperText={
                            errors.position && touched.position
                              ? errors.position
                              : ""
                          }
                        >
                          {(positions[values.department] || []).map(
                            (option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            )
                          )}
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Manager / Supervisor"
                          color="secondary"
                          name="manager"
                          value={values.manager}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={Boolean(errors.manager && touched.manager)}
                          helperText={
                            errors.manager && touched.manager
                              ? errors.manager
                              : ""
                          }
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                <Grid container size={{ xs: 6 }}>
                  <Box
                    sx={{
                      border: "2px solid",
                      borderColor: "secondary.main",
                      borderRadius: 2,
                      p: 2,
                      position: "relative",
                      mb: 3,
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
                      Leave Details
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          select
                          fullWidth
                          label="Leave Type"
                          color="secondary"
                          name="leaveType"
                          value={values.leaveType}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={Boolean(errors.leaveType && touched.leaveType)}
                          helperText={
                            errors.leaveType && touched.leaveType
                              ? errors.leaveType
                              : ""
                          }
                        >
                          {leaveTypes.map((leaveType) => (
                            <MenuItem
                              key={leaveType.value}
                              value={leaveType.value}
                            >
                              {leaveType.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            label="Start Date"
                            value={values.startDate}
                            onChange={(newValue) =>
                              setFieldValue("startDate", newValue)
                            }
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                color: "secondary",
                                onBlur: () =>
                                  setFieldTouched("startDate", true),
                                error: Boolean(
                                  errors.startDate && touched.startDate
                                ),
                                helperText:
                                  typeof errors.startDate === "string" &&
                                  touched.startDate
                                    ? errors.startDate
                                    : "",
                              },
                            }}
                          />
                        </LocalizationProvider>
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            label="End Date"
                            value={values.endDate}
                            onChange={(newValue) => {
                              setFieldValue("endDate", newValue);
                              if (values.startDate && newValue) {
                                const diff =
                                  newValue.diff(values.startDate, "day") + 1;
                                setFieldValue("numOfDays", diff > 0 ? diff : 0);
                              }
                            }}
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                color: "secondary",
                                onBlur: () =>
                                  setFieldTouched("startDate", true),
                                error: Boolean(
                                  errors.endDate && touched.endDate
                                ),
                                helperText:
                                  errors.endDate && touched.endDate
                                    ? errors.endDate
                                    : "",
                              },
                            }}
                          />
                        </LocalizationProvider>
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Number of Days"
                          color="secondary"
                          value={values.numOfDays}
                          slotProps={{ input: { readOnly: true } }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Reason For Leave"
                          color="secondary"
                          value={values.reasonForLeave}
                          multiline
                          minRows={3}
                          error={Boolean(
                            errors.reasonForLeave && touched.reasonForLeave
                          )}
                          helperText={
                            errors.reasonForLeave && touched.reasonForLeave
                              ? errors.reasonForLeave
                              : ""
                          }
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                <Grid container size={{ xs: 6 }}>
                  <Box
                    sx={{
                      border: "2px solid",
                      borderColor: "secondary.main",
                      borderRadius: 2,
                      p: 2,
                      position: "relative",
                      mb: 3,
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
                      Contact During Leave
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Phone Number"
                          color="secondary"
                          name="phoneNumber"
                          value={values.phoneNumber}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={Boolean(
                            errors.phoneNumber && touched.phoneNumber
                          )}
                          helperText={
                            errors.phoneNumber && touched.phoneNumber
                              ? errors.phoneNumber
                              : ""
                          }
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Email"
                          color="secondary"
                          name="email"
                          value={values.email}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={Boolean(errors.email && touched.email)}
                          helperText={
                            errors.email && touched.email ? errors.email : ""
                          }
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Emergency Contact"
                          color="secondary"
                          name="emergencyContact"
                          value={values.emergencyContact}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={Boolean(
                            errors.emergencyContact && touched.emergencyContact
                          )}
                          helperText={
                            errors.emergencyContact && touched.emergencyContact
                              ? errors.emergencyContact
                              : ""
                          }
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
                      Approval Section
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Manager's Comments"
                          color="secondary"
                          value={values.managersComments}
                          multiline
                          minRows={3}
                        />
                      </Grid>
                      <Grid size={{ xs: 6 }}>
                        <FormLabel
                          sx={{
                            mb: 1,
                            display: "flex",
                            justifyContent: "flex-start",
                          }}
                        >
                          Approval Status
                        </FormLabel>
                        <RadioGroup
                          row
                          name="approvalStatus"
                          value={values.approvalStatus}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="approved"
                            control={<Radio color="secondary" />}
                            label="Approved"
                          />
                          <FormControlLabel
                            value="pending"
                            control={<Radio color="secondary" />}
                            label="Pending"
                          />
                          <FormControlLabel
                            value="rejected"
                            control={<Radio color="secondary" />}
                            label="Rejected"
                          />
                        </RadioGroup>
                        {errors.approvalStatus && touched.approvalStatus && (
                          <Typography color="error" variant="caption">
                            {errors.approvalStatus}
                          </Typography>
                        )}
                      </Grid>
                      <Grid size={{ xs: 6 }}>
                        <FormLabel
                          sx={{
                            mb: 1,
                            display: "flex",
                            justifyContent: "flex-start",
                          }}
                        >
                          Signature / Digital Acknowledgement
                        </FormLabel>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="acknowledgement"
                              color="secondary"
                              checked={values.acknowledgement}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                          }
                          label="I acknowledge"
                        />
                        {errors.acknowledgement && touched.acknowledgement && (
                          <Typography color="error" variant="caption">
                            {errors.acknowledgement}
                          </Typography>
                        )}
                      </Grid>
                      <Grid
                        container
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          mt: 3,
                        }}
                        size={{ sm: 12 }}
                      >
                        <Button
                          color="secondary"
                          type="submit"
                          variant="contained"
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
}
