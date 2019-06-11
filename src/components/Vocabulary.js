import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import { withRouter } from 'react-router-dom';

class Vocabulary extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <br />
          <div className='container animated fadeIn'>
            <div className='columns'>
              <div className='column is-one-quarter'>First column</div>

              <div className='column'>
                <div className='container'>
                  <h1 className='title is-5'>Common Verbs</h1>

                  {/* Table of the verbs */}
                  <table className='table is-fullwidth is-hoverable'>
                    <thead>
                      <tr>
                        <th>English</th>
                        <th>Spanish</th>
                        <th>Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>To walk</td>
                        <td>Andar</td>
                        <td>Voy andando al colegio todos los días.</td>
                      </tr>
                      <tr>
                        <td>To be</td>
                        <td>Estar</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>To be</td>
                        <td>Ser</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>To have</td>
                        <td>Tener</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>To make/ do</td>
                        <td>Hacer</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>To talk, speak</td>
                        <td>Hablar</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>To be able to/ can</td>
                        <td>Poder</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>To give</td>
                        <td>Dar</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>To see</td>
                        <td>Ver</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>To know</td>
                        <td>Saber</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>To go</td>
                        <td>Ir</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Vocabulary);
