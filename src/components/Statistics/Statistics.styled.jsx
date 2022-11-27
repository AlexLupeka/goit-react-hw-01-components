import styled from '@emotion/styled';

export const StatisticsContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin: 20px;
  width: 400px;
  height: 100%;
  z-index: -1;
  border-radius: 15px;
  background-color: #d5dde8d9;
  padding: 70px;
`;

export const StatisticsTitle = styled.h2`
  margin: 0;
  padding: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  align-items: center;
  background-color: white;
  border-radius: 15px;
`;

export const StatisticsList = styled.ul`
  margin-top: 20px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StatisticsItem = styled.li`
  width: 60px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  border-radius: 15px;
  margin: 15px 5px 0px 0px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  &:last-child {
    margin-right: 0;
  }
`;

export const StatisticsLabel = styled.span`
  font-size: 14px;
  color: white;
`;

export const StatisticsPersentage = styled.span`
  margin-top: 5px;
  font-size: 16px;
  font-weight: 600;
  color: white;
`;
