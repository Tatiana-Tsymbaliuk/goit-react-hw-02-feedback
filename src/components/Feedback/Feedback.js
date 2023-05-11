import React from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification'


class Feedback extends React.Component{
state = {
  good: 0,
  neutral: 0,
  bad: 0
}   	
        handleFeedback = e => {
               const name = e.currentTarget.name
               this.setState(prevState=>({
                [name]: prevState[name] + 1
               }))
              }     
        countTotalFeedback(){
                return (this.state.good + this.state.neutral + this.state.bad)         
        }
        countPositiveFeedbackPercentage() {
                return (Math.round((this.state.good * 100) / this.countTotalFeedback())||0)               
        }
       render() {
                const array = Object.keys(this.state);
                const total = this.countTotalFeedback();
                const procent = this.countPositiveFeedbackPercentage();
                return (
                        <div>
                                <Section title="Please leave feedback">
                                <FeedbackOptions options={array} onLeaveFeedback={this.handleFeedback}></FeedbackOptions>
                                </Section>
                                {total===0 ? (<Notification message="There is no feedback"/>):
                                (<Section title="Statistics">
                                <Statistics
                                        good={this.state.good }
                                        neutral={this.state.neutral }
                                        bad={ this.state.bad}
                                        total={total}
                                        positivePercentage={procent}>        
                                </Statistics>
                                </Section>)}
                        </div>
        );
                 }
}

export default Feedback;

