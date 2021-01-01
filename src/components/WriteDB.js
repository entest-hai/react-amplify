import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import { DataStore, Predicates } from '@aws-amplify/datastore'
import {Record} from "./../models";

class WriteDB extends Component {

	async doWriteDB() {
		console.log("write to db");

		await DataStore.save(
		  new Record({
		    name: "1002.csv",
			samplingRate: 500,
			gestationAge: 28,
		  })
		);
	}

	async doReadDB() {
		try {
		  const posts = await DataStore.query(Record);
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
				<div><Button onClick={this.doWriteDB}>WriteDB</Button></div>
				<div><Button onClick={this.doReadDB}>ReadDB</Button></div>
				<div><Button onClick={this.doDeletedDB}>DeleteDB</Button></div>
			</div>
        )
	}
}

export default WriteDB;
