import React, { Component } from "react";
import FlipMove from "react-flip-move";
import { FormGroup, Input, Label  } from 'reactstrap';
import "./App.css";

const ActionLink = e => {
  console.log("The link was clicked.");
};

class ToggleButtonHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleBtn: true
    };
    this.toggleBtn = this.toggleBtn.bind(this);
  }

  toggleBtn() {
    this.setState(prevState => ({
      toggleBtn: !prevState.toggleBtn
    }));
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
          {this.state.toggleBtn ? "On" : "Off"}
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
  },
  {
    title: "JavaScript",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 3,
    points: 7,
    objectID: 7
  },
  {
    title: "JavaScript +",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 3,
    points: 7,
    objectID: 8
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

// https://zetawiki.com/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8_checkbox_%EB%AA%A8%EB%91%90_%EC%B2%B4%ED%81%AC
// https://jsbin.com/kerakijamo/1/edit?js,output
// 자바스크립트_checkbox_모두_체크
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
    this.selectAll = this.selectAll.bind(this);
    this.selectAll = this.selectAll.bind(this);
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
    const { searchTerm, list } = this.state;
    return (
      <div className="App my-4">
        <form className="bg-info my-5 mx-auto w-50">
          <div className="form-group">
            <input
              className="form-control"
              value={searchTerm}
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
        <div className="my-5">
        <FormGroup>
        <Input
          type="checkbox"
          name="all"
          id="all"
          onClick={this.selectAll}/>
          <Label htmlFor="all">
            Toggle All
          </Label>
        </FormGroup>
        <FormGroup>
        <Input
          type="checkbox"
          name="box1"
          onClick={this.checkThis}
          id="box1"/>
          <Label htmlFor="box1">
            Box 1
          </Label>
        </FormGroup>
        <FormGroup>
        <Input
          type="checkbox"
          name="box2"
          onClick={this.checkThis}
          id="box2"/>
          <Label htmlFor="box2">
            Box 2
          </Label>
        </FormGroup>
        <FormGroup>
        <Input
          type="checkbox"
          name="box3"
          onClick={this.checkThis}
          id="box3"/>
          <Label htmlFor="box3">
            Box 3
          </Label>
        </FormGroup>
      </div>

      </div>

    );
  }
}

export default App;
