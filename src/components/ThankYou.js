import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
   color: #fff;
   background: #2596be;
   @media  screen and (max-width: 768px) {     
        
        font-size: 2.5rem;    
    }
`;


export const ThankYou = () => {

    return (
        <Text>
            <h1>תודה רבה!</h1>
            <p>פנייתך הועברה לטיפול בהקדם!</p>
        </Text>
    )
}
