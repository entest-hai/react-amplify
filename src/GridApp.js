import React from 'react';
import {Grid} from '@material-ui/core';
import {AppBar, Toolbar, Typography} from '@material-ui/core';  
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/styles';
import coffeeMakerList from './constants';

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1,
    }
}));

const Header = () => {
    const classes = useStyles();
   return (
    <AppBar position='static'>
        <Toolbar>
            <Typography className={classes.typographyStyles}>
            This is my header
            </Typography>
            <AcUnitRoundedIcon></AcUnitRoundedIcon>
        </Toolbar>
    </AppBar>
   )
}

const CoffeeCard = (props) => {

    const useStyles = makeStyles({
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });
      

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const {avatarUrl, title, subTitle, description, imageUrl} = props;

    return(
        <Card>
            <CardHeader
            avatar={
            <Avatar src={avatarUrl}></Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <ShareIcon />
            </IconButton>
            }
            title={title}
            subheader={subTitle}
            />
            <CardMedia
                style={{height: "150px"}}
                image={imageUrl}
            />    
            <CardContent>
            <Typography variant="body2" component="p">
               {description}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">BUY NOW</Button>
            <Button size="small">OFFER</Button>
            </CardActions>
      </Card>
    )
}

const Content = () => {

    const getCoffeeMakerCard = coffeeMakerObj => {
        return (
            <Grid item xs={12} sm={4} style={{display: 'flex'}}>
                 <CoffeeCard {...coffeeMakerObj} />;
            </Grid>
        )
    }

    return (
        <Grid container spacing={2} alignItems="stretch">
            {coffeeMakerList.map(coffeeMakerObj => getCoffeeMakerCard(coffeeMakerObj))}
        </Grid>
    )
}

const GridApp = () => {
    return (
        <Grid container direction="column">
            <Grid item>
                <Header></Header>
            </Grid>
            <Grid item container>
                <Grid item xs={0} sm={2}></Grid>
                <Grid item xs={12} sm={8}>
                <Content></Content>
                </Grid>
                <Grid item xs={0} sm={2}></Grid>
            </Grid>
        </Grid>
    )
}

export default GridApp;

