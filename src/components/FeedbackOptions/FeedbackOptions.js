import React from 'react';
import './FeedbackOptions.css'

const FeedbackOptions = ({options, onLeaveFeedback}) => {
     
return (<div>{options.map(option=>(      
        <button 
        type="button"
         name = {option}
        key={option}
        onClick={onLeaveFeedback}
        className="FeedbackBtn">{option}</button>      
))}</div>)
}

export default FeedbackOptions;


