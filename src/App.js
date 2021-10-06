import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Import Global State */
import { AppProvider } from './context/AppContext';
/* Import Pages */
import { PageExpense, PageIncome, PagesChart } from './pages/';
import Side from './components/SideBar/Sidebar';

const App = () => {
     return (
          <Router>
               <Side />
               <AppProvider>
                    <Switch>
                         <Route path="/dashboard" exact>
                              {PagesChart}
                         </Route>
                         <Route path="/expense">{PageExpense}</Route>
                         <Route path="/income">{PageIncome}</Route>
                    </Switch>
               </AppProvider>
          </Router>
     );
};

export default App;
