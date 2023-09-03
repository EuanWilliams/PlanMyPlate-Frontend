import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/home/home';
import Recipes from './pages/recipes/recipes';
// import ShoppingList from './pages/shopping-list/shopping_list';
// import MealPlans from './pages/meal-plans/meal_plans';
import Login from './pages/login/login';
import reportWebVitals from './reportWebVitals';

const routing = (
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={ Home } />
      <Route path="recipes" Component={ Recipes } />
      <Route path="meal-plans" Component={ Home } />
      <Route path="shopping-list" Component={ Home } />
      <Route path="login" Component={ Login } />
      <Route path="*" Component={ Home } />
    </Routes>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
