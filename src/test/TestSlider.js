import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import AppBar from './../components/AppBar';
import {Box} from "@material-ui/core/";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Search from "./Search";
import SQISlider from "./Slider";

const MySlider = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            // width: 300,
        },
        margin: {
            height: theme.spacing(3),
        },
    }));

    const marks = [
      {
        value: 0,
        label: '0',
      },
      {
        value: 0.1,
        label: '0.1',
      },
      {
        value: 0.2,
        label: '0.3',
      },
      {
          value: 0.3,
          label: '0.3',
      },
      {
          value: 0.4,
          label: '0.4',
      },
        {
        value: 0.5,
        label: '0.5',
      },
      {
        value: 0.6,
        label: '0.6',
      },
      {
        value: 0.7,
        label: '0.7',
      },
      {
          value: 0.8,
          label: '0.8',
      },
      {
          value: 0.9,
          label: '0.9',
      },
      {
        value: 1.0,
        label: '1.0',
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
                defaultValue={props.defaultValue ? props.defaultValue : 0.5}
                aria-labelledby="discrete-slider-custom"
                min={0.0}
                max={1.0}
                step={0.05}
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
                onChangeCommitted={(event, number) => onChangeCommitted(event, number)}
            />
        </div>
    );
}

const TestSliderView = () => {
    return (
        <div>
            <AppBar></AppBar>
            <Box pl={2} pt={2}>
                {/*<MySlider mark={"SQI"} defaultValue={80} ></MySlider>*/}
                <SQISlider ></SQISlider>
            </Box>
            <Box pl={2} pt={2}>
                <Search ></Search>
            </Box>
        </div>
    )
}

export default TestSliderView;