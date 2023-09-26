import './App.css';
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarPages from './pages/Navbar';
import CardsPages from './pages/CardsPages';

function App() {
  const [categoryMovie, setCategoryMovie] = useState('movie');

  const changeCategoryMovie = () => {
    setCategoryMovie('movie');
  }

  const changeCategoryAction = () => {
    setCategoryMovie('action');
  }

  const changeCategoryComedy = () => {
    setCategoryMovie('comedy');
  }

  const changeCategoryFantasy = () => {
    setCategoryMovie('fantasy');
  }

  return (
    <div className="App">
      <NavbarPages 
        category={categoryMovie}
        categoryMovie={changeCategoryMovie}
        categoryAction={changeCategoryAction}
        categoryComedy={changeCategoryComedy}
        categoryFantasy={changeCategoryFantasy} />

      {/* <CaraouselsPages /> */}
      <CardsPages category={categoryMovie} />
    </div>
  );
}

export default App;
