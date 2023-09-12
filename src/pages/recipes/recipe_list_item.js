import React from 'react';

import './recipes.css';


class RecipeListItem extends React.PureComponent {
  render() {
    return (
      <div className="recipe_list_item">
        <h1 className="recipe_title">{ this.props.recipe_name }</h1>
      </div>
    );
  }
}

export default RecipeListItem;
