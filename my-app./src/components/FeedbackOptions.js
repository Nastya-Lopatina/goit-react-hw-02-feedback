import React from 'react';
import PropTypes from 'prop-types';

function FeedbackOptions ({options, onLeaveFeedback }) {
    return options.map(option => (
        <button 
            type = 'button'
            key = {option}
            name={option}
            onClick = {() => onLeaveFeedback(options) }>
            {option}
        </button>
    ))
}
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions
