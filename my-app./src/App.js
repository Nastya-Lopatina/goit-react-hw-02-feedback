import React,{ Component } from 'react';

import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {

  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };


  addFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
   // console.log(feedback)
  };

countTotalFeedback = () => {
    const {good, neutral, bad } = this.state;
    const amountFeedback = good + neutral + bad;
     //console.log(amountFeedback)
    return amountFeedback;
   
  };

  countPositiveFeedbackPercentage = () => {
    let amount = this.countTotalFeedback();
    const {good} = this.state;
   // console.log (Math.round( (good * 100) / amount));
    return Math.round( (good * 100) / amount);

  };


 render() {
  const {good, neutral, bad} = this.state;
  const total = this.countTotalFeedback();
  const positivePercentage = this.countPositiveFeedbackPercentage()
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.addFeedback}/>
      </Section>

      <Section title={'Statistics'}>
        
        { total === 0 ?(
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good = {good}
            neutral = {neutral}
            bad = {bad}
            total = {total}
            positivePercentage = {positivePercentage}
          />
        )}
      </Section>
    </>
  );
}
}
export default App;