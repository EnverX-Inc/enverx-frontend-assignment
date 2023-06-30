import { Button, ListItem, Stack } from "@mui/material";
import { shape, string, func, number, any } from "prop-types";
import * as dayjs from "dayjs";
const BudgetExpenseListItem = ({ item, handleEdit, handleDelete }) => {
  const isIncome = item.type === "income";

  return (
    <ListItem
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: "#f1eee7",
        marginBottom: "10px",
        borderRadius: "10px",
        boxShadow: "0px 0px 3px 0px #E7B10A",
      }}
    >
      <Stack
        spacing={2}
        direction={"row"}
        alignItems={"center"}
        width={"100%"}
        justifyContent={"space-between"}
      >
        <div style={{ textTransform: "capitalize" }}>{item.title}</div>
        <div style={{ textTransform: "capitalize" }}>{item.category}</div>

        <div style={{ color: isIncome ? "green" : "red" }}>
          {isIncome ? "+" : "-"}
          {item.amount}
        </div>
        <div>
          <Button
            onClick={() => {
              handleEdit(item);
            }}
          >
            Edit
          </Button>
          <Button onClick={() => handleDelete(item)}>Delete</Button>
        </div>
      </Stack>

      <Stack
        spacing={2}
        direction={"row"}
        justifyContent={"space-between"}
        width={"100%"}
        style={{ color: "grayText" }}
      >
        <div>{item.description}</div>
        <div>{dayjs(item.date).format("DD MMMM")}</div>
      </Stack>
    </ListItem>
  );
};

BudgetExpenseListItem.propTypes = {
  item: shape({
    id: string,
    title: string,
    amount: number,
    category: string,
    description: string,
    type: string,
    date: any,
  }).isRequired,
  handleEdit: func.isRequired,
  handleDelete: func.isRequired,
};

export default BudgetExpenseListItem;
