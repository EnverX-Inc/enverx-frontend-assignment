import { getDoc } from "firebase/firestore";
import { summaryRef } from "../../configs/firebase";

export const getSummaryApi = async () => {
  const docSnap = await getDoc(summaryRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    return data;
  }
};
