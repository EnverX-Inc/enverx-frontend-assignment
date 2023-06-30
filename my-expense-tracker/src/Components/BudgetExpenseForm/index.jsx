import { useFormik } from "formik";
import * as yup from "yup";
import {
  FormControl,
  MenuItem,
  Select,
  Stack,
  Button,
  TextField,
} from "@mui/material";

import { shape, string, func, number, any } from "prop-types";

const validationSchema = yup.object({
  title: yup
    .string()
    .min(3, "Title must have minimum 3 chars")
    .max(20, "Title must have maximum 20 chars")
    .required("Title is required"),
  description: yup
    .string()
    .min(3, "Description must have minimum 3 chars")
    .max(100, "Description must have maximum 100 chars"),
  amount: yup
    .number()
    .min(1, "Amount must be greater than 0")
    .required("Amount is required"),
  category: yup.string().required(),
});

const BudgetExpenseForm = ({ initialValues, handleSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          margin="normal"
        />
        <TextField
          fullWidth
          id="description"
          name="description"
          label="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
          margin="normal"
        />

        <Stack direction={"row"} marginTop={1} marginBottom={1}>
          <TextField
            id="amount"
            name="amount"
            label="Amount"
            type="number"
            value={formik.values.amount}
            onChange={formik.handleChange}
            error={formik.touched.amount && Boolean(formik.errors.amount)}
            helperText={formik.touched.amount && formik.errors.description}
          />
          <FormControl fullWidth>
            <Select
              labelId="category-select-label"
              id="category-select"
              value={formik.values.category}
              //   label="Category"
              onChange={(e) => {
                formik.setFieldValue("category", e.target.value);
                if (e.target.value === "salary") {
                  formik.setFieldValue("type", "income");
                } else {
                  formik.setFieldValue("type", "expense");
                }
              }}
              style={{ marginLeft: 10 }}
            >
              <MenuItem value={"salary"}>Salary</MenuItem>
              <MenuItem value={"rent"}>Rent</MenuItem>
              <MenuItem value={"groceries"}>Groceries</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Button
          fullWidth
          color="primary"
          variant="contained"
          type="submit"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          Save
        </Button>
      </form>
    </div>
  );
};

BudgetExpenseForm.propTypes = {
  initialValues: shape({
    title: string,
    description: string,
    amount: number,
    category: string,
    date: any,
  }),
  handleSubmit: func.isRequired,
};

export default BudgetExpenseForm;
