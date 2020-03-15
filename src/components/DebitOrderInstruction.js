import React,{useContext} from 'react';
import { Grid, TextField, makeStyles, InputLabel , Typography} from '@material-ui/core';
import { AppContext } from '../context';

const useStyles = makeStyles(theme => ({
    root: {
        
        padding: `0 ${theme.spacing(4)}px ${theme.spacing(4)}px ${theme.spacing(4)}px`,
    },
    label: {
        marginBottom: theme.spacing(1),
        color: 'black',
    },
    textField: {
        margin: "0 40px 0 0",
        width: "400px",
        
    },
    inputGroup: {
        marginTop: theme.spacing(2),
        
    }
}));

export default () => {
    const classes = useStyles();
    const [state, setState ] = useContext(AppContext);

    return (
        <Grid container className={classes.root} justify="center">
            <Grid item md={6} xs={10} className={classes.inputGroup}>
                <InputLabel  id="fullNameLabel" className={classes.label}>Name (Debtor)</InputLabel>
                <TextField className={classes.textField} />
            </Grid>
            <Grid item md={6}  xs={10} className={classes.inputGroup}>
                <InputLabel id="idNumberLabel" className={classes.label}>Abbreviated name as registered with bank</InputLabel>
                <TextField className={classes.textField} />
            </Grid>
            <Grid item md={6}  xs={10} className={classes.inputGroup}>
                <InputLabel id="telephoneLabel" className={classes.label}>Adress</InputLabel>
                <TextField multiline fullWidth className={classes.textField} />
            </Grid>
            <Grid item md={6}  xs={10} className={classes.inputGroup}>
                <InputLabel id="cellphoneLabel" className={classes.label}>Contact Number</InputLabel>
                <TextField className={classes.textField} />
            </Grid>
            <Grid item md={12}  xs={10} className={classes.inputGroup}>
                <InputLabel id="addressLabel" className={classes.label}>Debit Amount</InputLabel>
                <TextField />
            </Grid>
            <Grid item md={6}  xs={10} className={classes.inputGroup}>
                <Typography variant="h6">Debit Order Date: {state.payDate}</Typography>
            </Grid>
           
        </Grid>
    )
}