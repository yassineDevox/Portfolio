import React from "react";
import { ReactDOM } from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from 'react-apollo';
import {Route,Router,IndexRoute,hashHistory} from "react-router";
import App from "./app";
import HomePage from "./pages/home";

//to bind apollo with react 
const client = new ApolloClient({});

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={HomePage} />
                </Route>
            </Router>
        </ApolloProvider>
    )
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);