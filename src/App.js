import React from "react";

import {connect} from 'react-redux';
import {updateInput} from './redux/action';

import './App.css';

class App extends React.Component {

  handleChange = (e) => {
    e.preventDefault();
    this.props.updateInput(e.target.value);
  }

  render() {
      console.log(this.props)
    return (
        <div>
          <input type="text" onChange={this.handleChange} />
          <p>{this.props.input}</p>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
    input: state.input
})

const mapDispatchToProps = (dispatch) => ({
    updateInput: (input) => dispatch(updateInput(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
