import React, { useContext, useEffect, useState } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../../context/AppContext';

const ExpenseList = () => {
     const { expenses } = useContext(AppContext);
     let list;
     if (expenses) {
          list = expenses.map((expense) => (
               <ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    name={expense.name}
                    cost={expense.cost}
                    date={expense.date}
               />
          ));
     }
     return <ul className="list-group">{list}</ul>;
};

export default ExpenseList;
