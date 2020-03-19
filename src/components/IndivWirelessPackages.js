import React, {useState, useContext, useEffect} from 'react';
import { Paper,List,ListItem,ListItemText, Grid,makeStyles , Typography} from '@material-ui/core';
import { AppContext } from '../context';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(0),
        padding: theme.spacing(0),
        
    },
    packageContainer: {
        marginBottom: theme.spacing(4),
        padding: theme.spacing(2)
    },
    subtitleBackground: {
        background: theme.palette.primary.main,
        
    }

}));


export default () => {
    const [state, setState ] = useContext(AppContext);

    const classes = useStyles();
    const packages24 = [
        {"name": "mb Broadband",
        "speed": 10,
        "price24": 2599,
        "price36": 2200},
        {"name": "mb Broadband",
        "speed": 20,
        "price24": 2999,
        "price36": 2799},
        {"name": "mb Broadband",
        "speed": 50,
        "price24": 3999,
        "price36": 3699},
        {"name": "mb Broadband",
        "speed": 100,
        "price24": 5499,
        "price36": 4999},
    ];
    const installation = {
        price: 5500,
    }
    const [wireless_package_index, setWirelessPackageIndex] = useState(1);

    const [wirelessPackage, setWireless]= useState({
        
        speed: packages24[wireless_package_index].speed,
        price: packages24[wireless_package_index].price36,
        install_price: installation.price,         
    });

    function setWifiPackage36(i){
        setWirelessPackageIndex(i);
        wirelessPackage.speed = packages24[i].speed;
        wirelessPackage.price = packages24[i].price36;
        wirelessPackage.install_price = installation.price;
    }

    function setWifiPackage24(i){
        setWirelessPackageIndex(i);
        wirelessPackage.speed = packages24[i].speed;
        wirelessPackage.price = packages24[i].price24;
        wirelessPackage.install_price = installation.price;
    }


    useEffect(() => {
        if(state.pullData){
            setState(state => { return {...state, wirelessPackage}});
        }
        
    }, [state.pullData])
    const offset = 4 ;
    
    return (        
        <Grid container className={classes.root} justify="center" alignItems="center">
            
            <Grid item md={6} xs={12} >
            <Typography className={classes.subtitleBackground} color="textSecondary" variant="h6" align="center" >Over 24 months</Typography>
                <List component="nav" aria-label="">
                    {packages24.map((p, i) => (
                         <ListItem
                         button
                         selected={wireless_package_index === i}
                         onClick={event => setWifiPackage24(i)}
                         value={wireless_package_index}
                         key={i}
                         >
                         <ListItemText primary={<Typography align="center" >{p.speed}{p.name} , R{p.price24}</Typography>} />
                         </ListItem>

                    ))}
                </List>
            </Grid>
            <Grid item md={6} xs={12} >
                <Typography className={classes.subtitleBackground} color="textSecondary" variant="h6" align="center" >Over 36 months</Typography>
                <List component="nav" aria-label="">
                    {packages24.map((p, i) => (
                         <ListItem
                         button
                         selected={wireless_package_index === i}
                         onClick={event => setWifiPackage36(i)}
                         value={wireless_package_index}
                         key={i}
                         >
                         <ListItemText primary={<Typography align="center" >{p.speed}{p.name} , R{p.price36}</Typography>} />
                         </ListItem>

                    ))}
                </List>
            </Grid>
            <Grid item md={12} xs={12}>
                    <Typography className={classes.subtitleBackground} color="textSecondary" variant="h6" align="center" >Installation Once-off excl VAT: {installation.price}</Typography>
            </Grid>
        </Grid>
    )
}