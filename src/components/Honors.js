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
              <div className="flex-table">
                <p>{honor.name}</p>
                <p>{honor.provider}</p>
                <p>{honor.year}</p>
              </div>
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default Honors;