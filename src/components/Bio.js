import React, { useState } from 'react';

export const Bio = () => {
  const [toggleIndex, toggleOpen] = useState(0);

  return (
    <div className="bio">
      <nav className="menu">
        <div className="menu__item">
          <a className="menu__item-link" onClick={() => toggleOpen(toggleIndex === 1 ? 0 : 1)}>Identity</a>
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>Identity</span>
              <span>Identity</span>
              <span>Identity</span>
              <span>Identity</span>
            </div>
          </div>
          { toggleIndex === 1 &&
            <div className="bio-content">
              FIRST
            </div>
          }
        </div>
        <div className="menu__item">
          <a className="menu__item-link" onClick={() => toggleOpen(toggleIndex === 2 ? 0 : 2)}>Vision</a>
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>Vision</span>
              <span>Vision</span>
              <span>Vision</span>
              <span>Vision</span>
            </div>
          </div>
          { toggleIndex === 2 &&
          <div className="bio-content">
            SECOND
          </div>
          }
        </div>
        <div className="menu__item">
          <a className="menu__item-link" onClick={() => toggleOpen(toggleIndex === 3 ? 0 : 3)}>Passion</a>
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>Passion</span>
              <span>Passion</span>
              <span>Passion</span>
              <span>Passion</span>
            </div>
          </div>
          { toggleIndex === 3 &&
          <div className="bio-content">
            THIRD
          </div>
          }
        </div>
        <div className="menu__item">
          <a className="menu__item-link" onClick={() => toggleOpen(toggleIndex === 4 ? 0 : 4)}>Beliefs</a>
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>Beliefs</span>
              <span>Beliefs</span>
              <span>Beliefs</span>
              <span>Beliefs</span>
            </div>
          </div>
          { toggleIndex === 4 &&
          <div className="bio-content">
            FOURTH
          </div>
          }
        </div>
      </nav>
    </div>
  );
};

export default Bio;