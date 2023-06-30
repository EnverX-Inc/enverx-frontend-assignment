import { firestore } from "./firebase";

// Fetch budget expenses API caller
export const fetchBudgetExpenses = (filter) => {
  let query = firestore.collection("budgetExpenses");
  if (filter.category !== "all") {
    query = query.where("category", "==", filter.category);
  }
  if (filter.q !== "") {
    query = query
      .where("title", ">=", filter.q)
      .where("title", "<=", filter.q + "\uf8ff");
  }

  return query.get();
};

// Create budget expense API caller
export const createBudgetExpense = (item) => {
  return firestore.collection("budgetExpenses").add(item);
};

// Delete budget expense API caller
export const deleteBudgetExpense = (id) => {
  return firestore.collection("budgetExpenses").doc(id).delete();
};

// Update budget expense API caller
export const updateBudgetExpense = (id, item) => {
  return firestore.collection("budgetExpenses").doc(id).update(item);
};
