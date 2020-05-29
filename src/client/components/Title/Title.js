import React from 'react';
import PropTypes from 'prop-types';
import './Title.styles.css';
import icon from '../../assets/images/logo.png';

export default function HeaderTitle({ title }) {
  const content = (
    <h2>
      <img src={icon} alt="App Icon" />
      {title}
    </h2>
  );
  return <div className="header-heading">{content}</div>;
}

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
