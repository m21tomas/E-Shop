import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
 
 class UsernameComponent extends React.Component {

  constructor(){
     super();
     this.state = {username: ''};
  }

  handleSubmit = (event) => this.setState({username: event.target.value});

  // handleSubmit(event) {
  //   this.setState({
  //     username: event.target.value
  //   });
  //   event.preventDefault();
  //   alert("UserName is " + this.username);
  // }

  render(){
    return(
      <form className="d-flex mx-auto">
        <input className="form-control me-2" type="text" placeholder="Username"  />
        <button className="btn btn-outline-secondary" type="submit" onSubmit={this.handleSubmit}>Enter</button>
      </form>
    );
  }
  
}

export default UsernameComponent;
