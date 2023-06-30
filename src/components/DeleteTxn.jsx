import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { DELETE_TRANSACTION } from "../store/actions";

export default function DeleteTxn({ id }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch({
      type: DELETE_TRANSACTION,
      id: id,
    });
  };
  return (
    <IconButton size="small" onClick={handleDelete}>
      <DeleteIcon fontSize="small" color="primary" />
    </IconButton>
  );
}
