import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context';
import { ClientDetails, PackageDetails, InstallationDetails, 
    PaymentDetails, BankDetails, Footer, TermsAndConditions , FormHeader} from '../components';

export default () => {
    const [state, setState ] = useContext(AppContext);

    function handleSubmit(e){
        e.preventDefault();
        setState(state => {return {...state, pullData: true}});
    }

    useEffect(() => {
        console.log('state', state.userDetails)
    }, [state.userDetails]);

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