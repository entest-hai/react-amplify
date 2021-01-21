// JAN 17 2021 API.graphql to subsribe to Song(owner: "Minh")
// 1. go to subscriptions.js and add onCreateSongFilter to subscription
// 2. go to Appsync console schema and add onCreateSongFilter to subscription
// 3. write subscribe function using API.graphql and add to useEffect()

import React, {useEffect, useState} from "react";
import Amplify, {API, graphqlOperation} from "aws-amplify";
import * as queries from './../graphql/queries'
import {AmplifySignOut} from "@aws-amplify/ui-react";
import {IconButton, Paper} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { updateSong, createSong } from './../graphql/mutations';
import './../App.css'
import {listSongs} from "./../graphql/queries";
// import {onCreateSongFilter} from "../graphql/subscriptions";
import Button from "@material-ui/core/Button";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

const song = { title: "Song 1",
               description: "We Are Not The World",
               filePath: "file path",
               like: 1,
               owner: "Minh" }

const TestGraphQLView = () => {
       const [songs, setSongs] = useState([])

       useEffect(effect => {
        // subscribe();
        getSongs();
    },[]);

  const writeSongsToDB = async (song) => {
        try {
            await API.graphql(graphqlOperation(createSong, {input: song}));
            console.log("write song to DB successfully");
        } catch(error) {
            console.log("error write song to DB", error);
        }
    }

    // const subscribe = () => {
    //     API.graphql({
    //         query: onCreateSongFilter,
    //         variables: {
    //             owner: "Minh"
    //         }
    //     })
    //         .subscribe({
    //             next: songData => {
    //                 console.log("subscribe songs ", songData.value.data)
    //             }
    //         })
    // }

    const getSongs = async () => {
        const songData = await API.graphql(graphqlOperation(listSongs));
        const songList = songData.data.listSongs.items;
        console.log('song list', songList)
        setSongs(songList)
        console.log(songList)
    }

       const addLike = async (idx) => {
        try {
            const song = songs[idx];
            console.log("update song", song.id)
            const songData = await API.graphql(graphqlOperation(updateSong,
                 {input: {id: song.id,
                    title: "Song 1",
                    like: song.like + 1,
                    filePath: song.filePath,
                    owner: "Hai Tran",
                    description: "Just a test song",
                    _version: song._version}}));

            const songList = [...songs]
            songList[idx] = songData.data.updateSong
            setSongs(songList)

        } catch(error) {
            console.log("error update DB", error);
        }

    };

    return (
        <div className="App">
            <header className="App-header">
                <AmplifySignOut />
                <h2>My App Content</h2>
                <Button variant="contained" color="primary" onClick={() => writeSongsToDB(song)}>Create Song</Button>
            </header>
            <div className="songList">
                {songs.map((song, idx) => {
                    return (
                        <Paper variant="outlined" elevation={2} key={`song${idx}`}>
                            <div className="songCard">
                                <IconButton aria-label="play">
                                    <PlayArrowIcon />
                                </IconButton>
                                <div>
                                    <div className="songTitle">{song.title}</div>
                                    <div className="songOwner">{song.owner}</div>
                                </div>
                                <div>
                                    <IconButton aria-label="like" onClick={() => addLike(idx)}>
                                        <FavoriteIcon />
                                    </IconButton>
                                    {song.like}
                                </div>
                                <div className="songDescription">{song.description}</div>
                            </div>
                        </Paper>
                    );
                })}
            </div>
        </div>
    );
}

export default TestGraphQLView;