import React from 'react';
import { useNavigate } from 'react-router-dom';
import Reduce from '../Update/Reduce';
import './inventorydetails.css'
const InventoryDetails = ({ inventorydetails }) => {
  const { _id, name, price, quantity, supplier, description, img } = inventorydetails;
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(`/inventry/${_id}`)
  }
  return (




    <div>  <div className="col mt-3 ">
      <div className="card h-100">
        <img src={img} style={{ height: "200px" }} className="card-img-top " alt="..." />
        <div className="card-body">
          <span class="tag tag-blue">Quantity :{quantity}</span>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <span class="tag tag-blue">Price:{price}</span>
          <p className="card-text">{supplier}</p>
        </div>
        <div className="card-footer">
          <button onClick={handleNavigate} className='btn btn-primary w-100'>Stock Update</button>
        </div>
      </div>
    </div ></div>







  );
};

export default InventoryDetails;