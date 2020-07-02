import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import awsmobile from "./aws-exports";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-client";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import Amplify from "aws-amplify";

const cache = new InMemoryCache();

// const client = new AWSAppSyncClient({
//   url: awsmobile.aws_appsync_graphqlEndpoint,
//   region: awsmobile.aws_appsync_region,
//   auth: {
//     type: awsmobile.aws_appsync_authenticationType,
//     credentials: awsmobile.oauth,
//   },
//   cache,
// });

Amplify.configure(awsmobile);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
