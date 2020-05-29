import React from 'react';

function ButtonComponent({ buttonTitle }) {
  return (
    <div>
      <button className="button-component" type="submit">
        {buttonTitle}
      </button>
    </div>
  );
}

export default ButtonComponent;
