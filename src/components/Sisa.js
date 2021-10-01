import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { gql, useQuery } from '@apollo/client';
import useTableQuery from '../hooks/useTableQuery';



const Sisa = () => {
     const { dispatch } = useContext(AppContext);
     const { totalExpense, totalIncome } = useContext(AppContext);

     const { expense, income} = useTableQuery()


     useEffect(() => {
          if (expense) {
               dispatch({ type: 'SET_EXPENSE', payload: expense });
          }
     }, [expense]);

     useEffect(() => {
          if (income) {
               dispatch({ type: 'SET_INCOME', payload: income });
          }
     }, [income]);

     // console.log(totalExpense);
     // const totalIncome = incomes.reduce((total, item)=> {
     //     return (total += item.cost);
     // }, 0)
     return (
          <>
               <div className="alert alert-warning">
                    <span>
                         {' '}
                         Sisa Tabungan: Rp. {totalIncome - totalExpense}
                    </span>
               </div>
          </>
     );
};

export default Sisa;
