import   {useState, useEffect} from 'react';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import AddTransaction from '../AddTransaction/AddTransaction';
import __cloneDeep from 'lodash/cloneDeep'
import { TransactionData } from '../../models';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const columns = [
  { field: 'amount', headerName: 'Amount (Rs)', hideable:false,
  flex: 1,
  // minWidth: 50,
  // width: 130 
},
  { field: 'category', headerName: 'Category', hideable:false,
  flex:1,
  // width: 200,
  
  //  width: 130 
},
  {
    field: 'date',
    headerName: 'Date',
    hideable:false,
    // width: 200,
    flex:1,
    // type: 'string',
    // width: 100,
  },
  {
    field: 'description',
    headerName: 'Description',
    // description: 'This column has a value getter and is not sortable.',
    sortable: false,
    hideable:false,
    flex: 2,
    //  minWidth: 200,
    // width: 160,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];


interface IProps {
  getTransactions: () => void;
  transactionList?: any[];
  hasTransactionListLoaded?: boolean

  addTransaction: Function;
  isAddSuccess?: boolean;
  resetAddTransactionSuccess: () => void;
  isAddFail?: boolean
}

export const  ExpenseListing = (props:IProps) => {

  const {isAddSuccess} = props;

  const [openModal,setOpenModal] = useState(false)
  const [transactionList, setTransactionList] = useState<TransactionData[]>([])
  const [successSnackbar, setSuccessSnackbar] = useState(false)
  const [failureSnackbar, setFailureSnackbar] = useState(false)
  const openAddModal = () =>{
    setOpenModal(true)
  }
  const handleClose = () => {
    setOpenModal(false)
  }
  
  const addTransaction = (transaction:TransactionData) => {
    const transactions = __cloneDeep(transactionList)
    transactions.push(transaction)
    // setTransactionList(transactions)
    props.addTransaction(transaction)
    handleClose()
  }

  useEffect(() => {
    if(props.isAddSuccess === true) 
    {
      setSuccessSnackbar(true)
      props.getTransactions()
      props.resetAddTransactionSuccess()
    }
  },[props.isAddSuccess])

  useEffect(() => {
    if(props.isAddFail===true)
    {
      setFailureSnackbar(true)
    }
  },[props.isAddFail])

  useEffect(() => {
    props.getTransactions()
  },[])

  useEffect(() => {
    if(props.hasTransactionListLoaded && props.transactionList)
    {
      const transactions = __cloneDeep(props.transactionList)
      let newTransactions: TransactionData[] = [];
      transactions.forEach((item) => {
        newTransactions.push(item.transaction)
      });
      setTransactionList(newTransactions)
    }
  },[props.hasTransactionListLoaded, props.transactionList])

  
  const onRefresh = () => {
    props.getTransactions()
  }

  const handleCloseSuccessSnackbar = () => {
    setSuccessSnackbar(false)
  }

  const handleCloseFailureSnackbar = () => {
    setFailureSnackbar(false)
  }

  return (
    <div style={{ padding: '2%'}}>
    <h2 style={{ marginTop: 0 ,textAlign:"center"}}> Expense Manager </h2>
    <Grid style={{ paddingBottom: '1%'}} container spacing ={1}>
      <Grid item xs="auto" >
      <Button  id= 'add-button' variant="contained" size="medium" onClick = {openAddModal}>Add Expense</Button>
      </Grid>
      <Grid item xs="auto" >
      <Button variant="outlined" size="medium" onClick = {onRefresh}>Refresh</Button>
      </Grid>
    </Grid>
    <Grid container spacing ={2}>
      <Grid item xs={12}>
      <DataGrid
        rows={transactionList}
        loading={!props.hasTransactionListLoaded}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        // getRowHeight={() => 'auto'}
        getRowHeight={() => 'auto'}
        sx={{
          [`& .${gridClasses.cell}`]: {
            py: 1,
          },
        }}
        pageSizeOptions={[5, 10]}
        slotProps={{
          toolbar: {
              showQuickFilter: true,
                 quickFilterProps: { debounceMs: 500 },
           },
        }}
        // checkboxSelection
      />
      </Grid>
      </Grid>
      
      <AddTransaction showModal={openModal}
        handleClose = {handleClose}
        addTransaction = {addTransaction}
      />
      {successSnackbar && <Snackbar open={successSnackbar} autoHideDuration={6000} onClose={handleCloseSuccessSnackbar}>
        <Alert onClose={handleCloseSuccessSnackbar} severity="success" sx={{ width: '100%' }}>
          New expense added!
        </Alert>
      </Snackbar>}
      {failureSnackbar && <Snackbar open={failureSnackbar} autoHideDuration={6000} onClose={handleCloseFailureSnackbar}>
        <Alert onClose={handleCloseSuccessSnackbar} severity="error" sx={{ width: '100%' }}>
          Failed to add expense item!
        </Alert>
      </Snackbar>}
    </div>
  );


}