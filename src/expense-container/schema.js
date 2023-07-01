function isNumeric(num) {
  if (isNaN(num)) return true;
  else return false;
}

function isValid(sym) {
  if (["+", "-"].includes(sym)) return false;
  else return true;
};

export const validationSchema = (values) => {
  const { amount, category, desc} = values;
  const errors = {};
  if (!amount) errors.amount = 'Amount is required';
  if (amount && isValid(amount.slice(0,1))) errors.amount = 'Use + for Income and - for Expenses(+200/-200)';
  if (amount && isNumeric(Number(amount.slice(1)))) errors.amount = 'Amount can not be string';
  if (!category) errors.category = 'Category is required';
  if (!desc) errors.desc = 'Description is required';
  return errors;
}