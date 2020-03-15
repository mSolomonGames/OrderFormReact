import React from 'react';
import { Grid, TextField, makeStyles, InputLabel } from '@material-ui/core';

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

    return (
        <Grid container className={classes.root}>
            <Grid item md={6} className={classes.inputGroup}>
                <InputLabel  id="fullNameLabel" className={classes.label}>Full Name</InputLabel>
                <TextField className={classes.textField} />
            </Grid>
            <Grid item md={6} className={classes.inputGroup}>
                <InputLabel id="idNumberLabel" className={classes.label}>SA ID Number</InputLabel>
                <TextField className={classes.textField} />
            </Grid>
            <Grid item md={6} className={classes.inputGroup}>
                <InputLabel id="telephoneLabel" className={classes.label}>Telephone Number</InputLabel>
                <TextField className={classes.textField} />
            </Grid>
            <Grid item md={6} className={classes.inputGroup}>
                <InputLabel id="cellphoneLabel" className={classes.label}>Cellphone Number</InputLabel>
                <TextField className={classes.textField} />
            </Grid>
            <Grid item md={12} className={classes.inputGroup}>
                <InputLabel id="addressLabel" className={classes.label}>Street Address</InputLabel>
                <TextField  multiline fullWidth />
            </Grid>
            <Grid item md={6} className={classes.inputGroup}>
                <InputLabel id="cityLabel" className={classes.label}>City</InputLabel>
                <TextField className={classes.textField} />
            </Grid>
            <Grid item md={6} className={classes.inputGroup}>
                <InputLabel id="postalLabel" className={classes.label}>Postal Code</InputLabel>
                <TextField className={classes.textField} />
            </Grid>
            <Grid item md={6} className={classes.inputGroup}>
                <InputLabel id="emailLabel" className={classes.label}>Email Address</InputLabel>
                <TextField className={classes.textField} />
            </Grid>
            <Grid item md={6} className={classes.inputGroup}>
                <InputLabel id="referredLabel" className={classes.label}>Referred By</InputLabel>
                <TextField className={classes.textField} />
            </Grid>
        </Grid>
    )
}