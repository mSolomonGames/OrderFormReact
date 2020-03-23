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
        backgroundColor: theme.palette.primary.main,
        
        
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
            marginTop: theme.spacing(2),
        },
        [theme.breakpoints.up('md')]:{
            paddingLeft: theme.spacing(6),
            marginTop: theme.spacing(4),
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
    function getAmount(){
        var debit =0;
        if(state.connectionType === "fibre"){
            if(state.applicationType === "individual"){
                debit = state.fibreDetails.fibrePackage.price;
                
            }
            else if(state.applicationType === "company"){
                debit = state.fibreDetails.price;
            }

        }
        else if(state.connectionType === "wireless"){
            if(state.applicationType === "individual"){
                debit = state.wirelessPackage.price;
            }
            else if(state.applicationType === "company"){
                debit = state.wirelessPackage.price;
            }
        }
        return debit;
    }

    function wordOfMonth(){
        var getDay = (state.payDate).substr(0,2);
        if(getDay === "01"){
            return "1st";
        }
        else if(getDay === "30" || getDay === "31"){
            return "last";
        }
        else if(getDay === "15"){
            return "15th";
        }
        console.log(getDay);
        
    }
    //console.log(state.payDate);
    return (        
        
        <Grid container className={classes.root} justify="center">
            <Grid item md={12} className={classes.heading}>
                <Typography variant="h4" align="center" color="textSecondary">Debit Order Mandate</Typography>
            </Grid>
            <Grid item md={10} xs={10}>
                <Typography  align="left" paragraph={true} align="left">The individual payment instructions so authorised to be issued must be issued and delivered as follows </Typography>
            </Grid>
            <Grid item md={10} xs={10}>
    <Typography  align="left" paragraph={true} align="left">1) On the day __{wordOfMonth()}___ ("payment day") of each and every month commencing on ______________ day ("payment day") of each and
                    every month commencing on. In the event that the payment day falls on a Saturday, Sunday or recognized South African public
                    holiday, the payment day will automatically be the very next ordinary business day. 2) Monthly; on or after the dates when the
                    obligation in terms of the Agreement is due and the amount of each individual payment instruction may not be more or less that
                    the obligation due; 3) Bi-monthly; on or after the dates when the obligation in terms of the Agreement is due and the amount of
                    each individual payment instruction may not be more or less that the obligation due; 4) Three-monthly; on or after the dates
                    when the obligation in terms of the Agreement is due and the amount of each individual payment instruction may not be more
                    or less that the obligation due;</Typography>
            </Grid>

            <Grid item md={10} xs={10}>
                <Typography  align="left" paragraph={true} align="left">5) Six-monthly; on or after the dates when the obligation in terms of the Agreement is due ant the amount of each individual
                payment instruction may not be more or less than the obligation due; 6) Annually; on or after the dates when the obligation in
                terms of the Agreement is due and the amount of each individual payment instruction may not be more or less than the
                obligation due; 7) Weekly; on or after the dates when the obligation in terms of the Agreement is due and the amount of each
                individual payment instruction may not be more or less than the obligation due; 8) Bi-weekly; on or after the dates when the
                obligation in terms of the agreement is due and the amount of each individual payment instruction may not be more or less
                than the obligation due.</Typography>
            </Grid>
            <Grid item md={10} xs={10}>
                <Typography  align="left" paragraph={true} align="left">We understand that the withdrawals hereby authorised will be processed through a computerized system provided by the South
                African Banks and I also understand that details of each withdrawal will be printed on my bank statement. Each transaction will
                contain a number.</Typography>
            </Grid>

            <Grid item md={10} xs={10}>
                <Typography   align="left" variant="h5">Mandate</Typography>

            </Grid>
            <Grid item md={10} xs={10}>
            <Typography  align="left" variant="body1">I/We acknowledge that all payment instructions issued by you shall be treated by my/our above-mentioned Bank as if the
            instructions have been issued by me/us personally.</Typography>
                
            </Grid>
            <Grid item md={10} xs={10}>
            <Typography  align="left" variant="h5">Cancellation</Typography>
                
            </Grid>
            <Grid item md={10} xs={10}>
            <Typography  align="left" paragraph={true}variant="body1">I/We agree that although this Authority and Mandate may be cancelled by me/us, such cancellation will not cancel the
            Agreement. I/We shall not be entitled to any refund of amounts which you have withdrawn while this Authority was in force, if
            such amounts were legally owing to you.</Typography>
                
            </Grid>
            <Grid item md={10} xs={10}>
            <Typography  align="left" variant="h5">Assignment</Typography>
                
            </Grid>
            <Grid item md={10} xs={10}>
            <Typography  align="left" paragraph={true} variant="body1">I/We acknowledge that this Authority may be ceded or assigned to a third party if the Agreement is also ceded or assigned to
            that third party, but in the absence of such assignment of the Agreement, this Authority and Mandate cannot be assigned to any
            third party.</Typography>
                
            </Grid>
            <Grid item md={12} xs={12} className={classes.heading}>
            <Typography  color="textSecondary" align="center" variant="h5">Accepting</Typography>  
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
                                    , accept this contract starting on the date of {state.payDate}, for the amount of R{getAmount()}.</Typography>

                                 
                               
                            }
                            />

            </Grid>
        </Grid>
        
       
    )
}








