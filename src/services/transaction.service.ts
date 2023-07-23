import axios from 'axios'
import { TransactionData } from '../models'
import { collection, getDocs , addDoc} from "firebase/firestore";
import rsf, {db} from '../firebase';

export const TransactionService = {

    getTransactionList:  () => {
        // return axios.get('https://jsonplaceholder.typicode.com/posts')
        return  getDocs(collection(db, "transactions"))
        .then((querySnapshot)=>{               
            const responseData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
                return responseData
            // setTodos(newData);                
            // console.log(todos, newData);
        })
    },
    addTransaction: async (transaction:TransactionData) => {
        console.log('in Post API',transaction)
         return addDoc(collection(db, "transactions"), {
            transaction: transaction,    
          })
          .then((res) => {
            console.log('res in service post ',res)
          return res
          });
          
    }
    // addTransaction: async (transaction:TransactionData) => {
    //     console.log('in Post API',transaction)
    //      return rsf.firestore.addDocument(collection(db, "transactions"), {
    //         transaction: transaction,    
    //       })
    //     //   .then((res) => {
    //     //     console.log('res in service post ',res)
    //     //   return res
    //     //   });
          
    // }
    // addTransaction: async (transaction:TransactionData) => {
    //     console.log('in Post API',transaction)
    //      return await addDoc(collection(db, "transactions"), {
    //         transaction: transaction,    
    //       })
    //     //   .then((res) => {
    //     //     console.log('res in service post ',res)
    //     //   return res
    //     //   });
          
    // }
}