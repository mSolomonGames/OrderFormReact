import React, { useContext } from 'react';
import { Paper, makeStyles, Grid, Typography, Select, MenuItem, InputLabel } from '@material-ui/core';
import { IndividualForm, CompanyForm, WirelessPackages } from '../components';
import { AppContext } from '../context';
import FibrePackages from './FibrePackages';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(4),
        
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
    },
    label: {
        marginBottom: theme.spacing(1)
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
            <Grid container>
                <Grid item className={classes.heading} md={12} xs={12}>
                    <Typography variant="h6">CONNECTION DETAILS</Typography>
                </Grid>
                <Grid item md={7} xs={12} md={12} className={classes.body}>
                    <InputLabel id="connectionTypeLabel" className={classes.label}>Connection Type</InputLabel>
                    <Select
                        className={classes.dropDown}
                        labelId="connectionTypeLabel"
                        id="connectionType"
                        value={state.connectionType}
                        onChange={e => setState(state => {return {...state, connectionType: e.target.value}})}
                        color="primary"
                    >
                        <MenuItem value={'fibre'}><Typography color="textPrimary" variant="h6" align="center">Fibre</Typography></MenuItem>
                        <MenuItem value={'wireless'}><Typography color="textPrimary" variant="h6" align="center">Wireless</Typography></MenuItem>
                    </Select>
                </Grid>
                {/* <Grid item md={5} xs={12} className={classes.body}>
                    <Typography align="center" variant="h5" color="textPrimary">
                        {state.applicationType === 'individual' ? "INDIVIDUAL" : "BUSINESS"} {state.connectionType === "fibre" ? "FIBRE" : "WIRELESS"} PACKAGES</Typography>
                </Grid> */}
                <Grid item xs={12}>
                    {state.connectionType === "fibre" ? <FibrePackages /> : <WirelessPackages />}
                </Grid>
            </Grid>
        </Paper>
    )
}