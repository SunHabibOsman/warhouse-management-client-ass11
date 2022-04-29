import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Hooks/Header/Header';
import Footer from './Hooks/Footer';
import Login from './Hooks/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
