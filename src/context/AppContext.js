import { createContext, useReducer } from 'react';
// import { gql, useQuery } from '@apollo/client';

// const GetData = gql`
//      query MyQuery {
//           uangku {
//                cost
//                name
//                id
//           }
//      }
// `;

const AppReducer = (state, action) => {
     switch (action.type) {
          case 'ADD_EXPENSE':
               return {
                    ...state,
                    expenses: [...state.expenses, action.payload],
               };
          case 'ADD_INCOME':
               return {
                    ...state,
                    income: action.payload,
               };
          default:
               return state;
     }
};

const initialState = {
     income: 2000,
     expenses: [
          { id: 12, name: 'Beli Makan', cost: 10 },
     ],
};

export const AppContext = createContext();




export const AppProvider = (props) => {
     const [state, dispatch] = useReducer(AppReducer, initialState);

     return (
          <AppContext.Provider
               value={{
                    income: state.income,
                    expenses: state.expenses,
                    dispatch,
               }}
          >
               {props.children}
          </AppContext.Provider>
     );
};
