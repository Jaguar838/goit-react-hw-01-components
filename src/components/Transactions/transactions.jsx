import PropTypes from 'prop-types';
import css from './Transaction.module.scss';

const TransactionsTr = ({ type, amount, currency }, i) => {
  const trStyle = i % 2 === 1 ? css.grey : css.white;
  return (
    <tr className={trStyle}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

const TransactionsBody = ({ items }) => {
  if (items.length === 0) return null;
  return (
    <tbody className={css.tbody}>
      {items.map(({ id, type, amount, currency }) => (
        <TransactionsTr key={id} type={type} amount={amount} currency={currency} />
      ))}
    </tbody>
  );
};

export const Transactions = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <TransactionsBody items={transactions} />
    </table>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
