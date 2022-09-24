import React, { useState, useRef } from 'react'
import Wrapper from '../Helpers/Wrapper';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.Module.css';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    // const [enteredUsername , setEnteredUsername] = useState('');
    // const [enteredAge , setEnteredAge] = useState('');
    const [error, setError] = useState();
    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const entereduserAge = ageInputRef.current.value;
        if(enteredName.trim().length === 0 || entereduserAge.trim().length === 0){
            setError({
                title:'Invalid Input',
                message:'Please Enter a valid name & age (non-empty value)'
            })
            return;
        }
        if(+entereduserAge<1){
            setError({
                title:'Invalid Input',
                message:'Please Enter a valid age (>0)'
            })
            return;
        }
        props.onAddUser(enteredName, entereduserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        // setEnteredUsername('');
        // setEnteredAge('');
    }
    // const usernameChangeHandler = (event) =>{
    //     setEnteredUsername(event.target.value);
    // }
    // const ageChangeHandler = (event) =>{
    //     setEnteredAge(event.target.value);
    // }
    const errorHandler = () =>{
        setError(null);
    }
  return (
    <Wrapper>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>UserName</label>
                <input type="text" id="username" ref={nameInputRef} />
                <label htmlFor='age'>Age(Year)</label>
                <input type="number" id="age" ref={ageInputRef} />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    </Wrapper>
  )
}

export default AddUser