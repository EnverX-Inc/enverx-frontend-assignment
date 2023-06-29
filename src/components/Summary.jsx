import { Box, Card, Stack, Typography } from "@mui/material";
import SummaryCard from "./common/SummaryCard";

export default function Summary() {
  return (
    <Stack direction={"row"} mt={2} gap={4}>
      <SummaryCard title={"INCOME"} description={"₹ 67,000"} />
      <SummaryCard title={"EXPENSES"} description={"₹ 38,920"} />
      <SummaryCard title={"CATEGORIES"} description={"Something different"} />
    </Stack>
  );
}
