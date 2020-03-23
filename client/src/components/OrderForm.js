import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import { ClientDetails, PackageDetails, InstallationDetails, 
    PaymentDetails, BankDetails, Footer, TermsAndConditions , FormHeader} from '../components';
import axios from 'axios';


export default () => {
    const [state, setState ] = useContext(AppContext);
    // const [,forceUpdate] = useState();

    // useEffect(() => {
    //     setTimeout(forceUpdate, 500);
    //   }, []);
    const [update, setUpdate] = useState();
    
    function handleSubmit(e){
        e.preventDefault();
          
        //open dialog

        // let them check info
        setState(state => {return {...state, pullData: true}});
        
        //console.log("cheers"); 
    }
    useEffect(() => {        
        //console.log('Submitted: ',state.pullData, state);        
        if(state.pullData){

            //setting submit to true only when dialog accept button has been clicked

            setState(state => {return {...state, submit: true}});
            setTimeout(setState(state => {return {...state, pullData: false}}), 2000);
        }
        // console.log("testing: " , state.payDate)
    }, [state.pullData]);

    useEffect(() => {   
        if(state.submit){
            //can call email from here
            
            console.log('Submitted up to date', state);
            axios.post('http://localhost:9000/testApi', state )
                .then(res => {
                    console.log(res)
                    console.log(res.data)
                // .catch(function(error){
                //     console.log(error)
                // });
            });
            setTimeout(setState(state => {return {...state, submit: false}}), 2000);
            //setState(state => {return {...state, pullData: false}});
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