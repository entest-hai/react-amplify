import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { DataStore } from '@aws-amplify/datastore';
import {HeartRate, Record, Song} from "../models";
import {API, graphqlOperation, Storage} from "aws-amplify";
import {createSong, createRecord} from "../graphql/mutations";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {v4 as uuidv4} from 'uuid';
import AttachmentIcon from "@material-ui/icons/Attachment";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const sqiApiUrl = "https://bln9cf30wj.execute-api.ap-southeast-1.amazonaws.com/default/pythontest?filename=s3://amplifyjsdb22d608f3e94d85852ea891d3a9bbca114347-dev/public/"
const fhrApiUrl = "https://bln9cf30wj.execute-api.ap-southeast-1.amazonaws.com/default/femomfhr?filename=s3://amplifyjsdb22d608f3e94d85852ea891d3a9bbca114347-dev/public/"
//
var globalBufferSongs = []
var globalBufferHeartRates = []

function compare (beata, beatb){
    if (beata.time > beatb.time) {
        return -1
    }
    if (beata.time < beatb.time) {
        return 1
    }
    return 0;
}
    // Write heart rate to DB
const writeHRToDB = async (heartRateRecord) => {
    const beat = new HeartRate(
        {
            mHR: [90,90,90],
            fHR: [150,152,153],
            mSQI: 1.0,
            fSQI: 1.0,
            time: [(new Date()).toISOString(),(new Date()).toISOString(),(new Date()).toISOString()],
            desc: JSON.stringify({mHR:[90,90,90],fHR:[150,151,150]})
        }
    )

    try {
      await DataStore.save(heartRateRecord ? heartRateRecord : beat);
      console.log("Post saved successfully!");
    } catch (error) {
      console.log("Error saving post", error);
    }
}
// Call SQI API
function callSQIAPI(fileName, props) {
      var apiURL = sqiApiUrl + fileName;
      // perform API call to get SQI
      fetch(apiURL)
        .then(response => response.json())
        .then(result => {
              console.log(result);
      })
        .catch(error => console.log('error', error));
}

// Call FHR API
function callFHRAPI(fileName) {
    var apiURL = fhrApiUrl + fileName;
      // perform API call to get SQI
      fetch(apiURL)
        .then(response => response.json())
        .then(result => {
              console.log(result);
              // write heart rate to DB
               const heartRateRecord = new HeartRate({
                mHR: result.mHR,
                fHR: result.fHR,
                mSQI: 1.0,
                fSQI: 1.0,
                time: [(new Date()).toISOString()]
            })
            writeHRToDB(heartRateRecord)
      })
        .catch(error => console.log('error', error));
}


// S3UploadForm
const S3UploadForm = (props) => {
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
                contentType: 'image/jpg'
            })
            .then (result => {
                console.log("uploaded to s3");
                // callSQIAPI(fileName);
                callFHRAPI(fileName);


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
                Upload
            </Button>
        </div>

        </div>
    )
}

