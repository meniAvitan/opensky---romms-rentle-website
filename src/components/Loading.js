import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Section = styled.section`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
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
            type="Grid"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={10000} //3 secs
    
            />
        </Section>   

       );
      }
   }
