import React from 'react'
import PropTypes from 'prop-types';
import './ButtonComponent.styles.css';  



export default function ButtonComponent({buttonTitle}) {
    return (
        <div>
            <button className="button-component" type="submit">{buttonTitle}</button>
        </div>
    )
}

ButtonComponent.protoTypes = {
    buttonTitle: PropTypes.string.isRequired
}