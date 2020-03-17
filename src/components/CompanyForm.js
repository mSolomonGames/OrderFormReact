import React,{useState, useEffect, useContext}from 'react';
import { Grid, TextField, makeStyles, InputLabel } from '@material-ui/core';
import { AppContext } from '../context';

const useStyles = makeStyles(theme => ({
    root: {
        padding: `0 ${theme.spacing(4)}px ${theme.spacing(4)}px ${theme.spacing(4)}px`,
    },
    label: {
        marginBottom: theme.spacing(1),
        color:'black',
    },
    textField: {
        margin: "0 40px 0 0",
        width: "400px"
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
    const [tel_num,setTelNum] = useState('');
    const [contact_person,setContactPerson] = useState('');
    const [street_addr,setStreetAddr] = useState('');
    const [city,setCity] = useState('');
    const [post_code,setPostCode] = useState('');
    const [email,setEmail] = useState('');
    const [refered_by, setReferedBy] = useState('');
    

    useEffect(() => {        
        setState(state => ({ ...state, companyName:  companyName}));
        setState(state => ({...state, vat_num: vat_num}));
        setState(state => ({...state, tel_num: tel_num}));
        setState(state => ({...state, contact_person: contact_person}));
        setState(state => ({...state, street_addr: street_addr}));
        setState(state => ({...state, city: city}));
        setState(state => ({...state, post_code: post_code}));
        setState(state => ({...state, email: email}));
        setState(state => ({...state, refered_by: refered_by}));
      }, [companyName, vat_num, tel_num, contact_person, street_addr, city, post_code, email, refered_by ],
        
      );



    return (
        <Grid container className={classes.root}>
            <Grid item md={6} className={classes.inputGroup}>
                <InputLabel id="companyNameLabel" className={classes.label}>Company Name</InputLabel>
                <TextField onChange={e => setCompanyName(e.target.value)}  value={companyName} className={classes.textField} />
            </Grid>
            <Grid item md={6} className={classes.inputGroup}>
                <InputLabel id="vatNumberLabel" className={classes.label}>VAT Number</InputLabel>
                <TextField onChange={e => setVatNum(e.target.value)}  value={vat_num} className={classes.textField} />
            </Grid>
            <Grid item md={6} className={classes.inputGroup}>
                <InputLabel id="contactPersonLabel" className={classes.label}>Contact Person</InputLabel>
                <TextField onChange={e => setContactPerson(e.target.value)}  value={contact_person} className={classes.textField} />
            </Grid>
            <Grid item md={6} className={classes.inputGroup}>
                <InputLabel id="telephoneLabel" className={classes.label}>Telephone Number</InputLabel>
                <TextField onChange={e => setTelNum(e.target.value)}  value={tel_num} className={classes.textField} />
            </Grid>
            {/* <Grid item md={6} className={classes.inputGroup}>
                <InputLabel id="cellphoneLabel" className={classes.label}>Cellphone Number</InputLabel>
                <TextField className={classes.textField} />
            </Grid> */}
            <Grid item md={12} className={classes.inputGroup}>
                <InputLabel id="addressLabel" className={classes.label}>Street Address</InputLabel>
                <TextField onChange={e => setStreetAddr(e.target.value)}  value={street_addr} multiline fullWidth />
            </Grid>
            <Grid item md={6} className={classes.inputGroup}>
                <InputLabel id="cityLabel" className={classes.label}>City</InputLabel>
                <TextField onChange={e => setCity(e.target.value)}  value={city} className={classes.textField} />
            </Grid>
            <Grid item md={6} className={classes.inputGroup}>
                <InputLabel id="postalLabel" className={classes.label}>Postal Code</InputLabel>
                <TextField onChange={e => setPostCode(e.target.value)}  value={post_code} className={classes.textField} />
            </Grid>
            <Grid item md={6} className={classes.inputGroup}>
                <InputLabel id="emailLabel" className={classes.label}>Email Address</InputLabel>
                <TextField onChange={e => setEmail(e.target.value)}  value={email} className={classes.textField} />
            </Grid>
            <Grid item md={6} className={classes.inputGroup}>
                <InputLabel id="referredLabel" className={classes.label}>Referred By</InputLabel>
                <TextField onChange={e => setReferedBy(e.target.value)}  value={refered_by} className={classes.textField} />
            </Grid>
        </Grid>
    )
}