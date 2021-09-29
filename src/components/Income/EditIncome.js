import React, { useState } from 'react';

const EditIncome = (props) => {
     const [value, setValue] = useState(props.value);
     return (
          <>
               <input
                    required="required"
                    type="number"
                    class="form-control"
                    id="name"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
               />
               <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => props.handleSaveClick(value)}
               >
                    Save
               </button>
          </>
     );
};

export default EditIncome;
