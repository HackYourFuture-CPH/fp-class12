import React from 'react';
import PropTypes from 'prop-types';
import './Title.styles.css';

import icon from '../../assets/images/logo/logo-treasure-hunt-brown.svg';

export default function HeaderTitle({ title }) {
  const content = (
    <h2>
      <img src={icon} alt="App Icon" />
      <span>{title}</span>
    </h2>
  );
  return <div className="header-heading">{content}</div>;
}

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
