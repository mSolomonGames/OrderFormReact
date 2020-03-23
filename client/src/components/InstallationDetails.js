import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(4),
        padding: theme.spacing(2)
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            Install details
        </Paper>
    )
}