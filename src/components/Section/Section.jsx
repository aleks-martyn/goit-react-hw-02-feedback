import PropTypes from 'prop-types';
import { Wrap } from './Section.styled';

export const Section = ({ title, children }) => (
  <Wrap>
    <h2>{title}</h2>
    {children}
  </Wrap>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
