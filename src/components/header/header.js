import React from "react";
import "./header.css";
import { Link } from 'react-router-dom';

class Header extends React.PureComponent {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="central_header">
          <div className="header_top">
            <div className="header_left_half">
              <h1>PlanMyPlate</h1>
            </div>
          </div>
          <div className="header_nav">  
            <ul className="lhs_nav_list nav_list">
              <li><Link style={{textDecoration: "None"}} className="nav_link" to="/">Home</Link></li>
              <li><Link style={{textDecoration: "None"}} className="nav_link" to="/recipes">Recipes</Link></li>
              <li><Link style={{textDecoration: "None"}} className="nav_link" to="/meal-plans">Meal Plans</Link></li>
              <li><Link style={{textDecoration: "None"}} className="nav_link" to="/shopping-list">Shopping List</Link></li>
            </ul>
            <ul className="rhs_nav_list nav_list">
              <li><Link style={{textDecoration: "None"}} className="nav_link" to="/login">Login</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
