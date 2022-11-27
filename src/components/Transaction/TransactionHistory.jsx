import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionThead,
  TableRows,
  TableHeaders,
  TableBody,
  TableCells,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionThead>
        <TableRows>
          <TableHeaders>Type</TableHeaders>
          <TableHeaders>Amount</TableHeaders>
          <TableHeaders>Currency</TableHeaders>
        </TableRows>
      </TransactionThead>
      <TableBody>
        {items.map(item => (
          <TableRows key={item.id}>
            <TableCells>{item.amount}</TableCells>
            <TableCells>{item.type}</TableCells>
            <TableCells>{item.currency}</TableCells>
          </TableRows>
        ))}
      </TableBody>
    </TransactionTable>
  );
};

TransactionHistory.prototype = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
