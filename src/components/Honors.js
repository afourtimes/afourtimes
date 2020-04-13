import React from 'react';

const honorList = [
  {
    name: 'T500',
    provider: 'The Next Web',
    year: '2019'
  },
  {
    name: 'T500',
    provider: 'The Next Web',
    year: '2017'
  }
];

export const Honors = ({ ref }) => {
  return (
    <div className="honors" ref={ref}>
      <p className="honors-header">RECOGNITIONS</p>
      <ul>
        {
          honorList.map((honor) =>
            <li>
              <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <p style={{ fontSize: '32px' }}>{honor.name}</p>
                <p style={{ fontSize: '32px' }}>{honor.provider}</p>
                <p style={{ fontSize: '16px' }}>{honor.year}</p>
              </div>
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default Honors;