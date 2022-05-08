import React from 'react';
import { useAuthState, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import './social.css'

const Sociallogin = () => {
  const [user] = useAuthState(auth)


  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, usergoogle, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, usergithub, loading1, error1] = useSignInWithGithub(auth);





  console.log(location.state?.from?.pathname);


  if (user || usergoogle || usergithub) {


    navigate(from, { replace: true })
  }
  if (loading || loading1) {
    return <Loading></Loading>
  }
  if (error || error1) {
    toast('please sign in or use social login')
  }

  return (
    <div>
      <div className='d-flex gap-4 justify-content-center align-items-center px-4 py-2' >
        <button className="btn-face m-b-20" onClick={() => signInWithGithub()} >
          <img src="githubpng.png" className='me-2' alt="" />
          Github
        </button>

        <button onClick={() => signInWithGoogle()} className="btn-google m-b-20">
          <img src="google.png" alt="GOOGLE" />
          Google
        </button>
      </div>
    </div>
  );
};

export default Sociallogin;