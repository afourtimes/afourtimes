import React, { useState } from 'react';

export const Bio = () => {
  const [toggleIndex, toggleOpen] = useState(0);

  return (
    <div className="bio">
      <nav className="menu">
        <div className="menu__item">
          <a className="menu__item-link" href="#definition" onClick={() => toggleOpen(toggleIndex === 1 ? 0 : 1)}>Definition</a>
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>Define?</span>
              <span>Defined</span>
              <span>Define?</span>
              <span>Defined</span>
            </div>
          </div>
          { toggleIndex === 1 &&
            <div className="bio-content" id="definition">
              <div className="wavy">
                <span className="aaaa-yellow" style={{ '--i': 1 }}>A</span>
                <span style={{ '--i': 2 }}>l</span>
                <span style={{ '--i': 3 }}>l</span>
                <span style={{ '--i': 4 }}> </span>
                <span className="aaaa-red" style={{ '--i': 5 }}>A</span>
                <span style={{ '--i': 6 }}>b</span>
                <span style={{ '--i': 7 }}>o</span>
                <span style={{ '--i': 8 }}>u</span>
                <span style={{ '--i': 9 }}>t</span>
                <span style={{ '--i': 10 }}> </span>
                <span className="aaaa-blue" style={{ '--i': 11 }}>A</span>
                <span style={{ '--i': 12 }}>d</span>
                <span style={{ '--i': 13 }}>i</span>
                <span style={{ '--i': 14 }}>t</span>
                <span style={{ '--i': 15 }}>y</span>
                <span style={{ '--i': 16 }}>a</span>
                <span style={{ '--i': 17 }}> </span>
                <span className="aaaa-white" style={{ '--i': 18, color: '#000' }}>A</span>
                <span style={{ '--i': 19 }}>s</span>
                <span style={{ '--i': 20 }}>t</span>
                <span style={{ '--i': 21 }}>o</span>
                <span style={{ '--i': 22 }}>n</span>
                <span style={{ '--i': 23 }}>o</span>
              </div>
            </div>
          }
        </div>
        <div className="menu__item">
          <a className="menu__item-link" href="#observe" onClick={() => toggleOpen(toggleIndex === 2 ? 0 : 2)}>Aditya</a>
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>Aditya</span>
              <span>Aditya</span>
              <span>Aditya</span>
              <span>Aditya</span>
            </div>
          </div>
          { toggleIndex === 2 &&
          <div className="bio-content" id="observe">
            <div className="bio-content-points">蔡德明</div>
            <div className="bio-content-points">SOERABADJA</div>
            <div className="bio-content-points">781018800</div>
            <div className="bio-content-points">INFJ-T</div>
          </div>
          }
        </div>
        <div className="menu__item">
          <a className="menu__item-link" href="#galileo" onClick={() => toggleOpen(toggleIndex === 3 ? 0 : 3)}>Galileo</a>
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>Galileo</span>
              <span>Galilei</span>
              <span>Galileo</span>
              <span>Galilei</span>
            </div>
          </div>
          { toggleIndex === 3 &&
          <div className="bio-content" id="galileo">
            <div className="circle">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="300"
                height="300"
                viewBox="0 0 300 300"
                enableBackground="new 0 0 300 300"
                xmlSpace="preserve">
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                </defs>
                <circle cx="150" cy="100" r="75" fill="none"/>
                <g>
                    <use xlinkHref="#circlePath" fill="none"/>
                    <text fill="#FFF">
                        <textPath xlinkHref="#circlePath">An eye for an eye</textPath>
                    </text>
                </g>
              </svg>
            </div>
            <div className="circle">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="300"
                height="300"
                viewBox="0 0 300 300"
                enable-background="new 0 0 300 300"
                xmlSpace="preserve">
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                </defs>
                <circle cx="150" cy="100" r="75" fill="none"/>
                <g>
                  <use xlinkHref="#circlePath" fill="none"/>
                  <text fill="#FFF">
                    <textPath xlinkHref="#circlePath">and the world is blind.</textPath>
                  </text>
                </g>
              </svg>
            </div>
          </div>
          }
        </div>
        <div className="menu__item">
          <a className="menu__item-link" href="#rotation" onClick={() => toggleOpen(toggleIndex === 4 ? 0 : 4)}>Rotation</a>
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>Rotation</span>
              <span>Rotation</span>
              <span>Rotation</span>
              <span>Rotation</span>
            </div>
          </div>
          { toggleIndex === 4 &&
          <div className="bio-content" id="rotation">
            <iframe id="rotation-iframe" src="https://open.spotify.com/embed/playlist/5J7s69JqzOY2aD5z5gRsy4" gesture="media" allow="encrypted-media"/>
          </div>
          }
        </div>
      </nav>
    </div>
  );
};

export default Bio;