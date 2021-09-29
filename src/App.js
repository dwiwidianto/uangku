import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

/* Import Componenets */
import { AppProvider } from './context/AppContext';
import Sisa from './components/Sisa';
import SideBar from './components/SideBar/Sidebar';
/* Expense */
import AddExpenseForm from './components/Expense/AddExpenseForm';
import ExpenseList from './components/Expense/ExpenseList';
import ExpenseTotal from './components/Expense/ExpenseTotal';

/* Income */
import AddIncomeForm from './components/Income/AddIncomeForm';
import IncomeList from './components/Income/IncomeList';
import IncomeTotal from './components/Income/IncomeTotal';

const App = () => {
     return (
          <Router>
               <SideBar />
               <AppProvider>
                    <Switch>
                         <Route path="/expense">
                              <div className="container">
                                   <div className="row mt-3">
                                        <div className="col-sm">
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
                         </Route>
                         <Route path="/income">
                              <div className="container">
                                   <div className="row mt-3">
                                        <div className="col-sm">
                                             <Sisa />
                                             <IncomeTotal />
                                        </div>
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
                         </Route>
                    </Switch>
               </AppProvider>
          </Router>
     );
};

export default App;
