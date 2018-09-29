import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

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
    // 1st step
    // const updatedList = this.state.list.filter( function isNotId(item){
    //   return item.objectID !== id
    // })

    // 2nd step
    // function isNotId(item) {
    //   return item.objectID !== id;
    // }

    // const updatedList = this.state.list.filter(isNotId);

    // 3rd step
    // const isNotId = item => item.objectID !== id;
    // const updatedList = this.state.list.filter(isNotId);

    // 4th step (refactored)
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
      </div>
    );
  }
}

export default App;
