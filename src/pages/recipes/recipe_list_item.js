import React from 'react';

import './recipes.css';
import Header from '../../components/header/header';


class Recipes extends React.PureComponent {
  constructor(props) {    
    super(props);
    this.state = {
      recipes: this.getRecipes()
    };
  }

  render() {
    return (
      <div className="Recipes">
        <Header />
        <div className='recipes_container'>
        </div>
      </div>
    );
  }

  // get recipes.
  getRecipes() {
    // Get user id from jwt.
    var user_id = JWTUtils.get_user_id();
  
    // Get recipes from api.
    // TODO: Get url from environment.
    let recipes_url =  "http://127.0.0.1:5000/recipes/" + user_id; 
  
    console.log("Requesting recipes from: " + recipes_url);

    fetch(recipes_url)
      .then(response => response.json())
      .then(data => console.log(data));
  }
}

export default Recipes;
