import styled from "styled-components";

export const CardSisa = styled.div`
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
     margin: 20px;
     padding: 20px;
     width: 350px;
     height: 190px;
     display: grid;
     grid-template-rows: 20px 50px 1fr 50px;
     border-radius: 10px;
     box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
     background: radial-gradient(#1fe4f5, #3fbafe);
     transition: all 0.2s;
     &:hover {
          box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
          transform: scale(1.01);
     }
`;

export const CardPengeluaran = styled.div`
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
     margin: 20px;
     padding: 20px;
     width: 350px;
     height: 190px;
     display: grid;
     grid-template-rows: 20px 50px 1fr 50px;
     border-radius: 10px;
     box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
     background: radial-gradient(#fbc1cc, #fa99b2);
     transition: all 0.2s;
     &:hover {
          box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
          transform: scale(1.01);
     }
`;

export const CardPemasukan = styled.div`
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
     margin: 20px;
     padding: 20px;
     width: 350px;
     height: 190px;
     display: grid;
     grid-template-rows: 20px 50px 1fr 50px;
     border-radius: 10px;
     box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
     transition: all 0.2s;
     background: radial-gradient(#60efbc, #58d5c9);
     &:hover {
          box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
          transform: scale(1.01);
     }
`;
