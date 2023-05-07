import React from 'react';

class Feedback extends React.Component{
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
        handleFeedbackGood = () => {
                this.setState(prevState => ({good: prevState.good + 1}));
        }
        handleFeedbackNeutral = () => {
                this.setState(prevState => ({neutral: prevState.neutral + 1}));
        }
        handleFeedbackBad = () => {
                this.setState(prevState => ({bad: prevState.bad + 1}));
        }
        // countTotalFeedback(){
        //         const { good, neutral, bad } = this.props;
        //         return good+neutral+bad
                
        // }
 
        render() {
                return (
                        <div>
                                <h1>Please leave feedback</h1>
                                <div>
                                <button onClick={this.handleFeedbackGood}>Good</button>
                                <button onClick={this.handleFeedbackNeutral}>Neutral</button>
                                <button onClick={this.handleFeedbackBad}>Bad</button>
                                </div>
                                <h2>Statistics</h2>
                                <ul>
                                        <li>Good: {this.state.good}</li>
                                        <li>Neutral: {this.state.neutral}</li>
                                        <li>Bad: {this.state.bad}</li>
                                        <li>Total: { }</li>
                                        <li>Positiv Feedback: {}</li>
                                </ul>
                        </div>
        )
}
}

export default Feedback;