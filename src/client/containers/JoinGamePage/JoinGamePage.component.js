import React, { useState } from 'react';
import QrReader from '../../components/QRReaderComponent/QRReaderComponent';
import Footer from '../../components/FooterComponent/FooterComponent';
import Header from '../../components/Title/Title';
// import SubmitForm from '../../components/SubmitFormSingleInputComponent/Subm/itFormSingleInput';

// Hook

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      // console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      // console.log(error);
    }
  };

  return [storedValue, setValue];
}

export const JoinGamePage = () => {
  const [name, setName] = useLocalStorage('name', 'Bob');

  return (
    <section className="home bodycontainer">
      <Header title="Scan QR-Code" />
      <div className="bodywrapper">
        <p className="smallwhitedetail">
          Scan the QR-code or enter the game code , that your leader gave you.
        </p>
        <QrReader />
        {/* <SubmitForm
          inputLabel="Game code"
          // value="Enter code"
          PlaceholderValue={name}
          ButtonTitle="Join Game"
          onChange={(e) => setName(e.target.value)}
          onSubmit={() => {
            location.href = '../';
          }}
        /> */}
        <input
          type="text"
          className="form-input m-top m-bot"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          className="button-component"
          type="button"
          onClick={() => {
            location.href = '../';
          }}
        >
          Join Game
        </button>
      </div>
      <Footer />
    </section>
  );
};
