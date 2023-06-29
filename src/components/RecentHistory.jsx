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

export default function RecentHistory() {
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
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.amount}
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

const rows = [
  {
    amount: "345",
    date: "24/04/2023",
    description: "Testinga kasdjcn kadj jkads ouw akdcspa ask .",
  },
  {
    amount: "345",
    date: "24/04/2021",
    description: "Testinga kasdjcn kadj jkads ouw akdcspa ask .",
  },
  {
    amount: "345",
    date: "24/04/2023",
    description: "Testinga kasdjcn kadj jkads ouw akdcspa ask .",
  },
];
