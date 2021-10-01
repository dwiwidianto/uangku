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
