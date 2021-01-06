import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import AppBar from './../components/AppBar';
import {Box} from "@material-ui/core/";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import {Search} from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";

const MySlider = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: 500,
        },
        margin: {
            height: theme.spacing(3),
        },
    }));

    const marks = [
        {
            value: 0,
            label: '0°C',
        },
        {
            value: 20,
            label: '20°C',
        },
        {
            value: 37,
            label: '37°C',
        },
        {
            value: 100,
            label: '100°C',
        },
    ];

    const classes = useStyles();
    const onChangeCommitted = props.onChangeCommitted ? props.onChangeCommitted : (event, number) => {
        console.log("default one: ", number);
    }
    return (
        <div className={classes.root}>
            <Typography id="discrete-slider-custom" gutterBottom align="center">
                {props.mark ? props.mark : "Mark"}
            </Typography>
            <Slider
                defaultValue={props.defaultValue ? props.defaultValue : 30}
                aria-labelledby="discrete-slider-custom"
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
                onChangeCommitted={(event, number) => onChangeCommitted(event, number)}
            />
        </div>
    );
}

const SearchView = (props) => {
    const enterKeyCode = 13;
    const useStyles = makeStyles((theme) => ({
        root: {
            width: 500,
            display: "flex",
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.black, 0.10),
            // backgroundColor: '#757ce8',
            paddingLeft: "0px",
            paddingRight: "0px",
            marginTop: "2px",
            marginBottom: "2px",
        },
        searchIcon: {
            alignSelf: "flex-end",
            marginBottom: "2px",
            color: "white",
        },
        searchInput: {
            width: "500px",
            margin: "2px",
            color: "white",
        },
    }));
    const classes = useStyles();
    const onChange = (event) => {
        if(event.keyCode == enterKeyCode){
            if (props.onSubmitted) {
                props.onSubmitted(event.target.value);
            }
        }

        // Do query and update table
    }
    return (
        // <Input
        //     color={'primary'}
        //     fullWidth={true}
        //     id="input-with-icon-adornment"
        //     startAdornment={
        //         <InputAdornment position="start">
        //             <SearchIcon />
        //         </InputAdornment>}
        //     onKeyDown={event => {onChange(event)}}
        // />

        <div className={classes.root}>
            <SearchIcon className={classes.searchIcon}>
            </SearchIcon>
            <TextField
                className={classes.searchInput}
                label={"Record"}
                variant={"standard"}
                onKeyDown={event => onChange(event)}
                InputProps={{}}
            >
            </TextField>
        </div>
    )
}

const TestSliderView = () => {
    return (
        <div>
            <AppBar></AppBar>
            <Box pl={2} pt={2}>
                <MySlider mark={"SQI"} defaultValue={80} ></MySlider>
            </Box>
            <Box pl={2} pt={2} width={320}>
                <SearchView ></SearchView>
            </Box>
        </div>
    )
}

export {
    TestSliderView, SearchView,
}