import React from 'react';
import { Button,Paper, Grid, Typography,makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(4),
        padding: theme.spacing(2)
    },
    buttonStyle:{
        width: "100%",
    }
}));

export default () => {
    const classes = useStyles();

    return (
        //<Paper className={classes.root}>
            <Grid container justify="center">
                <Grid item md={4}>
                <Button className={classes.buttonStyle} variant="contained" color="primary" href="#contained-buttons">
                    <Typography>Submit</Typography>
                </Button>
                </Grid>
            </Grid>
        //</Paper>
    )
}