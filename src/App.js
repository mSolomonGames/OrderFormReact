import React from 'react';
import { makeStyles } from '@material-ui/core';
import { OrderForm, Header } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    //margin: theme.spacing(5),
    //width: "100px",
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(20),
      marginRight: theme.spacing(20),
      marginBottom: theme.spacing(5),
    },
    
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <OrderForm />
    </div>
  );
}

export default App;
