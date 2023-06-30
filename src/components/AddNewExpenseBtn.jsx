import { Button } from "@mui/material";

export default function AddNewExpenseBtn({ onClick }) {
  return (
    <Button onClick={onClick} variant="outlined">
      Add New Expense +
    </Button>
  );
}
