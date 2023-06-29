import { Box } from "@mui/material";
import AddNewExpenseBtn from "../components/AddNewExpenseBtn";
import RecentHistory from "../components/RecentHistory";
import Summary from "../components/Summary";

export default function Expenses() {
  return (
    <Box mt={2}>
      <AddNewExpenseBtn />
      <Summary />
      <RecentHistory />
    </Box>
  );
}
