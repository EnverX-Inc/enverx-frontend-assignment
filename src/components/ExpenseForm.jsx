import { Autocomplete, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TRANSACTION } from "../store/actions";
import { addTransactionApi } from "../store/apis";
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";

export default function ExpenseForm({ handleClose }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    id: uuidv4(),
    amount: 0,
    description: "",
    date: format(new Date(), "yyyy-MM-dd"),
    category: "",
  });

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const payload = {
      id: form.id,
      amount: form.amount,
      description: form.description,
      date: form.date,
      category: form.category,
    };
    dispatch({
      type: ADD_TRANSACTION,
      payload: payload,
    });
    await addTransactionApi(payload);
    handleClose();
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Amount"
        name="amount"
        type={"number"}
        required
        sx={{ mb: "1rem" }}
        value={form.amount}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Description"
        name="description"
        required
        sx={{ mb: "1rem" }}
        value={form.description}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        name="date"
        required
        type={"date"}
        sx={{ mb: "1rem" }}
        value={form.date}
        onChange={handleChange}
      />
      <Autocomplete
        id="categories"
        freeSolo
        options={categories.map((option) => option)}
        value={form.category}
        onChange={(ev, target) => {
          setForm((prev) => {
            return {
              ...prev,
              category: target ?? "",
            };
          });
        }}
        renderInput={(params) => (
          <TextField
            onChange={(ev) => {
              setForm((prev) => {
                return {
                  ...prev,
                  category: ev.target.value ?? "",
                };
              });
            }}
            required
            {...params}
            label="Category"
            name="category"
          />
        )}
      />
      <Button type="submit" variant="contained" sx={{ my: 2 }}>
        Submit
      </Button>
    </form>
  );
}

const categories = ["Food", "Rent", "Misc"];
