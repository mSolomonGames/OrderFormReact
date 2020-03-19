import React, {useState,useContext,useEffect} from 'react';
import { Paper,List,ListItem,ListItemText, Grid,makeStyles , Typography} from '@material-ui/core';
import { AppContext } from '../context';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(4),
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
const defaultPackage = 1;

export default () => {
    const classes = useStyles();
    const packages24 = [
        {"name": "Mbps 1:1 Dedicated",
        "speed": 10,
        "price24": 3999,
        "price36": 3799},
        {"name": "Mbps 1:1 Dedicated",
        "speed": 20,
        "price24": 4799,
        "price36": 4599},
        {"name": "Mbps 1:1 Dedicated",
        "speed": 50,
        "price24": 6999,
        "price36": 6799},
        {"name": "Mbps 1:1 Dedicated",
        "speed": 100,
        "price24": 7999,
        "price36": 7799},
        {"name": "Mbps 1:1 Dedicated",
        "speed": 200,
        "price24": 10999,
        "price36": 10599},
        {"name": "Mbps 1:1 Dedicated",
        "speed": 500,
        "price24": 16999,
        "price36": 16599},
    ];
    const installation = {
        "price": 8500, 
    }

    

    const [state, setState ] = useContext(AppContext);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const [fibrePackage, setFibrePackage]= useState({
        speed: packages24[defaultPackage].speed,
        price: packages24[defaultPackage].price24,
        install_price: installation.price,         
    });

    function setWifiPackage36(i){
        setSelectedIndex(i);
        fibrePackage.speed = packages24[i-offsetMonths].speed;
        fibrePackage.price = packages24[i-offsetMonths].price36;
        fibrePackage.install_price = installation.price;
    }

    function setWifiPackage24(i){
        setSelectedIndex(i);
        fibrePackage.speed = packages24[i].speed;
        fibrePackage.price = packages24[i].price24;
        fibrePackage.install_price = installation.price;
    }

    useEffect(() => {
        if(state.pullData){
            setState(state => { return {...state, fibrePackage}});
        }
        
    }, [state.pullData])

    const offsetMonths = 6;
    console.log("Comp Fibre", fibrePackage);

    return (        
        <Grid container className={classes.root} justify="center" alignItems="center">
            
            <Grid item md={6} >
            <Typography className={classes.subtitleBackground} color="textSecondary" variant="h6" align="center" >Over 24 months</Typography>
                <List component="nav" aria-label="">
                    {packages24.map((p, i) => (
                         <ListItem
                         button
                         selected={selectedIndex === i}
                         onClick={e => setWifiPackage24(i)}
                         value={selectedIndex}
                         key={i}
                         >
                         <ListItemText primary={<Typography align="center" >{p.speed}{p.name} , R{p.price24}</Typography>} />
                         </ListItem>

                    ))}
                </List>
            </Grid>
            <Grid item md={6} >
                <Typography className={classes.subtitleBackground} color="textSecondary" variant="h6" align="center" >Over 36 months</Typography>
                <List component="nav" aria-label="">
                    {packages24.map((p, i) => (
                         <ListItem
                         button
                         selected={selectedIndex === i+offsetMonths}
                         onClick={event => setWifiPackage36(i+offsetMonths)}
                         value={selectedIndex+offsetMonths}
                         key={i+offsetMonths}
                         >
                         <ListItemText primary={<Typography align="center" >{p.speed}{p.name} , R{p.price36}</Typography>} />
                         </ListItem>

                    ))}
                </List>
            </Grid>
            <Grid item md={12} xs={12}>           
                <Typography className={classes.gridHeading , classes.subtitleBackground} color="textSecondary" variant="h6" align="center" >Enterprise Installation: R{installation.price}</Typography>
            </Grid>
        </Grid>
    )
}