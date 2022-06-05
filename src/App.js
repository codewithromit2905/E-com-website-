
import './App.css';
import Product from './Pages/Product';

import Cart from './Pages/Cart';
import Register from './Pages/Register';
import Home from './Pages/Home'; 
import ProductList from './Pages/ProductList';

import {
  BrowserRouter as Router,
  Routes,
  Route,


} from "react-router-dom";
import Login from './Pages/Login';



function App() {
  const user=true
  return (
    <div >
      
   
      
  
      {/* <ProductList/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart/> */}
      {/* <Product/> */}
     
  
      <Router>
      <Routes>
          <Route path="/" element ={<Home/>}> </Route>
          <Route path="/"  element={<Product/>}> </Route>
          <Route path="/Products/:category"  element={<ProductList/>}> </Route>
          <Route path="/Product/:_id"  element={<Product/>}> </Route>
          <Route path = "/register" element={ <Register />} />
          <Route path="/Login" element={ <Login />}  />
          <Route path="/Cart"  element={<Cart/>}> </Route>
        </Routes>

    </Router>
      
    </div>
  );
}

export default App;
