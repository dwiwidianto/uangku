import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import EditIncome from './EditIncome';
import ViewIncome from './ViewIncome';

const AddIncomeForm = () => {
     const { income, dispatch } = useContext(AppContext);
     const [isEditing, setIsEditing] = useState(false);

     const handleEditClick = () => {
          setIsEditing(true);
     };

     const handleSaveClick = (value) => {
          dispatch({
               type: 'ADD_INCOME',
               payload: value,
          });
          setIsEditing(false);
     };

     return (
          <div class="alert alert-success p-3 d-flex align-items-center justify-content-between">
               {isEditing ? (
                    <EditIncome
                         handleSaveClick={handleSaveClick}
                         income={income}
                    />
               ) : (
                    <ViewIncome
                         handleEditClick={handleEditClick}
                         income={income}
                    />
               )}
          </div>
     );
};

export default AddIncomeForm;
