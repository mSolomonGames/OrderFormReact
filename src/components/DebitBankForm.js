import React,{useContext, useEffect, useState}from 'react';
import { Grid, TextField, makeStyles, InputLabel, Typography } from '@material-ui/core';
import { AppContext } from '../context';

const useStyles = makeStyles(theme => ({
    root: {        
        padding: theme.spacing(0),
        paddingLeft: theme.spacing(0),
        marginBottom: theme.spacing(4),
        //paddingTop: theme.spacing(0),
        //padding: `0 ${theme.spacing(4)}px ${theme.spacing(4)}px ${theme.spacing(4)}px`,
    },
    label: {
        marginBottom: theme.spacing(1),
        color: 'black',
        //marginLeft: theme.spacing(14),
    },
    textField: {
        margin: "0 40px 0 0",
        width: theme.spacing(40),
        maxWidth: "90%",
        
    },
    inputGroup: {
        marginTop: theme.spacing(2),
        
    },
    leftAlign:{
        //background: "#000",
        //alignSelf: "flex-start",
    },
    headingBanner: {
        background: theme.palette.primary.main,
        padding: theme.spacing(1),
        color: 'white',
        marginBottom: theme.spacing(3),
    },
}));

export default () => {
    const classes = useStyles();
    const [state, setState ] = useContext(AppContext);

    const [bank,setBank] = useState('');
    const [branch,setBranch] = useState('');
    const [branchCode,setBranchCode] = useState('');
    const [accountName,setAccountName] = useState('');
    const [accountNumber,setAccountNumber] = useState('');
    const [accountType,setAccountType] = useState('');
    
    

    useEffect(() => {        
        setState(state => ({ ...state, bank:  bank}));
        setState(state => ({ ...state, branch:  branch}));
        setState(state => ({...state, branchCode: branchCode}));
        setState(state => ({...state, accountName: accountName}));
        setState(state => ({...state, accountType: accountType}));
        setState(state => ({...state, accountNumber: accountNumber}));
        
      }, [bank,branch, branchCode, accountName, accountNumber,accountType],
        
      );

    return (
        <Grid container className={classes.root} alignItems="center" justify="center">
            

            <Grid item md={12} xs={12} className={classes.headingBanner}>
                <Typography align="center" variant="h4">Bank Details</Typography>
            </Grid>
            <Grid item md={10} xs={10}>
                
                <Grid container justify="flex-start">
                    <Grid item md={6} xs={10} className={classes.inputGroup}>
                        <InputLabel  id="bankLabel"  className={classes.label}>Bank</InputLabel>
                        <TextField onChange={e => setBranch(e.target.value)}  value={bank} className={classes.textField}  />
                    </Grid>
                    <Grid item md={6} xs={10} className={classes.inputGroup}>
                        <InputLabel  id="branchLabel"  className={classes.label}>Branch</InputLabel>
                        <TextField onChange={e => setBranch(e.target.value)}  value={branch} className={classes.textField}  />
                    </Grid>
                    <Grid item md={6} xs={10} className={classes.inputGroup}>
                        <InputLabel id="branchCodeLabel"  className={classes.label}>Branch Code</InputLabel>
                        <TextField onChange={e => setBranchCode(e.target.value)}  value={branchCode} className={classes.textField} />
                    </Grid>
                    <Grid item md={6} xs={10} className={classes.inputGroup}>
                        <InputLabel id="accountNameLabel"className={classes.label}>Account Name</InputLabel>
                        <TextField onChange={e => setAccountName(e.target.value)}  value={accountName} className={classes.textField} />
                    </Grid>
                    <Grid item md={6} xs={10} className={classes.inputGroup}>
                        <InputLabel id="accountNumberLabel" className={classes.label}>Account Number</InputLabel>
                        <TextField onChange={e => setAccountNumber(e.target.value)}  value={accountNumber} className={classes.textField} />
                    </Grid>
                    <Grid item  md={6} xs={10}className={classes.inputGroup} >
                        <InputLabel id="accountTypeLabel"  className={classes.label}>Account Type</InputLabel>
                        <TextField onChange={e => setAccountType(e.target.value)}  value={accountType}  className={classes.textField} />
                    </Grid>

                </Grid>
            </Grid>
            
            
        </Grid>
    )
}