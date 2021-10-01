import { useMutation } from '@apollo/client';
import { getExpenseQuery, getIncomeQuery } from '../graphql/Query';
import { DeleteExpense } from '../graphql/Mutation'

export default function useTableDelete () {
     const [deleteExpense] = useMutation(DeleteExpense,{refetchQueries: [getExpenseQuery]});

     return {
          deleteExpense,
     };
};
