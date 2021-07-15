import PropTypes from 'prop-types';
import css from './FriendItem.module.scss';

export const FriendItem = ({ avatar, name, isOnline }) => {
  const onlineStatus = isOnline ? css.online : css.offline;
  console.log({ onlineStatus }, isOnline);
  return (
    <li className={css.item}>
      <span className={`${css.status} ${onlineStatus}`}></span>
      <img className={css.avatarFriends} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendItem.defaultProps = {
  avatar:
    'https://www.clearmountainbank.com/wp-content/uploads/2020/04/male-placeholder-image.jpeg',
  name: '(empty)',
};

FriendItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
