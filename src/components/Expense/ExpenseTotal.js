import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const ExpenseTotal = () => {
     const { expenses } = useContext(AppContext);
     const totalExpense = expenses.reduce((total, item) => {
          return((total += item.cost));
     }, 0);
     return (
          <>
               <div className="alert alert-danger">
                    <span>Pengeluaran: Rp. {totalExpense}</span>
               </div>
          </>
     );
};

export default ExpenseTotal;