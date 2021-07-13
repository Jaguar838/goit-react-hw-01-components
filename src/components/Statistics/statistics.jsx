import styles from './Statistics.module.scss';
import PropTypes from 'prop-types';
import { randomColor, randomRGBColor } from './getRandomColor';

const StatisticsItem = ({ label, percentage }) => {
  return (
    <li className={styles.item} style={{ backgroundColor: `${randomRGBColor(randomColor)}` }}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

const StatisticsList = ({ items }) => {
  if (items.length === 0) return null;
  return (
    <ul className={styles.statList}>
      {items.map(({ id, label, percentage }) => (
        <StatisticsItem key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
};

export const Statistics = ({ items, title }) => {
  return (
    <section className={styles.statistics}>
      {title ? <h2 className={styles.title}>{title}</h2> : ''}
      <StatisticsList items={items} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
