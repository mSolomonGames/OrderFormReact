import React, { useContext } from 'react';
import { Paper, makeStyles, Grid, Typography, Select, MenuItem, InputLabel } from '@material-ui/core';
import { IndividualForm, CompanyForm, BankDetails, DebitOrder } from '../components';
import { AppContext } from '../context';
import {Mandate} from '../components';
import moment from 'moment';


const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(4),
        //paddingLeft: theme.spacing(6), 
        
    },
    heading: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(2)
    },
    body: {
        padding: theme.spacing(4),
        textAlign: 'left',
        backgroundColor: theme.palette.primary.light,
        
        [theme.breakpoints.down("sm")]:{
            
            //paddingLeft: theme.spacing(30), //trying to center 
        },
        
    },
    label: {
        marginBottom: theme.spacing(1),
        //paddingLeft: theme.spa
    }, 
    dropDown: {
        width: theme.spacing(30),
        backgroundColor: theme.palette.secondary.main,
        minHeight: '50px',
        
    }
}));



export default () => {
    const classes = useStyles();
    const [state, setState ] = useContext(AppContext);

    return (
        
        <Paper className={classes.root}>
            <Grid container justify="center">
                <Grid item className={classes.heading} xs={12} md={12}>
                    <Typography variant="h6">PAYMENT DETAILS</Typography>
                </Grid>                
                <Grid item xs={12} sm={12} md={state.paymentType === "debit" ? 8 : 12} className={classes.body}>
                    <InputLabel id="paymentTypeLabel" className={classes.label}>Payment Type</InputLabel>
                    <Select
                        className={classes.dropDown}
                        labelId="paymentTypeLabel"
                        id="paymentType"
                        value={state.paymentType}
                        onChange={e => setState(state => {return {...state, paymentType: e.target.value}})}
                        color="primary"
                    >
                        <MenuItem value={'eft'}><Typography color="textPrimary" variant="h6" align="center">EFT</Typography></MenuItem>
                        <MenuItem value={'debit'}><Typography color="textPrimary" variant="h6" align="center">Debit</Typography></MenuItem>
                    </Select>
                </Grid>
                {state.paymentType === "debit" ? (
                    <Grid item xs={12} sm={12} md={4} className={classes.body}>
                    
                    <InputLabel id="payDateLabel" className={classes.label}>Payment Date</InputLabel>
                    <Select
                        className={classes.dropDown}
                        labelId="payDateLabel"
                        id="payDate"
                        value={state.payDate}
                        onChange={e => setState(state => {return {...state, payDate: e.target.value}})}
                        color="primary"
                    >
                        <MenuItem value={moment().add('months', 1).date(1).format('LL')}><Typography color="textPrimary" variant="subtitle1" align="center">1st of Every Month</Typography></MenuItem>
                        <MenuItem value={moment().add('months', 1).date(15).format('LL')}><Typography color="textPrimary" variant="subtitle1" align="center">15th of Every Month</Typography></MenuItem>
                        <MenuItem value={moment().add('months', 2).date(1).subtract('days', 1).format('LL')}><Typography color="textPrimary" variant="subtitle1" align="center">31st of Every Month</Typography></MenuItem>
                    </Select>
                </Grid>) : <></>}
                
                
                <Grid item xs={12}>
                    {state.paymentType === "eft" ? <BankDetails /> : <DebitOrder />}
                </Grid>
                
            </Grid>
        </Paper>
       
    )
}