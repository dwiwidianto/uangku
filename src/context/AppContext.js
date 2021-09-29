import { createContext, useReducer, useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

const GetData = gql`
     query MyQuery {
          uangku {
               cost
               name
               id
          }
     }
`;

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
                    incomes: [...state.incomes, action.payload],
               };
          default:
               return state;
     }
};

export const AppContext = createContext();

export const AppProvider = (props) => {
     const [transaksi, setTransaksi] = useState([]);
     const { data } = useQuery(GetData);

     

     const initialState = {
          incomes: [],
          expenses: [],
     };

     const [state, dispatch] = useReducer(AppReducer, initialState, data);

     return (
          <AppContext.Provider
               value={{
                    incomes: state.incomes,
                    expenses: state.expenses,
                    dispatch,
               }}
          >
               {props.children}
          </AppContext.Provider>
     );
};
