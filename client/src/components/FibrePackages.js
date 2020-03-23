import React, {useContext} from 'react';
import { Paper, Grid, makeStyles } from '@material-ui/core';
import { AppContext } from '../context';
import { IndivFibrePackages } from '.';
import { CompanyFibrePackages } from '.';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(4),
        padding: theme.spacing(2)
    }
}));

export default () => {
    const classes = useStyles();
    const [state, setState ] = useContext(AppContext);
    return (
        <div >
            {state.applicationType === "individual" ? <IndivFibrePackages /> : <CompanyFibrePackages /> }
        </div>
        
        
        
    )
}