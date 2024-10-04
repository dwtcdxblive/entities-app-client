import React from 'react';
import SurveyComponent from './SurveyComponent';

const Survey = () => {
    return <section className='survey'>
<div className='container'>
      <div className='section section-padding'>
        <div className='row justify-content-center'>
            <div className='col-md-8'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title clr-title'>
                 Dubai Coffee Festival
                  </h5>
                  <p className='card-subtitle mb-3'>
                  Thank you for visiting!
                  </p>

                  <button
                    type='button'
                    className='btn strt-btn'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                  >
                    Start Quiz
                  </button>
                </div>
              </div>
              <div
                className='modal fade'
                id='exampleModal'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <SurveyComponent/>

                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='btn btn-secondary close-btn'
                        data-bs-dismiss='modal'
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
    </section>;
}

export default Survey;