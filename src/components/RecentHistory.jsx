import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_TRANSACTIONS } from "../store/actions";
import { format } from "date-fns";

export default function RecentHistory() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch({
      type: GET_TRANSACTIONS,
    });
  }, []);

  return (
    <Box mt={2}>
      <Stack direction={"row"} justifyContent="space-between">
        <Typography>Recent History</Typography>
        <Button variant="outlined">See More</Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table aria-label="recent-expenses">
          <TableHead>
            <TableRow>
              <TableCell>Amount</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Category</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.amount}
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell align="right">
                  {format(new Date(row.date), "dd/MMMM/yyyy")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {list.length === 0 && <Typography p={2}>No transactions</Typography>}
      </TableContainer>
    </Box>
  );
}
