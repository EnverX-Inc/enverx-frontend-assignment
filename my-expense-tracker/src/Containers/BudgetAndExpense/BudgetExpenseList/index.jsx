import { List, Stack } from "@mui/material";
import BudgetExpenseListItem from "../BudgetExpenseListItem";
import { array, func } from "prop-types";

const BudgetExpenseList = ({ list, handleEdit, handleDelete }) => {
  const income = list.reduce(
    (acc, item) => (item.type === "income" ? acc + item.amount : acc),
    0
  );
  const expense = list.reduce(
    (acc, item) => (item.type === "expense" ? acc + item.amount : acc),
    0
  );
  const balance = income - expense;
  return (
    <>
      <List>
        {list.map((item) => (
          <BudgetExpenseListItem
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </List>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <div>Income: {income}</div>
        <div>Expense: {expense}</div>
        <div style={{ color: balance > 0 ? "green" : "red" }}>
          Balance: {balance}
        </div>
      </Stack>
    </>
  );
};

BudgetExpenseList.propTypes = {
  list: array.isRequired,
  handleDelete: func.isRequired,
  handleEdit: func.isRequired,
};

export default BudgetExpenseList;
