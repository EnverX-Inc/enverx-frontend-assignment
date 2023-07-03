import {
  Grid,
  Typography,
  Button,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { pink, blue, green } from "@mui/material/colors";
import {
  Category as CategoryIcon,
  Fastfood as FastfoodIcon,
  ShoppingBasket as ShoppingBasketIcon,
  Payment as PaymentIcon,
  FamilyRestroomRounded,
  Restaurant,
} from "@mui/icons-material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useDispatch, useSelector } from "react-redux";
import {
  getExpensesFromFirestore as getExpenses,
  deleteExpense,
} from "../features/expensesSlice";
import { useState, useEffect } from "react";

const ExpensesListView = ({ posted, setPosted }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const expenses = useSelector((state) => state.expenses.data);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTab = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setTimeout(() => {
      dispatch(getExpenses());
    }, 1000);
  }, [posted]);
  console.log("jv", expenses);
  return (
    <>
      <Grid container spacing={1} m={2} color={blue}>
        {/* <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h4" align="center">
            Expenses List
          </Typography>
        </Grid> */}
        <Grid item xs sm={2} md={2}>
          <Typography
            variant={isMobile ? "body1" : !isTab ? "h3" : "h5"}
            align="center"
          >
            Category
          </Typography>
        </Grid>
        <Grid item xs sm={2} md={2}>
          <Typography
            variant={isMobile ? "body1" : !isTab ? "h3" : "h5"}
            align="center"
          >
            Date
          </Typography>
        </Grid>
        <Grid item xs sm={4} md={4}>
          <Typography
            variant={isMobile ? "body1" : !isTab ? "h3" : "h5"}
            align="center"
          >
            Description
          </Typography>
        </Grid>
        <Grid item xs sm={2} md={2}>
          <Typography
            variant={isMobile ? "body1" : !isTab ? "h3" : "h5"}
            align="center"
          >
            Amount
          </Typography>
        </Grid>

        <Grid item xs sm={2} md={2}>
          <Typography
            variant={isMobile ? "body1" : !isTab ? "h3" : "h5"}
            align="center"
          >
            Action
          </Typography>
        </Grid>
      </Grid>
      {Array.isArray(expenses) &&
        expenses.map((exp, i) => (
          <Grid container spacing={1} margin={1} key={exp.id}>
            <Grid item xs sm={2} md={2} align="center">
              <Avatar sx={{ bgcolor: blue[900] }}>
                {exp.category === "Rent" && <PaymentIcon />}
                {exp.category === "food" && <Restaurant />}
                {exp.category === "other" && <AssignmentIcon />}
                {exp.category === "groceries" && <ShoppingBasketIcon />}
              </Avatar>
              <Typography variant="body1" align="center">
                {exp.category}
              </Typography>
            </Grid>

            <Grid item xs sm={2} md={2}>
              <Typography variant="body1" align="center">
                {exp.date}
              </Typography>
            </Grid>

            <Grid item xs sm={4} md={4}>
              <Typography variant="body1" align="center">
                {exp.description}
              </Typography>
            </Grid>

            <Grid item xs sm={2} md={2}>
              <Typography variant="body1" align="center">
                $ {exp.amount}
              </Typography>
            </Grid>

            {/* {!isMobile && ( */}
            <Grid item xs sm={2} md={2} align="center">
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  dispatch(deleteExpense(exp.id));
                  setPosted(!posted);
                }}
                // fullWidth
              >
                Delete
              </Button>
            </Grid>
            {/* )} */}
          </Grid>
        ))}
    </>
  );
};

export default ExpensesListView;
