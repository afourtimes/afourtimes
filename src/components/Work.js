import React from 'react';

const workList = [
  {
    role: 'Front End Developer',
    employer: 'De Bijenkorf',
    year: '07/2018 - ?'
  },
  {
    role: 'Front End Developer',
    employer: 'Telegraaf Media Groep',
    year: '09/2016 - 06/2018'
  },
  {
    role: 'Full Stack Developer',
    employer: 'GameHouse Europe',
    year: '02/2016 - 07/2016'
  },
];

export const Work = ({ ref }) => {
  return (
    <div className="honors" ref={ref}>
      <p className="honors-header">WORK</p>
      <ul>
        {
          workList.map((work) =>
            <li>
              <div className="flex-table">
                <p>{work.role}</p>
                <p>{work.employer}</p>
                <p>{work.year}</p>
              </div>
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default Work;