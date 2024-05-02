import React, { useState } from 'react';
import Footer from "./components/Footer";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from './images/pexels-emrecan-2079249.jpg';
import image2 from './images/pexels-saviesa-home-1098995-2089698.jpg';
import image3 from './images/pexels-christa-grover-977018-2121120.jpg'; // Import the image
import image4 from './images/pexels-jessica-bryant-592135-1370704.jpg'
import HouseSidingRoundedIcon from '@mui/icons-material/HouseSidingRounded';
import './App.css'
import { connect } from 'react-redux';
import { openModal } from './actions';
import Modal1 from './Modal1'; 
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BlenderIcon from '@mui/icons-material/Blender';
import BedIcon from '@mui/icons-material/Bed';
import KitchenIcon from '@mui/icons-material/Kitchen';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
function Details({ openModal, showModal }) {
  const navigate=useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate('/')
  };
  const Click = (e) => {
    e.preventDefault();
    navigate('/signup')
  };
  const buyprod = (e) => {
    e.preventDefault();
    navigate('/checkout')
  };
  
  const houseDetails = [
    {
      id: 1,
      image: image1, // Changed to string
      title: 'Beautiful House in Suburb',
      location: 'Suburb, City',
      price: '$1500/month',
      bedrooms: '3 Bedrooms',
      bathrooms: '2 Bathrooms',
      plotarea: '3,600 sqft',
      Furnishing:'Furnished',
      CarParking:'1 Open',
    },
    {
      id: 2,
      image: image2, // Changed to string
      title: 'Luxury Apartment Downtown',
      location: 'Downtown, City',
      price: '$2500/month',
      bedrooms: '2 Bedrooms',
      bathrooms: '2 Bathrooms',
      plotarea: '3,600 sqft',
      Furnishing:'Furnished',
      CarParking:'1 Open',
    },
    {
      id: 3,
      image: image3, // Changed to string
      title: 'Cozy Cottage by the Lake',
      location: 'Lakefront, City',
      price: '$1800/month',
      bedrooms: '2 Bedrooms',
      bathrooms: '1 Bathroom',
      plotarea: '3,600 sqft',
      Furnishing:'Furnished',
      CarParking:'1 Open',
    },
    {
        id: 4,
        image: image4, // Changed to string
        title: 'Cozy Cottage by the Lake',
        location: 'Lakefront, City',
        price: '$1800/month',
        bedrooms: '2 Bedrooms',
        bathrooms: '1 Bathroom',
        plotarea: '3,600 sqft',
        Furnishing:'Furnished',
        CarParking:'1 Open',
      },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('');

  const filteredHouseDetails = houseDetails.filter(house => {
    // Filter based on search term
    const titleMatch = house.title.toLowerCase().includes(searchTerm.toLowerCase());
    // Filter based on filter option
    const filterMatch = filterOption === '' || house.location.toLowerCase() === filterOption.toLowerCase();
    return titleMatch && filterMatch;
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterOption(e.target.value);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div className='home-pg'>
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left side: Logo */}
          <div className="flex items-center" onClick={handleClick}>
            <HouseSidingRoundedIcon />
          </div>

          {/* Middle: Navigation Links */}
          <div className="flex justify-center">
            <span className="text-black font-bold">
              <span className="border-b-2 border-orange-500" onClick={handleClick}>Home</span>
            </span>
            <span className="text-black mx-4" >Services</span>
            <span className="text-black mx-4">Pricing</span>
            <span className="text-black mx-4">Contact</span>
          </div>

          {/* Right side: Sign Up */}
          <div>
            <button className="text-black font-bold border-2 border-orange-500 px-4 py-2 rounded-full" onClick={handleClick}>
              Log Out
            </button>
          </div>
        </div>
      </nav>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <select
          value={filterOption}
          onChange={handleFilter}
          className="filter-select"
        >
          <option value="">All Locations</option>
          {/* Assuming houseDetails contains all locations */}
          {houseDetails.map((house) => (
            <option key={house.id} value={house.location}>{house.location}</option>
          ))}
        </select>
      </div>
      <div className="container1">
        <div className="card-container">
          {filteredHouseDetails.map((house) => (
            <div className="card1" key={house.id}>
              <img src={house.image} alt={house.title} className="card-image1" />
              <div className="card-details">
                <h2 className="card-title1">{house.title}</h2>
                <p className="card-location">Location : {house.location}</p>
                <p className="card-price">Price : {house.price}</p>
                <p className="card-info">{house.bedrooms} | {house.bathrooms}</p>
                <p className="card-info">{house.plotarea}</p>
                <p className="card-info">Furnishing : {house.Furnishing}</p>
                <p className="card-info">Car Parking : {house.CarParking}</p>
                <button className="contact-btn" onClick={() => openModal(house.id)}>CONTACT</button>
                <button className='view-btn' onClick={handleShow}>View More</button>
                <button className="buy-btn" onClick={buyprod}>BUY</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
      {showModal && <Modal1 />} {/* Render modal if showModal is true */}
      <>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>HOUSE DETAILS:</Modal.Title>
          </Modal.Header>
          <Modal.Body className='mod1'>
           <p><WaterDropIcon/> 1 Water Purifier</p>
           <p><BedIcon/> 2 beds</p>
           <p><BlenderIcon/> 1 Blender</p>
           <p><MicrowaveIcon/> 1 Microwave</p>
           <p><KitchenIcon/> 2 Refrigerator</p>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

const mapStateToProps = (state) => ({
  showModal: state.modal.showModal,
});

const mapDispatchToProps = {
  openModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);