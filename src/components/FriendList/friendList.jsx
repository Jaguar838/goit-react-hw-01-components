import styles from './friendList.scss';
import PropTypes from 'prop-types'
import FriendItem from './friendItem'

export const FriendList = ({ friends }) => (
  <ul className={styles.stats}>
    {friends.map(friend => (
      <FriendItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes={
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.node.isRequired,
          name: PropTypes.string.isRequired,
          avatar: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired
}
