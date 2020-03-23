import React, {useState,useContext, useEffect} from 'react';
import { Paper,List,ListItem,ListItemText, Grid,makeStyles , Typography} from '@material-ui/core';
import { AppContext } from '../context';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
    root: {
        margin:theme.spacing(0),
        marginBottom: theme.spacing(0),
        padding: theme.spacing(0),
        
        
    },
    packageContainer: {
        marginBottom: theme.spacing(4),
        padding: theme.spacing(2),
        paddingBottom: theme.spacing(0),
    },
    gridHeading:{
        background: theme.palette.primary.main,
    },
    mainHeading: {
        background: theme.palette.primary.main,
        padding: theme.spacing(1),
    },
    listOptions:{
        padding: 0,
    }

}));


export default () => {
    const [state, setState ] = useContext(AppContext);

    const classes = useStyles();
    const packages = [
        {"name": "mb Uncapped",
        "speed": 10,
        "price": 599},
        {"name": "mb Uncapped",
        "speed": 20,
        "price": 799},
        {"name": "mb Uncapped",
        "speed": 40,
        "price": 999},
        {"name": "mb Uncapped",
        "speed": 100,
        "price": 1299},
    ];
    const installation= [
        {"name": "Installation with Modem",
        "period": "Month to Month",
        "price": 2000},
        {"name": "Installation with Modem",
        "period": "12 Months",
        "price": 1000},
        {"name": "Installation Only",
        "period": "24 Months",
        "price": 0},
    ];
    const [fibre_package_index, setFibrePackageIndex] = useState(1);
    const [fibre_package_install_index, setFibrePackageInstallIndex] = useState(1);
    const [endOfInstall, setEndOfInstall] = useState('');

    const [fibrePackage, setFibrePackage]= useState({
        speed: packages[fibre_package_index].speed,
        price: packages[fibre_package_index].price,           
    });
        
    const [fibreInstall, setInstallPackage]= useState({
        name: installation[fibre_package_install_index].name,
        period: installation[fibre_package_install_index].period,
        price: installation[fibre_package_install_index].price,           
    });
    
    useEffect(() => {
        getEndOfContract();
        
    }, [fibre_package_install_index]);

    useEffect(() => {
        const fibreDetails = {
            fibrePackage,
            fibreInstall,
        }

        setState(state => { return {...state, fibreDetails}});
        
    }, [fibre_package_install_index, fibre_package_index])

    function FillInstallDetails(index){
        setFibrePackageInstallIndex(index);
        fibreInstall.name = installation[index].name;
        fibreInstall.period = installation[index].period;
        fibreInstall.price = installation[index].price;  
        console.log(fibreInstall);      
    }

    function FillPackageDetails(index){
        setFibrePackageIndex(index);
        fibrePackage.speed = packages[index].speed;
        fibrePackage.price = packages[index].price;
        console.log(fibrePackage);        
    }
    function getEndOfContract(){
        console.log("1-", state.payDate.substr(0,2));
        console.log("2-", state.payDate.substr(3,2));
        console.log("3-", state.payDate.substr(6,4));
        var temp = new Date(state.payDate.substr(6,4), state.payDate.substr(3,2), state.payDate.substr(0,2));
        var momentObj = moment(temp);
        console.log("Pleaseseess", fibre_package_install_index);
        switch(fibre_package_install_index){
            case 0: {
                //console.log("sdfsdf", 0);
                //setEndOfInstall(momentObj);
                //momentObj.add('months', 0);
                break;
                
            }
            case 1: {
                console.log("sdfsdf", 1);
                momentObj.add('months', 12);
                break;
                
            }
            case 2: {
                console.log("sdfsdf", 2);
                momentObj.add('months', 24);
                break;
                
            }
        }
        setEndOfInstall(momentObj.format('DD-MM-YYYY'));
        console.log("temp ",  momentObj);
    }

    return (        
        <Grid container className={classes.root} justify="center" alignItems="flex-start">
            
            <Grid item md={6} xs={12}>
                <Typography className={classes.mainHeading} color="textSecondary" align="center" variant="h5">Fibre Packages</Typography>
                <List className={classes.listOptions} component="nav" aria-label="">
                    
                    {packages.map((p, i) => (
                    <ListItem                         
                         button
                         selected={fibre_package_index === i}
                         onClick={e => FillPackageDetails(i)}
                            value={fibre_package_index}
                            key={i}
                         >
                         <ListItemText primary={<Typography  align="center" >{p.speed} {p.name} , R{p.price}</Typography>}/>
                         </ListItem>

                    ))}
                </List>
                               
            </Grid>
            
            <Grid item md={6} xs={12}>
                
                {/* <Grid container justify="center"> */}
                <Grid item md={12} xs={12}>
                <Typography className={classes.mainHeading} color="textSecondary" align="center" variant="h5">Installation Packages</Typography>
                        <List className={classes.listOptions} component="nav" aria-label="">
                    {installation.map((p, index) => (
                         <ListItem
                         button
                         value={fibre_package_install_index}
                         selected={fibre_package_install_index === index}
                         onClick={e => FillInstallDetails(index)}
                         key={index}
                         >
                         <ListItemText primary= {
                            <Grid container>
                                <Grid item md={4} xs={4}>
                                    <Typography align="center" >{p.name}</Typography>
                                </Grid>
                                <Grid item md={4} xs={4}>
                                    <Typography align="center" >{p.period}</Typography>
                                </Grid>
                                <Grid item md={4} xs={4}>
                                    <Typography align="center" >R{p.price}</Typography>
                                </Grid>
                            </Grid> }/>
                         </ListItem>
                            ))}
                        </List>

                    </Grid>
                    
                {/* </Grid> */}
            </Grid>
            <Grid item xs={12} md={12} className={classes.gridHeading}>
                <Typography style={{padding: "10px",paddingLeft: "20px"}} variant="subtitle1" color="textSecondary">Installation contract is valid till: {endOfInstall}</Typography>
            </Grid>
            
        </Grid>
    )
}