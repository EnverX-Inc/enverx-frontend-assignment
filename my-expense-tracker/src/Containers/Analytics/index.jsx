import { Button, Stack } from "@mui/material";
import Line from "../../Components/Charts/Line";
import Pie from "../../Components/Charts/Pie";
import { array } from "prop-types";
import * as htmlToImage from "html-to-image";
// import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import dayjs from "dayjs";

const Analytics = ({ list }) => {
  const generatePDF = () => {
    htmlToImage
      .toCanvas(document.getElementById("report"))
      .then(function (canvas) {
        const pdf = new jsPDF("l", "mm", "a4");
        const imgData = canvas.toDataURL("image/png");
        const pdfWidth = 300;
        const pdfHeight = 200;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save(`analytics-${dayjs().format("DD-MM-YY")}.pdf`);
      });
  };
  const generateCsv = () => {
    const csv = list.map((item) => {
      return {
        date: dayjs(item.date).format("DD-MM-YY"),
        type: item.type,
        category: item.category,
        amount: item.amount,
        description: item.description,
      };
    });
    const csvFromArrayOfObjects = (data) => {
      const columnDelimiter = ",";
      const lineDelimiter = "\n";
      const keys = Object.keys(data[0]);
      let result = "";
      result += keys.join(columnDelimiter);
      result += lineDelimiter;
      data.forEach((item) => {
        let ctr = 0;
        keys.forEach((key) => {
          if (ctr > 0) result += columnDelimiter;
          result += item[key];
          ctr++;
        });
        result += lineDelimiter;
      });
      return result;
    };
    const data = csvFromArrayOfObjects(csv);
    const blob = new Blob([data], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `analytics-${dayjs().format("DD-MM-YY")}.csv`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Stack direction={"column"} id="report">
        <Pie list={list} />
        <Line list={list} />
      </Stack>
      <Button onClick={generatePDF} type="button">
        Export PDF
      </Button>
      <Button onClick={generateCsv} type="button">
        Export CSV
      </Button>
    </>
  );
};

Analytics.propTypes = {
  list: array.isRequired,
};

export default Analytics;
