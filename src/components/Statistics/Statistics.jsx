import PropTypes from 'prop-types';
import { Text } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    <Text>Good: {good}</Text>
    <Text>Neutral: {neutral}</Text>
    <Text>Bad: {bad}</Text>
    <Text>Total: {total}</Text>
    <Text>Positive feedback: {positivePercentage}%</Text>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
