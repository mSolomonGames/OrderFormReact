import React,{useState, useEffect, useContext}from 'react';
import { Grid, TextField, makeStyles, InputLabel } from '@material-ui/core';
import { AppContext } from '../context';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(0),
        paddingBottom: theme.spacing(4),
    },
    label: {
        marginBottom: theme.spacing(1),
        color:'black',
    },
    textField: {
        margin: "0 40px 0 0",
        width: theme.spacing(40),
        maxWidth: "90%",
    },
    inputGroup: {
        marginTop: theme.spacing(2)
    },
    
}));

export default () => {
    const classes = useStyles();
    const [state, setState ] = useContext(AppContext);

    const [companyName,setCompanyName] = useState('');
    const [vat_num,setVatNum] = useState('');
    const [reg_num,setRegNum] = useState('');
    const [tel_num,setTelNum] = useState('');
    const [contact_person, setContactPerson] = useState('');
    const [street_addr,setStreetAddr] = useState('');
    const [city,setCity] = useState('');
    const [post_code,setPostCode] = useState('');
    const [email,setEmail] = useState('');
    const [refered_by, setReferedBy] = useState('');
    

    useEffect(() => {
        if(state.pullData){
            const compDetails = {
                companyName,
                vat_num,
                reg_num,
                tel_num,
                contact_person,
                street_addr,
                city,
                post_code,
                email,
                refered_by
            };
            setState(state => { return {...state, compDetails}});
        }
        
    }, [state.pullData])

    function redAsterix(){
        return <span style={{color: 'red'}}>*</span>;
    }

    return (
        <Grid container className={classes.root} justify="center">
            <Grid item md={5} xs={12} className={classes.inputGroup}>
                <InputLabel id="companyNameLabel" className={classes.label}>Company Name {redAsterix()}</InputLabel>
                <TextField required={true} onChange={e => setCompanyName(e.target.value)}  value={companyName} className={classes.textField} />
            </Grid>
            <Grid item md={5} xs={12} className={classes.inputGroup}>
                <InputLabel id="vatNumberLabel" className={classes.label}>VAT Number {redAsterix()}</InputLabel>
                <TextField required={true} onChange={e => setVatNum(e.target.value)}  value={vat_num} className={classes.textField} />
            </Grid>
            <Grid item md={5} xs={12} className={classes.inputGroup}>
                <InputLabel id="vatNumberLabel" className={classes.label}>Registration Number {redAsterix()}</InputLabel>
                <TextField required={true} onChange={e => setRegNum(e.target.value)}  value={reg_num} className={classes.textField} />
            </Grid>
            <Grid item md={5} xs={12} className={classes.inputGroup}>
                <InputLabel id="contactPersonLabel" className={classes.label}>Contact Person {redAsterix()}</InputLabel>
                <TextField required={true} onChange={e => setContactPerson(e.target.value)}  value={contact_person} className={classes.textField} />
            </Grid>
            <Grid item md={5} xs={12} className={classes.inputGroup}>
                <InputLabel id="telephoneLabel" className={classes.label}>Telephone Number {redAsterix()}</InputLabel>
                <TextField required={true} onChange={e => setTelNum(e.target.value)}  value={tel_num} className={classes.textField} />
            </Grid>
            {/* <Grid item md={6} className={classes.inputGroup}>
                <InputLabel id="cellphoneLabel" className={classes.label}>Cellphone Number</InputLabel>
                <TextField className={classes.textField} />
            </Grid> */}
            <Grid item md={5} xs={12} className={classes.inputGroup}>
                <InputLabel id="addressLabel" className={classes.label}>Street Address {redAsterix()}</InputLabel>
                <TextField required={true} onChange={e => setStreetAddr(e.target.value)}  value={street_addr}  className={classes.textField} multiline/>
            </Grid>
            <Grid item md={5} xs={12} className={classes.inputGroup}>
                <InputLabel id="cityLabel" className={classes.label}>City {redAsterix()}</InputLabel>
                <TextField required={true} onChange={e => setCity(e.target.value)}  value={city} className={classes.textField} />
            </Grid>
            <Grid item md={5} xs={12} className={classes.inputGroup}>
                <InputLabel id="postalLabel" className={classes.label}>Postal Code {redAsterix()}</InputLabel>
                <TextField required={true} onChange={e => setPostCode(e.target.value)}  value={post_code} className={classes.textField} />
            </Grid>
            <Grid item md={5} xs={12} className={classes.inputGroup}>
                <InputLabel id="emailLabel" className={classes.label}>Email Address {redAsterix()}</InputLabel>
                <TextField required={true} onChange={e => setEmail(e.target.value)}  value={email} className={classes.textField} />
            </Grid>
            <Grid item md={5} xs={12} className={classes.inputGroup}>
                <InputLabel id="referredLabel" className={classes.label}>Referred By {redAsterix()}</InputLabel>
                <TextField required={true} onChange={e => setReferedBy(e.target.value)}  value={refered_by} className={classes.textField} />
            </Grid>
        </Grid>
    )
}