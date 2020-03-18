import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context';
import { ClientDetails, PackageDetails, InstallationDetails, 
    PaymentDetails, BankDetails, Footer, TermsAndConditions , FormHeader} from '../components';

export default () => {
    const [state, setState ] = useContext(AppContext);

    function handleSubmit(e){
        e.preventDefault();
        console.log("Handle submit changing state after this");
        setState(state => {return {...state, pullData: true}});
        setTimeout(function(){
            setState(state => {return {...state, pullData: false}});
        } , 1000);
        //setState(state => {return {...state, pullData: false}});
    }
    
    useEffect(() => {
        
        console.log('Pull data changed', state.pullData);
        
    }, [state.pullData]);


    useEffect(() => {        
        console.log('state all', state);
        console.log('state user', state.userDetails);
        console.log('state comp', state.compDetails);
    }, [state.userDetails, state.compDetails]);

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