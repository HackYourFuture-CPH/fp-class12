import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Title.styles.css';

import icon from '../../assets/images/logo/logo-treasure-hunt-brown.svg';
import shareicon from '../../assets/images/icons/share-icon.svg';

export default function HeaderTitle({ title }) {
  const content = (
    <h2>
      <span>
        <Link to="/">
          <img src={icon} alt="App Icon" />
        </Link>
      </span>
      <span>{title}</span>
      <span>
        <Link to="share-game-page">
          <img src={shareicon} alt="Share Icon" />
        </Link>
      </span>
    </h2>
  );
  return <div className="header-heading">{content}</div>;
}

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
