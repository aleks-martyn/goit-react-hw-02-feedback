import PropTypes from 'prop-types';
import { Wrap } from './FeedbackOptions.styled';

export const FeedbackOptions = () => {
  return (
    <Wrap>
      <button type='button'><span>Good</span></button>
      <button type='button'><span>Neutral</span></button>
      <button type='button'><span>Bad</span></button>
    </Wrap>
  );
};
