
import React from 'react';

import './recipes.css';
import JWTUtils from '../../utils/jwt_utils';
import RecipeListItem from './recipe_list_item';


class RecipeList extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
          recipe_list: []
        }
	}
    
	componentDidMount() {
        this.renderRecipeList();
	}
    
	getRecipes = async () => {
        // Get user id from jwt.
        var user_id = JWTUtils.get_user_id();
      
        // Get recipes from api.
        // TODO: Get url from environment.
        let recipes_url =  "http://127.0.0.1:5000/recipes/" + user_id; 
      
        console.log("Requesting recipes from: " + recipes_url);
    
        let recipes = await fetch(recipes_url)
        let recipes_json = await recipes.json();  
        console.log("Recipes: " + JSON.stringify(recipes_json));
    
        return recipes_json;
	}
    
	renderRecipeList = async () => {
    	let recipes = await this.getRecipes()
    	let recipe_component_list = [];
    
        for (let i = 0; i < recipes.length; i++) {
          console.log('recipe: ' + JSON.stringify(recipes[i]));
          recipe_component_list.push(<RecipeListItem key={i} recipe_name={ recipes[i].title } />);
        }
    
        console.log('recipe components: ' + JSON.stringify(recipe_component_list));
        this.state.recipe_list = recipe_component_list;
        
        // rerender 
        this.forceUpdate();
	} 

	render() {
		return (
			<div className='recipes_container'>
				<ul className='recipe_list'>
					{ this.state.recipe_list }
				</ul>
			</div>
		);
	}
}

export default RecipeList;
