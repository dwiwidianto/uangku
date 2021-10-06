import { gql } from '@apollo/client';

export const getExpenseQuery = gql`
     query MyQuery {
          expense {
               cost
               name
               id
               date
          }
     }
`;

export const getIncomeQuery = gql`
     query IncomeQuery {
          income {
               id
               name
               cost
               date
          }
     }
`;
