import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import useTableDelete from '../../hooks/useTableDelete';

const ExpenseItem = (props) => {
     const { deleteExpense } = useTableDelete();

     const handleDeleteExpense = () => {
          deleteExpense({ variables: { id: props.id } });
     };

     return (
          <li className="list-group-item d-flex justify-content-between align-items-center">
               {props.name}
               <div>
                    {/* <span className="badge-pill mr-3">{props.date}</span> */}
               </div>
               <div>
                    <span className="badge bg-primary badge-pill mr-3">
                         Rp. {props.cost}
                    </span>
                    <TiDelete
                         size="1.5em"
                         onClick={handleDeleteExpense}
                    ></TiDelete>
               </div>
          </li>
     );
};

export default ExpenseItem;
