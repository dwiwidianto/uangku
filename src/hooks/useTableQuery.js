import { useQuery } from '@apollo/client';
import { getExpenseQuery, getIncomeQuery } from '../graphql/Query';

export default function useQueryCustom () {
     const { data: expense } = useQuery(getExpenseQuery);
     const { data: income } = useQuery(getIncomeQuery);
     return {
          expense,
          income,
     };
};
