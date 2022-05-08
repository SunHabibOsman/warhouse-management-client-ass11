import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../Hooks/useInventory/useInventory';
import InventoryDetails from './InventoryDetails';
import './style.css'
const Home = () => {
  const [inventory, setInventry] = useInventory()
  const sixInventory = inventory.slice(0, 6);
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide carusel-sl " data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src="computer3.jpg" className="d-block w-100 slider-img" alt="..." />
            <div className="carousel-caption  d-md-block ">
              <h2 className='animate__backInDown text-white m-0'>Invest Your Money in Our Best Stock</h2>
              <p className='animate__backInDown text-white'>You can Add Any Computer Stock Into Our SIte For Your Buisness.</p> </div>
          </div>
          <div className="carousel-item">
            <img src="computer4.jpg" className="d-block w-100 slider-img" alt="..." />
            <div className="carousel-caption d-md-block text-white">
              <h2 className='text-white m-0'>We Providing More then 5 Years This Services </h2>
              <p className='text-white'>No worry about your Stock Product We will take care  .</p></div>
          </div>
          <div className="carousel-item">

            <img src="computer1.jpg" className="d-block w-100 slider-img" alt="..." />
            <div className="carousel-caption  d-md-block">
              <h2 className='text-white m-0'>Providnig All Latest Technologies in World </h2>
              <p className='text-white'>we glad to say we providing intel ,Ryzen all kind pc in Our Stock Add any product and restock for sell.</p></div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <div>
          <h1 className='fw-bold my-3'>Best Computer Inventory</h1>
        </div>
        <div className='m-0 mx-2 row row-cols-1 row-cols-md-3 g-3'>
          {
            sixInventory.map(data => <InventoryDetails
              key={data._id}
              inventorydetails={data}

            ></InventoryDetails>)
          }
        </div>
        <div>
          <div className='mt-5'>
            <h2 className='m-0 p-0'>Featured Category</h2>
            <h6>Get Your Desired Stock Product from Featured Category!</h6>
          </div>
          <div className='d-flex justify-content-center align-items-center gap-3 mt-5 text-center d-flex flex-lg-row flex-sm-column flex-wrap '>
            <div className='shadow-lg p-3 mb-5 bg-body rounded p-5 rounded'><img src="personal.png" alt="" /><h6 className='fw-bold text-center mt-2'>Personal Computer</h6> </div>
            <div className='shadow-lg p-3 mb-5 bg-body rounded p-5 rounded'><img src="game.png" alt="" /><h6 className='fw-bold text-center mt-2'>Gaming Computer</h6> </div>
            <div className='shadow-lg p-3 mb-5 bg-body rounded p-5 rounded'><img src="buisness.png" alt="" /><h6 className='fw-bold text-center mt-2'>Business Computer</h6> </div>
            <div className='shadow-lg p-3 mb-5 bg-body rounded p-5 rounded'><img src="intel.png" alt="" /><h6 className='fw-bold text-center mt-2'>Intel Computer</h6> </div>
            <div className='shadow-lg p-3 mb-5 bg-body rounded p-5 rounded'><img src="ryzen.png" alt="" /><h6 className='fw-bold text-center mt-2'> Ryzen Computer</h6></div>
          </div>
        </div>

        <div className='d-flex flex-lg-row flex-sm-column justify-content-center align-items-center mx-0 container-fluid stock'>
          <div className='my-0 px-5 text-start ms-5 stock1 ' >
            <h1 className='fw-bold'>Best Computer Stock Site</h1>
            <p>Here you can find world top class PC . We have all kind of pc such as Buisness computer,Personal Computer ,Gaming Computer etc</p>
            <Link className='linkstock' to={'/additem'}><button className='btn btn-primary w-50 mt-4 '>Add Item Now</button></Link>
          </div>
          <div>
            <img src="computer.gif" alt="" />
          </div>
        </div>
        <div>

        </div>

      </div>
    </div>
  );
};

export default Home;