import React, { useContext } from 'react';
import IncomeItem from './IncomeItem';
import { AppContext } from '../../context/AppContext';

const IncomeList = () => {
     const { incomes } = useContext(AppContext);
     console.log(incomes)

     let list;
     if (incomes) {
          list = incomes.map((income) => (
               <IncomeItem
                    key={income.id}
                    id={income.id}
                    name={income.name}
                    cost={income.cost}
                    date={income.date}

               />
          ));
     }
     return <ul className="list-group">{list}</ul>;
};

export default IncomeList;
