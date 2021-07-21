import React from 'react';
import PropTypes from 'prop-types';
//import shortid from 'shortid';

const FeedbackOptions = ({options, onLeaveFeedback }) => {
    return (
		<>
			{options.map((option) => (
				<button
                key={option} 
                type='button' 
                name={option} 
                onClick={() => {
					onLeaveFeedback(option);
				  }} >
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
