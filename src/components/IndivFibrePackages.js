import React, {useState} from 'react';
import { Paper,List,ListItem,ListItemText, Grid,makeStyles , Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(4),
        padding: theme.spacing(0),
        
    },
    packageContainer: {
        marginBottom: theme.spacing(4),
        padding: theme.spacing(2)
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
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [selectedIndexInstall, setSelectedIndexInstall] = React.useState(0);

    const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    };

    const handleListItemClickInstall = (event, index) => {
        setSelectedIndexInstall(index);
        };

    return (        
        <Grid container className={classes.root} justify="center" alignItems="center">
            
            <Grid item md={12} xs={12}>
                <Typography className={classes.mainHeading} color="textSecondary" align="center" variant="h4">Fibre Packages</Typography>
                <List className={classes.listOptions} component="nav" aria-label="">
                    {packages.map((p, i) => (
                         <ListItem
                         
                         button
                         selected={selectedIndex === i}
                         onClick={event => handleListItemClick(event, i)}
                         value={i}
                         >
                         <ListItemText primary={<Typography align="center" >{p.speed} {p.name} , R{p.price}</Typography>}/>
                         </ListItem>

                    ))}
                </List>
                               
            </Grid>
            <Grid item xs={12}>
                <Grid container className={classes.gridHeading} justify="center"> 
                        <Grid item md={4} xs={4}>
                            <Typography color="textSecondary" variant="h5" align="center" >Installation Package</Typography>
                        </Grid>
                        <Grid item md={4} xs={4}>
                            <Typography color="textSecondary" variant="h5" align="center" >Time Period</Typography>
                        </Grid>
                        <Grid item md={4} xs={4}>
                            <Typography color="textSecondary" variant="h5" align="center" >Pricing</Typography>
                        </Grid>
                        
                </Grid>
                <Grid container justify="center">
                <Grid item md={12} xs={12}>
                        <List className={classes.listOptions} component="nav" aria-label="secondary mailbox folder">
                    {installation.map((p, i) => (
                         <ListItem
                         button
                         selected={selectedIndexInstall === i}
                         onClick={event => handleListItemClickInstall(event, i)}
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
                </Grid>
            </Grid>
            
        </Grid>
    )
}