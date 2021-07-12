import styles from './friendItem.scss';
import PropTypes from 'prop-types'

// const friends = {
// <li class="item">
//   <span class="status"></span>
//   <img class="avatar" src="" alt="" width="48" />
//   <p class="name"></p>
// </li>
// }



export const FriendItem = ({ avatar, name, isOnline }) => {
  const styleIsOnline = isOnline
    ? 'online statusFriends'
    : 'offline statusFriends';

  return (
    <li key={id} className={isOnline?styles.green:styles.red}>
      <span className={styles.span} >{isOnline}</span>
      <img className="avatarFriends" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  id: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};