import { FaTimes } from 'react-icons/fa';

import imgA from '../RoomsImages/RoomOne/1.jpg';
import imgB from '../RoomsImages/RoomOne/2.jpg';
import imgC from '../RoomsImages/RoomOne/3.jpg';
import imgD from '../RoomsImages/RoomOne/4.jpg';
import imgE from '../RoomsImages/RoomOne/5.jpg';
import imgF from '../RoomsImages/RoomOne/6.jpg';
import imgG from '../RoomsImages/RoomOne/7.jpg';
import imgH from '../RoomsImages/RoomOne/8.jpg';
import imgI from '../RoomsImages/RoomOne/9.jpg';
import imgJ from '../RoomsImages/RoomOne/10.jpg';


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



const GalleryOne = () => {

  const images = [imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH, imgI, imgJ].map((size) => ({
    src: `${size}`,
  }));

  return (

    <Section>
      <Icon>
        <a href="#images">
          <CloseIcon />
        </a>
      </Icon>
      <h1>סוויטה 1</h1>
      <Carousel
        images={images}
        hasThumbnails={false}
        shouldSwipeOnMouse={true}
        shouldMaximizeOnClick={true}
        shouldMinimizeOnClick={true}
        shouldMinimizeOnSwipeDown={true}
        objectFit="cover" />
    </Section>

  );
};

export default GalleryOne;