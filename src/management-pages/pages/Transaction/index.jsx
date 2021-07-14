import React, {useEffect, useState} from 'react';
import NewTransactionTable from '../../components/NewTransactionTable';
import TopTransactionTable from '../../components/TopTransactionTable';
import adminApi from '../../../api/management/adminApi';

import "./Transaction.css"

function Transaction(props) {

  const [topPriceTransaction, setTopPriceTransaction] = useState([]);
  const [topLatestTransaction, setTopLatestTransaction] = useState([]);


  useEffect(() => {
    const fetchTopTransaction = async () => {
      try {
        const response = await adminApi.getTopTransaction({limit: 4});
        setTopLatestTransaction(response.top_latest_order)
        setTopPriceTransaction(response.top_total_order_value)
      } catch (error) {
        console.log("Failed to fetch lastest transactions", error);
      }
    }
      fetchTopTransaction();
  }, [])

  return (
    <div className="transaction">
      <div className="top-transaction">
        <div className="transaction-top-left">
          <TopTransactionTable topPriceTransaction={topPriceTransaction}/>
        </div>
        <div className="transaction-top-right">
          <NewTransactionTable topLatestTransaction={topLatestTransaction}/>
        </div>
      </div>
      
    </div>
  );
}

export default Transaction;