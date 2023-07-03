import {
  MoneyOffCsred,
  MoneyOffCsredOutlined,
  MoneyOutlined,
  MoneySharp,
  Savings,
} from "@mui/icons-material";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import {
  Grid,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { blue, lightGreen, green } from "@mui/material/colors";
import { useState } from "react";
import { useSelector } from "react-redux";

const MonthlySpends = () => {
  const [Salary, setSalary] = useState(10000);
  const expenses = useSelector((state) => state.expenses.data);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  let sum = 0;
  const Spendings =
    Array.isArray(expenses) &&
    expenses.map((exp) => {
      sum += Number(exp.amount);
      // console.log(sum ,exp.amount);
    });
  //   console.log(typeof Salary);
  return (
    <Grid container spacing={1} m={2} color={lightGreen}>
      <Grid item xs={6} sm md>
        {/* <Typography variant="h4" component="span" align="center">
          Salary-{Salary}
        </Typography> */}
        <TextField
          name="salary"
          variant="standard"
          value={Salary}
          onChange={(e) => setSalary(e.target.value)}
          required
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CurrencyBitcoinOutlinedIcon sx={{ color: green[500] }} />
                salary-
              </InputAdornment>
            ),
          }}
          // error={!!errors.date}
          // helperText={errors.date}
          // fullWidth
        />
      </Grid>
      <Grid item xs sm md>
        <Typography variant="h5" align="center">
          {/* <MoneyOutlined /> */}
          {/* <MoneyOffCsred color="error" /> */}
          <MoneyOffCsredOutlined color="error" />
          &nbsp;{isMobile ? sum : "Expenses -" + sum} $
        </Typography>
      </Grid>
      <Grid item xs={12} sm md>
        <Typography variant="h4" align="center">
          <Savings sx={{ color: blue[900] }} />
          &nbsp;{Salary - sum} $
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MonthlySpends;
