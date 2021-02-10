import React, { useRef, useEffect, useState } from 'react';
import {useIntersection} from 'react-use';
import gsap from 'gsap';

import Header from './components/Header';
import Bio from './components/Bio';
import Footer from './components/Footer';
import Work from './components/Work';
import Honors from './components/Honors';
import ReachOut from './components/ReachOut';
import './App.css';

const colorList = ['yellow', 'red', 'blue', 'white'];

const App = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const changeDotColor = setInterval(() => {
      setIndex(index => index === 3 ? 0 : index + 1);
    }, 2500);

    return () => {
      clearInterval(changeDotColor);
    };
  }, []);

  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    threshold: 0.5,
    rootMargin: '500px',
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: 'power4.out',
      stagger: {
        amount: .3
      }
    });
  };
  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: 'power4.out',
    });
  };

  intersection && intersection.intersectionRatio < 0.5 ?
    fadeOut('.hahaha')
    : fadeIn('.hahaha');

  return (
    <div className="App">
      <Header/>
      <div className="content">
        <div className="section">
          <p className="prologue section-header">AFOURTIMES<span className={colorList[index]}>.</span></p>
        </div>
        <div className="section hahaha" ref={sectionRef}>
          <Bio />
        </div>
        <div className="section">
          {/*<Work />*/}
          {/*<Honors />*/}
          <ReachOut />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
