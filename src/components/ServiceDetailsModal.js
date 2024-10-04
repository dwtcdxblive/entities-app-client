import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceDetailsModal = ({
  show,
  onHide,
  serviceName,
  costSaved,
  timeSaved,
  co2Reduced,
}) => {
  return (
    <div
      className={`modal fade ${show ? 'show' : ''}`}
      tabIndex='-1'
      style={{ display: show ? 'block' : 'none' }}
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{serviceName} Details</h5>
            <button
              type='button'
              className='btn-close'
              onClick={onHide}
            ></button>
          </div>
          <div className='modal-body'>
            <p>
              <strong>Cost Saved:</strong> {costSaved} AED
            </p>
            <p>
              <strong>Time Saved:</strong> {timeSaved} Hours
            </p>
            <p>
              <strong>CO2 Reduced:</strong> {co2Reduced} Tonnes
            </p>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              onClick={onHide}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsModal;
