import React from 'react';

const reachOutList = [
  {
    medium: 'INSTAGRAM',
    url: 'https://www.instagram.com/adityaastono/'
  },
  {
    medium: 'LINKEDIN',
    url: 'https://www.linkedin.com/in/adityaastono/'
  },
  {
    medium: 'E-MAIL',
    url: 'mailto:aditya.astono@gmail.com?Subject=What%20is%20up?'
  }
];

export const ReachOut = () => {
  return (
    <div className="reach-out">
      <p className="honors-header">REACH OUT</p>
      <ul className="honors-list">
        {
          reachOutList.map((link) =>
            <li>
              <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '32px' }}>{link.medium}</a>
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default ReachOut;