import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

const validationSchema = Yup.object({
  productCode: Yup.string().required("Product Code is required"),
  productName: Yup.string().required("Product Name is required"),
  category: Yup.string().required("Category is required"),
  unit: Yup.string().required("Unit is required"),
  quantity: Yup.number()
    .min(1, "Must be at least 1")
    .required("Quantity is required"),
  unitPrice: Yup.number()
    .min(0.01, "Must be greater than 0")
    .required("Unit Price is required"),
  warehouse: Yup.string().required("Warehouse is required"),
  entryDate: Yup.mixed<Dayjs>().nullable().required("Entry Date is required"),
});

export default function DemoForm3() {
  const initialValues = {
    productCode: "",
    productName: "",
    category: "",
    unit: "",
    quantity: 0,
    unitPrice: 0,
    warehouse: "",
    supplier: "",
    entryDate: dayjs(),
    expiryDate: null as Dayjs | null,
    notes: "",
    fragile: false,
    perishable: false,
    onSale: false,
  };

  const categories = [
    { value: "electronics", label: "Electronics" },
    { value: "food", label: "Food" },
    { value: "clothing", label: "Clothing" },
  ];

  const units = [
    { value: "pcs", label: "Pieces" },
    { value: "kg", label: "Kilograms" },
    { value: "ltr", label: "Liters" },
    { value: "box", label: "Box" },
  ];

  const warehouses = [
    { value: "main", label: "Main Warehouse" },
    { value: "branch1", label: "Branch 1" },
    { value: "branch2", label: "Branch 2" },
  ];

  return (
    <Box>
      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 2, maxWidth: "840px" }}>
        <Typography variant="h5" sx={{ pb: 4, fontWeight: 600 }}>
          Inventory Entry Form
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) =>
            console.log("Inventory Form Submitted:", values)
          }
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
                      Product Info
                    </Typography>
                    <Grid container spacing={1}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Product Code"
                          color="secondary"
                          name="productCode"
                          value={values.productCode}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.productCode && Boolean(errors.productCode)
                          }
                          helperText={touched.productCode && errors.productCode}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Product Name"
                          color="secondary"
                          name="productName"
                          value={values.productName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.productName && Boolean(errors.productName)
                          }
                          helperText={touched.productName && errors.productName}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          select
                          fullWidth
                          label="Category"
                          color="secondary"
                          name="category"
                          value={values.category}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.category && Boolean(errors.category)}
                          helperText={touched.category && errors.category}
                        >
                          {categories.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          select
                          fullWidth
                          label="Unit"
                          color="secondary"
                          name="unit"
                          value={values.unit}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.unit && Boolean(errors.unit)}
                          helperText={touched.unit && errors.unit}
                        >
                          {units.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          type="number"
                          label="Quantity"
                          color="secondary"
                          name="quantity"
                          value={values.quantity}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.quantity && Boolean(errors.quantity)}
                          helperText={touched.quantity && errors.quantity}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          type="number"
                          label="Unit Price"
                          color="secondary"
                          name="unitPrice"
                          value={values.unitPrice}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.unitPrice && Boolean(errors.unitPrice)}
                          helperText={touched.unitPrice && errors.unitPrice}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Total Value"
                          color="secondary"
                          value={(
                            Number(values.quantity) * Number(values.unitPrice)
                          ).toFixed(2)}
                          InputProps={{ readOnly: true }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <Typography sx={{ mt: 2, fontWeight: 600 }}>
                          Product Features
                        </Typography>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="fragile"
                              color="secondary"
                              checked={values.fragile}
                              onChange={handleChange}
                            />
                          }
                          label="Fragile"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="perishable"
                              color="secondary"
                              checked={values.perishable}
                              onChange={handleChange}
                            />
                          }
                          label="Perishable"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="onSale"
                              color="secondary"
                              checked={values.onSale}
                              onChange={handleChange}
                            />
                          }
                          label="On Sale"
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
                      Warehouse Info
                    </Typography>
                    <Grid container spacing={1}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          select
                          fullWidth
                          label="Warehouse"
                          color="secondary"
                          name="warehouse"
                          value={values.warehouse}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.warehouse && Boolean(errors.warehouse)}
                          helperText={touched.warehouse && errors.warehouse}
                        >
                          {warehouses.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Supplier"
                          color="secondary"
                          name="supplier"
                          value={values.supplier}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            label="Entry Date"
                            value={values.entryDate}
                            onChange={(newValue) =>
                              setFieldValue("entryDate", newValue)
                            }
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                color: "secondary",
                                error:
                                  touched.entryDate &&
                                  Boolean(errors.entryDate),
                                helperText:
                                  touched.entryDate && errors.entryDate
                                    ? String(errors.entryDate)
                                    : undefined,
                              },
                            }}
                          />
                        </LocalizationProvider>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            label="Expiry Date"
                            value={values.expiryDate}
                            onChange={(newValue) =>
                              setFieldValue("expiryDate", newValue)
                            }
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                color: "secondary",
                              },
                            }}
                          />
                        </LocalizationProvider>
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          multiline
                          minRows={3}
                          label="Notes"
                          color="secondary"
                          name="notes"
                          value={values.notes}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                <Grid
                  sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}
                  size={{ xs: 12 }}
                >
                  <Button color="secondary" type="submit" variant="contained">
                    Save Stock
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
