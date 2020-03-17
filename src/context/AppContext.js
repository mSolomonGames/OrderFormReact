import React, { useState } from 'react';
import moment from 'moment';

const AppContext = React.createContext([{}, () => {}]);
const eNow = new Date();
const eMoment = moment(eNow);



const initialState = {
    applicationType: 'individual',
    connectionType: 'fibre',
    paymentType:'eft',
    acceptedTandCs: false,
    payDate: moment().add('months', 1).date(1).format('LL'),
    acceptedMandate: false,
}


const AppContextProvider = (props) => {
    const [state, setState] = useState(initialState);

    return (
        <AppContext.Provider value={[state, setState]}>
            {props.children}
        </AppContext.Provider>
    );
}

export { AppContext, AppContextProvider };