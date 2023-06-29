import { Box, Stack, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navigation() {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        background: `${theme.palette.primary.main}`,
        px: 2,
        py: 2,
      }}
    >
      <Box>
        <Stack direction={"row"} gap={2}>
          <Link style={{ textDecoration: "none" }} to="/">
            <Typography color={"white"}>Expenses</Typography>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/transactions">
            <Typography color={"white"}>Transactions</Typography>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/analytics">
            <Typography color={"white"}>Analytics</Typography>
          </Link>
        </Stack>
      </Box>
    </Stack>
  );
}
