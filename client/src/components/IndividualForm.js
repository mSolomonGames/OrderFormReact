import React,{useContext, useEffect, useState, useMemo}from 'react';
import { Grid, TextField, makeStyles, InputLabel } from '@material-ui/core';
import { AppContext } from '../context';

const useStyles = makeStyles(theme => ({
    root: {
        
        //padding: `0 ${theme.spacing(4)}px ${theme.spacing(4)}px ${theme.spacing(4)}px`,
        paddingBottom: theme.spacing(4),
    },
    label: {
        marginBottom: theme.spacing(1),
        color: 'black',
    },
    textField: {
        margin: "0 40px 0 0",
        width: theme.spacing(40),
        maxWidth: "90%",
        
    },
    inputGroup: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(2),
        
    },
    streetField:{
        width: "90%",
        maxWidth: "95%",
        [theme.breakpoints.up('md')]:{
            paddingRight: theme.spacing(5),
            
        },
        // [theme.breakpoints.up('md')]:{
        //     paddingRight: theme.spacing(6),
           
        // }
        
    }
}));

export default () => {
    const classes = useStyles();
    const [state, setState ] = useContext(AppContext);

    const [fullName,setFullName] = useState('');
    const [id_num,setIdNum] = useState('');
    const [tel_num,setTelNum] = useState('');
    const [cell_num,setCellNum] = useState('');
    const [street_addr,setStreetAddr] = useState('');
    const [city,setCity] = useState('');
    const [post_code,setPostCode] = useState('');
    const [email,setEmail] = useState('');
    const [refered_by, setReferedBy] = useState('');
    

    useEffect(() => {
        if(state.pullData){
            const userDetails = {
                fullName,
                id_num,
                tel_num,
                cell_num,
                street_addr,
                city,
                post_code,
                email,
                refered_by
            };
            setState(state => { return {...state, userDetails}});
        }
        
    }, [state.pullData])


    // useEffect(() => {        
    //     setState(state => ({ ...state, fullName:  fullName}));
    //     setState(state => ({...state, ID_num: id_num}));
    //     setState(state => ({...state, tel_num: tel_num}));
    //     setState(state => ({...state, cell_num: tel_num}));
    //     setState(state => ({...state, street_addr: street_addr}));
    //     setState(state => ({...state, city: city}));
    //     setState(state => ({...state, post_code: post_code}));
    //     setState(state => ({...state, email: email}));
    //     setState(state => ({...state, refered_by: refered_by}));
    //   }, [fullName, id_num, tel_num, cell_num, street_addr, city, post_code, email, refered_by ]
        
    //   );

    return (
        <Grid container className={classes.root} justify="center">
            <Grid item md={5} xs={10}className={classes.inputGroup}>
                <InputLabel  id="fullNameLabel"  className={classes.label}>Full Name</InputLabel>
                <TextField required={true} 
                    onChange={e => setFullName(e.target.value)}
                    value={fullName} className={classes.textField}  />
                {/* <TextField required={true} onChange={e => setFullName(e.target.value)}  value={fullName} className={classes.textField}  /> */}
            </Grid>
            <Grid item  md={5} xs={10} className={classes.inputGroup}>
                <InputLabel id="idNumberLabel"  className={classes.label}>SA ID Number</InputLabel>
                <TextField required={true} onChange={e => setIdNum(e.target.value)}  value={id_num} className={classes.textField} />
            </Grid>
            <Grid item md={5} xs={10} className={classes.inputGroup}>
                <InputLabel id="telephoneLabel"className={classes.label}>Telephone Number</InputLabel>
                <TextField required={true} onChange={e => setTelNum(e.target.value)}  value={tel_num} className={classes.textField} />
            </Grid>
            <Grid item md={5} xs={10} className={classes.inputGroup}>
                <InputLabel id="cellphoneLabel" className={classes.label}>Cellphone Number</InputLabel>
                <TextField type="tel" required={true} onChange={e => setCellNum(e.target.value)}  value={cell_num} className={classes.textField} />
            </Grid>
            <Grid item md={10} xs={10} className={classes.inputGroup}>
                <InputLabel id="addressLabel"  className={classes.label}>Street Address</InputLabel>
                <TextField required={true} className={classes.streetField} onChange={e => setStreetAddr(e.target.value)}  value={street_addr}  multiline />
            </Grid>
            <Grid item md={5} xs={10} className={classes.inputGroup}>
                <InputLabel id="cityLabel"  className={classes.label}>City</InputLabel>
                <TextField required={true} onChange={e => setCity(e.target.value)}  value={city} className={classes.textField} />
            </Grid>
            <Grid item md={5} xs={10} className={classes.inputGroup}>
                <InputLabel id="postalLabel"  className={classes.label}>Postal Code</InputLabel>
                <TextField required={true} onChange={e => setPostCode(e.target.value)}  value={post_code} className={classes.textField} />
            </Grid>
            <Grid item md={5} xs={10} className={classes.inputGroup}>
                <InputLabel id="emailLabel"  className={classes.label}>Email Address</InputLabel>
                <TextField required={true} type="email" onChange={e => setEmail(e.target.value)}  value={email} className={classes.textField} />
            </Grid>
            <Grid item md={5} xs={10} className={classes.inputGroup}>
                <InputLabel id="referredLabel" className={classes.label}>Referred By</InputLabel>
                <TextField required={true} onChange={e => setReferedBy(e.target.value)}  value={refered_by} className={classes.textField} />
            </Grid>
        </Grid>
    )
}