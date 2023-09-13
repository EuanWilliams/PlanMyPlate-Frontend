import React from "react";

import "./recipes.css";
import JWTUtils from "../../utils/jwt_utils";
import RecipeListItem from "./recipe_list_item";

class RecipeList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      recipe_list: [],
    };
  }

  componentDidMount() {
    this.renderRecipeList();
  }

  getRecipes = async () => {
    // Get user id from jwt.
    var user_id = JWTUtils.get_user_id();

    // Get recipes from api.
    // TODO: Get url from environment.
    let recipes_url = "http://127.0.0.1:5000/recipes/" + user_id;

    console.log("Requesting recipes from: " + recipes_url);

    let recipes = await fetch(recipes_url);
    let recipes_json = await recipes.json();
    console.log("Recipes: " + JSON.stringify(recipes_json));

    return recipes_json;
  };

  renderRecipeList = async () => {
    let recipes_list = await this.getRecipes();
    this.setState({recipe_list: recipes_list})

    console.log("recipe components: " + JSON.stringify(recipes_list));
  };

  render() {
    return (
      <div className="recipes_container">
        <ul className="recipe_list">
          {this.state.recipe_list.map(recipe => <RecipeListItem key={recipe.id} recipe_name={recipe.title} />)}
        </ul>
      </div>
    );
  }
}

export default RecipeList;
