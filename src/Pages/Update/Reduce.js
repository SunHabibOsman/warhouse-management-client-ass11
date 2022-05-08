import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useInventory from '../../Hooks/useInventory/useInventory';
import Update from './Update';
import UseIdService from './UseIdService';

const Reduce = () => {
  const { id } = useParams()
  const [update, setUpdate] = UseIdService(id)
  const [inventory, setInventry] = useInventory()

  let { _id, name, img, price, quantity, supplier, description } = update;


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


        })
    }
  }


  const handleDelivered = () => {
    quantity = parseInt(quantity) - 1;

    fetch(`https://mighty-brushlands-00325.herokuapp.com/computer/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        quantity: quantity,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        fetch(`https://mighty-brushlands-00325.herokuapp.com/computer/${id}`)
          .then(res => res.json())
          .then(data => setUpdate(data)
          )
      });


  }

  const handleAdd = () => {
    quantity = parseInt(quantity) + 1;

    fetch(`https://mighty-brushlands-00325.herokuapp.com/computer/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        quantity: quantity,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        fetch(`https://mighty-brushlands-00325.herokuapp.com/computer/${id}`)
          .then(res => res.json())
          .then(data => setUpdate(data)
          )
      });


  }
  const handleAddQuantity = (event) => {
    event.preventDefault()
    const number = event.target.number.value;

    quantity = quantity + parseInt(number);

    fetch(`https://mighty-brushlands-00325.herokuapp.com/computer/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        quantity: quantity,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        fetch(`https://mighty-brushlands-00325.herokuapp.com/computer/${id}`)
          .then(res => res.json())
          .then(data => setUpdate(data)
          )
      });

  }
  return (
    <div className='my-5'>
      <div className='d-flex mx-auto flex-wrap'>
        <div><img src={img} alt="" /></div>
        <div className='text-start ps-5 fw-bolder'><h1>{name}</h1>
          <p>Discrpition : {description}</p>
          <h5>Price: ${price}</h5>
          <h4>Quantity: {quantity}</h4>
          <h4>Suppliar: {supplier}</h4>

          <button className='btn btn-primary me-2 mt-3' onClick={handleDelivered}>Delivered</button>
          <button className='btn btn-primary mt-3' onClick={handleAdd}>Add Inventriy</button>
          <form onSubmit={handleAddQuantity}>
            <div className="input-group mb-3 mt-3">
              <input name='number' type="text" className="form-control" placeholder="Add quantity" />
              <button className="btn btn-primary " type="submit" id="button-addon2">ReStock</button>
            </div>
          </form>
          <Link to={'/manage'}>Manage Service </Link>
        </div>
      </div>

    </div>
  );
};

export default Reduce;