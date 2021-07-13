import PropTypes from 'prop-types';
import styles from './FriendItem.module.scss';

export const FriendItem = ({ avatar, name, isOnline, id }) => {
  const onlineStatus = isOnline ? styles.online : styles.offline;
  console.log({ onlineStatus }, isOnline);
  return (
    <li key={id} className={styles.item}>
      <span className={`${styles.status} ${onlineStatus}`}></span>
      <img className={styles.avatarFriends} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  id: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
