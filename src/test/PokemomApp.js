// 04 JAN 2020 
// Grid layout with pokemon card 
// Grid item for one card 
// Grid container for array of cards 
import React, {useState} from 'react';
import { Route, Switch } from "react-router-dom";
import history from "./history";
import {AppBar,
   Toolbar,
   Grid,
   CardContent,
   Card,
   CircularProgress,
    CardMedia,
   Typography} from '@material-ui/core';
import {fade, makeStyles} from '@material-ui/core/styles';
import mockData from './mockData';
import SearchIcon from '@material-ui/icons/Search';
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => (
    {
    pokedexContainer: {
        paddingTop: "20px",
        paddingLeft: "50px",
        paddingRight: "50px",
    },
    cardMedia: {
        margin: "auto",
    },
    cardContent: {
        textAlign: "center",
    },
    searchContainer: {
        display: "flex",
        backgroundColor: fade(theme.palette.common.white, 0.15),
        paddingLeft: "20px",
        paddingRight: "20px",
        marginTop: "5px",
        marginBottom: "5px"
    },
    searchIcon: {
        alignSelf: "flex-end",
        marginBottom: "5px",
    },
    searchInput: {
        width: "200px",
        margin: "5px",
    }
}));

const Pokemon = (props) => {
    const {match} = props; 
    const {params} = match; 
    const {pokemonId} = params; 

    return <div>
        {`This is the pokemon page for pokemon #${pokemonId}`}
    </div>
}

const PokemomApp = () => {

    const [pokemonData, setpokemonData] = useState(mockData);
    const classes = useStyles();
    
    const getPokemonCard = (pokemonId) => {
        console.log(pokemonData[`${pokemonId}`]);
        const {id, name} = pokemonData[`${pokemonId}`];
        const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
        return (
            <Grid item xs={12} sm={4} key={pokemonId}>
                <Card onClick={() => history.push(`/${pokemonId}`)}>
                    <CardMedia 
                        className={classes.cardMedia}
                        image={sprite}
                        style={{width: "130px", height: "130px"}}
                        >
                    </CardMedia>
                    <CardContent className={classes.cardContent}>
                        <Typography>
                            {`${id}. ${name}`}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <div className={classes.searchContainer}>
                        <SearchIcon className={classes.searchIcon}>
                        </SearchIcon>
                        <TextField className={classes.searchInput}
                        label={"Pokemon"}
                        variant={"standard"}
                        >
                        </TextField>
                    </div>
                </Toolbar>
            </AppBar>
            {pokemonData ? (
                <Grid container spacing={2} className={classes.pokedexContainer}>
                    {Object.keys(pokemonData).map((pokemonId) => getPokemonCard(pokemonId))}
                </Grid>
            ) : (
                <CircularProgress></CircularProgress>
            )}
        </div>
    )
}


// const PokemomAppRoute = () => (
//     <Switch>
//       <Route exact path="/" render={(props) => <PokemomApp {...props} />} />
//       <Route
//       exact
//       path="/:pokemonId"
//       render={(props) => <Pokemon {...props} />}
//     />
//     </Switch>
//   );
//

export default PokemomApp;
