import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => (
  <>
    <ul className={style.box}>
      <li className={style.options}> Good:{good} </li>
      <li className={style.options}> Neutral:{neutral} </li>
      <li className={style.options}> Bad:{bad} </li>
      <li className={style.options}> Total:{total} </li>
      <li className={style.options}>
        Positive feedback: {positiveFeedbackPercentage}%
      </li>
    </ul>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
