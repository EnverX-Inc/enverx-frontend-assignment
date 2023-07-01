import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './components/Onboarding_Scripts/Homepage';
import SignUp,{Action as SignUpAction} from './components/Signing_scripts/SignUp';
import SignIn,{action as SignInAction} from './components/Signing_scripts/SignIn';
import NewAccount,{Action as NewAccountAction} from './components/Account_scripts/AccountNew';
import AccountHome,{loader as AccountHomeLoader} from './components/Account_scripts/AccountHome';
import ExpenseNew,{Action as ExpenseNewAction} from './components/Account_scripts/ExpenseNew';
import IncomeNew,{Action as IncomeNewAction} from './components/Account_scripts/IncomeNew';
import TransferNew from './components/Account_scripts/TransferNew';
import Transaction,{loader as TransactionLoader,action as TransactionAction} from './components/Transaction_scripts/TransactionMain';
import FinanceReportExpense,{loader as FinanceReportExpenseLoader} from './components/Transaction_scripts/FinanceReportExpense';
import FinanceReportIncome,{loader as FinanceReportIncomeLoader} from './components/Transaction_scripts/FinanceReportIncome';
import ExpenseDetails from './components/Transaction_scripts/ExpenseDetail';
import Profile from './components/Profile_scripts/Profile';
import Settings from './components/Profile_scripts/Settings';
import CurrencySettings from './components/Profile_scripts/CurrencySettings';
import LanguageSettings from './components/Profile_scripts/LanguageSettings';
import ThemeSettings from './components/Profile_scripts/ThemeSettings';
import Notification from './components/Account_scripts/Notification';
import AccountOptions from './components/Account_scripts/AccountHomeOptions';
import Chart,{loader as ChartLoader} from './components/Transaction_scripts/Chart';
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom';


const router = createBrowserRouter(createRoutesFromElements(
  <Route>
  <Route path='/' element={<HomePage />} />
  <Route path='/signUp' element={<SignUp />} action={SignUpAction} /> 
  <Route path='/signIn' element={<SignIn />} action={SignInAction}/> 
  <Route path='/newAccount' element={<NewAccount />} action={NewAccountAction} />
  <Route path='/account' element={<AccountOptions />} >

  <Route index element={<AccountHome />} loader={AccountHomeLoader} />
  <Route path='/account/transaction' element={<Transaction/>} loader={TransactionLoader} action={TransactionAction} />
  <Route path='profile' element={<Profile />} />
  <Route path='chart' element={<Chart />} loader={ChartLoader} />

  </Route>

  <Route path='/expenseNew' element={<ExpenseNew />} action={ExpenseNewAction}/>
  <Route path='/incomeNew' element={<IncomeNew />} action={IncomeNewAction} />
  <Route path='/transactionNew' element={<TransferNew />} />
  <Route path='/expenseReport' element={<FinanceReportExpense />} loader={FinanceReportExpenseLoader}/>
  <Route path='/incomeReport' element={<FinanceReportIncome />} loader={FinanceReportIncomeLoader} />
  <Route path='/expensedetail' element={<ExpenseDetails />} />
  <Route path='/settings' element={<Settings />} />
  <Route path='/currencySettings' element={<CurrencySettings />} />
  <Route path='/languageSettings' element={<LanguageSettings />} />
  <Route path='/themeSettings' element={<ThemeSettings />} />
  <Route path='/notification' element={<Notification />} />
  
  
  

  </Route>
    
))

function App() {
  return (
    <RouterProvider router={router} />
  )   
}

 

ReactDOM.createRoot(document.getElementById("root")).render(<App />) 

