import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AmplifyAuthenticator} from "@aws-amplify/ui-react";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AttachmentIcon from '@material-ui/icons/Attachment';
import { Storage } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore'
import { Record } from "./models";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AppBar from './components/AppBar';

// Configure AWS 
Amplify.configure(awsconfig);

// S3Bucket URL 
const url = "https://bln9cf30wj.execute-api.ap-southeast-1.amazonaws.com/default/pythontest?filename=s3://amplifyjsdb22d608f3e94d85852ea891d3a9bbca114347-dev/public/"

// Array to store SQITable 
var results = []

// Write to DB using datastore 
async function doWriteDB(record) {
    console.log("write to db", (new Date()).toISOString());
    await DataStore.save(record);
}

// Call SQI API 
function callSQIAPI(fileName, props) {
      var apiURL = url + fileName;
      // perform API call to get SQI
      fetch(apiURL)
        .then(response => response.json())
        .then(result => {
              // write to DB
              let record = new Record({
                name: result.recordname,
                samplingRate: 500,
                gestationAge: 28,
              mSQICh1: result.rawmsqich1,
              mSQICh2: result.rawmsqich2,
              mSQICh3: result.rawmsqich3,
              mSQICh4: result.rawmsqich4,
              fSQICh1: result.fsqich1,
              fSQICh2: result.fsqich2,
              fSQICh3: result.fsqich3,
              fSQICh4: result.fsqich4,
              rawECGSQI: result.rawmsqich1,
              signalLost: result.signallostratioch1,
              createdDate: (new Date()).toISOString(),
              description: "Test"
              })
              
              doWriteDB(record);
              // update result and result table
              results.push(result);
              props.onClick(results);
      })
        .catch(error => console.log('error', error));
}

// Component to upload data to S3 
const ChildComponent = (props) => {
	const useStyles = makeStyles(() => ({
		grow: {
		  flexGrow: 1,
		},
		uploadButton: {  
			display: 'flex',
			justifyContent:'center',
			alignItems:'center',
		},
		chooseFileButton: {
	
		}
	  }));
    const classes = useStyles();
    let textInput = null;
    const [file, setFile] = React.useState()
    
    const onSubmit = (event) => {
        let uploadFile = file;
        if (!uploadFile) {
            alert("Choose a valid file ");
        } else {
            let fileName = uploadFile.name
            Storage.put(fileName, uploadFile, {
                contentType: 'image/png'
            })
            .then (result => {
                callSQIAPI(fileName, props);
            })
            .catch(err => console.log(err));
        }
    }

    const onChange = (event) => {
        setFile(event.target.files[0]);
    }

    return (
        <div>
            <input 
            hidden = {true}
            accept="text/csv"
            id="contained-button-file"
            multiple
            type="file"
            onChange = {event => {onChange(event)}}
            ref={(input) => {textInput = input; }}
            />

        <div className={classes.chooseFileButton}>
            <Box pt={2}>
                <Button
                variant="contained"
                color="primary"
                onClick={() => textInput.click()}>
                <AttachmentIcon />
                Files
                </Button>
            </Box>
        </div>  

        <div className={classes.uploadButton}>
        <Button
            variant="contained"
            color="primary"
            onClick = {event => {onSubmit(event)}}>
            <CloudUploadIcon></CloudUploadIcon>    
            Upload</Button>
        </div>

        </div>
    )
}

// Component for presenting SQI table 
const FemomSQITable = (props) => {
	const useStyles = makeStyles((theme) => ({
		table: {
		minWidth: 650,
	  },
	  tableCellPass: {
		  backgroundColor: '#0CB5F3',
	   },
	   tableCellFail: {
		backgroundColor: '#f7a8b0',
	 },
	}));
	const classes = useStyles();
	return (
		  <TableContainer component={Paper}>
		<Table className={classes.table} aria-label="simple table">
		  <TableHead>
			<TableRow>
			  <TableCell>record</TableCell>
			  <TableCell align="center">status</TableCell>
			  <TableCell align="center">mSQICh1</TableCell>
			  <TableCell align="center">mSQICh2</TableCell>
			  <TableCell align="center">mSQICh3</TableCell>
			  <TableCell align="center">mSQICh4</TableCell>
			  <TableCell align="center">mSQICh1</TableCell>
			  <TableCell align="center">fSQICh2</TableCell>
			  <TableCell align="center">fSQICh3</TableCell>
			  <TableCell align="center">fSQICh4</TableCell>
			  <TableCell align="center">signallost</TableCell>
			</TableRow>
		  </TableHead>
		  <TableBody>
			{props.records.map((row) => (
			  <TableRow key={row.recordname}>
				<TableCell component="th" scope="row"> {row.recordname} </TableCell>
				<TableCell align="center" className={row.pass==1 ? classes.tableCellPass : classes.tableCellFail}>{row.pass==1 ? "PASS" : "FAIL" }</TableCell>
				<TableCell align="center">{Number(row.rawmsqich1).toFixed(2)}</TableCell>
				<TableCell align="center">{Number(row.rawmsqich2).toFixed(2)}</TableCell>
				<TableCell align="center">{Number(row.rawmsqich3).toFixed(2)}</TableCell>
				<TableCell align="center">{Number(row.rawmsqich4).toFixed(2)}</TableCell>
				<TableCell align="center">{Number(row.fsqich1).toFixed(2)}</TableCell>
				<TableCell align="center">{Number(row.fsqich2).toFixed(2)}</TableCell>
				<TableCell align="center">{Number(row.fsqich3).toFixed(2)}</TableCell>
				<TableCell align="center">{Number(row.fsqich4).toFixed(2)}</TableCell>
				<TableCell align="center">{Number(1.0-row.signallostratioch1).toFixed(2)}</TableCell>
			  </TableRow>
			))}
		  </TableBody>
		</Table>
	  </TableContainer>
	);
  }
  

// FemomSQIApp 
export default function FemomSQIReactApp() {
	const [records, setRecords] = React.useState([])
	return (
	<div>
		<AppBar></AppBar>
			<AmplifyAuthenticator>
				<div >
					<FemomSQITable  records={records}></FemomSQITable>
					<ChildComponent onClick={value => {
						setRecords([...value]);
					}}></ChildComponent>	
				</div>
			</AmplifyAuthenticator>
	</div>
	);
}
