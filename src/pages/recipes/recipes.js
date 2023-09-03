import './recipes.css';
import React from 'react';
import Header from '../../components/header/header';

class Recipes extends React.PureComponent {
  render() {
    return (
      <div className="Recipes">
        <Header />
        <div className='recipes_container'>
        </div>
      </div>
    );
  }
}

export default Recipes;
