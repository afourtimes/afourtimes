import React, { useState } from 'react';

export const Bio = () => {
  const [toggleIndex, toggleOpen] = useState(0);
  const wavyText = [
    'A', 'l', 'l', 'A', 'b', 'o', 'u', 't', 'A', 'd', 'i', 't', 'y', 'a', 'A', 's', 't', 'o', 'n', 'o',
    'A', 'l', 'l', 'A', 'b', 'o', 'u', 't', 'A', 'd', 'i', 't', 'y', 'a', 'A', 's', 't', 'o', 'n', 'o',
    'A', 'l', 'l', 'A', 'b', 'o', 'u', 't', 'A', 'd', 'i', 't', 'y', 'a', 'A', 's', 't', 'o', 'n', 'o',
    'A', 'l', 'l', 'A', 'b', 'o', 'u', 't', 'A', 'd', 'i', 't', 'y', 'a', 'A', 's', 't', 'o', 'n', 'o',
  ];

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
                { wavyText.map((text, index) => <span style={{ '--i': index + 1 }}>{ text }</span> ) }
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
            <div className="bio-content-points">
              蔡德明 ++++ SOERABADJA ++++ 781018800 ++++ INFJ-T ++++
              蔡德明 ++++ SOERABADJA ++++ 781018800 ++++ INFJ-T ++++
              蔡德明 ++++ SOERABADJA ++++ 781018800 ++++ INFJ-T ++++
              蔡德明 ++++ SOERABADJA ++++ 781018800 ++++ INFJ-T ++++
              蔡德明 ++++ SOERABADJA ++++ 781018800 ++++ INFJ-T ++++
              蔡德明 ++++ SOERABADJA ++++ 781018800 ++++ INFJ-T ++++
              蔡德明 ++++ SOERABADJA ++++ 781018800 ++++ INFJ-T ++++
              蔡德明 ++++ SOERABADJA ++++ 781018800 ++++ INFJ-T ++++
            </div>
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
            <iframe title="spot-player" id="rotation-iframe" src="https://open.spotify.com/embed/playlist/5J7s69JqzOY2aD5z5gRsy4" gesture="media" allow="encrypted-media"/>
          </div>
          }
        </div>
      </nav>
    </div>
  );
};

export default Bio;