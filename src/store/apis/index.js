import { getDoc, setDoc, updateDoc } from "firebase/firestore";
import { summaryRef, transactionRef } from "../../configs/firebase";

export const getSummaryApi = async () => {
  const docSnap = await getDoc(summaryRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    return data;
  }
};

export const editIncomeApi = async (newIncome) => {
  const docSnap = await getDoc(summaryRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    const updatedDoc = {
      ...data,
      income: newIncome,
    };

    await updateDoc(summaryRef, updatedDoc);
  }
};

export const getTransactionsApi = async () => {
  const docSnap = await getDoc(transactionRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    return data;
  }
};

export const addTransactionApi = async (payload) => {
  const docSnap = await getDoc(transactionRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    const newList = [...data.transactions, payload];
    await updateDoc(transactionRef, {
      transactions: newList,
    });
  }
};

export const editTransactionApi = async (payload) => {
  const { id } = payload;
  const docSnap = await getDoc(transactionRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    const updatedList = data.transactions.map((item) => {
      if (item.id === id) {
        //replace existing object with the new updated payload
        item = payload;
        return item;
      } else {
        return item;
      }
    });

    await updateDoc(transactionRef, {
      transactions: updatedList,
    });
  }
};

export const deleteTransactionApi = async (id) => {
  const docSnap = await getDoc(transactionRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    const updatedList = data.transactions.filter((item) => {
      return item.id !== id;
    });
    await updateDoc(transactionRef, {
      transactions: updatedList,
    });
  }
};
