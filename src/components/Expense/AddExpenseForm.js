import React from 'react';
import { Formik, Form, Field } from 'formik';
import useTableInsert from '../../hooks/useTableInsert';
import styled from 'styled-components';

const FormStyle = {
     "box-sizing": "border-box",
     "-webkit-box-sizing": "border-box",
     "-moz-box-sizing": "border-box",
     "border": "1px solid #c2c2c2",
     "box-shadow": "1px 1px 4px #ebebeb",
     "-moz-box-shadow": "1px 1px 4px #ebebeb",
     "-webkit-box-shadow": "1px 1px 4px #ebebeb",
     "border-radius": "3px",
     "-webkit-border-radius": "3px",
     "-moz-border-radius": "3px",
     "padding": "7px",
     "outline": "none",
}    

const AddExpenseForm = () => {
     const { insertExpense } = useTableInsert();
     function validateRequired(value) {
          let error;
          if (!value) {
               error = 'Required';
          }
          return error;
     }

     function validateNumber(value) {
          let error;
          if (!value) {
               error = 'Required';
          } else if (!/^\d+$/i.test(value)) {
               error = 'Input only number';
          }
          return error;
     }
     return (
          <Formik
               initialValues={{
                    name: '',
                    cost: 0,
                    date: '',
               }}
               onSubmit={(values, actions) => {
                    insertExpense({ variables: { object: values } });
                    actions.resetForm();
               }}
          >
               {({ errors, touched, isValidating }) => (
                    <Form>
                         <div className="row">
                              <div className="col-sm">
                                   <label htmlFor="name">Name</label>

                                   <Field
                                        name="name"
                                        required="required"
                                        type="text"
                                        style={FormStyle}
                                        className="form-control"
                                        id="name"
                                        validate={validateRequired}
                                   />
                                   {errors.name && touched.name && (
                                        <div>{errors.name}</div>
                                   )}
                              </div>
                              <div className="col-sm">
                                   <label htmlFor="date">Date</label>
                                   <Field
                                        // dateFormat="MM d, yyyy"
                                        className="form-control"
                                        name="date"
                                        required="required"
                                        type="date"
                                        style={FormStyle}

                                   />
                                   {errors.date && touched.date && (
                                        <div>{errors.date}</div>
                                   )}
                              </div>
                              <div className="col-sm">
                                   <label htmlFor="cost">Cost</label>
                                   <Field
                                        name="cost"
                                        required="required"
                                        type="number"
                                        min="0"
                                        style={FormStyle}
                                        className="form-control"
                                        id="cost"
                                        validate={validateNumber}
                                   />
                                   {errors.cost && touched.cost && (
                                        <div>{errors.cost}</div>
                                   )}
                              </div>
                              <div className="col-sm">
                                   <button
                                        type="submit"
                                        className="btn btn-primary mt-3"
                                   >
                                        Save
                                   </button>
                              </div>
                         </div>
                    </Form>
               )}
          </Formik>
     );
};

export default AddExpenseForm;
