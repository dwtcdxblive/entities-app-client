import React from 'react';

const EntityDetailsPage = ({
  entityName,
  adoptedServices,
  notAdoptedServices,
  costSaved,
  timeSavedGov,
  co2Reduced,
}) => {
  return (
    <div className='container'>
      <h2>{entityName} Dashboard</h2>

      <div className='entity-summary'>
        <p>
          <strong>Cost Saved:</strong> {costSaved ? `${costSaved} AED` : 'N/A'}
        </p>
        <p>
          <strong>Time Saved (Government):</strong>{' '}
          {timeSavedGov ? `${timeSavedGov} Hours` : 'N/A'}
        </p>
        <p>
          <strong>CO2 Reduced:</strong>{' '}
          {co2Reduced ? `${co2Reduced} Tonnes` : 'N/A'}
        </p>
      </div>

      <h3>Services Adoption Progress</h3>
      <p>{`${adoptedServices.length}/24 services adopted (${(
        (adoptedServices.length / 24) *
        100
      ).toFixed(2)}%)`}</p>
      <progress value={adoptedServices.length} max='24'></progress>

      <h4>Adopted Services</h4>
      {adoptedServices.length > 0 ? (
        <div className='service-list'>
          {adoptedServices.map((service, index) => (
            <button
              key={index}
              className='btn btn-primary'
              data-bs-toggle='modal'
              data-bs-target={`#serviceModal-${index}`}
            >
              {service}
            </button>
          ))}

          {/* Modal for each service */}
          {adoptedServices.map((service, index) => (
            <div
              key={index}
              className='modal fade'
              id={`serviceModal-${index}`}
              tabIndex='-1'
              aria-labelledby='serviceModalLabel'
              aria-hidden='true'
            >
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h5 className='modal-title' id='serviceModalLabel'>
                      {service}
                    </h5>
                    <button
                      type='button'
                      className='btn-close'
                      data-bs-dismiss='modal'
                      aria-label='Close'
                    ></button>
                  </div>
                  <div className='modal-body'>
                    <p>
                      Details about the service (e.g., Cost Saved, Time Saved,
                      CO2 Reduced).
                    </p>
                  </div>
                  <div className='modal-footer'>
                    <button
                      type='button'
                      className='btn btn-secondary'
                      data-bs-dismiss='modal'
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No services adopted yet.</p>
      )}

      <h4>Not Adopted Services</h4>
      {notAdoptedServices.length > 0 ? (
        <div className='service-list'>
          {notAdoptedServices.map((service, index) => (
            <button key={index} className='btn btn-secondary' disabled>
              {service}
            </button>
          ))}
        </div>
      ) : (
        <p>All services adopted.</p>
      )}
    </div>
  );
};

export default EntityDetailsPage;
