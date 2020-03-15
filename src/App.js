import React from 'react';
import { makeStyles } from '@material-ui/core';
import { OrderForm, Header } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    //margin: theme.spacing(5),
    //width: "100px",
    [theme.breakpoints.up('md')]: {
      margin: 0,
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
