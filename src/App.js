import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import EntityPage from './components/EntityPage';
import Rise from './assets/rise.png';
import Search from './assets/search.svg';
import axios from 'axios';
import Survey from './components/Survey';

// Helper function to convert entity names into URL-friendly slugs
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, ''); // Remove all non-word chars
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);
  const dropdownRef = useRef(null);

  // Services array
  const servicesList = [
    'Secure Internet Access',
    'G2G Connectivity',
    'MPLS',
    'VPN',
    'Application Performance Monitoring',
    'Infrastructure as a Service',
    'Backup as a Service',
    'Database as a Service',
    'Disaster Recovery as a Service',
    'Email as a Service',
    'AI Services',
    'Kubernetes as a Service',
    'GPU as a Service',
    'Advanced Load Balancing as a Service',
    'App Launchpad',
    'SD-WAN as a Service',
    'GSB',
    'API Marketplace',
    'Digital Vault',
    'UAEPASS',
    'NCRM',
    'Mabrouk MaYak & Usrati',
    'mSurvey',
    'Digital Government Fileshare',
  ];

  // Fetch data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/entities');
        console.log(response.data); // Log API response

        const processedItems = response.data.map((entity) => {
          const adoptedServices = [];
          const notAdoptedServices = [];

          servicesList.forEach((service) => {
            const key = `Using${service.replace(/\s+/g, '')}`; // Build the key based on schema field names
            if (entity[key]) {
              // Store service-specific data
              adoptedServices.push({
                serviceName: service,
                costSaved:
                  entity[`Annualcostsaving${service.replace(/\s+/g, '')}`] ||
                  'N/A',
                timeSaved:
                  entity[`Annualtimesaving${service.replace(/\s+/g, '')}`] ||
                  'N/A',
                co2Reduced:
                  entity[`AnnualCo2reductions${service.replace(/\s+/g, '')}`] ||
                  'N/A',
              });
            } else {
              notAdoptedServices.push(service);
            }
          });

          return {
            ...entity,
            adoptedServices,
            notAdoptedServices,
            totalCostSaved:
              entity.AnnualcostsavingSecureInternetAccess || 'N/A',
            totalTimeSavedGov:
              entity.AnnualtimesavingSecureInternetAccess || 'N/A',
            totalCo2Reduced:
              entity.AnnualCo2reductionsSecureInternetAccess || 'N/A',
          };
        });

        console.log('Processed items:', processedItems); // Debugging processed items
        setItems(processedItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Filter entities by name
  const filteredItems = items.filter(
    (item) =>
      item.EntityName &&
      item.EntityName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dropdownRef.current.classList.remove('show');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleFocus = () => {
    dropdownRef.current.classList.add('show');
  };

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <div className='App tdra-bg d-flex justify-content-center vh-150'>
          <div className='container'>
            <div className='row justify-content-center flex-column align-items-center g-5'>
              <div className='col-md-6 mt-4'>
                <h2 className='text-center'>Entity adoption</h2>
                <h3 className='text-center'>Status and impact</h3>
                <div className='input-group mt-3'>
                  <div className='input-group mb-3'>
                    <input
                      type='text'
                      className='form-control border-0'
                      placeholder='Search...'
                      aria-label='Search...'
                      aria-describedby='button-addon2'
                      onFocus={handleFocus}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                      className='btn btn-outline-secondary border-0 bg-white'
                      type='button'
                      id='button-addon2'
                    >
                      <img className='btn-icon' src={Search} alt='Search' />
                    </button>
                  </div>
                  <ul
                    className='dropdown-menu'
                    ref={dropdownRef}
                    style={{
                      maxHeight: '300px', // Set max-height to enable scrolling
                      overflowY: 'scroll', // Enable vertical scrolling
                    }}
                  >
                    {filteredItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          className='dropdown-item'
                          to={`/${slugify(item.EntityName)}`}
                          onClick={() =>
                            dropdownRef.current.classList.remove('show')
                          } // Close dropdown after selection
                        >
                          {item.EntityName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button
                type='button'
                className='modal-btn d-flex justify-content-around align-items-center p-2'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
              >
                <img src={Rise} className='btn-icon' alt='Rise' />
                <span>Overall impact</span>
              </button>

              <div
                className='modal fade'
                id='exampleModal'
                tabIndex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h1 className='modal-title fs-5' id='exampleModalLabel'>
                        Overall impact
                      </h1>
                      <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='modal'
                        aria-label='Close'
                      ></button>
                    </div>
                    <div className='modal-body'>
                      <div className='card w-100 my-2'>
                        <div className='card-body my-2'>
                          <h5 className='card-title text-center'>6/20</h5>
                          <h6 className='card-subtitle text-center mb-2 text-body-secondary'>
                            Services Adopted
                          </h6>
                        </div>
                      </div>
                      <div className='card w-100 my-2'>
                        <div className='card-body'>
                          <h5 className='card-title text-center'>2.6M AED</h5>
                          <h6 className='card-subtitle text-center mb-2 text-body-secondary'>
                            Cost Saved
                          </h6>
                        </div>
                      </div>
                      <div className='card w-100 my-2'>
                        <div className='card-body'>
                          <h5 className='card-title text-center'>8,000H</h5>
                          <h6 className='card-subtitle text-center mb-2 text-body-secondary'>
                            Time saved
                          </h6>
                        </div>
                      </div>
                      <div className='card w-100 my-2'>
                        <div className='card-body'>
                          <h5 className='card-title text-center'>5.3T</h5>
                          <h6 className='card-subtitle text-center mb-2 text-body-secondary'>
                            Co2 reduced
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='btn btn-primary'
                        data-bs-dismiss='modal'
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <Routes>
                {filteredItems.map((item, index) => (
                  <Route
                    key={index} // Ensure each route has a unique key
                    path={`/${slugify(item.EntityName)}`}
                    element={
                      <EntityPage
                        key={index} // Ensure each EntityPage has a unique key
                        entityName={item.EntityName}
                        totalCostSaved={item.totalCostSaved}
                        totalTimeSavedGov={item.totalTimeSavedGov}
                        totalCo2Reduced={item.totalCo2Reduced}
                        servicesAdopted={item.adoptedServices}
                        totalServices={24}
                        adoptedServices={item.adoptedServices}
                        notAdoptedServices={item.notAdoptedServices}
                      />
                    }
                  />
                ))}
                <Route exact path='/DFCM' element={<Survey />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
