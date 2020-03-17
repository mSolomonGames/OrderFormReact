import React,{useContext,useState,useEffect} from 'react';
import { Grid, TextField, makeStyles, InputLabel , Typography} from '@material-ui/core';
import { AppContext } from '../context';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(4),
        //padding: `0 ${theme.spacing(10)}px ${theme.spacing(10)}px ${theme.spacing(10)}px`,
    },
    label: {
        marginBottom: theme.spacing(1),
        color: 'black',
    },
    textField: {
        margin: `0 ${theme.spacing(4)}px 0 0`,
        width: theme.spacing(50),
        maxWidth: '90%',
        
    },
    inputGroup: {
        marginTop: theme.spacing(2),
        
    }
}));

export default () => {
    const classes = useStyles();
    const [state, setState ] = useContext(AppContext);

    const [debtor_name,setName] = useState('');
    const [debtor_name_register_bank,setNameRegisterBank] = useState('');
    const [debtor_address,setAddress] = useState('');
    const [debtor_cont_num,setContactNum] = useState('');
    const [debtor_amount,setAmount] = useState('');

    useEffect(() => {        
        setState(state => ({ ...state, debtor_name:  debtor_name}));
        setState(state => ({...state, debtor_name_register_bank: debtor_name_register_bank}));
        setState(state => ({...state, debtor_address: debtor_address}));
        setState(state => ({...state, debtor_cont_num: debtor_cont_num}));
        setState(state => ({...state, debtor_amount: debtor_amount}));
        
      }, [debtor_name, debtor_name_register_bank, debtor_address, debtor_cont_num, debtor_amount ],
        
      );

    return (
        <Grid container className={classes.root} justify="center">
            <Grid item md={5} sm={10} xs={10} className={classes.inputGroup}>
                <InputLabel  id="debtNameLabel" className={classes.label}>Name (Debtor)</InputLabel>
                <TextField onChange={e => setName(e.target.value)}  value={debtor_name} className={classes.textField} />
            </Grid>
            <Grid item md={5}  xs={10} className={classes.inputGroup}>
                <InputLabel id="debtNameBankLabel" className={classes.label}>Abbreviated name as registered with bank</InputLabel>
                <TextField onChange={e => setNameRegisterBank(e.target.value)}  value={debtor_name_register_bank}className={classes.textField} />
            </Grid>
            <Grid item md={5}  xs={10} className={classes.inputGroup}>
                <InputLabel id="addressLabel" className={classes.label}>Address</InputLabel>
                <TextField onChange={e => setAddress(e.target.value)}  value={debtor_address}multiline  className={classes.textField} />
            </Grid>
            <Grid item md={5}  xs={10} className={classes.inputGroup}>
                <InputLabel id="contactNumLabel" className={classes.label}>Contact Number</InputLabel>
                <TextField onChange={e => setContactNum(e.target.value)}  value={debtor_cont_num} className={classes.textField} />
            </Grid>
            <Grid item md={5}  xs={10} className={classes.inputGroup}>
                <InputLabel id="debitAmountLabel" className={classes.label}>Debit Amount</InputLabel>
                <TextField />
            </Grid>
            <Grid item md={5}  xs={10} className={classes.inputGroup}>
                <Typography variant="h6">Debit Order Date: {state.payDate}</Typography>
            </Grid>
           
        </Grid>
    )
}