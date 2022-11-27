import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  border-radius: 15px;
  list-style: none;
  background-color: #d5dde8d9;
  width: 270px;
  padding: 70px;
  margin: 20px;
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  width: 270px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  overflow: hidden;
`;

export const ProfileImg = styled.img`
  width: 120px;
  margin: 0 auto;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const ProfileName = styled.p`
  margin: 0 auto;
  margin-top: 3px;
  color: black;
  font-size: 20px;
`;

export const ProfileTag = styled.p`
  margin: 0 auto;
  margin-top: 3px;
  font-size: 14px;
  color: grey;
`;

export const ProfileLocation = styled.p`
  margin: 0 auto;
  margin-top: 3px;
  font-size: 14px;
  color: grey;
`;

export const ProfileStatusList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  border-radius: 15px;
  background-color: #e7ecf1;
  list-style: none;
`;

export const ProfileStatusItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  border-right: 1px solid #0000001c;
  &:last-child {
    border-right: none;
  }
`;

export const ProfileStatusLabel = styled.span`
  font-size: 14px;
  color: grey;
`;

export const ProfileStatusQuantity = styled.span`
  margin-top: 5px;
  font-size: 16px;
  font-weight: 600;
  color: black;
`;
