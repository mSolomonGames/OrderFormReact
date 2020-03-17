import React, {useContext} from 'react';
import { Paper, Grid, makeStyles, Typography } from '@material-ui/core';
import { AppContext } from '../context';


const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(4),
        padding: theme.spacing(2)
    },
    heading: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(2)
    },

}));

export default () => {
    const classes = useStyles();
    const [state, setState ] = useContext(AppContext);
    return (
        <Paper>
            <Grid container>
                <Grid item xs={12} md={12} className={classes.heading}>
                    <Typography align="left" variant="h4">{state.connectionType === "fibre" ? 'F' : 'W'}TT{state.applicationType === "individual" ? 'H' : 'B '} Order Form</Typography>
                </Grid>

            </Grid>
        </Paper>
        
        
        
    )
}