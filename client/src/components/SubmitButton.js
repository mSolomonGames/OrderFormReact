import React, {useContext} from 'react';
import { Button,Paper, Grid, Typography,makeStyles , Dialog, DialogTitle,DialogContent,DialogContentText, DialogActions} from '@material-ui/core';
import { AppContext } from '../context';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(4),
        padding: theme.spacing(2)
    },
    buttonStyle:{
        width: "100%",
    }
}));


// function submitForm(props){
//     console.log(props);
// };

export default () => {
    const classes = useStyles();
    const [state, setState ] = useContext(AppContext);
    const [open, setOpen] = React.useState(false);
    
    const handleSubmitForm = () => {
        //console.log("Clicked on submit");
        //setOpen(true);
    };

    const handleClose = () => {
        //setOpen(false);
    };

    
    function submitForm(){
        //console.log(state);
        if(state.applicationType === "individual"){
            //validate indiv client information
            if(state.connectionType === "fibre"){
                //validate INDIV fibre info

            }
            else if(state.connectionType === "wireless"){
                  //validate INDIV wireless info  
            }

            if(state.paymentType === "eft"){
                //validate INDIV eft info - nothing 
            }
            else if(state.paymentType === "debit"){
                //validate INDIV debit order info - checkbox and name entered
            }
        }
        else if(state.applicationType === "company"){
            if(state.connectionType === "fibre"){
                //validate company fibre info

            }
            else if(state.connectionType === "wireless"){
                  //validate company wireless info  
            }
            
        }
        //Payment Type
        if(state.paymentType === "eft"){
            //validate INDIV eft info - nothing 
        }
        else if(state.paymentType === "debit"){
            //validate INDIV debit order info - checkbox and name entered
        }

        //Accepted the terms and conditions?? IS A MUST
        if(state.acceptedTandCs === true){
            //validate INDIV eft info - nothing 
        }
        else if(state.acceptedTandCs === false){
            //validate INDIV debit order info - checkbox and name entered
        }

        
        //Accepted the Mandate checkbox?? IS A MUST
        if(state.acceptedMandate === true){
            //validate INDIV eft info - nothing 
        }
        else if(state.acceptedMandate === false){
            //validate INDIV debit order info - checkbox and name entered
        }

        //if all is good can send email to company(orderform and pdf) + email to client(pdf only)
        
    }
    return (
        //<Paper className={classes.root}>
            <Grid container justify="center">
                <Grid item md={4}>
                {state.paymentType ==='debit'?  
                    <Button className={classes.buttonStyle} 
                        type="submit"
                        onClick={handleSubmitForm} 
                        variant="contained" color="primary"  disabled={state.acceptedTandCs === true ? state.acceptedMandate === true ? false : true : true}>
                            <Typography>Submit</Typography>
                    </Button>
                    : 
                    <Button className={classes.buttonStyle} 
                        type="submit"
                        onClick={handleSubmitForm} 
                        variant="contained" color="primary"  disabled={!state.acceptedTandCs}>
                            <Typography>Submit</Typography>
                    </Button>}
                
                
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Provided information is correct?</DialogTitle>
                    <DialogContent>
                        <DialogContentText color="textPrimary" id="alert-dialog-description">I agree that the provided information is correct.</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        <Typography>Disagree</Typography>                        
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus type="submit">                        
                        <Typography>Agree</Typography>
                    </Button>
                    </DialogActions>
                </Dialog>
                </Grid>
            </Grid>
        //</Paper>
    )
}