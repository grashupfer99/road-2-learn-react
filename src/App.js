import React, { Component } from "react";
import FlipMove from "react-flip-move";
import "./App.css";

const ActionLink = e => {
  console.log("The link was clicked.");
};

class ToggleButtonHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleBtn: "On"
    };
    this.toggleBtn = this.toggleBtn.bind(this);
  }

  toggleBtn() {
    console.log("on/off");
    let toggle = this.state.toggleBtn === "On" ? "Off" : "On";
    this.setState({
      toggleBtn: toggle
    });
  }

  render() {
    return (
      <div className="my-4">
        <button type="text" className="btn btn-warning" onClick={ActionLink}>
          ActionLink
        </button>
        <div className="my-2" />
        <button
          type="text"
          className="mx-auto btn btn-dark"
          onClick={this.toggleBtn}
        >
          {this.state.toggleBtn}
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
    title: "Console Guru",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 2
  },
  {
    title: "Node js",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 3
  },
  {
    title: "Linux Programming",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 4
  },
  {
    title: "Electron js",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 5
  },
  {
    title: "TypeScript",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 3,
    points: 7,
    objectID: 6
  }
];

/*
// ES5
function isSearched(keyword) {
  return function(item) {
    return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
  }
}

*/

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

// Component declaration
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: list,
      searchTerm: ""
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDismiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
  }

  onSearchChange(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  render() {
    return (
      <div className="App my-4">
        <form className="bg-info my-5 mx-auto w-50">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              onChange={this.onSearchChange}
            />
          </div>
        </form>
        <FlipMove duration={250} easing="ease-out">
          {this.state.list
            .filter(isSearched(this.state.searchTerm))
            .map(item => (
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
                    // onClick={() => console.log(item.objectID)}
                    onClick={() => this.onDismiss(item.objectID)}
                    type="button"
                  >
                    Dismiss
                  </button>
                </span>
              </div>
            ))}
        </FlipMove>
        {/* {this.state.list.map(item => (
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
                // onClick={() => console.log(item.objectID)}
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
              >
                Dismiss
              </button>
            </span>
          </div>
        ))} */}
        <hr className="w-75 my-5 mx-auto" />
        <ToggleButtonHandler />
      </div>
    );
  }
}

export default App;
