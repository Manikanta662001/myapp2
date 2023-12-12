import React, { useState, useEffect } from 'react'
import './style.css';
import fetch from './api/dataService';
function calculateResults(incomingData) {
    
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec',];
    const pointsPerTransaction = incomingData.map((transaction) => {
      let points = 0;
      let over100 = transaction.amt - 100;
  
      if (over100 > 0) {
        
        points += over100 * 2;
      }
      if (transaction.amt > 50 && transaction.amt > 100) {
        
        points += 50;
      }
  
      const month = new Date(transaction.transactionDt).getMonth();
      return { ...transaction, points, month };
    });
    console.log(pointsPerTransaction, '3939');
    let byCustomer = {};
    let totalPointsByCustomer = {};
    pointsPerTransaction.forEach((pointsPerTransaction) => {
      let { custid, name, month, points } = pointsPerTransaction;
      if (!byCustomer[custid]) {
        byCustomer[custid] = [];
      }
      console.log(byCustomer,'3131')
      if (!totalPointsByCustomer[name]) {
        totalPointsByCustomer[name] = 0;
      }
      console.log(totalPointsByCustomer, '3535');
      console.log(points, name, month);
      totalPointsByCustomer[name] += points;
      console.log(totalPointsByCustomer, '3838');

      
      if (byCustomer[custid][month]) {
        byCustomer[custid][month].points += points;
        byCustomer[custid][month].monthNumber = month;
        byCustomer[custid][month].numTransactions++;
      } else {
        byCustomer[custid][month] = {
          custid,
          name,
          monthNumber: month,
          month: months[month],
          numTransactions: 1,
          points,
        };
      }
      console.log(byCustomer,'5555')
    });
    let tot = [];
    for (var custKey in byCustomer) {
      byCustomer[custKey].forEach((cRow) => {
        console.log(cRow)
        tot.push(cRow);
      });
    }
    //console.log("byCustomer", byCustomer);
    //console.log("tot", tot);
    let totByCustomer = [];
    for (custKey in totalPointsByCustomer) {
      totByCustomer.push({
        name: custKey,
        points: totalPointsByCustomer[custKey],
      });
    }
  
    return {
      summaryByCustomer: tot,
      pointsPerTransaction,
      totalPointsByCustomer: totByCustomer,
    };
  }
export default function Homework_() {
    const [transactionData, setTransactionData] = useState(null);
  
    useEffect(() => {
      fetch().then((data) => {
        console.log(data, 'DATA');
        const results = calculateResults(data);
        console.log(results, 'RESULTS');
  
        setTransactionData(results);
      });
    }, []);
  
    return (
      <div>
        <h1 style={{ color: 'fuchsia', backgroundColor: 'antiquewhite' }}>
          POINTS OF CUSTOMERS
        </h1>
        {transactionData == null ? (
          ''
        ) : (
          <div>
            <h1>Points of Each Customer for all their transactions</h1>
            <table>
              <thead>
                <th>Custid</th>
                <th>Month</th>
                <th>Monthnumber</th>
                <th>Name</th>
                <th>NumTransactions</th>
                <th>Points</th>
              </thead>
              <tbody>
                {transactionData.summaryByCustomer.map((item) => {
                  return (
                    <tr>
                      <td>{item.custid}</td>
                      <td>{item.month}</td>
                      <td>{item.monthNumber}</td>
                      <td>{item.name}</td>
                      <td>{item.numTransactions}</td>
                      <td>{item.points}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h1>Points of Each Customer</h1>
            <table style={{ width: '70%' }}>
              <thead>
                <th>Name</th>
                <th>Points</th>
              </thead>
              <tbody>
                {transactionData.totalPointsByCustomer.map((item) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.points}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
  