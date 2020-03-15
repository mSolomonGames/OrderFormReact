import React from 'react';
import { Paper,Grid, makeStyles, Typography } from '@material-ui/core';

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
        <Grid container className={classes.root} justify="center">
            <Grid item md={12} xs={12} className={classes.body}>
                <Typography className={classes.headingBanner} align="center" variant="h4" >OUR BANKING DETAILS</Typography>
            </Grid>
            <Grid item md={12} xs={10}>
                <Typography align="center" variant="h5" color="textPrimary">Account Holder: {accountName}</Typography>
            </Grid>
            <Grid item md={12} xs={10}>
                <Typography align="center" variant="h5" color="textPrimary">Bank: {bank}</Typography>
            </Grid>
            <Grid item md={12} xs={10}>
                <Typography align="center" variant="h5" color="textPrimary">Branch Code: {branchCode}</Typography>
            </Grid>
            
                
                
            <Grid item md={12}>
                <Typography align="center" variant="h5" color="textPrimary">Acount Type: {accountType}</Typography>
            </Grid>
            <Grid item md={12}>
                <Typography align="center" variant="h5" color="textPrimary">Account Number: {accountNumber}</Typography>
            </Grid>
            
        </Grid>
    )
}