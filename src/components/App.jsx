import { Component } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = btn => {
    this.setState(state => ({ [btn]: state[btn] + 1 }));
  };

  countTotalFeedback = () => {
  //  const values = Object.values(this.state);
  //  let total = values.map(value => (total += value));
  //  return total;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const buttons = Object.keys(this.state);
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttons}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
          />
        </Section>
      </Container>
    );
  }
}
