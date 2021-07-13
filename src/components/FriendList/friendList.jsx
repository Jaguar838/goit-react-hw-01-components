import PropTypes from 'prop-types';
import styles from './FriendList.module.scss';
import { FriendItem } from './friendItem';

export const FriendList = ({ friends }) => {
  if (friends.length === 0) return null;
  return <ul className={styles.friendList}>{friends.map(FriendItem)}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.node.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
