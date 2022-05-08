
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Hooks/Header/Header';
import Footer from './Hooks/Footer';
import Login from './Hooks/Login/Login';
import Signup from './Hooks/Signup/Signup';
import Reduce from './Pages/Update/Reduce';
import RequireAuth from './Hooks/RequireAuth/RequireAuth';
import Manage from './Pages/Manage user/Manage';
import Blog from './Pages/Blogs/Blog';
import Additem from './Pages/Add Item/Additem';
import Myitems from './Pages/My Item/Myitems';
import { ToastContainer } from 'react-toastify';
import Error from './Pages/error';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/blog' element={<Blog></Blog>} ></Route>
        <Route path='/inventry/:id' element={
          <RequireAuth>
            <Reduce></Reduce></RequireAuth>} ></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <Manage></Manage></RequireAuth>} ></Route>
        <Route path='/signup' element={<Signup></Signup>} ></Route>
        <Route path='/additem' element={<RequireAuth><Additem></Additem></RequireAuth>} ></Route>
        <Route path='/myitem' element={<RequireAuth><Myitems></Myitems></RequireAuth>} ></Route>
        <Route path='*' element={<Error></Error>} ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
