import React from 'react';
import Navbar from './Navbar';
const Adopted = () => {
    return (
      <div>
        <Navbar />
        <section>
        <div className='container mt-5 pt-4'>
            <div className='row justify-content-center g-5'>
            <div className='col-md-6'>
                      <h3 className='text-center'>Adopted</h3>
                      <div className='d-flex flex-wrap justify-content-between gap-3 mt-3'>
                        <a  href='/#/adopted-service-detail'className="curved-links text-decoration-none card-subtitle text-center mb-2 text-body-secondary">UAE PASS</a>
                        <a  href='/#/adopted-service-detail'className="curved-links text-decoration-none card-subtitle text-center mb-2 text-body-secondary">Digital Vault</a>
                        <a  href='/#/adopted-service-detail'className="curved-links text-decoration-none card-subtitle text-center mb-2 text-body-secondary">Digital Vault</a>
                        <a  href='/#/adopted-service-detail'className="curved-links text-decoration-none card-subtitle text-center mb-2 text-body-secondary">mSurvey</a>
                        <a  href='/#/adopted-service-detail'className="curved-links text-decoration-none card-subtitle text-center mb-2 text-body-secondary">VPN</a>
                        <a  href='/#/adopted-service-detail'className="curved-links text-decoration-none card-subtitle text-center mb-2 text-body-secondary">MPLS</a>
                    </div>
              </div>
              <div className='col-md-6'>
                      <h3 className='text-center'>Not adopted yet</h3>
                      <div className='d-flex flex-wrap justify-content-between gap-3 mt-3'>
                        <a  href='/#/adopted-service-detail'className="curved-links text-decoration-none card-subtitle text-center mb-2 text-body-secondary">AIaas</a>
                        <a  href='/#/adopted-service-detail'className="curved-links text-decoration-none card-subtitle text-center mb-2 text-body-secondary">GPUaas</a>
                        <a  href='/#/adopted-service-detail'className="curved-links text-decoration-none card-subtitle text-center mb-2 text-body-secondary">DBaas</a>
                        <a  href='/#/adopted-service-detail'className="curved-links text-decoration-none card-subtitle text-center mb-2 text-body-secondary">DRaas</a>
                        <a  href='/#/adopted-service-detail'className="curved-links text-decoration-none card-subtitle text-center mb-2 text-body-secondary">GSB</a>
                        <a  href='/#/adopted-service-detail'className="curved-links text-decoration-none card-subtitle text-center mb-2 text-body-secondary">API MP</a>
                    </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Adopted;