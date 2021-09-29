import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';

const AddIncomeForm = () => {
     const { dispatch } = useContext(AppContext);

     const [name, setName] = useState('');
     const [cost, setCost] = useState('');

     const onSubmit = (event) => {
          event.preventDefault();

          const income = {
               name: name,
               cost: parseInt(cost),
          };


          dispatch({
               type: 'ADD_INCOME',
               payload: income,
          });
     };
     return (
          <form onSubmit={onSubmit}>
               <div className="row">
                    <div className="col-sm">
                         <label for="name">Name</label>
                         <input
                              required="required"
                              type="text"
                              className="form-control"
                              id="name"
                              value={name}
                              onChange={(event) => setName(event.target.value)}
                         ></input>
                    </div>
                    <div className="col-sm">
                         <label for="cost">Cost</label>
                         <input
                              required="required"
                              type="text"
                              className="form-control"
                              id="cost"
                              value={cost}
                              onChange={(event) => setCost(event.target.value)}
                         ></input>
                    </div>
                    <div className="col-sm">
                         <button type="submit" className="btn btn-primary mt-3">
                              Save
                         </button>
                    </div>
               </div>
          </form>
     );
};

export default AddIncomeForm;
