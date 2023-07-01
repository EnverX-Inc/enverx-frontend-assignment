import { Box, Dialog, Stack, Typography } from "@mui/material";
import { useState } from "react";
import AddNewExpenseBtn from "../components/AddNewExpenseBtn";
import ExpenseForm from "../components/ExpenseForm";
import MonthlyIncome from "../components/MonthlyIncome";
import RecentHistory from "../components/RecentHistory";
import Summary from "../components/Summary";

export default function Expenses() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box mt={2}>
      <Dialog
        open={open}
        sx={{
          "& .MuiPaper-root": {
            padding: "2rem",
            width: "400px",
          },
        }}
        onClose={handleClose}
      >
        <Typography variant="h5" mb={2}>
          Add Expense
        </Typography>
        <ExpenseForm handleClose={handleClose} />
      </Dialog>
      <Stack direction="row" gap={2}>
        <AddNewExpenseBtn onClick={() => setOpen(true)} />
        <MonthlyIncome />
      </Stack>

      <Summary />
      <RecentHistory />
    </Box>
  );
}
