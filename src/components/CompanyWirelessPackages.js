import React, {useState} from 'react';
import { Paper,List,ListItem,ListItemText, Grid,makeStyles , Typography} from '@material-ui/core';

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
    }
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    };

    return (        
        <Grid container className={classes.root} justify="center" alignItems="center">
            
            <Grid item md={6} xs={6} >
            <Typography className={classes.subtitleBackground} color="textSecondary" variant="h6" align="center" >Over 24 months</Typography>
                <List component="nav" aria-label="">
                    {packages24.map((p, i) => (
                         <ListItem
                         button
                         selected={selectedIndex === i}
                         onClick={event => handleListItemClick(event, i)}
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
                         selected={selectedIndex === i+4}
                         onClick={event => handleListItemClick(event, i+4)}
                         >
                         <ListItemText primary={<Typography align="center" >{p.speed}{p.name} , R{p.price36}</Typography>} />
                         </ListItem>

                    ))}
                </List>
            </Grid>
            <Grid item md={12} xs={12}>
                <Grid container>
                    <Grid item md={6} xs={6}>
                    <Typography className={classes.gridHeading , classes.subtitleBackground} color="textSecondary" variant="h6" align="center" >Enterprise Installation: R{installation.price24}</Typography>
                    </Grid>
                    <Grid item md={6} xs={6}>
                    <Typography className={classes.gridHeading, classes.subtitleBackground} color="textSecondary" variant="h6" align="center" >Enterprise Installation: R{installation.price36}</Typography>
                    </Grid>
                </Grid>
            
            </Grid>
        </Grid>
    )
}