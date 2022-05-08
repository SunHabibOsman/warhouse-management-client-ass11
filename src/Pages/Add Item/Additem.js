import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './Add.css'
const Additem = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  console.log(user.email);

  const handleSubmit = (event) => {

    event.preventDefault();
    const name = event.target.name.value
    const price = event.target.price.value
    const quantity = event.target.quantity.value
    const supplier = event.target.supplier.value
    const description = event.target.description.value
    const img = event.target.img.value
    event.target.value = '';


    fetch('https://mighty-brushlands-00325.herokuapp.com/added/', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        price: price,
        quantity: quantity,
        supplier: supplier,
        description: description,
        img: img,
        email: user.email
      }),
      headers: {
        // 'authorization': `${user.email} ${localStorage.getItem("accssToken")}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        toast('Item Added ')
        console.log(json)
      });


  }


  return (
    <div className='p-4 mt-4'>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <input type="text" className="form-input" name="name" id="name" placeholder="name" required />
        </div>
        <div className="form-group">
          <input type="number" className="form-input" name="price" id="price" placeholder="price" required />
        </div>
        <div className="form-group">
          <input type="number" className="form-input" name="quantity" id="quantity" placeholder="quantity" required />
        </div>

        <div className="form-group">
          <input type="text" className="form-input" name="supplier" id="supplier" placeholder="supplier" required />
        </div>
        <div className="form-group">
          <input type="text" className="form-input" name="description" id="description" placeholder="description" required />
        </div>

        <div className="form-group">
          <input type="text" className="form-input" name="img" id="img" placeholder="img" required />
        </div>
        <div className="form-group">
          <input type="submit" name="submit" id="submit" className="form-submit" value="Add Inventory" />
        </div>

      </form>
    </div>
  );
};

export default Additem;