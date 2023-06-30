import { Box, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CategoryRatio from "../components/CategoryRatio";
import WeeklyExp from "../components/WeeklyExp";

export default function Analytics() {
  const { list } = useSelector((state) => state.transactions);
  const dispatch = useDispatch();
  return (
    <Box mt={2}>
      <Typography variant="h4" mb={1}>
        Analytics
      </Typography>
      <WeeklyExp />
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={6}>
          <CategoryRatio list={list} dispatch={dispatch} />
        </Grid>
        <Grid item xs={12} md={6}>
          <></>
        </Grid>
      </Grid>
    </Box>
  );
}
