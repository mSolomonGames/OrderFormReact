import React, {useContext} from 'react';
import { Paper,Grid, makeStyles, Typography ,FormControlLabel,Checkbox} from '@material-ui/core';
import { AppContext } from '../context';
import { SubmitButton } from '.';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(40),
        padding: theme.spacing(0),
        paddingBottom: theme.spacing(4),
    },
    headingBanner: {
        background: theme.palette.primary.main,
        padding: theme.spacing(1),
        color: 'white',
    },
    firstItem: {
        marginTop: theme.spacing(3),
    },
    acceptBox:{
        background: theme.palette.secondary.main,
    },
    label :{
        marginLeft: theme.spacing(2)
    },
    formLabel: {
        marginBottom: theme.spacing(1),
        
    }
}));

export default () => {
    const classes = useStyles();
    const bank = "First National Bank";
    const branchCode = "123456";
    const accountType = "Cheque";
    const accountNumber = "12345678909876";

    const [state, setState ] = useContext(AppContext);

    return (
        <Paper className={classes.root}>
        <Grid container spacing={0} justify="center">
                    <Grid item md={12} xs={12}>
                        <Typography className={classes.headingBanner} align="center" color="textPrimary" variant="h4">Terms and Conditions</Typography>
                    </Grid>
                    <Grid item md={12} xs={12} >
                        <Grid container justify="center">
                            <Grid className={classes.firstItem} item md ={10} xs={10}>
                            <Typography  paragraph={true} color="textPrimary" align="center" variant="body1">All Fibre and accounts are area specific, might not be available in all areas. Please note: It is the Clients'
                                responsibility to cancel or terminate any existing agreements with their current ISP to avoid duplicate
                                INTERNET cost. We will manage bandwidth usage to the best of our ability during peak periods; however, it
                                remains a best effort service. Termination of account is a calendar month.</Typography>
                            </Grid>
                            <Grid item md ={10} xs={10}>
                            <Typography paragraph={true} color="textPrimary" align="center" variant="body1">Please note that cancellations received after the 3rd of the month will only be processed in the following
                                month which will end at the end of the following month. All accounts are pre-paid. Business accounts has a
                                SLA of 6 hours where Home users have a SLA of 8-12 hours. Cancellations within contract period is subject
                                to pay difference within contract months left.</Typography>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                    <Grid item md={4}>
                        <Grid container justify="center">
                            <Grid item md={8}>
                            <FormControlLabel  align="center" className={classes.formLabel}
                                control={
                                <Checkbox 
                                    className={classes.acceptBox}                               
                                    onChange={e => setState(state => {return {...state, acceptedTandCs: e.target.value}})}
                                    value={state.acceptedTandCs}
                                    color="primary"
                                    required={true}                                 
                                />
                                }
                                label={<Typography className={classes.label} color="textPrimary" align="right" variant="body1">I accept the Terms & Conditions</Typography>}
                            />
                            </Grid>
                        </Grid>
                        
                        
                    </Grid>   
                    <Grid item md={12}  >
                            <SubmitButton />
                    </Grid>              

                </Grid>
            </Paper>
    )
}