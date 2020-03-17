import React from 'react';
import { ClientDetails, PackageDetails, InstallationDetails, 
    PaymentDetails, BankDetails, Footer, TermsAndConditions , FormHeader} from '../components';

export default () => (
    <>
        <FormHeader />
        <ClientDetails />
        <PackageDetails />
        {/* <InstallationDetails /> */}
        <PaymentDetails />
        <TermsAndConditions />
        {/* <BankDetails /> */}
        {/* <Footer /> */}
    </>
)