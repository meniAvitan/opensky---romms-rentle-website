import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import WaveTop from '../images/WaveTop.svg';


const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 2rem 0rem;
    color: #fff;
    background-image: url(${WaveTop});
    color: #fff;
    background-size: cover;
    background-repeat: no-repeat;
    
    
`;
const Container = styled.div`
    padding: 3rem calc((100vh - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media  screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 500px;
        padding-top: 14rem;
    }
    @media  screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        grid-template-rows: 450px;
        padding-top: 20rem;
    }
`;
const ColumnLeft = styled.div`
    padding: 1rem 2rem;
    order: ${({revers}) => (revers ? '1' : '2')};

    @media  screen and (max-width: 768px) {
        order: ${({revers}) => (revers ? '2' : '1')};
        padding-top: 2rem;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
 
        @media  screen and (max-width: 768px) {
            width: 100%;
            height: 100%;
        }

    }
`;
const ColumnRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({revers}) => (revers ? '2' : '1')};
    margin-bottom: 10rem;
    

    h2{
 
        font-size: clamp(1.5rem, 6vh, 2rem);
        font-family: 'Karantina', cursive;
        margin-bottom: 1.5rem;
        letter-spacing: 4px;
        font-size: 2.5rem;
        
    }
    p{
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }
    a{
        text-decoration: none;
    }
    button{
        
        background: rgb(37, 150, 190);
        border: 3px solid #fff;
        min-width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: 0.3s;
        padding: 1rem ;
        color: #fff;
        font-family: 'Karantina', cursive;
        letter-spacing: 2px;
        font-size: 1.5rem;
        margin-left: 35%;
        margin-right: 40%;
        
        &:hover {
            transform: translateY(-5px);
        }
        @media  screen and (max-width: 768px) {
            margin-bottom: 10rem;
            margin-left: 30%;
            margin-right: 30%;
        }
    }

    @media  screen and (max-width: 768px) {
        margin-bottom: 4rem;
    h2{
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-family: 'Karantina', cursive;
        letter-spacing: 4px;
        text-align: center;
    }
    p{
        margin-bottom: 1.5rem;
        text-align: center;
        font-size: 1.3rem;
    }
        height: 16rem;
      
    }
    @media  screen and (max-width: 768px) {

    }
`;

const InfoSection = ({
    heading,
    paragraphOne,
    paragraphTow,
    buttonLabel,
    image,
    revers
}) => {
  
    useEffect(() => {
        Aos.init({
          duration : 2000
        });
      }, []);
    return (

    <Section dir="rtl" id="about">
        <Container>
            <ColumnRight  
                data-aos="fade-up-left" >
                <h2>{heading}</h2>
                <p>{paragraphOne}</p>
                <p>{paragraphTow}</p>
                <a href="#contact">
                    <button>{buttonLabel}</button>
                </a>  
            </ColumnRight>
            <ColumnLeft 
                revers = {revers} 
                data-aos="fade-up-right">
                <img src={image} alt="וילה" />
            </ColumnLeft>
            
        </Container>
    </Section>
    )
}

export default InfoSection
