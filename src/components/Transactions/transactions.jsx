import styles from './transaction.module.scss';
import PropTypes from 'prop-types'

export const Transactions=({}) => {
  return (
<table class="transactionHistory">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
  )
}


Transactions.propTypes={
  items:PropTypes.arrayOf(
      PropTypes.shape({
          id:PropTypes.string.isRequired,
          type:PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,}

      ).isRequired
  ).isRequired
}
