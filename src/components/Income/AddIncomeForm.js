import React from 'react';
import { Formik, Form, Field } from 'formik';
import useTableInsert from '../../hooks/useTableInsert';

const AddIncomeForm = () => {
     const { insertIncome } = useTableInsert();
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
               }}
               onSubmit={(values, actions) => {
                    insertIncome({ variables: { object: values } });
                    actions.resetForm();
               }}
          >
               {({ errors, touched, isValidating }) => (
                    <div className="container d-flex justify-content-center">
                         <Form>
                              <div className="row">
                                   <div className="col-sm">
                                        <label htmlFor="name">Name</label>
                                        <Field
                                             name="name"
                                             required="required"
                                             type="text"
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
                    </div>
               )}
          </Formik>
     );
};

export default AddIncomeForm;
