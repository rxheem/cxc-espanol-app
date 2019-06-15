// Made according to the Bulma table structure

import React from 'react';

export default (Table = props => {
  return <table className='table'>{props.children}</table>;
});
