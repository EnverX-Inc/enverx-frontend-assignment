import { Button, Dialog, Stack, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EDIT_INCOME } from "../store/actions";

export default function MonthlyIncome() {
  const dispatch = useDispatch();
  const { income } = useSelector((state) => state.summary);

  const [form, setForm] = useState({
    income: income,
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setForm({
      income: income,
    });
  }, [income]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    try {
      const payload = Number(form.income);
      dispatch({
        type: EDIT_INCOME,
        payload: payload,
      });
      handleClose();
    } catch (er) {
      console.log(err);
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            padding: "2rem",
          },
        }}
      >
        <Typography mb={2} variant="h4">
          Edit Income
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack gap={2}>
            <TextField
              name="income"
              label="income"
              value={form.income}
              onChange={(ev) => {
                setForm({
                  income: ev.target.value,
                });
              }}
            />
            <Button variant="contained" type={"submit"}>
              Submit
            </Button>
          </Stack>
        </form>
      </Dialog>
      <Button onClick={handleOpen} variant="outlined">
        Edit Monthly Income
      </Button>
    </>
  );
}
