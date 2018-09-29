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
  }

  userService() {}

  render() {
    return (
      <div className="App my-4">
        {this.state.list.map(item => (
          <div
            className="w-50 mx-auto my-2 bg-primary border rounded shadow-lg"
            key={item.objectID}
          >
            <span className="d-block">
              <a className="font-weight-bold text-dark" href={item.url}>
                {item.title}
              </a>
            </span>
            <span className="d-block">{item.author}</span>
            <span className="d-block">{item.num_comments}</span>
            <span className="d-block">{item.points}</span>
          </div>
        ))}
        <div className="w-50 mx-auto my-3 bg-warning border rounded shadow-lg">
          <span className="font-weight-bold d-block p-3">
            {this.state.list.map(
              (item, idx) =>
                item.author ? (
                  <div className="p-2 bg-info rounded border m-2 d-flex justify-content-around">
                    <span>{idx}#</span>
                    {item.author}
                  </div>
                ) : (
                  ""
                )
            )}
          </span>
        </div>
      </div>
    );
  }
}

export default App;
