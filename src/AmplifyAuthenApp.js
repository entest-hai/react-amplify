import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Amplify from "aws-amplify";
import {AmplifyAuthenticator} from "@aws-amplify/ui-react";
import PrimarySearchAppBar from './components/AppBar';
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

export default function AmplifyAuthenApp() {
  return (
    <div>
    <PrimarySearchAppBar></PrimarySearchAppBar>
    <AmplifyAuthenticator>
    <div>
      My App
      
    </div>
  </AmplifyAuthenticator>
  </div>
  )
};