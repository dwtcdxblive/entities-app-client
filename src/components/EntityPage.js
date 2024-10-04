import React, { useState } from 'react';
import ServiceDetailsModal from './ServiceDetailsModal';

const EntityPage = ({
  entityName,
  totalCostSaved,
  totalTimeSavedGov,
  totalCo2Reduced,
  servicesAdopted = [],
  totalServices = 24,
  adoptedServices = [],
  notAdoptedServices = [],
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setModalVisible(true);
  };

  const adoptedCount = adoptedServices.length;
  const adoptionPercentage = Math.round((adoptedCount / totalServices) * 100);

  return (
    <div className='entity-page'>
      <div className='card p-3'>
        <h2>{entityName} Dashboard</h2>
        {/* Progress Bar */}
        <h3>Services Adoption Progress</h3>
        <div className='d-flex justify-content-between'>
          <div className='fw-900 total'>
            {adoptedCount}/{totalServices}
          </div>
          <div className='percent'>({adoptionPercentage}%)</div>
        </div>
        <div className='progress'>
          <div
            className='progress-bar'
            role='progressbar'
            style={{ width: `${adoptionPercentage}%` }}
            aria-valuenow={adoptionPercentage}
            aria-valuemin='0'
            aria-valuemax='100'
          ></div>
        </div>
      </div>
      <div className='d-flex justify-content-between g-2 mt-2'>
        <div className='card p-2 w-30 text-center'>
          <p className='service-title m-2'>Total Cost Saved:</p>
          <p className='service-sub'>{totalCostSaved} AED</p>
        </div>
        <div className='card p-2 w-30 text-center'>
          <p className='service-title m-2'>Total Time Saved:</p>
          <p className='service-sub'>{totalTimeSavedGov} Hours</p>
        </div>
        <div className='card p-2 w-30 text-center'>
          <p className='service-title m-2'>Total CO2 Reduced:</p>
          <p className='service-sub'>{totalCo2Reduced} Tonnes</p>
        </div>
      </div>

      {/* Adopted Services */}
      <h3>Adopted Services</h3>
      {adoptedServices.length > 0 ? (
        <div className='adopted-services'>
          {adoptedServices.map((service, index) => (
            <button
              key={index}
              className='btn btn-success p-2'
              onClick={() => handleServiceClick(service)}
            >
              {service.serviceName}
            </button>
          ))}
        </div>
      ) : (
        <p>No services adopted yet</p>
      )}

      {/* Non-Adopted Services */}
      <h3>Not Adopted Services</h3>
      {notAdoptedServices.length > 0 ? (
        <div className='non-adopted-services'>
          {notAdoptedServices.map((service, index) => (
            <button key={index} className='btn btn-secondary m-2' disabled>
              {service}
            </button>
          ))}
        </div>
      ) : (
        <p>All services adopted</p>
      )}

      {/* Modal for adopted service details */}
      {selectedService && (
        <ServiceDetailsModal
          show={modalVisible}
          onHide={() => setModalVisible(false)}
          serviceName={selectedService.serviceName}
          costSaved={selectedService.costSaved}
          timeSaved={selectedService.timeSaved}
          co2Reduced={selectedService.co2Reduced}
        />
      )}
    </div>
  );
};

export default EntityPage;
