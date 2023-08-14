import React, { useState, useRef } from 'react';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [error, setError] = useState('');

    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeNameInputRef = useRef();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredUsername = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        const collegeName = collegeNameInputRef.current.value;

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || collegeName.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Enter a valid name, age & college name'
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Age must be greater than zero'
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge, collegeName);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        collegeNameInputRef.current.value = '';
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <form className={classes.input} onSubmit={addUserHandler}>
                <label htmlFor='username'>User Name</label>
                <input id='username' type='text' ref={nameInputRef}></input>
                <label htmlFor='age'>Age (Years)</label>
                <input id='age' type='number' ref={ageInputRef}></input>
                <label htmlFor='username'>College Name</label>
                <input id='collegename' type='text' ref={collegeNameInputRef}></input>
                <Button type='submit'>Add User </Button>
            </form>
        </div>
    );
};

export default AddUser;