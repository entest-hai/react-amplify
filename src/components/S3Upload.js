import React, {Component} from 'react'
import { Storage, StorageProvider } from 'aws-amplify';
import {Button} from 'react-bootstrap'
import { DataStore, Predicates } from '@aws-amplify/datastore'
import {Record} from "./../models";

const url = "https://bln9cf30wj.execute-api.ap-southeast-1.amazonaws.com/default/pythontest?filename=s3://amplifyjsdb22d608f3e94d85852ea891d3a9bbca114347-dev/public/"

class S3Upload extends Component {

	constructor(props) {
      super(props);

      this.state = {
		results: [],
        file:null
	};
		this.onFormSubmit = this.onFormSubmit.bind(this)
	 	this.onChange = this.onChange.bind(this)
		this.callSQIAPI = this.callSQIAPI.bind(this)
		this.doWriteDB = this.doWriteDB.bind(this)
 }

	 async doWriteDB(record) {
		 console.log("write to db", (new Date()).toISOString());
		 await DataStore.save(record);
	 }

	onChange(e) {
      this.setState({file:e.target.files[0]})
    }

  callSQIAPI(fileName){
	  console.log("Uploaded successfully");
		var apiURL = url + fileName
		console.log(apiURL)
		var result = {record:fileName, pass:"N/A",
					  ch1msqi:0.0, ch2msqi:0.0, ch3msqi:0.0, ch4msqi:0.0,
					  ch1fsqi:0.0, ch2fsqi:0.0, ch3fsqi:0.0, ch4fsqi:0.0,
					  rawecgsqi:0.0, signallostratio:0.0}

		// perform API call to get SQI
		fetch(apiURL)
		  .then(response => response.json())
		  .then(sqiAPIResult => {

				result = sqiAPIResult
				console.log(sqiAPIResult)
				// write to DB
				let record = new Record({
	  		    name: result.recordname,
	  			samplingRate: 500,
	  			gestationAge: 28,
				mSQICh1: result.ch1msqi,
				mSQICh2: result.ch2msqi,
				mSQICh3: result.ch3msqi,
				mSQICh4: result.ch4msqi,
				fSQICh1: result.ch1fsqi,
				fSQICh2: result.ch2fsqi,
				fSQICh3: result.ch3fsqi,
				fSQICh4: result.ch4fsqi,
				rawECGSQI: result.rawecgsqi,
				signalLost: result.signallostratio,
			    createdDate: (new Date()).toISOString(),
			    description: "Test"
	  		  })
				this.doWriteDB(record)

				// update result and result table
				this.state.results.push(sqiAPIResult)
				this.props.onUpdatedResults(this.state.results);
		})
		  .catch(error => console.log('error', error));
  }

  onFormSubmit(e){
      e.preventDefault() // Stop form submit
	  let file = this.state.file
	  if (!file) {
		  alert("Choose a valid file ");
	  } else {
		let fileName = file.name
		  Storage.put(fileName, file, {
			  contentType: 'image/png'
		  })
		  .then (result => {
			  this.callSQIAPI(fileName);
		  })
		  .catch(err => console.log(err));
	  }
    }

  render() {
      return (
        <div>
			<form onSubmit={this.onFormSubmit}>
	          <input type="file" className="form-control" onChange={this.onChange} />
	          <button type="submit" className="btn btn-primary " >Upload</button>
	        </form>
		</div>
     )
    }
}

export default S3Upload
