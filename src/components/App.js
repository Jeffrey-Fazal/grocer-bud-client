import React, { useState } from'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AuthProvider } from '../contexts/AuthContext';
import Home from './home/Home';
import Categories from './categories/Categories';
import CategoriesForm from './categories/CategoriesForm';
import GroceryList from './groceryList/GroceryList';
import Signup from './pages/Signup'
import { Login } from './pages/Login'
import About from './pages/About'
import Stores from './stores/Stores';
import Items from './items/Items';
import AddItemForm from './items/AddItemForm'



function App() {
  const [categories, setCategories] = useState([])
  
  const addCategory = (name) => {
    const arr = categories
    arr.push(name)
    setCategories(arr)
    console.log(categories)
  }

  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/categories' element={<Categories arr={categories}/>} />
          <Route exact path='/categories/new' element={<CategoriesForm add={addCategory}/>} />
          <Route exact path='/grocery-list' element={<GroceryList />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/grocery-list' element={<GroceryList />} />
          <Route exact path='/stores' element={<Stores />} />
          <Route path={'/categories/:name'} element={<Items />} />
          <Route path='/items' element={<Items />} />
          <Route path='/AddItemForm' element={<AddItemForm />} />
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

