import React from 'react';

import PropTypes from 'prop-types';

export default function ButtonComponent({ buttonTitle }) {
  return (
    <div>
      <button className="button-component" type="submit">
        {buttonTitle}
      </button>
    </div>
  );
}
ButtonComponent.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
};
