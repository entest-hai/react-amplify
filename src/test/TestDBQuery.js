// 05 JAN 2020 Query DynamoDB
// 1. Use Datastore with filter
// 2. Use Graphql with filter
import React, {useEffect, useState} from "react";
import Amplify, {API, graphqlOperation} from "aws-amplify";
import { DataStore } from '@aws-amplify/datastore';
import awsconfig from "../aws-exports";
import {listRecords} from "../graphql/queries";
import FemomSQITable from "../components/FemomSQITable";
import {Song, Record} from "../models";
import SQISlider from "./Slider";
import Box from '@material-ui/core/Box';
import Search from "./Search";
Amplify.configure(awsconfig);

async function testDatstoreQuery() {
    const records = await DataStore.query(Record);
}

const TestDBQueryView = () => {
    const initSqi = 0.8;
    const [sqi, setSqi] = useState(initSqi);
    const [recordName, setRecordName] = useState("");
    const [records, setRecords] = useState([]);

    const filterRecords = async (number) => {
        let sqiFilter = {
        mSQICh1: {
            gt: number
        }
    };
        try {
            // Graphql query
            // const recordData = await API.graphql(graphqlOperation(listRecords));
            // const recordData = await API.graphql({ query: listRecords });
            const recordData = await API.graphql({ query: listRecords, variables: { filter: sqiFilter}});
            const dbRecords = recordData.data.listRecords.items;
            // DataStore query
            // const dbRecords = await DataStore.query(Record, c => c.name("eq", "A202.csv"));
            setRecords(dbRecords);
            // console.log(dbRecords);
        } catch (error) {
            console.log("error on fetching songs", error)
        }
    };

    const searchRecords = async (recordName) => {
        console.log("search for record name ", recordName);
        let filter = {
        name: {
            eq: recordName
            }
        };
        try {
            const recordData = await API.graphql({ query: listRecords, variables: { filter: filter}});
            const dbRecords = recordData.data.listRecords.items;
            setRecords(dbRecords);
        } catch (error){
            console.log("ERROR on fetch a record", error);
        }
    }

    useEffect(effect => {
        filterRecords(sqi);
        // searchRecords(recordName);
    },[sqi]);

    return (
        <div>
            <Box pt={2} pl={2} pr={2} display="flex"
              // justifyContent="center"
              // alignItems="center"
              minHeight="5vh"
                ><SQISlider onCommitted={number => {setSqi(number)}}></SQISlider>
            </Box>
            <Box pl={2} pr={2} display="flex">
                <Search onSubmitted={name => {searchRecords(name)}}></Search>
            </Box>
            <FemomSQITable records={records}></FemomSQITable>
        </div>
    )
}

export default TestDBQueryView;