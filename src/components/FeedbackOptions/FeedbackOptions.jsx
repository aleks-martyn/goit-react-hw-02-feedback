import PropTypes from 'prop-types';

export const FeedbackOptions = () => {
  return (
    <form>
      <label>
        <input type="radio" name="feedback" value="good" />
        Good
      </label>
      <label>
        <input type="radio" name="feedback" value="neutral" />
        Neutral
      </label>
      <label>
        <input type="radio" name="feedback" value="bad" />
        Bad
      </label>
    </form>
  );
};
