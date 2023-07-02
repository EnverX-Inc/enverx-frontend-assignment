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

const AddTransaction = () => {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const description = data?.get("description")
      ? (data.get("description") as string)
      : "";
    const amount = data.get("amount") ? (data.get("amount") as string) : "";
    const category = data.get("category")
      ? (data.get("category") as string)
      : "";
    const transactionDate = date?.format("DD/MM/YYYY")
      ? date?.format("DD/MM/YYYY")
      : "";
    //Update data in firebase database
    dispatch({
      type: "user/addData",
      payload: { description, amount, category, date: transactionDate },
    });
  };

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
            onSubmit={handleSubmit}
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
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="amount"
                  label="Amount"
                  name="amount"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="category"
                  label="Category"
                  name="category"
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
