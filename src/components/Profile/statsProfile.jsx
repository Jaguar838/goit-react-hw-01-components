import styles from './StatsProfile.module.scss'

export const StatsProfile =({followers, views, likes}) => {
    return (
<ul className={styles.statsLists}>
<li className={styles.statsItem}>
  <span className={styles.label}>Followers</span>
  <span className={styles.quantity}>{followers}</span>
</li>
<li className={styles.statsItem}>
  <span className={styles.label}>Views</span>
  <span className={styles.quantity}>{views}</span>
</li>
<li className={styles.statsItem}>
  <span className={styles.label}>Likes</span>
  <span className={styles.quantity}>{likes}</span>
</li>
</ul>
  )
}