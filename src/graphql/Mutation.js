import { gql } from '@apollo/client';

export const DeleteExpense = gql`
     mutation DeleteExpense($id: Int!) {
          delete_expense_by_pk(id: $id) {
               id
          }
     }
`;

export const insertExpenseQuery = gql`
     mutation MyMutation($object: expense_insert_input!) {
          insert_expense_one(object: $object) {
               id
          }
     }
`;

export const DeleteIncome = gql`
     mutation DeleteIncome($id: Int!) {
          delete_income_by_pk(id: $id) {
               id
          }
     }
`;

export const insertIncomeQuery = gql`
     mutation MyMutation($object: income_insert_input!) {
          insert_income_one(object: $object) {
               id
          }
     }
`;

