// 04 JAN 2020 Theme to change default value such as "primary" color
// breakpoint for grid layout 
// palete for color 

import React, {useState} from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {Switch, Button, Typography, Paper, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { blue, green, purple, grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => (
    {
        root: {
            height: "100vh",
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        },
    
        button: {
            backgroundColor: 'blue',
            [theme.breakpoints.up('sm')]: {
                backgroundColor: 'purple'
            }       
        }
    }
));

const Header = () => {
    return(
        <h1>This is a a header</h1>
    )
}

const ThemeApp = () => {
    const [darkMode, setDarkMode] = useState(true);
    const theme = createMuiTheme ({
        palette: {
          primary: grey,
          type: darkMode ? "dark" : "light",
        }, 
        status: {
          danger: 'orange',
        }, 
      })

    const classes = useStyles(); 
    return (
       <div>
           <ThemeProvider theme={theme}>
            <Paper style={{height: "100vh"}}>
                <Grid container direction="column">
                    <Typography variant="h1">
                        This is my App
                    </Typography>
                    <Button className={classes.button}>
                        Click
                    </Button>
                    <Switch checked={darkMode} onChange={() => {
                        setDarkMode(!darkMode);
                    }}>

                    </Switch>
                </Grid> 
            </Paper>
       </ThemeProvider>
       </div>
    )
}

export default ThemeApp;