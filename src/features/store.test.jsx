import { configureStore } from "@reduxjs/toolkit";
import expensesReducer, {
  addExpenseToFirestore as addExpense,
  deleteExpense as removeExpense,
} from "./expensesSlice";
import store from "./store";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/firestore";
import { MockFirebaseFirestore } from "firebase-mock";

describe("store", () => {
  it("should contain expensesReducer", () => {
    const appStore = configureStore({
      reducer: {
        expenses: expensesReducer,
      },
    });

    expect(store.getState()).toStrictEqual(appStore.getState());
  });
});

describe.skip("ExpenseMain component", () => {
  let store;
  let firestore;

  beforeEach(() => {
    // Create a mock Firestore instance
    const mockFirestore = MockFirebaseFirestore();
    let firestore = mockFirestore.firestore();

    // Initialize the mock Firebase app
    const firebaseApp = firebase.initializeApp({
      projectId: "your-project-id",
    });
    firebaseApp.firestore = () => firestore;

    // Create the Redux store with the mock Firestore
    store = configureStore({
      reducer: {
        expenses: expensesReducer,
      },
    });
  });

  afterEach(() => {
    // Reset the mock Firestore and Firebase app after each test
    firebase.firestore().terminate();
    firebase.apps = [];
  });

  it("renders ExpenseMain component correctly", async () => {
    // Add a mock expense to Firestore before rendering the component
    await firestore.collection("expenses").add({
      id: 1,
      description: "Test expense",
      amount: 10,
    });

    render(
      <Provider store={store}>
        <ExpenseMain />
      </Provider>
    );

    // Wait for the Firestore data to be loaded
    await store.dispatch(getExpenses());

    expect(screen.getByText("Expenses Tracker")).toBeInTheDocument();
    // Add more assertions as needed
  });
});
