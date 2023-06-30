import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

// Generate hardcoded order data
//TODO: Fetch data from backend
function createData(
  id: number,
  date: string,
  description: string,
  amount: number,
  category: string
) {
  return { id, date, description, amount, category };
}

const rows = [
  createData(0, "16 Mar, 2023", "Rice and Oil", 300, "Grocery"),
  createData(0, "18 Apr, 2023", "Cab to office", 175, "Travel"),
  createData(0, "16 Mar, 2023", "Salary payment", 40000, "Salary"),
  createData(0, "16 Mar, 2023", "Rent for flat", 10000, "Rent"),
];

const Transactions: React.FC = () => {
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {`Recent Transactions`}
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell align="right">Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{`₹${row.amount}`}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

export default Transactions;
