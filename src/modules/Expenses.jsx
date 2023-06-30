import { Box, Dialog, DialogTitle, Typography } from "@mui/material";
import { useState } from "react";
import AddNewExpenseBtn from "../components/AddNewExpenseBtn";
import ExpenseForm from "../components/ExpenseForm";
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
      <AddNewExpenseBtn onClick={() => setOpen(true)} />
      <Summary />
      <RecentHistory />
    </Box>
  );
}
