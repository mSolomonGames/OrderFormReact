import React from 'react';
import { Paper, makeStyles, Grid, Typography, Box } from '@material-ui/core';
import Banner from "../img/Logo.png";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    contactDetails: {
        marginTop: theme.spacing(2),
        
        "& div": {
            //alignText: "right", 
           // marginLeft: 'auto', 
           marginRight: theme.spacing(2),   

        },
    },
    logo: {
        maxHeight: theme.spacing(16),
    },
    
}))

export default () => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Grid container justify="space-around">
                <Grid item md={6} sm={7}xs={12}>
                    <img className={classes.logo} src={Banner} alt="Logo" />
                </Grid>
                <Grid item md={4} sm={5} xs={12}>
                    <Grid container justify="flex-end" direction="column" className={classes.contactDetails}>
                        <Grid item >
                            <Typography align="right">REG #2018/608674/07</Typography>                            
                        </Grid>
                        <Grid item>
                        <Typography align="right">Tel: 010 534 8416</Typography>
                        </Grid>
                        <Grid item>
                        <Typography align="right">Email: sales@crispfibre.co.za</Typography>
                            
                        </Grid>
                        <Grid item>
                        <Typography align="right">Website: www.crispfibre.co.za</Typography>                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}