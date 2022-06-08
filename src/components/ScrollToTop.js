import React, { useState } from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import styled from 'styled-components';

const Btn = styled.div`
   position: fixed; 
   width: 100%;
   left: 95%;
   bottom: 40px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: #2596be;
   @media  screen and (max-width: 768px) {     
        left: 85%; 
        font-size: 2.5rem;    
    }
`;
const Icon = styled(FaArrowCircleUp)`
    color: #404040;
`;

export const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () =>{
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 300){
           setVisible(true);
        }
        else if(scrolled <= 300){
            setVisible(false)
        }
    }
    const scrollTop = ( )=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    window.addEventListener('scroll', toggleVisible)
    return (
        <Btn>
            <Icon onClick={scrollTop}
            style={{display: visible ? 'inline' : 'none'}}/>
        </Btn>
    )
}