const BasicTable = (props) => {
    const useStyles = makeStyles({
      table: {
        minWidth: 650,
      },
    });
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell align="right">mHR</TableCell>
            <TableCell align="right">fHR</TableCell>
            <TableCell align="right">mSQI</TableCell>
            <TableCell align="right">fSQI</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.time}
              </TableCell>
              <TableCell align="right">{row.mHR}</TableCell>
              <TableCell align="right">{row.fHR}</TableCell>
              <TableCell align="right">{row.mSQI}</TableCell>
              <TableCell align="right">{row.mSQI}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const ObserveDBTableView = () => {
     // UseEffect when data changes table is updated
    const useStyles = makeStyles(()=>({
        root: {
            backgroundColor: "blue",
        },
    }));

   // Table data
    const [songArray, setsongArray] = useState([]);
    const [heartRateArray, setHeartRateArray] = useState([]);

   useEffect(effect => {
        // fetchSongs();
       // fetchHeartRate();
    },[]);

    // Fetch data from DB
    const fetchSongs = async () => {
        console.log("Fetch song from database")
        try {
            globalBufferSongs = await DataStore.query(Song);
            setsongArray([...globalBufferSongs]);
        } catch (error) {
            console.log("ERROR not able to fetch DB", error);
        }
    }

    // Observe a DB table
    const observeSongs = () => {
        console.log("observe song table ")
        const subscription = DataStore.observe(Song).subscribe(msg => {
            // console.log(msg.model, msg.opType, msg.element);
            // console.log("mode", msg.model)
            // console.log("type", msg.opType)
            console.log("element", msg.element);
            globalBufferSongs.push(msg.element);
            setsongArray([...globalBufferSongs]);
        });
    }

    // Observe heart rate
     const observeHeartRate = () => {
        console.log("observe heartrate table ")
        const subscription = DataStore.observe(HeartRate).subscribe(msg => {
            // console.log("element", msg.element);
            for (var heartRateRow of parseOneHeartRate(msg.element)) {
                globalBufferHeartRates.push(heartRateRow);
            }
            // console.log(globalBufferHeartRates);
            globalBufferHeartRates.sort(compare);
            setHeartRateArray([...globalBufferHeartRates]);
        });
    }

    // Write to DB
    const writeToDB = async () => {
       const song = { title: "Song 4",
               description: "We Are The World",
               filePath: "file path",
               like: 30,
               owner: "DB" }
       try {
            await API.graphql(graphqlOperation(createSong, {input: song}));
            console.log("write song to DB successfully");
        } catch(error) {
            console.log("error write song to DB", error);
        }
    }

    // Send ECG data
    const sendECG = async () => {
        const file = window.location.origin + "/static/1002.jpg";
        console.log("send ECG to S3", file);
        // load a one minute ECG package
        // send package to S3
        Storage.put("haitest.jpg", file, {
            contentType: 'image/jpg'
        })
        .then (result => {
            console.log("Uploaded raw ecg to s3")
        })
        .catch(err => console.log(err));

        // call FHR api

        // write result to HeartRate db table
        writeHRToDB();
    }

    // parse heart rate object when fetching from database
    const parseOneHeartRate = (obj) => {
        var heartRateArray = []
        for (var i=0; i< obj.mHR.length; i++) {
                heartRateArray.push({
                    id: uuidv4(),
                    time: obj.time ? obj.time[0] : "NaN",
                    mHR: obj.mHR[i],
                    fHR: obj.fHR[i],
                    mSQI: obj.mSQI,
                    fSQI: obj.fSQI,
                })
            }
        return heartRateArray;
    }

    const parseHeartRate = (queryObjects) => {
        var heartRateArray = []
        for (var obj of queryObjects) {
            for (var i=0; i< obj.mHR.length; i++) {
                heartRateArray.push({
                    id: uuidv4(),
                    time: obj.time ? obj.time[0] : "NaN",
                    mHR: obj.mHR[i],
                    fHR: obj.fHR[i],
                    mSQI: obj.mSQI,
                    fSQI: obj.fSQI,
                })
            }
        }
       return heartRateArray
    }

    // fetch heart rate
    const fetchHeartRate = async () => {
        console.log("Fetch heart rate from database")
        try {
            const queryObjects = await DataStore.query(HeartRate);
            globalBufferHeartRates = parseHeartRate(queryObjects);
            globalBufferHeartRates.sort(compare);
            setHeartRateArray([...globalBufferHeartRates]);
        } catch (error) {
            console.log("ERROR not able to fetch DB", error);
        }
    }

    // sort by time stamp
    return (
        <Box>
            {/*<Button disabled="true" variant="contained" color="primary" onClick={() => fetchSongs()}>*/}
            {/*    Fetch HR*/}
            {/*</Button>*/}
            <Button variant="contained" color="secondary" onClick={() => sendECG()}>
                Send ECG
            </Button>
            {/*<Button disabled="true" variant="contained" color="default" onClick={() => observeHeartRate()}>*/}
            {/*    Observe HR*/}
            {/*</Button>*/}
            <S3UploadForm>
            </S3UploadForm>
            {/*<BasicTable rows={heartRateArray}>*/}
            {/*</BasicTable>*/}
        </Box>
    )
}
export  default ObserveDBTableView;