import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

function FeedbackOptions ({options, onLeaveFeedback }) {
    return (
		<>
			{options.map((option) => (
				<button
                key={shortid.generate()} 
                type="button" 
                name={option} 
                onClick={onLeaveFeedback}>
					{option}
				</button>
			))}
		</>
	);
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions
