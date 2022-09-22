import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.Module.css';

const AddUser = () => {
    const [enteredUsername , setEnteredUsername] = useState('');
    const [enteredAge , setEnteredAge] = useState('');
    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }
    const usernameChangeHandler = (event) =>{
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) =>{
        setEnteredAge(event.target.value);
    }
  return (
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>UserName</label>
            <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler} />
            <label htmlFor='age'>Age(Year)</label>
            <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />
            <Button type='submit'>Add User</Button>
        </form>
    </Card>
  )
}

export default AddUser