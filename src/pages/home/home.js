import React from 'react';
import Header from '../../components/header/header.js';

class Home extends React.PureComponent {
  
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="Home">
        <Header />
      </div>
    );
  }
}

export default Home;
