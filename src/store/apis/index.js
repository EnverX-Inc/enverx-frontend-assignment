import { getDoc, setDoc, updateDoc } from "firebase/firestore";
import { summaryRef, transactionRef } from "../../configs/firebase";

export const getSummaryApi = async () => {
  const docSnap = await getDoc(summaryRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    return data;
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
