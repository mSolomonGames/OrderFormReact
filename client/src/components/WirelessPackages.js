import React, {useContext} from 'react';
import { Paper, Grid, makeStyles } from '@material-ui/core';
import { AppContext } from '../context';
import { IndivWirelessPackages } from '.';
import { CompanyWirelessPackages } from '.';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(0),
        padding: theme.spacing(0)
    }
}));

export default () => {
    const classes = useStyles();
    const [state, setState ] = useContext(AppContext);
    return (
        //<Paper >
            <Grid className={classes.root}> 
                <Grid item xs={12}>
                    {state.applicationType === "individual" ? <IndivWirelessPackages /> : <CompanyWirelessPackages /> }
                </Grid>
            </Grid>


            
        //</Paper>
    )
}