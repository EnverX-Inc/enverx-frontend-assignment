import { Box, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CategoryRatio({ list, dispatch }) {
  const [categories, setCategories] = useState({});

  const handleChartData = () => {
    return {
      labelsArr: Object.keys(categories),
      dataArr: Object.values(categories),
    };
  };

  let data = {
    labels: handleChartData().labelsArr,
    datasets: [
      {
        label: "Total Expenses",
        data: handleChartData().dataArr,
        backgroundColor: generateRandomColors(Object.keys(categories)?.length)
          .backgroundColor,
        //borderColor: generateRandomColors(this.labels.length).borderColor,
        borderWidth: 1,
      },
    ],
  };

  const updatedCategories = {};

  list.forEach((item) => {
    if (!updatedCategories.hasOwnProperty(item.category)) {
      updatedCategories[item.category] = 0;
    }
    updatedCategories[item.category] += Number(item.amount);
  });

  useEffect(() => {
    setCategories(updatedCategories);
  }, [list]);

  return (
    <Card sx={{ p: 2 }}>
      <Typography variant="subtitle2" my={2}>
        Category Ratio
      </Typography>
      <Box display="flex" justifyContent="center">
        <div
          style={{
            height: "300px",
            width: "300px",
          }}
        >
          <Pie data={data} />
        </div>
      </Box>
    </Card>
  );
}

function generateRandomColors(length) {
  const backgroundColor = [];
  const borderColor = [];

  for (let i = 0; i < length; i++) {
    const red = Math.floor(Math.random() * 128 + 128);
    const green = Math.floor(Math.random() * 128 + 128);
    const blue = Math.floor(Math.random() * 128 + 128);
    const alpha = Math.random().toFixed(1);

    const rgbaBackgroundColor = `rgba(${red}, ${green}, ${blue}, 0.8)`;
    const rgbaBorderColor = `rgba(${red}, ${green}, ${blue}, 1)`;

    backgroundColor.push(rgbaBackgroundColor);
    borderColor.push(rgbaBorderColor);
  }

  return { backgroundColor, borderColor };
}
