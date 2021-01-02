
import React, {useEffect, useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Collapse, Icon, IconButton, Toolbar} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link as Scroll} from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
        

    },
    appbar: {
        background: 'none',
        fonFamily: 'Nunito',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto'
    },
    colorText: {
        color: '#5AFF3D'
    },
    title: {
        color: '#fff',
        fontSize: '4.5rem',
    },
    container: {
        textAlign: 'center',
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '4rem',
    }

}));

export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    })

    return(
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}> My<span className={classes.colorText}>Island.</span> </h1>
                    <SortIcon></SortIcon>
                </Toolbar>
            </AppBar>
            
               <Collapse 
               in={checked}
               {...(checked ? { timeout: 1000}: {})}
               >
               <div className={classes.container}>
                    <h1 className={classes.title}>
                        Welcome to <br></br> My <span className={classes.colorText}>Island.</span>
                    </h1>
                    <Scroll to="place-to-visit" smooth='true'>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown}></ExpandMoreIcon>
                        </IconButton>
                    </Scroll>
                </div>
               </Collapse>
            
        </div>
    )
}