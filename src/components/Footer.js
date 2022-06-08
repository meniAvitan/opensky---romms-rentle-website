import Aos from 'aos';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import wave from '../images/wave.svg';
import {AiOutlineCopyright} from 'react-icons/ai';

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 0rem 0rem;
    color: #fff;
    background-image: url(${wave});
    background-size: cover;
    background-repeat: no-repeat;
    
    h2{
        font-family: 'Karantina', cursive;
       text-align: center;
        color: #2596be;
           letter-spacing: 3px;
           font-size: 2.5rem;
           margin: 2rem;
           padding-bottom: 2rem;
          
       }
       h3{
            color: #754eb5;
           text-align: center;
           padding: 1rem;
           letter-spacing: 2px;
           font-size: 1.5rem;
        }
        h3:hover{
            color: #dfd3f2;
        }
       
        
        @media  screen and (max-width: 768px) {     
        padding: 0;  
        h2{
           font-family: 'Karantina', cursive;
           color: #2596be;
           text-align: center;
           letter-spacing: 2px;
           font-size: 2rem;
           margin: 2rem;
           padding-bottom: 1rem;
          
       }
             
    }
`;

const Icon = styled(AiOutlineCopyright)`
    h5{
        color: #fff;
        font-size: 2rem;
    }
`;

const FooterData = styled.div`
 margin-top: 0rem;
 padding-top: 5rem;
       a{
           text-decoration: none;
       }
        h3{
      
            text-align: center;
            font-size: 1rem;
            letter-spacing: 2px;
            font-size: 1rem;
        }
        h4{
            font-size: 1.5rem;
            letter-spacing: 2px;
            margin-right: 0.5rem;
            padding-bottom: 0.5rem;
        }
        h5{
            padding-top: 1rem;
            font-size: 1rem;
            letter-spacing: 2px;
            margin-right: 0.5rem;
        }

        

  
    @media  screen and (max-width: 768px) {
        padding-top: 2rem;
       
        h3{
      
            text-align: center;
            font-size: 0.7rem;
        }
        h4{
            font-size: 0.6rem;
            margin-right: 0.5rem;
            padding-bottom: 0.5rem;
        }
        h5{
            font-size: 0.6rem;
            margin-right: 0.5rem;
        }
           
       
       }
`;

const Footer = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);
    return (
        <>
            <Section dir="rtl">
            <h2>השמים הם הגבול...<br />אבל כשהם פתוחים אין גבול</h2>
                <FooterData>
                    <h4>כתובת: ירושלים,32,צפת</h4>
                    <h4>טלפון להזמנות: 054-963-1100</h4>
                    
                   
                    <h5> <Icon/> כל הזכויות שמורות לשמים פתוחים צפת</h5>
                    
                    <a href="https://meni-web.com" target="_blank" rel="noreferrer">
                        <h3>אפיון, עיצוב ובניה - meni-web.com </h3>
                    </a>
                    

                </FooterData>
               

            </Section>


        </>
    )
}

export default Footer;
