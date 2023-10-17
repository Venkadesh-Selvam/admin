import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from"./Pages/Login";
import Dashboard from"./Pages/Dashboard";
import MainLayout from './Components/MainLayout';
import ResetPassword from './Pages/ResetPassword';
import ForgotPassword from './Pages/ForgotPassword';
import Product from './Pages/Product';
import AddProducts from './Pages/AddProducts';
import Customers from './Pages/Customers';
import Income from './Pages/Income';
import Promote from './Pages/Promote';
import AddBlog from './Pages/AddBlog';
import Help from './Pages/Help';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element = {<Dashboard/>} />
          <Route path="/Product" element ={<Product />}Route />
          <Route path="/AddProducts" element ={<AddProducts />}Route />
          <Route path="/Customers" element ={<Customers />}Route />
          <Route path="/Income" element ={<Income />}Route />
          <Route path="/Promote" element ={<Promote />}Route />
          <Route path="/AddBlog" element ={<AddBlog />}Route />
          <Route path="/Help" element ={<Help />}Route />
          
         
        </Route>
        
      </Routes>

    </Router>
  );
};

export default App;
