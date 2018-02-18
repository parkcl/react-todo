import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoBox />
      </div>
    );
  }
}

class TodoBox extends Component {
  render() {
    return (
      <div className="container">
        <TodoList />
      </div>
    );
  }
}

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['Grocery shop', 'Wash car'],
      value: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.state.value)
      return;

    this.state.items.push(this.state.value);
    this.setState({value:''});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClose(t, event) {
    if (t.i >= 0) {
      this.state.items.splice(t.i, 1);
      this.setState({items: this.state.items});
    }
  }

  render() {
    return (
        <div className="container">
          <div className="jumbotron">
            <h2>Simple Todo App (React.js)</h2>
          </div>
          <div className="form">
            <form onSubmit={this.handleSubmit} className="form-control">
                <input placeholder="add item" type="text" value={this.state.value} onChange={this.handleChange} />
                <button type="submit">add</button>
            </form>
          </div>
          <div className="list">
            <ul className="list-group">
              {this.state.items.map((e, i) => {
                return <li key={i} className="list-group-item justify-content-between list-group-item-action">{e}
                        <button onClick={this.handleClose.bind(this, {i})} type="button" className="close" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                          </button>
                        </li>;
                        
              })}
            </ul>
          </div>
          
        </div>
    );
  }
}

export default App;
