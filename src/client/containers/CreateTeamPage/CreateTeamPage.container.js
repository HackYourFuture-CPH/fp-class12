import React, { useState } from 'react';
import { CreateTeamPageLayout } from '../../components/CreateTeamPageLayout/CreateTeamPageLayout.component';

export const CreateTeamPage = () => {
  const [userInput, setUserInput] = useState('');
  //   const { inputLabel, value, ButtonTitle } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ userInput });
  };

  const onChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <CreateTeamPageLayout
      createTeamFormProps={{
        value: 'the value',
        onChange: onSubmit(),
        onSubmit: onChange(),
      }}
    />
  );
};
