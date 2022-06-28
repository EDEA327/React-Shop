import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import  Layout1 from '@containers/Layout1';
import Home from '@pages/Home';
import Login1  from '@pages/Login1';
import RecoveryPassword from '@pages/RecoveryPassword';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import CreateAccount from '@pages/CreateAccount';
import CheckOut from '@pages/CheckOut';
import NotFound from '@pages/NotFound';
import Orders from '@pages/Orders';
import '@styles/global.css';
import AppContext from '@context/AppContext';
import useInitialState from '../hooks/useInitialState';
const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value= {initialState} >
            <BrowserRouter>
                <Layout1>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login1 />} />
                        <Route path='/recovery-password' element={<RecoveryPassword />} />
                        <Route path='/send-email' element={<SendEmail />} />
                        <Route path='/new-password' element={<NewPassword />} />
                        <Route path='/account' element={<MyAccount />} />
                        <Route path='/signup' element={<CreateAccount />} />
                        <Route path='/checkout' element={<CheckOut />} />
                        <Route path='/orders' element={<Orders />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Layout1>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

export default App;
