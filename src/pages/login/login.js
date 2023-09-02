import './login.css';

import React from 'react';
import Header from '../../components/header/header.js';

class Home extends React.PureComponent {
  
  constructor(props){
    super(props);
    this.user_email = null;
  }

  login() {
    console.log("login clicked, user: " + this.user_email);
  }

  render() {
    return (
      <div className="Login">
        <Header />
        <div className='login_container'>
          <div className='login_box'>
            <div className='login_input'>
              <input type='text' placeholder='Email' onChange={e => this.user_email = e.target.value}/>
          </div>
          <div className='login_input'>
            <input type='password' placeholder='Password' />
          </div>
          <div className='login_button' onClick={() => this.login()}>Login</div>
          <div className='login_forgot'>Forgot Password?</div>
          <div className='login_register'>Register</div>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;
