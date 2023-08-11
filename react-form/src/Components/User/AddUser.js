import React, {useState} from 'react';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){ 
            setError({
                title: 'Invalid Input',
                message: 'Enter a valid name & age'
            });
            return;
        }

        if(+enteredAge < 1){
            setError({
                title: 'Invalid Age',
                message: 'Age must be greater than zero'
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);

        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <form className={classes.input} onSubmit={addUserHandler}>
        <label htmlFor='username'>User Name</label>
        <input id='username' type='text'value= {enteredUsername} onChange={usernameChangeHandler}></input>
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number'value= {enteredAge} onChange={ageChangeHandler}></input>
        <Button type='submit'>Add User </Button>
    </form>
    </div>
);
};

export default AddUser;