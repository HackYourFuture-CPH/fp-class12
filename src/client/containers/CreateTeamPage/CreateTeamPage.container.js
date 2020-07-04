import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CreateTeamPageLayout } from '../../components/CreateTeamPageLayout/CreateTeamPageLayout.component';
import { AppContext } from '../../AppContext';

export const CreateTeamPageContainer = () => {
  const [userInput, setUserInput] = useState('');

  const history = useHistory();

  return (
    <AppContext.Consumer>
      {({ appState, setAppState }) => (
        <CreateTeamPageLayout
          createTeamFormProps={{
            value: userInput,
            onChange: (event) => {
              setUserInput(event.target.value);
            },
            onSubmit: (event) => {
              event.preventDefault();
              if (!userInput) {
                return;
              }
              setAppState({
                ...appState,
                teamName: userInput,
              });
              history.push(
                '/Game/0xodiehfr8474533hcehche37837920bjsc8273jcjh7/',
              );
            },
          }}
        />
      )}
    </AppContext.Consumer>
  );
};
