import React, { useState } from 'react';
import SingleInputFormComponent from '../../components/SingleInputFormComponent/SingleInputFormComponent';

export const FormContainer = (props) => {
    const [userInput, setUserInput] = useState('');
    const { inputLabel, value, ButtonTitle } = props;

    onSubmit = (e) => {
        setUserInput(e.target.value);
        e.preventDefault();
    }

    return( 
        <SingleInputFormComponent inputLabel={inputLabel} value={value} ButtonTitle={ButtonTitle} onSubmit={this.onSubmit}/>
    )
} 