import React, { useState, useEffect } from "react";

const mockTransactions = [
  {
    id: "TXN001",
    amount: 150.75,
    date: "2024-06-15T10:30:00Z",
    status: "Completed",
  },
  {
    id: "TXN002",
    amount: 89.99,
    date: "2024-06-16T14:20:00Z",
    status: "Pending",
  },
  {
    id: "TXN003",
    amount: 230.0,
    date: "2024-06-17T09:10:00Z",
    status: "Failed",
  },
];

const TransactionRow: React.FC<{ transaction: (typeof mockTransactions)[0] }> =
  React.memo(({ transaction }) => {
    console.log(`Рендринг транзакции: ${transaction.id}`);
    return (
      <tr>
        <td>{transaction.id}</td>
        <td>${transaction.amount.toFixed(2)}</td>
        <td>{new Date(transaction.date).toLocaleDateString()}</td>
        <td>{transaction.status}</td>
      </tr>
    );
  });

// const TransactionRow: React.FC<{
//   transaction: (typeof mockTransactions)[0];
// }> = ({ transaction }) => {
//   console.log(`Рендринг транзакции без memo: ${transaction.id}`);
//   return (
//     <tr>
//       <td>{transaction.id}</td>
//       <td>${transaction.amount.toFixed(2)}</td>
//       <td>{new Date(transaction.date).toLocaleDateString()}</td>
//       <td>{transaction.status}</td>
//     </tr>
//   );
// };

export const TransactionTable: React.FC = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((c) => c + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>Обновлений: {counter}</p>
      <table border={1} cellPadding={8} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {mockTransactions.map((tx) => (
            <TransactionRow key={tx.id} transaction={tx} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
