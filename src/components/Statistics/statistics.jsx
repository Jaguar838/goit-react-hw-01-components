import styles from './Statistics.module.scss';
import PropTypes from 'prop-types';

const StatisticsItem =({id, label, persentage}) => {
  return (
    <li key={id} className={styles.item}>
      <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}</span>
    </li>
  )
}
const StatisticsList =({items}) => {
  
    if(items.length ===0) return null
    return <ul className={styles.statList}>{items.map(StatisticsItem)}</ul>
}

export const Statistics = ({items}) => {
  return (
    <section className={styles.statistics}>
    <h2 className={styles.title}>Upload stats</h2>
  <StatisticsList items={items}/>
  </section>
)
}

Statistics.propTypes ={
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label:PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired

  })).isRequired
 }

