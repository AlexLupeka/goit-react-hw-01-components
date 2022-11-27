import PropTypes from 'prop-types';
import {
  FriendCard,
  FriendListItem,
  FriendItemStatus,
  FriendItemImg,
  FriendItemName,
} from './Friends.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendCard>
      {friends.map(item => (
        <FriendListItem key={item.id}>
          <FriendItemStatus
            style={{
              backgroundColor: item.isOnline ? '#44EE33' : '#F32B00',
            }}
          ></FriendItemStatus>
          <FriendItemImg src={item.avatar} alt="User avatar" width="48" />
          <FriendItemName>{item.name}</FriendItemName>
        </FriendListItem>
      ))}
    </FriendCard>
  );
};

FriendList.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
