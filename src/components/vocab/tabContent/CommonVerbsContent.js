import React from 'react';

const CommonVerbsContent = props => {
  return (
    <div>
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
            <td>
              Voy{' '}
              <span style={{ color: 'green', fontWeight: 'bold' }}>
                andando
              </span>{' '}
              al colegio todos los días.
            </td>
          </tr>
          <tr>
            <td>To be</td>
            <td>Estar</td>
            <td>
              Este pastel de chocolate{' '}
              <span style={{ color: 'green', fontWeight: 'bold' }}>está</span>{' '}
              delicioso.
            </td>
          </tr>
          <tr>
            <td>To be</td>
            <td>Ser</td>
            <td>
              Sus ojos{' '}
              <span style={{ color: 'green', fontWeight: 'bold' }}>son</span>{' '}
              azules.
            </td>
          </tr>
          <tr>
            <td>To have</td>
            <td>Tener</td>
            <td>
              El lunes{' '}
              <span style={{ color: 'green', fontWeight: 'bold' }}>tengo</span>{' '}
              una cita con el dentista.
            </td>
          </tr>
          <tr>
            <td>To make/ do</td>
            <td>Hacer</td>
            <td>
              Estoy ocupado{' '}
              <span style={{ color: 'green', fontWeight: 'bold' }}>
                haciendo
              </span>{' '}
              los preparativos para la fiesta.
            </td>
          </tr>
          <tr>
            <td>To talk, speak</td>
            <td>Hablar</td>
            <td>
              ¿Podemos{' '}
              <span style={{ color: 'green', fontWeight: 'bold' }}>hablar</span>{' '}
              en privado?
            </td>
          </tr>
          <tr>
            <td>To be able to/ can</td>
            <td>Poder</td>
            <td>
              Mi novia{' '}
              <span style={{ color: 'green', fontWeight: 'bold' }}>puede</span>{' '}
              bailar salsa.
            </td>
          </tr>
          <tr>
            <td>To give</td>
            <td>Dar</td>
            <td>
              Necesito que me{' '}
              <span style={{ color: 'green', fontWeight: 'bold' }}>des</span>{' '}
              una idea para el tema de la fiesta.
            </td>
          </tr>
          <tr>
            <td>To see/ watch</td>
            <td>Ver</td>
            <td>
              ¿Quieres{' '}
              <span style={{ color: 'green', fontWeight: 'bold' }}>ver</span> mi
              carro nuevo?
            </td>
          </tr>
          <tr>
            <td>To know</td>
            <td>Saber</td>
            <td>
              Mi hijo no{' '}
              <span style={{ color: 'green', fontWeight: 'bold' }}>sabe</span>{' '}
              amarrarse los zapatos.
            </td>
          </tr>
          <tr>
            <td>To go</td>
            <td>Ir</td>
            <td>
              Ayer Ana y yo{' '}
              <span style={{ color: 'green', fontWeight: 'bold' }}>fuimos</span>{' '}
              al cine.
            </td>
          </tr>
          <tr>
            <td>To need</td>
            <td>Necesitar</td>
            <td>
              <span style={{ color: 'green', fontWeight: 'bold' }}>
                Necesitan
              </span>{' '}
              salir ya si quieren alcanzar su vuelo.
            </td>
          </tr>
          <tr>
            <td />
            <td />
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CommonVerbsContent;
