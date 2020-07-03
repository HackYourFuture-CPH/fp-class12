import React from 'react';
import HeaderTitle from '../../components/Title/Title';
import ButtonComponent from '../../components/SubmitButton/SubmitButton.js';
import FooterComponent from '../../components/FooterComponent/FooterComponent.js';
import ErrorLogo from '../../assets/images/background/flag404.png';
import '../../App.css';
import './404Page.styles.css';

export const ErrorPage = () => {
  return (
    <div className="bodycontainer error-page-container">
      <HeaderTitle title="Error 404" />
      <div className="bodywrapper">
        <div className="error-logo-container">
          <img src={ErrorLogo} alt="Error Logo" />
          <h3>Oh no!</h3>
          <p>
            We are usually a treasure chest, but we could not find what you are
            looking for.
          </p>
        </div>
        <ButtonComponent
          buttonTitle="Try again"
          onClick={() => window.history.go(-1)}
        />
      </div>
      <FooterComponent />
    </div>
  );
};
