import React, { useState } from 'react';
import SingleInputFormComponent from '../../components/SingleInputFormComponent/SingleInputFormComponent';

export const FormContainer = (props) => {
    const [userInput, setUserInput] = useState('');
    const { inputLabel, value, ButtonTitle } = props;

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({userInput});
    }

    const onChange = (e) => {
        setUserInput(e.target.value);
    }

    return( 
        <SingleInputFormComponent inputLabel={inputLabel} value={value} ButtonTitle={ButtonTitle} onSubmit={onSubmit} onChange={onChange}/>
    )
} 