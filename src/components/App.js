import React, { useState, useEffect } from'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AuthProvider } from '../contexts/AuthContext';
import Home from './home/Home';
import Categories from './categories/Categories';
import FormFood from './foods/FormFood';
import GroceryList from './groceryList/GroceryList';
import Signup from './pages/Signup'
import { Login } from './pages/Login'
import About from './pages/About'
import Stores from './stores/Stores';
import Items from './items/Items';

function App() {

  const testEnd = 'hello'

  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/categories' element={<Categories />} />
          <Route exact path='/grocery-list' element={<GroceryList />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/categories' element={<Categories />} />
          <Route exact path='/grocery-list' element={<GroceryList />} />
          <Route exact path='/stores' element={<Stores />} />
          <Route exact path={'/categories/' + testEnd} element={<Items />} />
          <Route exact path='/search' element={<FormFood />} />
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
