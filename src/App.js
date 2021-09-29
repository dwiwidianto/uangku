import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Import Componenets */
import AddIncomeForm from './components/Income/AddIncomeForm';
import Sisa from './components/Sisa';
import ExpenseTotal from './components/Expense/ExpenseTotal';
import ExpenseList from './components/Expense/ExpenseList';
import AddExpenseForm from './components/Expense/AddExpenseForm';
import { AppProvider } from './context/AppContext';

const App = () => {
     return (
          <AppProvider>
               <div className="container">
                    <div className="row mt-3">
                         <div className="col-sm">
                              <AddIncomeForm />
                              <Sisa />
                              <ExpenseTotal />
                         </div>
                         <h3 className="mt-3">Add Expenses</h3>
                         <div className="row mt-3">
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
          </AppProvider>
     );
};

export default App;
