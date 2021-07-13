import React,{ Component } from 'react';

import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  addFeedback = feedback => {
     this.setState(state =>({
       [feedback]:state[feedback] + 1,
     }));
  };

  countTotalFeedback = () => {
    const {good,neutral,bad } = this.state;
    const amount = good + neutral + bad;
    return amount;

  };

  countPositiveFeedbackPercentage = () => {
    const amount = this.countTotalFeedback();
    const {good} = this.state;
    return Math.round((good * 100) / amount )

  };

render() {
  const {good, neutral, bad} = this.state;
  return (
  <> 
    <Section title = "Please leave feetback">
          <FeedbackOptions 
          options={Object.keys(this.state)} 
          onLeaveFeedback={this.addFeedback}/>
    </Section>

    {this.countTotalFeedback() === 0 ?
      (

    <Notification 
        message="No feedback given">
    </Notification>) :
    
    (<Section title = "Statistics" >
        <Statistics>
              good = {good}
              neutral = {neutral}
              bad = {bad}
              total = {this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
          </Statistics> 
      </Section>)}

</>
    
  );
}
 
}



export default App;