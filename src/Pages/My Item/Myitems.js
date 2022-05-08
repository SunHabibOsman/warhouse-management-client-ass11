import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Myitems = () => {
  const [user] = useAuthState(auth)
  const [item, setItem] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const getItems = async () => {
      const email = user.email;
      const url = `https://mighty-brushlands-00325.herokuapp.com/added?email=${email}`
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        setItem(data.cursurArray);
      }
      catch (error) {
        console.log(error.message);
        if (error.response.status === 403 || error.response.status === 401) {
          signOut(auth);
          navigate('/login')
        }
      }


    }
    getItems();


  }, [user])
  const handleDelete = (id) => {
    const procced = window.confirm("Are You want to Delete")
    console.log(id);


    if (procced) {
      const url = `https://mighty-brushlands-00325.herokuapp.com/added/${id}`
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const remainig = item.filter(data => data._id !== id)
          setItem(remainig);
          toast("Deleted Done")
        });
    }

  }

  console.log(item);

  return (
    <div>
      {item.map(data => <div className='list-group'>
        <li className='list-group-item d-flex justify-content-center gap-3 align-items-center w-50 mx-auto'><img src={data.img} style={{ width: '85px', height: '85px' }} alt="" /> <h6>{data.name}</h6><h6>{data.quantity}</h6><h6>{data.supplier}</h6>

          <div onClick={() => handleDelete(data._id)} className=' d-flex flex-wrap justify-content-center align-items-center border border-1 p-1 border-primary ' style={{ cursor: 'pointer' }} ><h6>DELETE</h6> <img src="delete.png" style={{ width: '30px', height: '30px', cursor: 'pointer' }} alt="" /> </div>

        </li>

      </div>
      )}
    </div>
  );
};

export default Myitems;