import React, { useContext, useEffect } from 'react';
import { Paper, makeStyles, Grid, Typography, Select, MenuItem, InputLabel } from '@material-ui/core';
import { IndividualForm, CompanyForm } from '../components';
import { AppContext } from '../context';


const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(4),
        padding: theme.spacing(0),
        
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
        backgroundColor: theme.palette.primary.light
    },
    label: {
        marginBottom: theme.spacing(1),
        color:'white',
    }, 
    dropDown: {
        width: '200px',
        backgroundColor: theme.palette.secondary.main,
        minHeight: '50px',
        borderRadius: theme.spacing(0.5),
        
    },
    
    
}));




export default () => {
    const classes = useStyles();
    const [state, setState ] = useContext(AppContext);

    return (
        
        <Paper className={classes.root}>
            <Grid container justify="center">
                <Grid item className={classes.heading} md={12} xs={12}>
                    <Typography variant="h6">CLIENT DETAILS</Typography>
                </Grid>
                <Grid item md={12} xs={12} className={classes.body}>
                    <InputLabel id="applicationTypeLabel" className={classes.label}>Application Type</InputLabel>
                    <Select
                        className={classes.dropDown}
                        labelId="applicationTypeLabel"
                        id="applicationType"
                        value={state.applicationType}
                        onChange={e => setState(state => {return {...state, applicationType: e.target.value}})}
                        color="secondary"
                    >
                        <MenuItem value={'individual'}><Typography color="textPrimary" variant="h6" align="center">Individual</Typography></MenuItem>
                        <MenuItem value={'company'}><Typography color="textPrimary" variant="h6" align="center">Company</Typography></MenuItem>
                    </Select>
                </Grid>
                <Grid item md={12} xs={12}>
                    {state.applicationType === "individual" ? <IndividualForm /> : <CompanyForm />}
                </Grid>
            </Grid>
        </Paper>
       
    )
}