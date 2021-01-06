import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

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

const MySlider = (props) => {
  const classes = useStyles();

  const onChangeCommitted = props.onChangeCommitted ? props.onChangeCommitted : (event, number) => {
      console.log("default one: ", number);
    }



  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-custom" gutterBottom>
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



const TestSliderView = () => {
  return (
      <div>
        <MySlider mark={"SQI"} defaultValue={80} ></MySlider>
      </div>
  )
}

export default TestSliderView;