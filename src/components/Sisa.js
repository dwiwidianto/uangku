import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import useTableQuery from '../hooks/useTableQuery';
import styled from 'styled-components';
import { CardSisa } from 'components/Style/CardStyle';


const Title = styled.p`
     grid-row: 2/3;
     font-size: 30px;
     font-weight: bold;
     color: white;
`;
const Value = styled.p`
     grid-row: 3/4;
     font-size: 25px;
     font-weight: bold;
     color: white;
`;

const Sisa = () => {
     const { dispatch } = useContext(AppContext);
     const { totalExpense, totalIncome } = useContext(AppContext);
     const { expense, income } = useTableQuery();

     useEffect(() => {
          if (expense) {
               dispatch({ type: 'SET_EXPENSE', payload: expense });
          }
     }, [expense]);

     useEffect(() => {
          if (income) {
               dispatch({ type: 'SET_INCOME', payload: income });
          }
     }, [income]);
     return (
          <>
               <CardSisa>
                    <Title>Tabungan :</Title>
                    <Value>Rp. {totalIncome - totalExpense}</Value>
               </CardSisa>
          </>
     );
};

export default Sisa;
