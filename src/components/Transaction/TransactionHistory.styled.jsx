import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 100%;
  margin: 20px;
  margin-top: 20px;
  border-radius: 5px;
  text-align: center;
  background-color: #ffffff;
  color: #000000;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  overflow: hidden;
  @media (min-width: 992px) {
    margin-top: -200px;
    width: 40%;
  }
`;

export const TransactionThead = styled.thead`
  background-color: #00bcd5;
  color: #ffffff;
  border: 0px solid #b5b5b5;
  padding: 30px;
  text-transform: uppercase;
`;

export const TableRows = styled.tr`
  &:nth-of-type(even) {
    background-color: #ecf1f4;
  }
`;

export const TableHeaders = styled.th`
  padding: 7px;
`;

export const TableBody = styled.tbody``;

export const TableCells = styled.td`
  padding: 5px;
  text-transform: capitalize;
  transition: background-color 250ms linear;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #d5dde8d9;
    transition: background-color 250ms linear;
  }
`;
