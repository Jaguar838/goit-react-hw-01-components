import styles from './FriendItem.module.scss';
import PropTypes from 'prop-types'



export const FriendItem = ({ avatar, name, isOnline, id }) => {
const onlineSatus=isOnline? styles.online : styles.offline
  return (
    <li key={id} className={styles.item}>
      <span className={onlineSatus} >{isOnline}</span>
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