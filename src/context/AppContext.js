import { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
     switch (action.type) {
          case 'SET_EXPENSE':
               const { expense } = action.payload;
               const totalExpense = expense.reduce((total, item) => {
                    return (total += item.cost);
               }, 0);
               return {
                    ...state,
                    expenses: action.payload.expense,
                    totalExpense: totalExpense,
               };
          case 'SET_INCOME':
               const { income } = action.payload;
               const totalIncome = income.reduce((total, item) => {
                    return (total += item.cost);
               }, 0);
               return {
                    ...state,
                    incomes: action.payload.income,
                    totalIncome: totalIncome,
               };
          default:
               return state;
     }
};

export const AppContext = createContext();

export const AppProvider = (props) => {
     // const [toggleUpdate, setToggleUpdate] = useState(false);

     const initialState = {
          incomes: [],
          expenses: [],
          totalExpense: 0,
          totalIncome: 0,
     };

     const [state, dispatch] = useReducer(AppReducer, initialState);
     return (
          <AppContext.Provider
               value={{
                    incomes: state.incomes,
                    expenses: state.expenses,
                    totalExpense: state.totalExpense,
                    totalIncome: state.totalIncome,
                    dispatch,
               }}
          >
               {props.children}
          </AppContext.Provider>
     );
};
