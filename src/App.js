import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Import Componenets */
import { AppProvider } from './context/AppContext';
import Sisa from './components/Sisa';
/* Expense */
import AddExpenseForm from './components/Expense/AddExpenseForm';
import ExpenseList from './components/Expense/ExpenseList';
import ExpenseTotal from './components/Expense/ExpenseTotal';

/* Income */
import AddIncomeForm from './components/Income/AddIncomeForm';
import IncomeList from './components/Income/IncomeList';
import IncomeTotal from './components/Income/IncomeTotal';

import Chart from './components/Chart/BarChart';
import Side from './components/SideBar/Sidebar';

const App = () => {
     return (
          <Router>
               <Side />
               <div className="container">
                    <AppProvider>
                         <Switch>
                              <Route path="/dashboard">
                                   <Chart />
                              </Route>
                         </Switch>
                         <Switch>
                              <Route path="/expense">
                                   <div className="container bg-primary">
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
                                             <h3 className="mt-3">
                                                  Add Expenses
                                             </h3>
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
                              </Route>
                              <Route path="/income">
                                   <div className="container bg-danger">
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
                                             <h3 className="mt-3">
                                                  Add Income
                                             </h3>
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
                              </Route>
                         </Switch>
                    </AppProvider>
               </div>
          </Router>
     );
};

export default App;
