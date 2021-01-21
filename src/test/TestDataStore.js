// 19 JAN 2021 Test DataStore to subscribe and delete MessageTable
// which created from Amplify Admin UI with _version auto generated
// 1. Message table messages = [] so it works when no props passed
// 2. Datastore query get message with "Delete: False"
// 3. API.Graphql get message with all and construct customized query
// 3.1. Goto queries.js and add Model and Queries you wanted
// 3.2 Code and write await API.graphql({
// 			query: listMessages,
// 			variables: {
// 				limit: 100
// 			}
// 		});
// 4. Datastore fetch works well but subscribe not stable ==> GraphQL

import React, {useEffect, useState} from "react";
import { DataStore } from '@aws-amplify/datastore';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { API } from 'aws-amplify';
import {Message, Song} from "../models";
import * as queries from './../graphql/queries';
import {makeStyles} from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {listMessages} from "./../graphql/queries";
import {onCreateMessage} from "../graphql/subscriptions";
import Amplify from 'aws-amplify';
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);
// Amplify.Logger.LOG_LEVEL = 'DEBUG';

const MessageTable = (props) => {
	const messages = props.messages ? props.messages : []
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
			  <TableCell align="center">ID</TableCell>
			  <TableCell align="center">sender</TableCell>
			  <TableCell align="center">body</TableCell>
			  <TableCell align="center">version</TableCell>
			  <TableCell align="center">creationDate</TableCell>
			</TableRow>
		  </TableHead>
		  <TableBody>
			{messages.map((row) => (
			  <TableRow key={row.id}>
				<TableCell component="th" scope="row"> {row.id} </TableCell>
				<TableCell align="center">{row.senderName}</TableCell>
				<TableCell align="center">{row.body}</TableCell>
				<TableCell align="center">{row._version}</TableCell>
				<TableCell align="center">{row.creationDate}</TableCell>
			  </TableRow>
			))}
		  </TableBody>
		</Table>
	  </TableContainer>
	);
  }

const MessageTableView  = () => {
    const [messages, setmessages] = useState([])

    useEffect(() => {
        getMessages();
//         observeSongs();
        // subscribeQL();
        subscribeDS();
        // getMessagesGrqphQL();
        // filterMessagesGrqphQL();
    }, [])

    const getMessages = async () => {
        const messages = await DataStore.query(Message);
        console.log("datastore get message", messages);
        setmessages(messages);
    }

    const getMessagesGraphQL = async () => {
    	const messages = await API.graphql({
			query: listMessages,
			variables: {
				limit: 100
			}
		});
    	setmessages(messages.data.listMessages.items);
    	console.log(messages.data.listMessages.items);
	}

	const filterMessagesGrqphQL = async () => {
    	let filter = {
    		senderName: {
    			eq: "Hai"
			}
		}
    	const messages = await API.graphql({
			query: listMessages,
			variables: {
				limit: 100,
				filter: filter
			}
		});
    	// setmessages(messages.data.listMessages.items);
    	console.log(messages.data.listMessages.items);
	}

	const subscribeDS = () => {
    	const subscription = DataStore.observe(Message).subscribe((msg) => {
    		console.log("datastore sub", msg)
			getMessages();
    		// getMessagesGrqphQL()
		})
	}

    const subscribeQL = () => {
        API.graphql({
            query: onCreateMessage
        })
            .subscribe({
                next: data => {
                    console.log("subscribe message ", data)
					getMessagesGraphQL()
                }
            })
    }
    
        const observeSongs = () => {
        console.log("observe song table ")
        const subscription = DataStore.observe(Song).subscribe(msg => {
            console.log("element", msg.element);
        });
    }
        
    const writeMessage = async () => {
        const message = new Message(
        {
			id: "1001",
            senderName: "Hai",
            body: "It does not work",
            creationDate: "2021-01-19Z"
        })
    try {
      await DataStore.save(message);
      console.log("Post saved successfully!");
    } catch (error) {
      console.log("Error saving post", error);
    }
    }
    
    const observeMessage = () => {
        console.log("observe message")
     
    }

    const writeSong = async () => {
    	const song = new Song(
    		{ title: "Song 4",
               description: "Rain rain go away",
               filePath: "file path",
               like: 30,
               owner: "Tran" })
	    try {
    		await  DataStore.save(song);
    		console.log("successfully write song to db");
		} catch (error) {
    		console.log("not able to write db ", error)
		}
	}

    return (
     <Box>
         <Button variant="contained" color="primary" onClick={() => writeMessage()}>Send Message</Button>
         <Button variant="contained" color="secondary" onClick={() => observeMessage()}>Observe Message</Button>
         <Button variant="contained" color="default" onClick={() => getMessagesGraphQL()}>FetchDB Message</Button>   
         <MessageTable messages = {messages} ></MessageTable>
     </Box>
    )
}

export  default MessageTableView;