import styled from '@emotion/styled';

export const FriendCard = styled.section`
  padding: 0;
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 100%;
  align-items: center;
  border-radius: 15px;
  background-color: #d5dde8d9;
`;

export const FriendListItem = styled.li`
  display: flex;
  margin-bottom: 10px;
  padding: 8px 20px;
  width: 270px;
  background-color: white;
  border-radius: 20px;
  align-items: center;
  &:hover {
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
  &:first-of-type {
    margin-top: 10px;
  }
`;

export const FriendItemStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;
export const FriendItemImg = styled.img`
  margin: 0 20px;
`;
export const FriendItemName = styled.p``;
