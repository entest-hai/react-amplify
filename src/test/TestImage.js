import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Container} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {Storage} from "aws-amplify";

export default function CTGView(props) {
  const { match } = props;
  const { params } = match;
  const { recordId } = params;
  const [ctgS3Url, setCtgS3Url] = useState()
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    imageBox: {
      width: "1200px",
      height: "700px",
      backgroundColor: "#e6e6e6",
      overflowX:"auto",
      overflowY:"auto",
      margin: "auto",
      border: "#e6e6e6",
      borderWidth: "2px",
      borderStyle: "solid",
    },
  }));

  const classes = useStyles();

  const fetchCTG = async () => {
    console.log("fetching image for ", recordId)
    const signedURL = await Storage.get(recordId, {expires: 60});
    console.log("fetch image", signedURL)
    setCtgS3Url(signedURL);
  }

  useEffect(effect => {
    fetchCTG()
  }, [])

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.imageBox}>
              <img src={ctgS3Url} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
