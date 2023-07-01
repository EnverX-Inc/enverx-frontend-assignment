import { Box, Stack, Switch, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDispatch, useSelector } from "react-redux";
import { handleThemeChange } from "../store/slices/themeSlice";

export default function Navigation() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { themeMode } = useSelector((state) => state.theme);
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
      <Stack direction={"row"} alignItems={"center"}>
        <LightModeIcon />
        <Switch
          checked={themeMode === "dark"}
          onChange={() => dispatch(handleThemeChange())}
        />
        <DarkModeIcon />
      </Stack>
    </Stack>
  );
}
