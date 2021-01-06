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

export default function DiscreteSlider(props) {
  const classes = useStyles();

  const onChange = (event, number) => {
    }

  const onChangeCommitted = (event, number) => {
      props.onCommitted(number);
  }

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-custom" align="center" gutterBottom>
          SQI range
      </Typography>
      <Slider
        defaultValue={0.8}
        aria-labelledby="discrete-slider-custom"
        min={0.0}
        max={1.0}
        step={0.05}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={(event, number) => onChange(event,number)}
        onChangeCommitted={(event, number) => onChangeCommitted(event, number)}
      />
    </div>
  );
}
