import PropTypes from 'prop-types';
import { Wrap, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Wrap>
    {options.map(option => (
      <Button key={option} type="button" onClick={() => onLeaveFeedback(option)}>
        <span>{option}</span>
      </Button>
    ))}
  </Wrap>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
