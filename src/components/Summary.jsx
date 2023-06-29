import { Box, Card, Stack, Typography } from "@mui/material";
import { getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { summaryRef } from "../configs/firebase";
import { GET_SUMMARY_REQUEST } from "../store/actions";
import SummaryCard from "./common/SummaryCard";

export default function Summary() {
  const dispatch = useDispatch();
  const { income, expenses, categories } = useSelector(
    (state) => state.summary
  );

  // const getSummaryApi = async () => {
  //   const docSnap = await getDoc(summaryRef);
  //   if (docSnap.exists()) {
  //     const data = docSnap.data();
  //     console.log(data);
  //   }
  // };

  useEffect(() => {
    dispatch({ type: GET_SUMMARY_REQUEST });
  }, []);

  return (
    <Stack direction={"row"} mt={2} gap={4}>
      <SummaryCard title={"INCOME"} description={`₹ ${income}`} />
      <SummaryCard title={"EXPENSES"} description={`₹ ${expenses}`} />
      <SummaryCard title={"CATEGORIES"} description={"Something different"} />
    </Stack>
  );
}
