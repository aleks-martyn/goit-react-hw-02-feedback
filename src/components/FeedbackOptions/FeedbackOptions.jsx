import PropTypes from 'prop-types';
import { Wrap, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Wrap>
    {options.map(btn => (
      <Button key={btn} type="button" onClick={() => onLeaveFeedback(btn)}>
        <span>{btn}</span>
      </Button>
    ))}
  </Wrap>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
