import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  // LIFECYCLE HOOKS

  // runs after the component output has been rendered to the DOM
  componentDidMount() {
    // set up a timer
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // Tearing down the timer
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="my-4 w-50 mx-auto rounded bg-info">
        <span className="h3 font-weight-bold p-2 d-block">
          {this.state.date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}

class ExplainBindingsComponent extends Component {
  constructor(props) {
    super(props);

    this.onClickMe = () => {
      console.log(this);
    };
  }

  render() {
    return (
      <div className="w-50 mx-auto my-5">
        <button type="button" className="btn btn-info" onClick={this.onClickMe}>
          Click Me
        </button>
      </div>
    );
  }
}

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walkerson",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  },
  {
    title: "Redux 2",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 3,
    points: 7,
    objectID: 2
  }
];

// Component declaration
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: list
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App my-4">
        {this.state.list.map(item => (
          <div
            key={item.objectID}
            className="bg-info rounded m-2 d-flex justify-content-between w-75 mx-auto"
          >
            <span className="my-auto mx-2">
              <a className="text-dark font-weight-bold" href={item.url}>
                {item.title}
              </a>
            </span>
            <span className="my-auto">{item.author}</span>
            <span className="my-auto">{item.num_comments}</span>
            <span className="my-auto">{item.points}</span>
            <span className="my-auto">
              <button
                className="btn btn-danger m-2"
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
              >
                Dismiss
              </button>
            </span>
          </div>
        ))}
        {/* <Clock /> */}
        <ExplainBindingsComponent />
      </div>
    );
  }
}

export default App;
