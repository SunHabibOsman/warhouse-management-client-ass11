import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useInventory from '../../Hooks/useInventory/useInventory';

const Update = ({ updatequantity }) => {
  const { id } = useParams()
  const [inventory, setInventry] = useInventory()
  const [singleinventry, setSingleInventiry] = useState([])
  useEffect(() => {
    const url = `https://mighty-brushlands-00325.herokuapp.com/computer/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => setSingleInventiry(data))
  }, [])
  console.log(singleinventry);


  const { _id, name, img, price, quantity, supplier, description } = singleinventry;

  const handleReduce = () => {
    const procced = window.confirm("Are You want Delete this Item")
    if (procced) {
      const url = `https://mighty-brushlands-00325.herokuapp.com/computer/${id}`
      console.log(url);

      fetch(url, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          const remainig = inventory.filter(data => data._id !== id)
          setInventry(remainig);
          console.log(data);

        })
    }
  }
  const handleDelivered = () => {
    const newQuantity = quantity - 1;
    const updateQuantity = { newQuantity }
    const url = `https://mighty-brushlands-00325.herokuapp.com/computer/${id}`
    fetch(url, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateQuantity)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        alert('quantity updated')

      })


  }
  const handleAddQuantity = () => {

  }
  return (
    <div>
      <div>
        <div className='d-flex mx-auto '>
          <div><img src={img} alt="" /></div>
          <div><h1>{name}</h1>
            <p>{description}</p>
            <h3>Price:{price}</h3>
            <h4>Quantity:{quantity}</h4>
            <h4>Suppliar:{supplier}</h4>
            <li>{name}<button className='bg-primary text-white ms-1' onClick={handleReduce}>X</button></li>
            <button className='btn btn-primary' onClick={handleDelivered}>delivered</button>

          </div>
        </div>
        <form onSubmit={handleAddQuantity}>
          <input type="number" name="number" id="number" />
          <button className='btn btn-primary' type='submit'>Add Quantity</button>
        </form>
      </div>
      Manage Inventories
    </div>
  );
};

export default Update;