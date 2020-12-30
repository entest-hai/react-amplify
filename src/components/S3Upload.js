import React, {Component} from 'react'
import { Storage, StorageProvider } from 'aws-amplify';
import {Button} from 'react-bootstrap'

const url = "https://bln9cf30wj.execute-api.ap-southeast-1.amazonaws.com/default/pythontest?filename=s3://amplifyjsd3cc991802ec42ba87ee6b5e6d71ca98232542-dev/public/"

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
				// update result and result table
				this.state.results.push(sqiAPIResult)
				this.props.onUpdatedResults(this.state.results);
		})
		  .catch(error => console.log('error', error));
  }

  onFormSubmit(e){
      e.preventDefault() // Stop form submit
	  let file = this.state.file
	  let fileName = file.name
	  if (!file) {
		  alert("Choose a valid file ");
	  } else {
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
	          <button type="submit" className="btn btn-primary" >Upload</button>
	        </form>
		</div>
     )
    }
}

export default S3Upload
