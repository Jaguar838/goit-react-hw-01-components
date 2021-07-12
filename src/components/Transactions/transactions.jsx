import styles from './Transaction.module.scss';
import PropTypes from 'prop-types'

const TransactionsTr = ({id, type, amount, currency}) => {
  return (
          <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
          </tr>
      )
}

const TransactionsBody = (items) => {
if (items.length ===0) return null
  return <tbody className={styles.tbody}>{items.map(TransactionsTr)}</tbody>
}

export const Transactions=({transactions}) => {
  return (
<table classNane={styles.transactionHistory}>
  <thead classNane={styles.thead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
<TransactionsBody items={transactions}/>

</table>
  )
}


Transactions.propTypes={
  transactionss:PropTypes.arrayOf(
      PropTypes.shape({
          id:PropTypes.string.isRequired,
          type:PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,}

      ).isRequired
  ).isRequired
}
