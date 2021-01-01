import logo from './logo.svg';
import './App.css';
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import S3Upload from './components/S3Upload'
import MyNavBar from './components/MyNavBar'
import SignOutButton from './components/SignOutButton'
import SQITable from './components/SQITable'
import WriteDB from './components/WriteDB'
import Amplify, { Storage } from 'aws-amplify';
import {AmplifySignOut, AmplifyS3Album, withAuthenticator} from '@aws-amplify/ui-react'
import {SignOut} from 'aws-amplify-react'
import './components/amplify-authenticator.css'
import awsconfig from './aws-exports';
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react';


Amplify.configure(awsconfig);

class App extends  React.Component {

	constructor(props) {
      super(props);

	  this.state = {
		  results: []
	  }
	}

	onUpdatedResults(updatedResults) {

		console.log(updatedResults);

		this.setState({
			results: updatedResults
		})
	}

  render() {
	  return (

	    <div className="App">
		{/*
			<SQITable results={this.state.results}></SQITable>
			<S3Upload onUpdatedResults={this.onUpdatedResults.bind(this)}></S3Upload>
			<AmplifySignOut  className="btn my-2 my-sm-0"></AmplifySignOut>
		*/}
         <MyNavBar></MyNavBar>
		 <div className="btn my-2 my-sm-0">
			 <AmplifySignOut></AmplifySignOut>
		 </div>
	    </div>

	  );
  }
}

export default withAuthenticator(App) ;
