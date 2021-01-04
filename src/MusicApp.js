// 01 JAN 2021 should use ToDo(_version) when deleting or updating a record 
// Datastore versus graphsql  

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Paper, IconButton } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { listSongs, listTodos } from './graphql/queries';
import { updateSong, createSong } from './graphql/mutations';
import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';
import { Song } from "./models";

const todo = { name: "My first todo",
              description: "Hello world!" };

const song = { title: "Song 3",
               description: "We Are The World",
               filePath: "file path",
               like: 30, 
               owner: "Ha Tran" }

Amplify.configure(awsconfig);

function MusicApp() {
    const [songs, setSongs] = useState([])
    const [taks, setTasks] = useState([])

    useEffect(() => {
        
        // writeSongsToDB(song)
        fetchSongs();
    }, []);

    const writeSongsToDB = async (song) => {
        try {
            await API.graphql(graphqlOperation(createSong, {input: song}));
            console.log("write song to DB successfully");
        } catch(error) {
            console.log("error write song to DB", error);
        }
    }

    const writeTaskToDB = async (task) => {
        try {
            await API.graphql(graphqlOperation(createTodo, {input: task}));
            console.log("Write task to DB successfully")
        } catch (error) {
            console.logo("error write task to DB", error)
        }
    }


    const fetchSongs = async () => {
        try {
            const songData = await API.graphql(graphqlOperation(listSongs)); 
            const songList = songData.data.listSongs.items; 
            console.log('song list', songList)
            setSongs(songList)
        } catch (error) {
            console.log("error on fetching songs", error)
        }

    };

    const fetchTasks = async () => {
        try {
            const taskData = await API.graphql(graphqlOperation(listTodos)); 
            const taskList = taskData.data.listTodos.items; 
            console.log('song list', taskList)
            setTasks(taskList)
        } catch (error) {
            console.log("error on fetching songs", error)
        }

    };

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

export default MusicApp;
