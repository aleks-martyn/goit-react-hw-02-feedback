import PropTypes from 'prop-types';
import { Wrap, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options }) => {
  return (
    <Wrap>
      {options.map(btn => (
        <Button key={btn} type="button">
          <span>{btn}</span>
        </Button>
      ))}
    </Wrap>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};
