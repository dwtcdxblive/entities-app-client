import React from 'react';
import Navbar from './Navbar';
import candles from '../assets/candles.png'
const Added = () => {
    return (
      <div>
        <Navbar />
        <section>
        <div className='container mt-5 pt-4'>
            <div className='row justify-content-center'>
            <div className='col-md-6'>
                      <h2 className='text-center'>Digital Government</h2>
                      <h3 className='text-center'>Overall impact</h3>
                      <div className='d-flex flex-wrap justify-content-between gap-3 mt-3'>
                    <div class="card w-45">
                      <div className="card-body">
                      <h5 className="card-title text-center">##/20</h5>
                        <h6 className="card-subtitle text-center mb-2 text-body-secondary">Services Adopted</h6>
                      </div>
                    </div>
                    <div class="card w-45">
                      <div className="card-body">
                        <h5 className="card-title text-center">####</h5>
                        <h6 className="card-subtitle text-center mb-2 text-body-secondary">Cost Saved</h6>
                      </div>
                    </div>
                    <div class="card w-45">
                      <div className="card-body">
                        <h5 className="card-title text-center">####</h5>
                        <h6 className="card-subtitle text-center mb-2 text-body-secondary">Time saved</h6>
                      </div>
                    </div>
                    <div class="card w-45">
                      <div className="card-body">
                        <h5 className="card-title text-center">####</h5>
                        <h6 className="card-subtitle text-center mb-2 text-body-secondary">Co2 reduced</h6>
                      </div>
                    </div>
                    </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Added;