import React, { useContext, useState, useEffect } from 'react';
import { Paper, makeStyles, Grid, Typography, Select, MenuItem,TextField ,InputLabel, FormControlLabel, Checkbox } from '@material-ui/core';
import { IndividualForm, CompanyForm } from '../components';
import { AppContext } from '../context';



const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(4),
    },
    heading: {
        //backgroundColor: theme.palette.secondary.main,
        color: 'white',
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        marginBottom: theme.spacing(3),
    },
    body: {
        padding: theme.spacing(4),
        textAlign: 'left'
    },
    label: {        
        marginBottom: theme.spacing(1),
        color: "black",       
        
    }, 
    acceptLabel: {
        width: '90%',
        marginBottom: theme.spacing(1),
        color: "black",
        //marginLeft: theme.spacing(2),
        [theme.breakpoints.down('sm')]:{
            marginLeft: theme.spacing(2),           
        },
        [theme.breakpoints.up('md')]:{
            maxWidth: '70%',    
            marginLeft: theme.spacing(3),    
        }
    }, 
    dropDown: {
        width: '200px'
    },
    date:{
        fontWeight: "bold",
    },
    formLabel: {
        // marginBottom: theme.spacing(1),
        
        //margin: '0 auto'
        [theme.breakpoints.down('sm')]:{
            marginLeft: theme.spacing(2),           
        },
        [theme.breakpoints.up('md')]:{
            marginLeft: theme.spacing(3),         
        }
        
    },
    // acceptBox:{
    //     background: theme.palette.secondary.main,
    // },
    textField: {
        //margin: "0 40px 20px 0",
        marginBottom:theme.spacing(3),
        //width: "400px",
        maxWidth: '90%',
        width: theme.spacing(40),
        //paddingLeft: theme.spacing(2),
        
        
    },
    inputGroup: {
        marginTop: theme.spacing(2),
        
    },
    paddingCenter:{
        [theme.breakpoints.down('sm')]:{
            paddingLeft: theme.spacing(3),
            marginTop: theme.spacing(8),
        },
        [theme.breakpoints.up('md')]:{
            paddingLeft: theme.spacing(6),
            marginTop: theme.spacing(10),
        }
        
    }
    
}));



export default () => {
    const classes = useStyles();
    const [state, setState ] = useContext(AppContext);

    const [mandateFullName, setMandateFullName] = useState('');

    useEffect(() => {
        setState(state => ({ ...state, mandateFullName:  mandateFullName}));
    }, [mandateFullName]
    
    );
    
    //console.log(state.payDate);
    return (        
        
        <Grid container className={classes.root} justify="center">
            <Grid item md={12} className={classes.heading}>
                <Typography variant="h4" align="center" color="textPrimary">Debit Order Mandate</Typography>
            </Grid>
            <Grid item md={10} xs={10}>
                <Typography  align="center" paragraph={true} align="left">This signed Authority and Mandate refers to our contract dated (“the Agreement”).
                I/We hereby authorise you to issue and deliver payment instructions to your Banker for collection against my/our abovementioned
                account at my/our above-mentioned Bank (or any other bank or branch to which I/we may transfer my/our account)
                on condition that the sum of such payment instructions will never exceed my/our obligations as agreed to in the Agreement and
                commencing on <span className={classes.date}>{state.payDate}</span> and continuing until this Authority and Mandate is terminated by me/us by giving you notice in
                writing of not less than 20 ordinary working days, and sent by prepaid registered post or delivered to your address as indicated
                above. </Typography>
            </Grid>
            
            <Grid item md={10} xs={10}>
                <Typography  align="center" paragraph={true} variant="body1"> The individual payment instructions so authorised to be issued must be issued and delivered as follows: monthly. In the event
                that the payment day falls on a Sunday, or recognised South African public holiday, the payment day will automatically be the
                preceding ordinary business day.
                I / We understand that the withdrawals hereby authorized will be processed through a computerized system provided by the
                South African Banks and I also understand that details of each withdrawal will be printed on my bank statement. Each
                transaction will contain a number, which must be included in the said payment instruction and if provided to you should enable
                you to identify the Agreement. A payment reference is added to this form before the issuing of any payment instruction.</Typography>
                
            </Grid>

            <Grid item md={10} xs={10}>
                <Typography   align="center" variant="h5">Mandate</Typography>

            </Grid>
            <Grid item md={10} xs={10}>
            <Typography  align="center" variant="body1">I/We acknowledge that all payment instructions issued by you shall be treated by my/our above-mentioned Bank as if the
            instructions have been issued by me/us personally.</Typography>
                
            </Grid>
            <Grid item md={10} xs={10}>
            <Typography  align="center" variant="h5">Cancellation</Typography>
                
            </Grid>
            <Grid item md={10} xs={10}>
            <Typography  align="center" paragraph={true}variant="body1">I/We agree that although this Authority and Mandate may be cancelled by me/us, such cancellation will not cancel the
            Agreement. I/We shall not be entitled to any refund of amounts which you have withdrawn while this Authority was in force, if
            such amounts were legally owing to you.</Typography>
                
            </Grid>
            <Grid item md={10} xs={10}>
            <Typography  align="center" variant="h5">Assignment</Typography>
                
            </Grid>
            <Grid item md={10} xs={10}>
            <Typography  align="center" paragraph={true} variant="body1">I/We acknowledge that this Authority may be ceded or assigned to a third party if the Agreement is also ceded or assigned to
            that third party, but in the absence of such assignment of the Agreement, this Authority and Mandate cannot be assigned to any
            third party.</Typography>
                
            </Grid>
            <Grid item md={7}xs={10} className={classes.paddingCenter}>
                <InputLabel id="referredLabel" className={classes.label}>Name and Surname</InputLabel>
                <TextField onChange={e => setMandateFullName(e.target.value)}  value={mandateFullName} className={classes.textField} />
            </Grid>
            <Grid item md={7} xs={10}>
            <FormControlLabel  align="center" className={classes.formLabel}
                                control={
                                <Checkbox 
                                    className={classes.acceptBox}                               
                                    onChange={e => setState(state => {return {...state, acceptedMandate: e.target.checked}})}
                                    checked={state.acceptedMandate}
                                    color="primary"
                                    required={true}
                                                                     
                                />
                                }
                            label={<Typography className={classes.acceptLabel} color="textPrimary" align="left" variant="body1">I, {mandateFullName} 
                                    , accept this contract starting on the date of {state.payDate}, for the amount of R</Typography>

                                 
                               
                            }
                            />

            </Grid>
        </Grid>
        
       
    )
}








