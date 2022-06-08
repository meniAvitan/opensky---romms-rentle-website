import React from 'react';
import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';
import lobby from '../images/lobby.jpg';

const wraperStyle = css`
    text-align: center;
    width: 17rem;
    height: 17rem;
    margin: 2rem 1rem;
    text-decoration: none;
    font-size: 0.6rem;
    

    img{
       
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0px 0px 10px 10px;
        padding-bottom: 0;
    }
    img:hover{
        opacity: 0.5;
      
    }

    h1{
        text-align: center;
        color: rgb(37, 150, 190);
        
        padding-bottom: 0.5rem;
       
    }

    @media  screen and (max-width: 768px) { 
        margin: 0.5rem; 
        width: 10rem;
        height: 10rem;
        margin-top: 1rem;
        padding: 0rem;
        text-decoration: none;
        h1{
            font-size: 150%;
        }
    
    }
   
`;
const Section = styled.section`
   padding: 1rem 0rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    @media  screen and (max-width: 768px) { 
        padding: 0rem;
     }
   
`;
const RoomWrapper= styled(Link)`
   ${wraperStyle}
`;

const Lobby = styled.div`
    ${wraperStyle}
    width: 100%;
    height: 20rem;
    margin: 2rem 0rem;
   
    @media  screen and (max-width: 580px) {     
        width: 100%;
        height: 10rem;
        margin-bottom: 2.5rem;
        text-decoration: none;
        h1{
            font-size: 150%;
        }
    
    }
    @media  screen and (max-width: 768px) {     
        width: 100%;
        height: 15rem;
        margin-bottom: 2.5rem;
        padding-right: 1rem;
        padding-left: 0rem;
        text-decoration: none;
        h1{
            font-size: 150%;
        }
    
    }
`;

const Room= styled.div`
    box-shadow: 5px 10px 18px #888888;
    margin: 0rem 0.5rem;
    border-radius: 10px;
    padding: 5px;
`;
const RoomLobby = styled(Link)`
    box-shadow: 5px 10px 18px #888888;
    margin: 0rem 0.5rem;
    border-radius: 10px;
    padding: 5px;
    text-decoration: none;
    width: 100%;
`;

const Rooms = ({rooms}) => {
    const scrollWin = () =>{
        window.scrollBy(0, 600);
      }
    return (
        <Section id="images">
            <Container>
                <RoomLobby to='/lobby' id="#lobby">
                    <Lobby onClick={scrollWin}>
                        <h1>לובי</h1>
                        <img src={lobby} alt="לובי שמים פתוחים צפת | opensky"/>
                        
                       
                    </Lobby>
                </RoomLobby>
                {rooms.map((room, index)=>(
                    
                    <RoomWrapper to={room.link} key={index}> 
                    <Room onClick={scrollWin}>
                        <h1>{room.title}</h1>
                      <img src={room.image} alt={room.alt} />
                      <h1>{room.data}</h1>
                    </Room>
                   
                           
                     
                    </RoomWrapper>
                ))}

            </Container>
        </Section>
    )
}

export default Rooms
