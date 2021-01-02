import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AmplifyAuthenticator} from "@aws-amplify/ui-react";
import PrimarySearchAppBar from './components/AppBar';
import FemomSQITable from './components/FemomSQITable';
import ChildComponent from './components/ChildComponent';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

export default function FemomSQIApp() {

	const [records, setRecords] = React.useState([])

	return (
	<div>
		<PrimarySearchAppBar></PrimarySearchAppBar>
			<AmplifyAuthenticator>
				<div>
					<FemomSQITable  records={records}></FemomSQITable>
					<ChildComponent onClick={value => {
						setRecords([...value]);
					}}></ChildComponent>
					
				</div>
			</AmplifyAuthenticator>
	</div>
	);

}


