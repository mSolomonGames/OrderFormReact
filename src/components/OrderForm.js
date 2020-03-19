import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import { ClientDetails, PackageDetails, InstallationDetails, 
    PaymentDetails, BankDetails, Footer, TermsAndConditions , FormHeader} from '../components';



export default () => {
    const [state, setState ] = useContext(AppContext);
    // const [,forceUpdate] = useState();

    // useEffect(() => {
    //     setTimeout(forceUpdate, 500);
    //   }, []);
    const [update, setUpdate] = useState();
    
    function handleSubmit(e){
        e.preventDefault();
        console.log("Handle submit changing state after this");        
        setState(state => {return {...state, pullData: true}});
        //setTimeout(setState(state => {return {...state, pullData: false}}), 1000);
        console.log("cheers"); 
    }
    useEffect(() => {        
        console.log('state',state.pullData, state);        
        if(state.pullData){
            setState(state => {return {...state, submit: true}});
            
        }
        // console.log("testing: " , state.payDate)
    }, [state.pullData]);

    useEffect(() => {   
        if(state.submit){
            //can call email from here
            
            console.log('Submitted up to date', state);
        }
        
        
    }, [state.submit]);

    // useEffect(() => {        
    //     console.log('Updated Component', state);
        
        
    // }, [state.fibreDetails, state.debitInstructionDetails, state.bankDetials]);


    // useEffect(() => {        
    //     console.log('state all', state);
    //     // console.log('state user', state.userDetails);
    //     // console.log('state comp', state.compDetails);
    // }, [state.acceptedTandCs]);

    return (
    <form onSubmit={e => handleSubmit(e)}>
        <FormHeader />
        <ClientDetails />
        <PackageDetails />
        {/* <InstallationDetails /> */}
        <PaymentDetails />
        <TermsAndConditions />
        {/* <BankDetails /> */}
        {/* <Footer /> */}
    </form>)
}