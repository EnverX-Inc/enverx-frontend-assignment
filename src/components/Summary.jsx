import { Box, Card, Stack, Typography } from "@mui/material";
import { isThisMonth } from "date-fns";
import { getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { summaryRef } from "../configs/firebase";
import { GET_SUMMARY_REQUEST } from "../store/actions";
import SummaryCard from "./common/SummaryCard";

export default function Summary() {
  const dispatch = useDispatch();
  const { income } = useSelector((state) => state.summary);

  const { list } = useSelector((state) => state.transactions);

  const [totalExp, setTotalExp] = useState(0);
  const [categories, setCategories] = useState([]);
  //this month expenses
  useEffect(() => {
    let amt = 0;
    list.forEach((item) => {
      const givenDate = new Date(item.date); // Replace this with your given date

      if (isThisMonth(givenDate)) {
        amt += Number(item.amount);
      }
    });

    setTotalExp(amt);
  }, [list]);

  useEffect(() => {
    dispatch({ type: GET_SUMMARY_REQUEST });
  }, []);

  const updatedArr = [];

  list.forEach((item) => {
    if (!updatedArr.includes(item.category)) {
      updatedArr.push(item.category);
    }
  });

  useEffect(() => {
    setCategories(updatedArr);
  }, [list]);

  return (
    <Stack direction={"row"} mt={2} gap={4} flexWrap={"wrap"}>
      <SummaryCard title={"INCOME"} description={`₹ ${income}`} />
      <SummaryCard
        title={"EXPENSES(this month)"}
        description={`₹ ${totalExp}`}
      />
      <SummaryCard title={"CATEGORIES"} categories={categories} />
    </Stack>
  );
}
