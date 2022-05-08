import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth)
  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className='w-25' src='logo1.png' alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link as={Link} to="blog">Blog</Nav.Link>

            </Nav>
            <Nav>




              {
                user ?
                  <>

                    <div className="dropdown ">
                      <button className=" d-flex justify-content-center align-items-center sizebtn btn btn-link text-white text-decoration-none dropdown-toggle" type="button" data-bs-toggle="dropdown" >
                        <img className='w-100 h-100' src="user.png" alt="" />
                      </button>

                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                        <Nav.Link className='a-item dropdown-item' as={Link} to="manage">Manage</Nav.Link>
                        <Nav.Link className='a-item dropdown-item' as={Link} to="additem">Add Item</Nav.Link>
                        <Nav.Link className=' a-item dropdown-item' as={Link} to="myitem">My Items</Nav.Link>
                        <button className='a-item dropdown-item btn btn-link text-white text-decoration-none p-0 ms-2' onClick={handleSignOut}>sign out</button>
                      </ul>
                    </div>
                  </>
                  :
                  <>
                    <Nav.Link as={Link} to="login">
                      Login
                    </Nav.Link>
                    <Nav.Link as={Link} to="signup">
                      Signup
                    </Nav.Link></>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  );
};

export default Header;