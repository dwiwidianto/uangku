import { useMutation } from '@apollo/client';
import { getExpenseQuery, getIncomeQuery } from '../graphql/Query';
import { DeleteExpense, DeleteIncome } from '../graphql/Mutation';

export default function useTableDelete() {
     const [deleteExpense] = useMutation(DeleteExpense, {
          refetchQueries: [getExpenseQuery],
     });
     const [deleteIncome] = useMutation(DeleteIncome, {
          refetchQueries: [getIncomeQuery],
     });

     return {
          deleteExpense,
          deleteIncome,

     };
}
