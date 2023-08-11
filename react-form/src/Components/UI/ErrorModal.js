import React from "react";
import Button from "./Button"
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
return(
    <div>
    <div className={classes.backdrop}/>
    <form className={classes.modal}>
        <header className={classes.header}>
            <h1>{props.title}</h1>
        </header>
        <div className={classes.content}>
            <h3>{props.message}</h3>
        </div>
        <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </form>
    </div>
);
}

export default ErrorModal;