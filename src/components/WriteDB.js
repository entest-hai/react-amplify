import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import { DataStore, Predicates } from '@aws-amplify/datastore'
import {Records} from "./../models";

class WriteDB extends Component {

	async doWriteDB() {
		console.log("write to db");

		await DataStore.save(
		  new Records({
		    name: "1004.csv",
			samplingrate: 500,
			GA: 28,
			msqich1: 0.9
		  })
		);
	}

	async doReadDB() {
		try {
		  const posts = await DataStore.query(Records);
		  console.log("Posts retrieved successfully!", JSON.stringify(posts, null, 2));
		} catch (error) {
		  console.log("Error retrieving posts", error);
		}
	}

	async doDeletedDB() {
		DataStore.clear();
	}

	render() {
		return (
			<div>
				<h1>Write to DB</h1>
				<Button onClick={this.doWriteDB}>WriteDB</Button>
				<Button onClick={this.doReadDB}>ReadDB</Button>
				<Button onClick={this.doDeletedDB}>DeleteDB</Button>
			</div>
        )
	}
}

export default WriteDB;
