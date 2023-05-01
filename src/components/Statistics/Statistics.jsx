import PropTypes from 'prop-types';
import { Text } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <Text>Good: {good}</Text>
      <Text>Neutral: {neutral}</Text>
      <Text>Bad: {bad}</Text>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
