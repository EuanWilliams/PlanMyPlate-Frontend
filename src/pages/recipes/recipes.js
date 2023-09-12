import React from 'react';

import './recipes.css';
import Header from '../../components/header/header';
import RecipeList from './recipe_list';


class Recipes extends React.PureComponent {

  render() {
    return (
      <div className="Recipes">
        <Header />
        <RecipeList className="recipes_list" />
      </div>
    );
  }
}

export default Recipes;
