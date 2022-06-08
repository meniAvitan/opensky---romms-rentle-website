import {FaTimes} from 'react-icons/fa';
import imgA from '../RoomsImages/RoomFour/1.jpg';
import imgB from '../RoomsImages/RoomFour/2.jpg';
import imgC from '../RoomsImages/RoomFour/3.jpg';
import imgD from '../RoomsImages/RoomFour/4.jpg';
import imgE from '../RoomsImages/RoomFour/5.jpg';
import imgF from '../RoomsImages/RoomFour/6.jpg';
import imgG from '../RoomsImages/RoomFour/7.jpg';
import imgH from '../RoomsImages/RoomFour/8.jpg';
import imgI from '../RoomsImages/RoomFour/9.jpg';



import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem 15rem;
  background: rgb(37, 150, 190);

  h1{
    font-size: 3rem;
    color: #fff;
    text-align: center;
    margin-bottom: 2rem;
    letter-spacing: 3px;
  }

  @media screen and (max-width: 480px) {
    padding: 1rem;
    }
`;
const Icon = styled.div`
    position: relative;
    top: 1.2rem;
    left: 98%;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

    @media screen and (max-width: 480px) {
      left: 90%;
    }
`;
const CloseIcon = styled(FaTimes)`
    color: #fff;
`;


const GalleryFour = () => {
 
  const images = [imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH, imgI].map((size) => ({
    src: `${size}`,
  }));

  return (
    <Section>
        <Icon>
        <a href="#images">
            <CloseIcon />
        </a>
        </Icon>
        
        
      <h1>סוויטה 4</h1>
      <Carousel 
      images={images} 
      hasThumbnails={false} 
      shouldSwipeOnMouse={true} 
      shouldMaximizeOnClick={true}
      shouldMinimizeOnClick={true}
      shouldMinimizeOnSwipeDown={true}
      objectFit="cover"/>
  </Section>
  );
};

export default GalleryFour;