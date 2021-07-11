import styles from './friendList.scss';
import PropTypes from 'prop-types'
import FriendItem from './friendItem'

export const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(item => (
      <FriendItem
        key={item.id}
        avatar={item.avatar}
        name={item.name}
        isOnline={item.isOnline}
      />
    ))}
  </ul>
);
