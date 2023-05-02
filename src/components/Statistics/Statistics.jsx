import PropTypes from 'prop-types';
import { Text } from './Statistics.styled';

export const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const buttons = Object.keys(props);
  
  return (
    <div>
      {buttons.map(btn => (<Text key={btn}>{btn}: {props[btn]}</Text>))}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

