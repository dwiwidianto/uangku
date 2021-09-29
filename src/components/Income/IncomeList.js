import React, { useContext } from 'react';
import IncomeItem from './IncomeItem';
import { AppContext } from '../../context/AppContext';

const IncomeList = () => {
     const { incomes } = useContext(AppContext);
     return (
          <ul className="list-group">
               {incomes.map((income) => (
                    <IncomeItem
                         id={income.id}
                         name={income.name}
                         cost={income.cost}
                    />
               ))}
          </ul>
     );
};

export default IncomeList;

