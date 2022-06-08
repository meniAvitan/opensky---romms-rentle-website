import Aos from 'aos';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import {AiFillStar} from 'react-icons/ai';

const Section = styled.section`
    padding: 0rem 0rem;
    h1{
        text-align: center;
        color: rgb(37, 150, 190);
        margin-bottom: 2rem;
        letter-spacing: 3px;
        font-size: 3.5rem;
        font-family: 'Karantina', cursive;
    }
    
`;
const SendComments = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    button{
        background: rgb(37, 150, 190);
        border: 3px solid #fff;
        min-width: 100px;
        max-width: 250px;
        cursor: pointer;
        text-decoration: none;
        transition: 0.3s;
        padding: 1rem ;
        color: #fff;
        font-family: 'Karantina', cursive;
        letter-spacing: 2px;
        font-size: 1.5rem;
        margin-top: 1rem;
        
        &:hover {
            transform: translateY(5px);
        }
        }
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
   justify-content: center;
   align-items: center; 
`;
const Recommend = styled.div`
    text-align: center;
    width: 17rem;
    height: 17rem;
    border-radius: 10px;
    margin: 1rem;
    padding: 10px;
    box-shadow: 5px 10px 18px #888888;
    color: rgb(37, 150, 190);
   

    img{
        border-radius: 50%;
        width: 50%;
        height: 50%;
        object-fit: cover;
    }
    h3{
        font-weight: bold;
        padding: 10px;
        font-size: 1.2rem;
    }
    h2{
        font-size: 1rem;
        font-weight: bold;
    }
    @media screen and (max-width: 768px) {
       width:  9rem;
       height: 9rem;
       

       h3{
            padding: 0;
            font-size: 0.6rem;
        }
        h2{
            padding: 0;
            font-size: 0.6rem;
            
        }
    }
  
`;
const Star = styled(AiFillStar)`
     color: #f0c040; 
     font-size: 0.5rem;
     
`;

const Recommendations = ({recommends}) => {
    useEffect(() => {
        Aos.init({
          duration : 2000
        });
      }, []);

    return (
        <Section dir="rtl" id="recommends">
            <h1>הלקוחות שלנו ממליצים</h1>
            <Container >
            {recommends.map((recommend, index)=>{
                return(
                <Recommend key={index}  >    
                    <img src={recommend.image} alt="rating" />
                    <h3>{recommend.content}</h3>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <h2>{recommend.name}</h2>
                </Recommend>
            )})}
                
            </Container>
            <SendComments>
                <a  target="_blank" href="mailto:opensky.zefat@gmail.com?subject=תגובה על סוויטות שמים פתוחים-צפת" rel="noreferrer">
                    <button>לשליחת תגובה</button>
                </a>
            </SendComments>
        </Section>
    )
}

export default Recommendations
