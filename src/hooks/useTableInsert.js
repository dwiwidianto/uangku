import { useMutation } from '@apollo/client';
import { getExpenseQuery, getIncomeQuery } from '../graphql/Query';
import { insertExpenseQuery } from '../graphql/Mutation';

export default function useTableInsert() {
     const [insertExpense] = useMutation(insertExpenseQuery, {
          refetchQueries: [getExpenseQuery],
     });
     return {
          insertExpense,
     };
}
