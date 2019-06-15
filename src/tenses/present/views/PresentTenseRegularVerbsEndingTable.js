import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import $ from 'jquery';

const PresentTenseRegularVerbsEndingTable = props => {
  return (
    <Fragment>
      <table className='table is-bordered is-striped is-hoverable is-fullwidth has-text-centered'>
        <thead>
          <th className='has-text-centered'>Subject Pronoun</th>
          <th className='has-text-centered'>~ar verbs</th>
          <th className='has-text-centered'>~er verbs</th>
          <th className='has-text-centered'>~ir verbs</th>
        </thead>
        <tbody>
          <tr>
            <th className='has-text-centered'>yo</th>
            <td className='has-text-centered'>o</td>
            <td className='has-text-centered'>o</td>
            <td className='has-text-centered'>o</td>
          </tr>
          <tr>
            <th className='has-text-centered'>tú</th>
            <td className='has-text-centered'>as</td>
            <td className='has-text-centered'>es</td>
            <td className='has-text-centered'>es</td>
          </tr>
          <tr>
            <th className='has-text-centered'>el/ ella/ usted</th>
            <td className='has-text-centered'>a</td>
            <td className='has-text-centered'>e</td>
            <td className='has-text-centered'>e</td>
          </tr>
          <tr>
            <th className='has-text-centered'>nosotros</th>
            <td className='has-text-centered'>amos</td>
            <td className='has-text-centered'>emos</td>
            <td className='has-text-centered'>imos</td>
          </tr>
          <tr className='is-selected'>
            <th className='has-text-centered'>vosotros</th>
            <td className='has-text-centered'>áis</td>
            <td className='has-text-centered'>éis</td>
            <td className='has-text-centered'>ís</td>
          </tr>
          <tr>
            <th className='has-text-centered'>ellos/ ellas/ ustedes</th>
            <td className='has-text-centered'>an</td>
            <td className='has-text-centered'>en</td>
            <td className='has-text-centered'>en</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default PresentTenseRegularVerbsEndingTable;
