import React, { useState } from 'react';
import useInventory from '../../Hooks/useInventory/useInventory';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Myitems from '../My Item/Myitems';

const Manage = () => {
  const navigate = useNavigate()
  const [inventory, setInventry] = useInventory()
  const handleDelete = (id) => {
    const procced = window.confirm("Are You want to Delete")

    if (procced) {
      const url = `https://mighty-brushlands-00325.herokuapp.com/computer/${id}`
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const remainig = inventory.filter(data => data._id !== id)
          setInventry(remainig);
          toast("Deleted Done")
        });
    }

  }
  const handleAdd = () => {
    navigate('/Additem')
  }
  return (
    <div>
      <div onClick={handleAdd} className='d-flex flex-wrap mt-1 justify-content-center align-items-center border border-1 p-1 border-primary border-2' style={{ cursor: 'pointer' }}><h6>ADD ITEM</h6><img src="add.png" style={{ width: '30px', height: '30px', }} alt="" /> </div>
      {
        inventory.map(data => <div className='list-group'>
          <li className='list-group-item d-flex justify-content-center gap-3 align-items-center w-50 mx-auto'><img src={data.img} style={{ width: '85px', height: '85px' }} alt="" /> <h6>{data.name}</h6><h6>{data.quantity}</h6><h6>{data.supplier}</h6>

            <div onClick={() => handleDelete(data._id)} className=' d-flex flex-wrap justify-content-center align-items-center border border-1 p-1 border-primary ' style={{ cursor: 'pointer' }} ><h6>DELETE</h6> <img src="delete.png" style={{ width: '30px', height: '30px', cursor: 'pointer' }} alt="" /> </div>

          </li>

          <ToastContainer />
        </div>)

      }
      <Myitems></Myitems>
    </div>

  );
};

export default Manage;