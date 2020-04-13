import React, { useRef, useEffect, useState } from 'react';
import {useIntersection} from 'react-use';
import gsap from 'gsap';

import Header from './components/Header';
import Footer from './components/Footer';
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
    rootMargin: '800px',
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
    fadeOut('.intersected')
    : fadeIn('.intersected');

  return (
    <div className="App">
      <Header/>
      <div className="content">
        <div className="section">
          <p className="prologue section-header">AFOURTIMES<span className={colorList[index]}>.</span></p>
        </div>
        <div className="section intersected" ref={sectionRef}>
          <p className="text" style={{ minHeight: '600px' }}>
            The best taco bowls are made in Trump Tower Grill. I love Hispanics! Lorem Ipsum is unattractive, both
            inside and out. I fully understand why it’s former users left it for something else. They made a good
            decision. I’m the best thing that ever happened to placeholder text.

            I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. It could
            be Russia, but it could also be China. It could also be lots of other people. It also could be some
            wordsmith sitting on their bed that weights 400 pounds. Ok? I write the best placeholder text, and I'm the
            biggest developer on the web by far... While that's mock-ups and this is politics, are they really so
            different? I think the only difference between me and the other placeholder text is that I’m more honest and
            my words are more beautiful.

            I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. It could
            be Russia, but it could also be China. It could also be lots of other people. It also could be some
            wordsmith sitting on their bed that weights 400 pounds. Ok? I’m the best thing that ever happened to
            placeholder text. I have a 10 year old son. He has words. He is so good with these words it's unbelievable.
          </p>
        </div>
        <div className="section">
          <Honors />
          <ReachOut />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
