import React, { Fragment } from 'react';

const AlsoRead = () => {
  return (
    <Fragment>
      <div>
        <h1 className='subtitle has-text-info'>Also Read</h1>
        <div style={{ marginTop: '-20px' }}>
          You may also be interested in reviewing these lessons and articles.
        </div>
        <br />

        <span>
          <ul style={{ listStyle: 'disc', paddingLeft: '30px' }}>
            <li>
              <a href='/tenses/present-progressive/'>
                The Present Progressive Tense
              </a>
            </li>
            <li>
              <a href='/blog/how-to-use-gustar/'>
                How to use the verb 'gustar'
              </a>
            </li>
            <li>
              <a href='/exercises/present-tense-exercise/'>
                Present Tense Exercises
              </a>
            </li>
            <li>
              <a href='/tenses/future-tense/'>The Future Tense</a>
            </li>
            <li>
              <a href='/blog/ser-vs-estar/'>Ser vs. Estar</a>
            </li>
          </ul>
        </span>
      </div>

      <style jsx>{`
        a :hover {
          color: #209cee;
        }
      `}</style>
    </Fragment>
  );
};

export default AlsoRead;
