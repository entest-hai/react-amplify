import logo from './logo.svg';
import './App.css';
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import S3Upload from './components/S3Upload'
import MyNavBar from './components/MyNavBar'
import SignOutButton from './components/SignOutButton'
import SQITable from './components/SQITable'
import WriteDB from './components/WriteDB'
import Amplify from 'aws-amplify';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'
import awsconfig from './aws-exports';


Amplify.configure(awsconfig);

class FemomSQIApp extends  React.Component {

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
		<SQITable results={this.state.results}></SQITable>
		<S3Upload onUpdatedResults={this.onUpdatedResults.bind(this)}></S3Upload>
		
		
	    </div>

	  );
  }
}

export default withAuthenticator(FemomSQIApp) ;
