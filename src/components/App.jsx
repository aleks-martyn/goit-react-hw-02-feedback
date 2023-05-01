import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Container>
        <FeedbackOptions />
      </Container>
    );
  }
}
