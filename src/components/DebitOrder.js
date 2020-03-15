import React from 'react';
import { Paper,Grid, makeStyles, Typography } from '@material-ui/core';
//import Mandate from "./Mandate";
import { DebitOrderInstruction, Mandate } from '.';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(4),
        padding: theme.spacing(0)
    },
    headingBanner: {
        background: theme.palette.primary.main,
        padding: theme.spacing(1),
        color: 'white'
    },
    body: {
        marginBottom: theme.spacing(2),
    }
}));

export default () => {
    const classes = useStyles();
    const bank = "First National Bank";
    const branchCode = "123456";
    const accountType = "Cheque";
    const accountNumber = "12345678909876";
    const accountName = "Crisp Fibre Ltd";

    return (
        <Grid container className={classes.root}>
            <Grid item md={12} xs={12} className={classes.body}>
                <Typography className={classes.headingBanner} align="center" variant="h4" >BANK DEBIT ORDER INSTRUCTION / CREDIT CARD AUTHORITY</Typography>
            </Grid>
            <Grid item md={12} xs={12}>
                <DebitOrderInstruction />
            </Grid>
            <Grid item md={12}  xs={12}>
                <Mandate />
            </Grid>
            
        </Grid>
    )
}