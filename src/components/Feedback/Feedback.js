import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

const feedbacks = [
  {name: 'Good'},
  {name: 'Neutral'},
  {name: 'Bad'}
]
console.log([feedbacks]) ; 

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
                this.setState(prevState => ({ bad: prevState.bad + 1 }));
           }  
          
	
           handleFeedback = ({feedbacks}) => {
                this.setState((prevState) => ({
                  [feedbacks]: prevState[feedbacks] + 1,
                }));
              };
        
        // handleFeedback = ()=>{
        //         if (this.setState({good: 1})){
        //                 this.setState(prevState => ({good: prevState.good + 1}));       
        //         } 
        //         if (this.setState({neutral: 1})){
        //                 this.setState(prevState => ({neutral: prevState.neutral + 1}));       
        //         }
        //         if(this.setState({bad: 1})){
        //                 this.setState(prevState => ({bad: prevState.bad + 1 }));       
        //         }
        // }
        // handleFeedback= () => { 
        //         this.setState(prevState => ({
        //                 good: prevState.good + 1,
        //         }));   
        //         this.setState(prevState => ({
        //                 neutral: prevState.neutral + 1,
        //         })); 
        //         this.setState(prevState => ({
        //                 bad: prevState.bad + 1
        //         })); 
        // }      
        countTotalFeedback(){
                return (this.state.good + this.state.neutral + this.state.bad)         
        }
        countPositiveFeedbackPercentage() {
                return (Math.round((this.state.good * 100) / this.countTotalFeedback())||0)               
        }
       render() {
                const total = this.countTotalFeedback();
                //const procent = this.countPositiveFeedbackPercentage();
                return (
                        <div>
                                <h1>Please leave feedback</h1>
                                <FeedbackOptions options={feedbacks} onLeaveFeedback={this.handleFeedback}></FeedbackOptions>
                                <Statistics
                                        good={this.state.good }
                                        neutral={this.state.neutral }
                                        bad={ this.state.bad}
                                        total={total}
                                        positivePercentage={ this.countPositiveFeedbackPercentage()}>
                                        
                                        </Statistics>
                                
                        </div>
        )
}
}

export default Feedback;