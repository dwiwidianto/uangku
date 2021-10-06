import React from 'react';

/* Income */
import AddIncomeForm from '../components/Income/AddIncomeForm';
import IncomeList from '../components/Income/IncomeList';
import IncomeTotal from '../components/Income/IncomeTotal';
import ExpenseTotal from '../components/Expense/ExpenseTotal';
import Sisa from '../components/Sisa';

export default function PagesIncome() {
     return (
          <>
               <div className="container">
                    <div className="row mt-5 ">
                         <div className="col-sm-4 ">
                              <IncomeTotal />
                         </div>
                         <div className="col-sm-4">
                              <Sisa />
                         </div>
                         <div className="col-sm-4">
                              <ExpenseTotal />
                         </div>
                    </div>
                    <div className="row mt-3">
                         <div className="col-sm"></div>
                         <h3 className="mt-3">Add Income</h3>
                         <div className="row mt-3">
                              <div className="col-sm">
                                   <AddIncomeForm />
                              </div>
                         </div>
                         <h3 className="mt-3">Income</h3>
                         <div className="row mt-3">
                              <div className="col-sm">
                                   <IncomeList />
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}
