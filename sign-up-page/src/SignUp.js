import React, { Component } from 'react'
import {FaStudiovinari} from "react-icons/fa"
export default class SignUp extends Component {
constructor(props){
  super(props);
  this.state = {
    name: '',
    email: '',
    password: '',
  }
}

handleChange = (event) => {
  this.setState({[event.target.name] : event.target.value})
  
}
handleSubmit = (event) => {
  event.preventDefault();
  console.log(this.state)

}
  render() {
    return (
      
        <form className='form-style' onSubmit={this.handleSubmit}>
            <h1 className="logo"><FaStudiovinari /></h1>
            <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} className="input-field-style" />
            <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} className="input-field-style"/>
            <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} className="input-field-style"/>
            <button className="btn">Sign Up</button>

            <p className="border-bottom">By creating an account, you agree and accept out Terms and Privacy Policy.</p>
        </form>
      
    )
  }
}
