import React, { useRef, useEffect, useState } from 'react';
import {useIntersection} from 'react-use';
import gsap from 'gsap';

import Header from './components/Header';
import './App.css';

const colorList = ['yellow', 'red', 'blue', 'white'];

const App = () => {
  const [index, setIndex] = useState(0);
  const [date, setCurrentDate] = useState('');

  useEffect(() => {
    function changeDotColor() {
      setInterval(() => setIndex(index === 3 ? 0 : index + 1), 2500);
    }

    function getCurrentDate() {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      const yyyy = today.getFullYear();

      return setCurrentDate(`${dd}/${mm}/${yyyy}`);
    }

    getCurrentDate();
    changeDotColor();
  });

  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    threshold: 0.5,
    rootMargin: '0px',
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
          <p className="prologue">AFOURTIMES<span className={colorList[index]}>.</span></p>
          <p style={{textAlign: 'center'}} className="text">{date}</p>
        </div>
        <div className="section hahaha" ref={sectionRef}>
          <p className="text">
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
        </div>
      </div>
    </div>
  );
}

export default App;
