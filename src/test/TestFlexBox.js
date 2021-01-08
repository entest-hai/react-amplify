import React from "react";
import clsx from 'clsx';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    flexboxcontainer: {
        display: "flex",
    },
    flexboxitem: {
        width: "200px",
        margin: "10px",
        border: "3px",
        backgroundColor: "#61dafb",
    },
    flexboxitem1: {
        minHeight: "100px",
    },
    flexboxitem2: {
        minHeight: "200px",
    },

    flexboxitem3: {
        minHeight: "300px",
    },
});

const CSSFlexBox = () => {
    const classes = useStyles();
    return (
        <div className={classes.flexboxcontainer}>
            <div className={clsx(classes.flexboxitem, classes.flexboxitem1)}></div>
            <div className={clsx(classes.flexboxitem, classes.flexboxitem2)}></div>
            <div className={clsx(classes.flexboxitem, classes.flexboxitem3)}></div>
        </div>
    )
}

export default CSSFlexBox;