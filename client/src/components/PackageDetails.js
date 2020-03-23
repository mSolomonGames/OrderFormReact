import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
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

    const setFibre = () => {
        console.log(window.location.pathname);
        //if(state.connectionType ===)
    }

    // function isFibre(conn){
    //     if(state.connectionType === conn){
    //         console.log(conn, " == ", state.connectionType );
    //     }
    //     else{
    //         console.log(conn, " vs ", state.connectionType );
    //         setState(state => {return {...state, connectionType: conn}})
    //     }
    // }
    useEffect(() => {
        if(state.connectionType === "wireless" && window.location.pathname.substr(1) === "fibre"){
            console.log("Changing state on link from wireless");
            setState(state => { return {...state, connectionType: "fibre"}});
        }
        else if(state.connectionType === "fibre" && window.location.pathname.substr(1) === "wireless"){
            console.log("Changing state on link from fibre");
            setState(state => { return {...state, connectionType: "wireless"}});
        }
        
    },[])
    
    return (
        <Paper className={classes.root}>
            <Grid container>
                <Grid item className={classes.heading} md={12} xs={12}>
                    <Typography variant="h6">CONNECTION DETAILS</Typography>
                </Grid>
                {/* <Grid item md={7} xs={12} md={12} className={classes.body}>
                <Typography color="textSecondary" variant="h6">{state.connectionType === "fibre" ? "Fibre" : "Wireless"}</Typography>
                </Grid> */}
                {/* <Grid item md={7} xs={12} md={12} className={classes.body}>
                    <InputLabel id="connectionTypeLabel" className={classes.label}>Connection Type</InputLabel>
                    <Select
                        className={classes.dropDown}
                        labelId="connectionTypeLabel"
                        id="connectionType"
                        value={state.connectionType}
                        onChange={e => setState(state => {return {...state, connectionType: e.target.value}})}
                        color="primary"
                        disabled={true}
                    >
                        <MenuItem value={'fibre'}><Typography color="textPrimary" variant="h6" align="center">Fibre</Typography></MenuItem>
                        <MenuItem value={'wireless'}><Typography color="textPrimary" variant="h6" align="center">Wireless</Typography></MenuItem>
                    </Select>
                </Grid> */}
                {/* <Grid item md={5} xs={12} className={classes.body}>
                    <Typography align="center" variant="h5" color="textPrimary">
                        {state.applicationType === 'individual' ? "INDIVIDUAL" : "BUSINESS"} {state.connectionType === "fibre" ? "FIBRE" : "WIRELESS"} PACKAGES</Typography>
                </Grid> */}
                <Grid item xs={12}>
                    {/* {isFibre(window.location.pathname.substr(1))} */}
                    <Router>
                    <Switch>
                        <Route exact path="/fibre">                            
                            <FibrePackages />
                        </Route>
                        <Route exact path="/wireless">
                        {/* {isFibre("wireless")} */}
                            <WirelessPackages />
                        </Route>

                    </Switch>
                    </Router>
                    {/* {state.connectionType === "fibre" ?  : } */}
                </Grid>
            </Grid>
        </Paper>
    )
}