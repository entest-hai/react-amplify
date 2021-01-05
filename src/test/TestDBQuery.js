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
Amplify.configure(awsconfig);

async function testDatstoreQuery() {
    const records = await DataStore.query(Record);
}

const TestDBQueryView = () => {
    let filter = {
        name: {
            eq: "A202.csv" // filter priority = 1
            }
        };
    const [records, setRecords] = React.useState([])
    const fetchRecords = async () => {
        try {
            // Graphql query
            // const recordData = await API.graphql(graphqlOperation(listRecords));
            // const recordData = await API.graphql({ query: listRecords });
            const recordData = await API.graphql({ query: listRecords, variables: { filter: filter}});
            const dbRecords = recordData.data.listRecords.items;

            // DataStore query
            // const dbRecords = await DataStore.query(Record, c => c.name("eq", "A202.csv"));

            //
            setRecords(dbRecords);
            console.log(dbRecords);
        } catch (error) {
            console.log("error on fetching songs", error)
        }
    };

    useEffect(effect => {
        fetchRecords();
    }, []);

    return (
        <FemomSQITable records={records}></FemomSQITable>
    )
}

export default TestDBQueryView;