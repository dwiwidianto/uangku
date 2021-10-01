import React, { useContext, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { gql, useMutation, useQuery } from '@apollo/client';

const AddIncomeForm = () => {
     const insertIncomeQuery = gql`
          mutation AddIncome($object: income_insert_input!) {
               insert_income_one(object: $object) {
                    id
               }
          }
     `;
     const getIncomeQuery = gql`
          query IncomeQuery {
               income {
                    id
                    name
                    cost
               }
          }
     `;
     const [insertIncome] = useMutation(insertIncomeQuery, {
          refetchQueries: [getIncomeQuery],
     });
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
               )}
          </Formik>
     );
};

export default AddIncomeForm;
