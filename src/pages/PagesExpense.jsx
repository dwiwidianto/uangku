import React from 'react';
import Sisa from '../components/Sisa';
/* Expense */
import AddExpenseForm from '../components/Expense/AddExpenseForm';
import ExpenseList from '../components/Expense/ExpenseList';
import ExpenseTotal from '../components/Expense/ExpenseTotal';
import IncomeTotal from '../components/Income/IncomeTotal';

export default function PagesExpense() {
     return (
          <>
               <div className="container">
                    <div className="row mt-5">
                         <div className="col-sm-4">
                              <IncomeTotal />
                         </div>
                         <div className="col-sm-4">
                              <Sisa />
                         </div>
                         <div className="col-sm-4">
                              <ExpenseTotal />
                         </div>
                    </div>

                    <div className="row mt-3 ">
                         <h3 className="mt-3 center">Add Expenses</h3>
                         <div className="row mt-3 ">
                              <div className="col-sm">
                                   <AddExpenseForm />
                              </div>
                         </div>
                         <h3 className="mt-3">Expense</h3>
                         <div className="row mt-3">
                              <div className="col-sm">
                                   <ExpenseList />
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}
