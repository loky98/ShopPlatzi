import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Layout from "_containers/Layout";
import Home from "_pages/Home";
import Login from "_pages/Login";
import RecoveryPasaword from "_pages/RecoveryPassword";
import SendEmail from "_pages/SendEmail";
import NewPassword from "_pages/NewPassword";
import MyAccount from "_pages/MyAccount";
import CreateAccount from "_pages/CreateAccount";
import Checkout from "_pages/Checkout";
import Orders from "_pages/Orders";
import NotFound from "_pages/NotFound";

import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/recovery-password" component={RecoveryPasaword} />
                    <Route exact path="send-email" component={SendEmail} />
                    <Route exact path="new-password" component={NewPassword} />
                    <Route exact path="my-acount" component={MyAccount} />
                    <Route exact path="create-acount" component={CreateAccount} />
                    <Route exact path="checkout" component={Checkout} />
                    <Route ecact pacth="orders" component={Orders} />
                    <Route path={"*"} component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App