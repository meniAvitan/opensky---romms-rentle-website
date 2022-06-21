import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Section = styled.section`
position:absolute;
width:100%;
height:100%;
z-index: 2;
    padding-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0000;
    

`;

export default class Loading extends React.Component {
    //other logic
      render() {
       return(
        <Section >
            <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={8000} //3 secs
    
            />
        </Section>   

       );
      }
   }
