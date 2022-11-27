import PropTypes from 'prop-types';
import {
  ProfileContainer,
  ProfileCard,
  ProfileImg,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStatusList,
  ProfileStatusItem,
  ProfileStatusLabel,
  ProfileStatusQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <ProfileCard>
        <ProfileImg src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>{`@${tag}`}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileCard>
      <ProfileStatusList>
        <ProfileStatusItem>
          <ProfileStatusLabel>Followers</ProfileStatusLabel>
          <ProfileStatusQuantity>{stats.followers}</ProfileStatusQuantity>
        </ProfileStatusItem>
        <ProfileStatusItem>
          <ProfileStatusLabel>Views</ProfileStatusLabel>
          <ProfileStatusQuantity>{stats.views}</ProfileStatusQuantity>
        </ProfileStatusItem>
        <ProfileStatusItem>
          <ProfileStatusLabel>Likes</ProfileStatusLabel>
          <ProfileStatusQuantity>{stats.likes}</ProfileStatusQuantity>
        </ProfileStatusItem>
      </ProfileStatusList>
    </ProfileContainer>
  );
};

Profile.prototype = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
};
