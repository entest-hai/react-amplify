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

const TestSliderView = () => {
    return (
        <div>
            <AppBar></AppBar>
            <Box pl={2} pt={2} display="flex">
                <SQISlider ></SQISlider>
            </Box>
            <Box pl={2} pt={2} display="flex">
                <Search ></Search>
            </Box>
        </div>
    )
}

export default TestSliderView;