import Container from "@mui/material/Container";
import Header from "./Header";
import BudgetAndExpense from "../BudgetAndExpense";

const View = () => {
  return (
    <>
      <Container
        maxWidth="sm"
        justifyContent="space-between"
        style={{
          backgroundColor: "whitesmoke",
          marginBottom: "30px",
          marginTop: "50px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px #E7B10A",
        }}
      >
        <Header />
      </Container>
      <Container
        maxWidth="sm"
        style={{
          backgroundColor: "whitesmoke",
          marginTop: "50px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px #E7B10A",
        }}
      >
        <BudgetAndExpense />
      </Container>
    </>
  );
};

export default View;
