import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { gql, useQuery } from '@apollo/client';

const getExpenseQuery = gql`
     query MyQuery {
          expense {
               cost
               name
               id
          }
     }
`;
const Sisa = () => {
     const { dispatch } = useContext(AppContext);
     const { totalExpense } = useContext(AppContext);

     const { data } = useQuery(getExpenseQuery);

     useEffect(() => {
          if (data) {
               dispatch({ type: 'SET_EXPENSE', payload: data });
          }
     }, [data]);
     // console.log(totalExpense);
     // const totalIncome = incomes.reduce((total, item)=> {
     //     return (total += item.cost);
     // }, 0)
     return (
          <>
               <div className="alert alert-warning">
                    <span> Sisa Tabungan: Rp. {1000 - totalExpense }</span>
               </div>
          </>
     );
};

export default Sisa;
