import React, { useState } from 'react';
import StartPage from './StartPage';
import VehiclesPage from './VehiclesPage';
import DriversPage from './DriversPage';
import AboutBusinessPage from './AboutBusinessPage';
import CoveragesPage from './CoveragesPages';
import './forma.css';
import headerlogo from '../Pages/images/LOGO BOLANOS 2024 PDF.svg';

function Main() {
  const [selectedPage, setSelectedPage] = useState('start');
  const [icon, setIcon] = useState("fa-regular fa-circle");
  const changeIcon = () => {
    // Change the icon when the button is clicked
    setIcon("fa-solid fa-check");
  };


  const handleNavigationClick = (page) => {
    setSelectedPage(page);
  };

  const renderPage = () => {
    switch (selectedPage) {
      case 'start':
        return <StartPage changeIcon={changeIcon} />;
      case 'vehicles':
        return <VehiclesPage />;
      case 'drivers':
        return <DriversPage />;
      case 'about':
        return <AboutBusinessPage />;
      case 'coverages':
        return <CoveragesPage />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="main_header_section">
        <div className="Header_text">
          <img src={headerlogo} alt="headerlogo" className="header_logo" />
          <span className="onboarding">Onboarding</span>
        </div>
      </div>

      <div className="header_body_section">
        <div className="Navbar_section">
          <nav className="navbar navbar-expand-lg navbar-expand-sm">
            <ul className="navbar-nav">
              <li className={`nav-item  ${selectedPage === 'start' ? 'activateding' : ''}`}>
                <a href="#" className="nav-link" onClick={() => handleNavigationClick('start')}>
                  <i className={`fa--regular ${icon}`}></i> &nbsp; 1. Start
                </a>
              </li>
              <li className={`nav-item ${selectedPage === 'vehicles' ? 'activateding' : ''}`}>
                <a href="#" className="nav-link" onClick={() => handleNavigationClick('vehicles')}>
                  <i className="fa-regular fa-circle"></i> &nbsp; 2. Vehicles
                </a>
              </li>
              <li className={`nav-item ${selectedPage === 'drivers' ? 'activateding' : ''}`}>
                <a href="#" className="nav-link" onClick={() => handleNavigationClick('drivers')}>
                  <i className="fa-regular fa-circle"></i> &nbsp; 3. Drivers
                </a>
              </li>
              <li className={`nav-item ${selectedPage === 'about' ? 'activateding' : ''}`}>
                <a href="#" className="nav-link" onClick={() => handleNavigationClick('about')}>
                  <i className="fa-regular fa-circle"></i> &nbsp; 4. About business
                </a>
              </li>
              <li className={`nav-item ${selectedPage === 'coverages' ? 'activateding' : ''}`}>
                <a href="#" className="nav-link" onClick={() => handleNavigationClick('coverages')}>
                  <i className="fa-regular fa-circle"></i> &nbsp; 5. Coverages
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="Forma_components">{renderPage()}</div>
      </div>
    </>
  );
}

export default Main;
