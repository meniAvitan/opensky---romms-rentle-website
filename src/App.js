/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import Contact from "./components/Contact";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import Recommendations from "./components/Recommendations";
import { InfoData } from "./data/InfoData";
import { RecommendData } from "./data/RecommendsData";
import { SliderData } from "./data/SliderData";

import GlobalStyle from "./globalStyle";
import GalleryOne from "./pages/GalleryOne";
import GalleryTwo from "./pages/GalleryTwo";
import GalleryThree from "./pages/GalleryThree";
import Lobby from "./pages/Lobby";

import { HashRouter, Route, Switch } from "react-router-dom";
import Rooms from "./components/Rooms";
import { RoomsImage } from "./data/RoomsImagesInfo";
import InfoDetails from "./components/InfoDetails";
import styled from "styled-components";
import call from "./images/call.png";
import GalleryFour from "./pages/GalleryFour";
import { ScrollToTop } from "./components/ScrollToTop";
import TagManager from "react-gtm-module";
import Loading from "./components/Loading";


const tagManagerArgs = {
  gtmId: "GTM-TZWCJ4P",
};

TagManager.initialize(tagManagerArgs);

// ReactGA.initialize('G-F76DTEXD9V');
// ReactGA.pageview(window.location.pathname + window.location.search);

const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.initialize("G-F76DTEXD9V");
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const ContactFixed = styled.div`
  padding: 0.1rem;
  position: fixed;
  top: 80%;
  transform: translateY(-50%);
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 2px;
  z-index: 1;
  a {
    text-decoration: none;
  }
  img {
    border: solid 2px skyblue;
    border-radius: 100%;
    position: absolute;
    left: 2rem;
    width: 4rem;
    height: 4rem;
    z-index: 10;
    animation: pulse 5s ease-out;
    animation-iteration-count: infinite;

    @media screen and (max-width: 768px) {
      width: 3rem;
      height: 3rem;
      left: 1rem;
    }
  }
  @keyframes pulse {
    0% {
      -moz-transform: scale(1);
      opacity: 0;
    }
    25% {
      -moz-transform: scale(1.25);
      opacity: 0.1;
    }
    50% {
      -moz-transform: scale(1.5);
      opacity: 0.3;
    }
    75% {
      -moz-transform: scale(1.75);
      opacity: 0.5;
    }
    100% {
      -moz-transform: scale(2);
      opacity: 0;
    }
  }
  @keyframes pulse {
    0% {
      -webkit-transform: scale(1);
      opacity: 0;
    }
    1% {
      -webkit-transform: scale(1.1);
      opacity: 0.9;
    }
    99% {
      -webkit-transform: scale(1.9);
      opacity: 0.01;
    }
    100% {
      -webkit-transform: scale(2);
      opacity: 0;
    }
  }
`;



const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    
      <HashRouter>
        <React.Fragment>
          <GlobalStyle />
          <Loading />
          <Navbar toggle={toggle} />{" "}
          <Dropdown isOpen={isOpen} toggle={toggle} /> <ScrollToTop />
          <ContactFixed>
            <a href="tel:0549631100">
              {" "}
              <img src={call} alt="phone"/>
                {" "}
              
            </a>
          </ContactFixed>{" "}
          <Hero slides={SliderData} />
          <InfoSection {...InfoData} /> <InfoDetails />
          <Rooms rooms={RoomsImage} />{" "}
          <Switch>
            <Route path="/roomOne" component={GalleryOne}>
              {" "}
            </Route>{" "}
            <Route path="/roomTwo" component={GalleryTwo}>
              {" "}
            </Route>{" "}
            <Route path="/roomThree" component={GalleryThree}>
              {" "}
            </Route>{" "}
            <Route path="/roomFour" component={GalleryFour}>
              {" "}
            </Route>{" "}
            <Route path="/lobby" component={Lobby}>
              {" "}
            </Route>{" "}
          </Switch>{" "}
          <Recommendations recommends={RecommendData} /> <Map />
          <Contact />
          
          <Footer />
        </React.Fragment>{" "}
      </HashRouter>{" "}
    </>
  );
};

export default App;
