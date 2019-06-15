import React from 'react';

const Navigation = props => {
  return (
    <aside
      id='PresentTenseNavigation'
      style={{ position: 'fixed', overflow: 'hidden' }}
    >
      <h1 className='title is-4'>Jump to</h1>

      <ul style={{ paddingLeft: '25px' }}>
        <li>
          <i
            className='fas fa-burn'
            style={{ color: 'red', paddingRight: ' 12px' }}
          />
          <a href='#overview'>Overview</a>
        </li>
        <li style={{ paddingTop: '8px' }}>
          <i
            className='fas fa-burn'
            style={{ color: 'green', paddingRight: '12px' }}
          />
          <a href='#'>Regular Verbs Conjugation</a>
        </li>
        <li style={{ paddingTop: '8px' }}>
          <i
            className='fas fa-burn'
            style={{ color: 'orange', paddingRight: '12px' }}
          />
          <a href='#'>When to use Present Tense</a>
        </li>
        <li style={{ paddingTop: '8px' }}>
          <i
            className='fas fa-burn'
            style={{ color: 'pink', paddingRight: '12px' }}
          />
          <a href='#'>Regular Verbs Examples</a>
        </li>
        <li style={{ paddingTop: '8px' }}>
          <i
            className='fas fa-burn'
            style={{ color: 'yellow', paddingRight: '12px' }}
          />
          <a href='#'>Irregular Verbs Overview</a>
        </li>
        <li style={{ paddingTop: '8px' }}>
          <i
            className='fas fa-burn'
            style={{ color: 'coral', paddingRight: '12px' }}
          />
          <a href='#'>.</a>
        </li>
        <li style={{ paddingTop: '8px' }}>
          <i
            className='fas fa-burn'
            style={{ color: 'blue', paddingRight: '12px' }}
          />
          <a href='#'>.</a>
        </li>
        <li style={{ paddingTop: '8px' }}>
          <i
            className='fas fa-burn'
            style={{ color: 'brown', paddingRight: '12px' }}
          />
          <a href='#'>.</a>
        </li>
        <li style={{ paddingTop: '8px' }}>
          <i
            className='fas fa-burn'
            style={{ color: 'black', paddingRight: '12px' }}
          />
          <a href='#'>.</a>
        </li>
        <li style={{ paddingTop: '8px' }}>
          <i
            className='fas fa-burn'
            style={{ color: 'red', paddingRight: '12px' }}
          />
          <a href='#'>.</a>
        </li>
        <li style={{ paddingTop: '8px' }}>
          <i
            className='fas fa-burn'
            style={{ color: 'orange', paddingRight: '12px' }}
          />
          <a href='#'>.</a>
        </li>
        <li style={{ paddingTop: '8px' }}>
          <i
            className='fas fa-burn'
            style={{ color: 'green', paddingRight: '12px' }}
          />
          <a href='#'>.</a>
        </li>
        <li style={{ paddingTop: '8px' }}>
          <i
            className='fas fa-burn'
            style={{ color: 'skyblue', paddingRight: '12px' }}
          />
          <a href='#'>.</a>
        </li>
        <li style={{ paddingTop: '8px' }}>
          <i
            className='fas fa-burn'
            style={{ color: 'green', paddingRight: '12px' }}
          />
          <a href='#'>.</a>
        </li>
      </ul>
    </aside>
  );
};

export default Navigation;
