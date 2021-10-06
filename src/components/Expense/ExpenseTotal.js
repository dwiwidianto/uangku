import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import styled from 'styled-components';
import { CardPengeluaran } from '../../components/Style/CardStyle';

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

const ExpenseTotal = () => {
     const { totalExpense } = useContext(AppContext);

     return (
          <>
               <CardPengeluaran>
                    <Title>Pengeluaran: </Title>
                    <Value>Rp. {totalExpense}</Value>
               </CardPengeluaran>
          </>
     );
};

export default ExpenseTotal;
