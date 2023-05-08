import React from 'react';



const FeedbackOptions = ({options, onLeaveFeedback}) => {
        
return (<div>{options.map(({name})=>(      
        <button 
        name = {name}
        key={name}
        onClick={onLeaveFeedback}
        className='FeedbackBtn'>{name}</button>      
))}</div>)
}

export default FeedbackOptions;


