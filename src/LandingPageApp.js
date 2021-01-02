import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisist';

const useStyles = makeStyles((theme) => ({
    root : {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
}));

export default function LandingPageApp() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CssBaseline></CssBaseline>
            <Header></Header>
            <PlaceToVisit></PlaceToVisit>
        </div>
        
    )
}