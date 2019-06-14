import React from 'react';

const Page = props => {
  return (
    <div className='page' id={props.id}>
      {props.children}
    </div>
  );
};

export default Page;
