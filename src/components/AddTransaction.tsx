import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormValues {
  description: string;
  amount: string;
  category: string;
}

const AddTransaction: React.FC = () => {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());
  const dispatch = useDispatch();

  const handleSubmit = (values: FormValues) => {
    const { description, amount, category } = values;
    const transactionDate = date?.format("DD/MM/YYYY") || "";

    console.log(description, amount, category, transactionDate);

    // Update data in firebase database
    dispatch({
      type: "user/addData",
      payload: { description, amount, category, date: transactionDate },
    });
  };

  const validationSchema = Yup.object({
    description: Yup.string().required("Description is required"),
    amount: Yup.number().required("Amount is required"),
    category: Yup.string().required("Category is required"),
  });

  const formik = useFormik({
    initialValues: {
      description: "",
      amount: "",
      category: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Add a new transaction
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  name="description"
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  autoFocus
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                  }
                  helperText={
                    formik.touched.description && formik.errors.description
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="amount"
                  label="Amount"
                  name="amount"
                  value={formik.values.amount}
                  onChange={formik.handleChange}
                  error={formik.touched.amount && Boolean(formik.errors.amount)}
                  helperText={formik.touched.amount && formik.errors.amount}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="category"
                  label="Category"
                  name="category"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.category && Boolean(formik.errors.category)
                  }
                  helperText={formik.touched.category && formik.errors.category}
                />
              </Grid>
              <Grid item xs={6}>
                <DatePicker
                  label="Date"
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                  format="DD/MM/YYYY"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <h2>{}</h2>
      </Container>
    </LocalizationProvider>
  );
};

export default AddTransaction;
