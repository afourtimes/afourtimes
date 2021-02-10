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
              <div className="bio-content-points"><span class="bio-content-span">[A]</span>LL</div>
              <div className="bio-content-points"><span className="bio-content-span">[A]</span>BOUT</div>
              <div className="bio-content-points"><span className="bio-content-span">[A]</span>DITYA</div>
              <div className="bio-content-points"><span className="bio-content-span">[A]</span>STONO</div>
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
            <div className="bio-content-points">AN EYE FOR AN EYE</div>
            <div className="bio-content-points">AND THE WORLD GOES BLIND</div>
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