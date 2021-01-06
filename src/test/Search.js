import {fade, makeStyles} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import React from "react";

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
            // width: "300px",
            margin: "2px",
            color: "white",
        },
    }));

const Search = (props) => {
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

export default Search;