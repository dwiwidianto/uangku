import React from 'react';

const ViewIncome = (props) => {
     return (
          <>
               <span>Pemasukan : Rp. {props.income}</span>
               <button
                    type="button"
                    class="btn btn-primary"
                    onClick={props.handleEditClick}
               >
                    Edit
               </button>
          </>
     );
};

export default ViewIncome;
