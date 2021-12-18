import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
// import {ServicesContext} from 'react';
 
 class UsernameComponent extends React.Component {

  //handleSubmit = (event) => this.setState({name: event.target.value});
  constructor(props){
    super(props);
    this.state={
      name: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      name: event.target.value
    });
    alert("UserName is " + this.name);
  }

  render(){
    
    return(
      // <ServicesContext.Consumer>
      
        <form className="d-flex mx-auto">
        {/* {({userService}) => <span>{userService.name}</span>} */}
          <input className="form-control me-2" type="text" placeholder="Username"  />
          <button className="btn btn-outline-secondary" type="submit" onSubmit={this.handleSubmit}>Enter</button>
        </form>
      // </ServicesContext.Consumer>
      
    );
  }
  
}

export default UsernameComponent;
