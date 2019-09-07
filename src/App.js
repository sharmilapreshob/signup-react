import React, { Component } from 'react';
import PasswordMeter from './components/PasswordMeter';
import './App.css'
class App extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
      emailValid: false,
    }
  }
  isEmail = (e) => {
      const value = e.target.value;
      let emailValid = this.state.emailValid;
      this.setState({email:value});
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      console.log(emailValid);
    }

  render() {
    const { password } = this.state;
    return (
      <div className="App">
      <form className="form">
        <h2>Registration Form</h2>
        <label>Email</label>
        <input type="email" name="email" id="email"
        onChange={this.isEmail}
        />
        <label>Password</label>
        <div className="meter">
          <input autoComplete="off" type="password" onChange={e => this.setState({ password: e.target.value })} />
          <PasswordMeter password={password} />
        </div>
        <button className="btn-submit"  type="submit" id="signUp" name="button">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
