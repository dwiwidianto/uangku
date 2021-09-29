import React from 'react';
import { Route, Link } from 'react-router-dom';

const Sidebar = () => {
     return (
          <>
               <Route>
                    <Link to="/expense">Expense </Link>
                    <Link to="/income">Income </Link>

               </Route>
          </>
     );
};

export default Sidebar;
