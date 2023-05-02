import PropTypes from 'prop-types';
import { Text } from './Statistics.styled';

export const Statistics = props => {
  const labels = Object.keys(props);

  return (
    <div>
      {labels.map(label => (
        <Text key={label}>
          {label}: {props[label]}
        </Text>
      ))}
    </div>
  );
};

Statistics.propTypes = {
  props: PropTypes.objectOf(
    PropTypes.shape({
      goog: PropTypes.number,
      neutral: PropTypes.number,
      bad: PropTypes.bad,
      total: PropTypes.number,
      positivePercentage: PropTypes.number,
    })
  ),
};
