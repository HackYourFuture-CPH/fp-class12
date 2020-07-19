import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import QrReader from '../../components/QRReaderComponent/QRReaderComponent';
import Footer from '../../components/FooterComponent/FooterComponent';
import Header from '../../components/Title/Title';
import SubmitForm from '../../components/SubmitFormSingleInputComponent/SubmitFormSingleInput';
import { AppContext } from '../../AppContext';

export const JoinGamePage = () => {
  const [joingamecode, setjoingamecode] = useState('');
  const history = useHistory();

  return (
    <AppContext.Consumer>
      {({ appState, setAppState }) => (
        <section className="home bodycontainer">
          <Header title="Scan QR-Code" />
          <div className="bodywrapper">
            <p className="smallwhitedetail">
              Scan the QR-code or enter the game code , that your leader gave
              you.
            </p>
            <QrReader />
            <SubmitForm
              inputLabel="Game code"
              placeholder="Enter code"
              value={joingamecode}
              buttonTitle="Join Game"
              onChange={(event) => {
                setjoingamecode(event.target.value);
              }}
              onSubmit={(event) => {
                event.preventDefault();
                if (!joingamecode) {
                  return;
                }
                setAppState({
                  ...appState,
                  gameCode: joingamecode,
                });
                history.push(joingamecode);
              }}
            />
          </div>
          <Footer />
        </section>
      )}
    </AppContext.Consumer>
  );
};
