//import PropTypes from 'prop-types';
import { Wrap, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = () => {
  return (
    <Wrap>
      <Button type='button'><span>Good</span></Button>
      <Button type='button'><span>Neutral</span></Button>
      <Button type='button'><span>Bad</span></Button>
    </Wrap>
  );
};
