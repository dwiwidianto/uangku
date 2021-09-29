import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const IncomeTotal = () => {
     const { incomes } = useContext(AppContext);
     const totalIncome = incomes.reduce((total, item) => {
          return (total += item.cost);
     }, 0);
     return (
          <>
               <div className="alert alert-success">
                    <span>Pemasukan: Rp. {totalIncome}</span>
               </div>
          </>
     );
};

export default IncomeTotal;
