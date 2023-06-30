import { Dialog, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

export default function EditTxn({ form }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleEdit = () => {
    handleClickOpen();
  };
  return (
    <>
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
          Edit Transaction
        </Typography>
        <ExpenseForm handleClose={handleClose} edit={true} data={form} />
      </Dialog>
      <IconButton size="small" onClick={handleEdit}>
        <EditIcon fontSize="small" color="primary" />
      </IconButton>
    </>
  );
}
