import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,Button, Box
} from "@mui/material";
import { blue, green, lightGreen } from "@mui/material/colors";


const ExpensesForm = ({ handleChange, handleSubmit, expense }) => {
  // console.log(expense);
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            name="date"
            type="date"
            value={expense.date || ""}
            onChange={handleChange}
            required
            // error={!!errors.date}
            // helperText={errors.date}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            name="description"
            label="Description"
            value={expense.description}
            onChange={handleChange}
            required
            // error={!!errors.description}
            // helperText={errors.description}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            name="amount"
            type="number"
            label="Amount"
            value={expense.amount}
            onChange={handleChange}
            required
            // error={!!errors.amount}
            // helperText={errors.amount}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              name="category"
              labelId="category-label"
              value={expense.category}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="rent">Rent</MenuItem>
              <MenuItem value="groceries">Groceries</MenuItem>
              <MenuItem value="food">Food</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid container  item ml={12} xs={12} sm={8} md={10}  >
            

          <Button  sx={{
       
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: green['A700'],
          opacity:[0.8]
          
        },
      }} variant="contained" type="submit" fullWidth >
            Add Expense
          </Button>
           
        </Grid>
      </Grid>
    </form>
  );
};

export default ExpensesForm;
