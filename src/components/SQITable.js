import React, {Component} from 'react'
import Table from 'react-bootstrap/Table'

class SQITable extends Component {

	constructor(props) {
      super(props);
    }

	renderRow(result, index) {
		return (
			<tr key={index} >
			  <td>{result.recordname}</td>
			  <td className={result.pass==0 ? "table-danger" : "table-success"}>{result.pass==1 ? "PASS" : "FAIL"}</td>
			  <td>{Number(result.ch1msqi).toFixed(2)}</td>
			  <td>{Number(result.ch2msqi).toFixed(2)}</td>
              <td>{Number(result.ch3msqi).toFixed(2)}</td>
              <td>{Number(result.ch4msqi).toFixed(2)}</td>
              <td>{Number(result.ch1fsqi).toFixed(2)}</td>
			  <td>{Number(result.ch2fsqi).toFixed(2)}</td>
              <td>{Number(result.ch3fsqi).toFixed(2)}</td>
              <td>{Number(result.ch4fsqi).toFixed(2)}</td>
              <td>{Number(result.rawecgsqi).toFixed(2)}</td>
              <td>{Number(1.0-result.signallostratio).toFixed(2)}</td>

			</tr>
		)
	}

	render() {
		return (

			<Table striped bordered hover size="sm">
			  <thead>
			    <tr >
			      <th>record</th>
			      <th>status</th>
			      <th>mSQICh1</th>
                  <th>mSQICh2</th>
                  <th>mSQICh3</th>
                  <th>mSQICh4</th>
                  <th>fSQICh1</th>
                  <th>fSQICh2</th>
                  <th>fSQICh3</th>
                  <th>fSQICh4</th>
                  <th>rawecgsqi</th>
				  <th>signallost</th>
			    </tr>
			  </thead>
			  <tbody>
			    {this.props.results.map(this.renderRow)}
			  </tbody>
			</Table>

		)
	}
}

export default SQITable
