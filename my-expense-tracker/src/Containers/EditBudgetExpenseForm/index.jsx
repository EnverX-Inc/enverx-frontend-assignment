import BudgetExpenseForm from "../../Components/BudgetExpenseForm";
import { shape, func, string, number } from "prop-types";

const EditBudgetExpenseForm = ({ item, handleEdit }) => {
  const initialValues = {
    id: item.id,
    title: item.title,
    description: item.description,
    amount: item.amount,
    category: item.category,
    date: item.date,
    type: item.type,
  };

  const handleSubmit = (values) => {
    handleEdit(values);
  };

  return (
    <>
      <h2>Edit Transaction</h2>
      <BudgetExpenseForm
        initialValues={initialValues}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

EditBudgetExpenseForm.propTypes = {
  item: shape({
    id: string,
    title: string,
    description: string,
    amount: number,
    category: string,
    type: string,
  }),
  handleEdit: func.isRequired,
};

export default EditBudgetExpenseForm;
