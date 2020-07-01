import React, { useState } from 'react';
import { CreateTeamPageLayout } from '../../components/CreateTeamPageLayout/CreateTeamPageLayout.component';
import { AppContext } from '../../AppContext';

export const CreateTeamPageContainer = () => {
  const [userInput, setUserInput] = useState('');
  //   AppContext.

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
                // TODO: Navigate to next page, or show user feedback
              });
            },
          }}
        />
      )}
    </AppContext.Consumer>
  );
};
