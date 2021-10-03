import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import styled from 'styled-components';
import { CardPemasukan } from 'components/Style/CardStyle';

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

const IncomeTotal = () => {
     const { totalIncome } = useContext(AppContext);
     // const totalIncome = incomes.reduce((total, item) => {
     //      return (total += item.cost);
     // }, 0);
     return (
          <>
               <CardPemasukan>
                    <Title>Pemasukan: </Title>
                    <Value>Rp. {totalIncome}</Value>
               </CardPemasukan>
          </>
     );
};

export default IncomeTotal;
