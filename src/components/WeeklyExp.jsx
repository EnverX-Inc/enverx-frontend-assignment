import { Card, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import WeeklyToggle from "./WeeklyToggle";
import {
  addDays,
  startOfWeek,
  endOfWeek,
  format,
  addWeeks,
  subWeeks,
  isWithinInterval,
} from "date-fns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_TRANSACTIONS } from "../store/actions";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const initialExpenses = {
  Sunday: {
    expenses: 0,
  },
  Monday: {
    expenses: 0,
  },
  Tuesday: {
    expenses: 0,
  },
  Wednesday: {
    expenses: 0,
  },
  Thursday: {
    expenses: 0,
  },

  Friday: {
    expenses: 0,
  },
  Saturday: {
    expenses: 0,
  },
};

const labels = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function WeeklyExp() {
  const { list } = useSelector((state) => state.transactions);
  const theme = useTheme();
  const dispatch = useDispatch();

  const [expenses, setExpenses] = useState(initialExpenses);
  const [startDate, setStartDate] = useState(startOfWeek(new Date()));
  const [endDate, setEndDate] = useState(endOfWeek(new Date()));

  const handlePreviousWeek = () => {
    setStartDate(subWeeks(startDate, 1));
    setEndDate(subWeeks(endDate, 1));
  };

  const handleNextWeek = () => {
    setStartDate(addWeeks(startDate, 1));
    setEndDate(addWeeks(endDate, 1));
  };

  useEffect(() => {
    dispatch({
      type: GET_TRANSACTIONS,
    });
  }, []);

  useEffect(() => {
    setExpenses(initialExpenses);
    list?.map((item) => {
      if (
        isWithinInterval(new Date(item.date), {
          start: startDate,
          end: endDate,
        })
      ) {
        setExpenses((prevState) => ({
          ...prevState,
          [format(new Date(item.date), "EEEE")]: {
            expenses:
              prevState[format(new Date(item.date), "EEEE")].expenses +
              Number(item.amount),
          },
        }));
      }
    });
  }, [list, startDate, endDate]);

  const data = {
    labels,
    datasets: [
      {
        label: "Total Expenses",
        data: labels.map((label) => expenses[label]?.expenses ?? 0),
        backgroundColor: theme.palette.primary.main,
        borderColor: "#fff",
      },
    ],
  };

  const options = {
    indexAxis: "x",
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: function (context) {
            const daysToAdd = context[0].dataIndex;
            const date = addDays(startDate, daysToAdd);
            return `${context[0].label} - ${format(date, "dd/MMMM/yyyy")}`;
          },
        },
      },
    },
  };

  return (
    <Card sx={{ px: 2 }}>
      <Typography variant="subtitle2" my={2}>
        Weekly Statistics
      </Typography>
      <WeeklyToggle
        startDate={startDate}
        endDate={endDate}
        handleNextWeek={handleNextWeek}
        handlePreviousWeek={handlePreviousWeek}
      />
      <Bar data={data} options={options} />
    </Card>
  );
}
