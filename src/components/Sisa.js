import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Sisa = () => {
     const { expenses, incomes } = useContext(AppContext);

     const totalExpense = expenses.reduce((total, item) => {
          return (total += item.cost);
     }, 0);
     const totalIncome = incomes.reduce((total, item)=> {
         return (total += item.cost);
     }, 0)
     return (
          <>
               <div className="alert alert-warning">
                    <span> Sisa Tabungan: Rp. {totalIncome - totalExpense }</span>
               </div>
          </>
     );
};

export default Sisa;
