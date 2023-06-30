import BudgetExpenseForm from "../../Components/BudgetExpenseForm";
import { func } from "prop-types";

const AddBudgetExpenseForm = ({ handleAdd }) => {
  const initialValues = {
    title: "",
    description: "",
    amount: 0,
    category: "salary",
    date: new Date(),
    type: "income",
  };

  const handleSubmit = (values) => {
    handleAdd(values);
  };

  return (
    <>
      <h2>Add Transaction</h2>
      <BudgetExpenseForm
        initialValues={initialValues}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

AddBudgetExpenseForm.propTypes = {
  handleAdd: func.isRequired,
};

export default AddBudgetExpenseForm;
