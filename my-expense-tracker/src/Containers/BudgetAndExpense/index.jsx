import { useEffect, useState } from "react";
import BudgetExpenseList from "./BudgetExpenseList";
import { Box, Button, Modal, Stack } from "@mui/material";
import Filter from "../Filter";
import AddBudgetExpenseForm from "../AddBudgetExpenseForm";
import EditBudgetExpenseForm from "../EditBudgetExpenseForm";
import Analytics from "../Analytics";
import { useDispatch, useSelector } from "react-redux";
import {
  createBudgetExpenseRequest,
  deleteBudgetExpenseRequest,
  fetchBudgetExpensesRequest,
  updateBudgetExpenseRequest,
} from "../../Redux/actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BudgetAndExpense = () => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState({
    category: "all",
    q: "",
  });

  useEffect(() => {
    dispatch(fetchBudgetExpensesRequest(filter));
  }, [filter, dispatch]);

  const [showAnalytics, setShowAnalytics] = useState(false);

  const { budgetExpense } = useSelector((state) => state.budgetExpense);

  const [showAddForm, setShowAddForm] = useState(false);
  const [editFormData, setEditFormData] = useState({
    open: false,
    data: null,
  });

  const handleAdd = (item) => {
    dispatch(createBudgetExpenseRequest(item));
    setShowAddForm(false);
  };

  const handleDelete = (item) => {
    dispatch(deleteBudgetExpenseRequest(item));
  };

  const handleEdit = (item) => {
    dispatch(updateBudgetExpenseRequest(item));
    setEditFormData({ open: false, data: null });
  };

  return (
    <div style={{ padding: 20 }}>
      {showAddForm ? (
        <Modal
          open
          onClose={() => setShowAddForm(true)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <AddBudgetExpenseForm handleAdd={handleAdd} />
            <center>
              <Button onClick={() => setShowAddForm(false)}>Close</Button>
            </center>
          </Box>
        </Modal>
      ) : null}
      {editFormData.open ? (
        <Modal
          open
          onClose={() => setEditFormData({ open: false, data: null })}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <EditBudgetExpenseForm
              item={editFormData.data}
              handleEdit={handleEdit}
            />

            <center>
              <Button
                onClick={() => setEditFormData({ open: false, data: null })}
              >
                Close
              </Button>
            </center>
          </Box>
        </Modal>
      ) : null}
      <Stack direction={"row"}>
        <Filter filter={filter} setFilter={setFilter} />
        <Button onClick={() => setShowAddForm(true)}>Add</Button>
        <Button onClick={() => setShowAnalytics((prev) => !prev)}>
          {showAnalytics ? "List" : " Analytics"}
        </Button>
      </Stack>
      {showAnalytics ? (
        <Analytics list={budgetExpense} />
      ) : (
        <BudgetExpenseList
          list={budgetExpense}
          handleDelete={handleDelete}
          handleEdit={(values) => {
            setEditFormData({ open: true, data: values });
          }}
        />
      )}
    </div>
  );
};

export default BudgetAndExpense;
