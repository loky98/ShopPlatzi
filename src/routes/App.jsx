import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPasaword from "../containers/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
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
                    <Route exact path="my-acount" component={MyAcount} />
                    <Route exact path="create-acount" component={CreateAcount} />
                    <Route exact path="checkout" component={Checkout} />
                    <Route ecact pacth="orders" component={orders} />
                    <Route path={"*"} component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App