import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText'
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup'
import TextField from '@mui/material/TextField'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import { v4 as uuidv4 } from 'uuid';
import React,{useEffect, useState} from 'react';
import { TransactionData } from '../../models';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



  const categories = [
    'Groceries',
    'Food',
    'Health',
    'Transportation',
    'Apparel',
    'Entertainment',
    'Other'
  ]
  interface IProps {
    showModal: boolean;
    handleClose: Function;
    addTransaction: (transaction:TransactionData) => void;
  }
  
  export default function AddTransaction(props:IProps) {

    const [amount,setAmount] = useState<number | null>(null)
    const [isAmountError, setIsAmountError] = useState(false)
    const [category, setCategory] = useState('');
    const [isCategoryError, setIsCategoryError] = useState(false)
    const [description, setDescription] = useState('')
    const [isDescriptionError, setIsDescriptionError] = useState(false)


    const addTransaction = () => {
        const id = uuidv4()
        if(amount!==0 && category!=='' && description!=='' && !isAmountError && !isCategoryError)
        {
          let date = new Date()
      
        const transaction = {
            id: id,
            amount: amount,
            category: category,
            description: description,
            date: date.toISOString().split('T')[0]
        }
    
        setAmount(null)
        setCategory('')
        setDescription('')
        props.addTransaction(transaction)
    }
    else
    {
    if(category === '')
    {
        setIsCategoryError(true)
    }
    if(description === '')
    {
        setIsDescriptionError(true)
    }
    if(!amount) 
    {
      setIsAmountError(true)
    }
    }

    }
    const handleAmount = (event : any) => {
        if(event.target.value && !isNaN(parseFloat(event.target.value)) && isFinite(event.target.value))
        {
            setAmount(event.target.value)
            setIsAmountError(false)
        }
        else
        {
            setIsAmountError(true)
            setAmount(null)
        }
    }

    const handleDescription = (e:any) => {
        if(e.target.value)
        {
            setDescription(e.target.value)
            setIsDescriptionError(false)
        }
        else
        setDescription('')
    }

    const handleCategory = (e:SelectChangeEvent) => {
        if(e.target.value)
        {
            setCategory(e.target.value as string)
            setIsCategoryError(false)
        }
        else
        setCategory('')
    }

    const onCloseClick = () => {
        setIsAmountError(false)
        setIsCategoryError(false)
        setIsDescriptionError(false)
        setAmount(null)
        setCategory('')
        setDescription('')
        props.handleClose()
    }
  
    useEffect(() => {
        setAmount(null)
        setCategory('')
        setDescription('')
    },[])
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
        <Modal
          open={props.showModal}
          onClose={onCloseClick}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h2 style={{marginTop:'0'}}>Add your expense</h2>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
          {/* <Item> */}
            <FormControl fullWidth>
            <FormGroup>
                <TextField
          required
          error={isAmountError}
          id={isAmountError ? "outlined-error" :"outlined-required"}
          inputProps={{ "data-testid": "amount-input" }}
          label="Amount (Rs)"
          value={amount}
          onChange={handleAmount}
          helperText={isAmountError ? "Please enter amount in digits only" : "Enter valid amount in digits"}
        //   defaultValue="Hello World"
        />
                {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                </FormGroup>
            </FormControl>

            </Grid>
            <Grid item xs={6} md={8}>
            <FormControl fullWidth required error = {isCategoryError}>
            <FormGroup>
               <InputLabel   id={isCategoryError ? "demo-simple-select-error-label" : "demo-simple-select-label"}>Category</InputLabel>
               <Select
               labelId={isCategoryError ? "demo-simple-select-error-label" : "demo-simple-select-label"}
              id={isCategoryError ? "demo-simple-select-error" : "demo-simple-select"}
              inputProps={{ "data-testid": "select-input" }}
              value={category}
              label="Category"
              onChange={handleCategory}
              error={isCategoryError}
              required
                >
                  {categories.map((item) => (
                    <MenuItem key={item} value={item}>{item}</MenuItem>
                  ))}
        </Select>
        <FormHelperText>`{isCategoryError ? 'Please Select Category' : 'Select Category'} `</FormHelperText>
                {/* <FormHelperText id="my-helper-text1">We'll never share your email.</FormHelperText> */}
                </FormGroup>
            </FormControl>
            {/* </Item> */}
            </Grid>
            <Grid item xs={6} md={8}>
          {/* <Item> */}
            <FormControl fullWidth>
            <FormGroup>
                {/* <InputLabel htmlFor="my-input">Description</InputLabel>
               <Input id="my-input" aria-describedby="my-helper-text" /> */}
               <TextField
               error={isDescriptionError}
               required
               multiline
               maxRows={4}
              //  variant="standard"
               id={isDescriptionError ? "outlined-error outlined-textarea" : "outlined-required outlined-textarea"}
               inputProps={{ "data-testid": "desc-input" }}
               label="Description"
               value={description}
               onChange={handleDescription}
               helperText={isDescriptionError ? "Please enter description" : "Enter valid Description"}
               />
                </FormGroup>
            </FormControl>
            
            
            <Grid style={{ paddingBottom: '1%', paddingTop:'5%'}} container spacing ={1}>
              <Grid item xs="auto" >
              <Button data-testid="add-button" variant="contained" size="medium" onClick = {addTransaction} >Add</Button>
              </Grid>
              <Grid item xs="auto" >
              <Button variant="outlined" size="medium" onClick={onCloseClick}>Cancel</Button>
             </Grid>
            </Grid>
            
            </Grid>
            </Grid>
            
          </Box>
        </Modal>
        </Grid>
        </Grid>
      </div>
    );
  }