import { useMutation } from '@apollo/client';
import { getExpenseQuery, getIncomeQuery } from '../graphql/Query';
import { insertExpenseQuery, insertIncomeQuery } from '../graphql/Mutation';

export default function useTableInsert() {
     const [insertExpense] = useMutation(insertExpenseQuery, {
          refetchQueries: [getExpenseQuery],
     });
     const [insertIncome] = useMutation(insertIncomeQuery, {
          refetchQueries: [getIncomeQuery],
     });
     return {
          insertExpense,
          insertIncome,
     };
}
