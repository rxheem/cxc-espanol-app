import React, { Fragment } from 'react';

const WhenToUsePresentTense = props => {
  return (
    <Fragment>
      <br />
      <div id='WhenToUsePresentTense'>
        <h1 className='title is-4'>When to Use the Present Tense</h1>
        <p>
          The present tense is commonly used by Spanish-speakers in everyday
          conversations. It is mainly used to express
        </p>

        <div>
          {/* Things happening in the near future */}
          <div>
            <br />
            <h1 className='title is-5'>1. Near future events</h1>
            <span>
              The present tense is also used to describe events that will happen
              in the near future. It is expressed with the use of
            </span>
            <br />
            <br />
            <b>
              ir + a +{' '}
              <span className='has-text-info'>verb in infinitive form</span>
            </b>

            {/* Examples */}
            <br />
            <br />
            <div style={{ padding: '10px 25px', backgroundColor: '#F0F0F0' }}>
              <div>
                <p className='has-text-grey' style={{ fontWeight: 'bold' }}>
                  <span className='has-text-info'>Voy</span> a ducharme.
                </p>
                <p className='has-text-black'>
                  <i>I am going to take a shower</i>
                </p>
              </div>
              <br />
              <div>
                <p className='has-text-grey' style={{ fontWeight: 'bold' }}>
                  Él <span className='has-text-info'>va</span> al cine con sus
                  amigos.
                </p>
                <p className='has-text-black'>
                  <i>He is going to the movies with his friends.</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WhenToUsePresentTense;
