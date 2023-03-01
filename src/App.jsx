import { useState } from 'react'
import './App.css'
import Sidebar from './Components/sidebar/Sidebar'
import Topbar from './Components/Topbar/Topbar'
import Home from './Pages/Home/Home'
import {BrowserRouter as Router,
  Routes,
  Route,
  }from 'react-router-dom'
import Userlist from './Pages/UserList/Userlist'
import User from './Pages/User/User'
import Newuser from './Pages/newuser/Newuser'
import Productlist from './Pages/ProductList/Productlist'
import Product from './Pages/Product/Product'
import NewProduct from './Pages/NewProduct/NewProduct'
function App() {


  return (
    <Router>
    <Topbar/>
    <div className="container">
      <Sidebar/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/users' element={<Userlist/>}/>
      <Route path='/user/:userId' element={<User/>}/>
      <Route path='/newUser/' element={<Newuser/>}/>
      <Route path='/products' element={<Productlist/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/newProduct/' element={<NewProduct/>}/>


      </Routes>
      
    </div>
    </Router>
  )
}

export default App
