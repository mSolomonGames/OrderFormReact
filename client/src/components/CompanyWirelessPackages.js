import React, {useState,useContext,useEffect} from 'react';
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
        
    },
    tableHeading:{
        background: theme.palette.primary.main,
        paddingLeft: theme.spacing(2),
    }

}));
const defaultPackage = 1;

export default () => {
    const classes = useStyles();
    const packages24 = [
        {"name": "mb Broadband",
        "speed": 10,
        "price24": 2599,
        "price36": 3500},
        {"name": "mb Broadband",
        "speed": 20,
        "price24": 2999,
        "price36": 4999},
        {"name": "mb Broadband",
        "speed": 50,
        "price24": 3999,
        "price36": 7500},
        {"name": "mb Broadband",
        "speed": 100,
        "price24": 5499,
        "price36": 8999},
    ];
    const installation = {
        "price24": 5500,
        "price36": 6500
    };

    const [state, setState ] = useContext(AppContext);
    const [selectedIndex, setSelectedIndex] = useState(defaultPackage);

    
    const [wirelessPackage, setWirelessPackage]= useState({        
        speed: packages24[defaultPackage].speed,
        price:  packages24[defaultPackage].price24,
        install_price: installation.price24,        
    });
    
    //console.log("Selected ", selectedIndex);
    //console.log("Wireless " ,wirelessPackage);
    

    function setWifiPackage36(i){
        //console.log("changing 36="+i + " vs " + selectedIndex);
        setSelectedIndex(i);
        wirelessPackage.speed = packages24[i-offsetPackages].speed;
        wirelessPackage.price = packages24[i-offsetPackages].price36;
        wirelessPackage.install_price = installation.price36;
    }

    function setWifiPackage24(i){
        //console.log("changing 24=" + i + " vs " + selectedIndex);
        setSelectedIndex(i);
        wirelessPackage.speed = packages24[i].speed;
        wirelessPackage.price = packages24[i].price24;
        wirelessPackage.install_price = installation.price24;
    }


    useEffect(() => {
        //if(state.pullData){
            //console.log("use effect wireless");
            setState(state => { return {...state, wirelessPackage}});
        //}
        
    }, [selectedIndex])

    const offsetPackages = 4;

    return (        
        <Grid container className={classes.root} justify="center" alignItems="center">
            <Grid item md={12} xs={12} >
            <Typography className={classes.tableHeading} color="textSecondary" variant="h5" align="left" >Wireless Packages</Typography>
            </Grid>
            <Grid item md={6} xs={6} >
            <Typography className={classes.subtitleBackground} color="textSecondary" variant="h6" align="center" >Over 24 months</Typography>
                <List component="nav" aria-label="">
                    {packages24.map((p, i) => (
                         <ListItem
                         button
                         selected={selectedIndex === i}
                         onClick={event => setWifiPackage24(i)}
                         value={i}
                         key={i}
                         >
                         <ListItemText primary={<Typography align="center" >{p.speed}{p.name} , R{p.price24}</Typography>} />
                         </ListItem>

                    ))}
                </List>
            </Grid>
            <Grid item md={6} xs={6}>
                <Typography className={classes.subtitleBackground} color="textSecondary" variant="h6" align="center" >Over 36 months</Typography>
                <List component="nav" aria-label="">
                    {packages24.map((p, i) => (
                         <ListItem
                         button
                         selected={selectedIndex === i+offsetPackages}
                         onClick={event => setWifiPackage36(i+offsetPackages)}
                         value={selectedIndex+offsetPackages}
                         key={i+offsetPackages}
                         >
                         <ListItemText primary={<Typography align="center" >{p.speed}{p.name} , R{p.price36}</Typography>} />
                         </ListItem>

                    ))}
                </List>
            </Grid>
            <Grid item md={12} xs={12}>
                <Grid container>
                    <Grid item md={6} xs={6}>
                    <Typography className={classes.gridHeading , classes.subtitleBackground} color="textSecondary" variant="h6" align="center" >Enterprise Installation: R{installation.price24} excl. VAT</Typography>
                    </Grid>
                    <Grid item md={6} xs={6}>
                    <Typography className={classes.gridHeading, classes.subtitleBackground} color="textSecondary" variant="h6" align="center" >Enterprise Installation: R{installation.price36} excl. VAT</Typography>
                    </Grid>
                </Grid>
            
            </Grid>
        </Grid>
    )
}