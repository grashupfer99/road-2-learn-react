import React, { Component } from "react";
// import FlipMove from "react-flip-move";
import { FormGroup, Input, Label } from "reactstrap";
import "./App.css";
import { list } from "./list";

const createListItems = list.map(item => ({
  title: item.title,
  id: item.objectID
}));

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeAll = this.handleChangeAll.bind(this);

    this.state = {
      // checkbox items
      items: createListItems,
      // store checked items here: value:item name, checked: true/false
      checkedListAll: [],
      // all items checked
      checkAll: false
    };
  }

  // Select Items
  handleChangeAll(e) {
    const { checked } = e.target;
    const listItems = this.state.items;
    const tempItems = [];

    if (checked) {
      // add checked item's id to array
      listItems.map(item => tempItems.push(item.id));
    }

    this.setState({
      checkedListAll: tempItems,
      checkAll: checked
    });
  }

  // Handle Checkbox Click
  handleChange(e) {
    // value: item's id, checked: true/false
    const { value, checked } = e.target;
    // when a single checkbox is being checked
    if (checked) {
      this.setState(prevState => ({
        // add a new value to prev array items
        checkedListAll: [...prevState.checkedListAll, value]
      }));
    } else {
      this.setState(prevState => ({
        // remove selected value from array
        checkedListAll: prevState.checkedListAll.filter(item => item !== value)
      }));
    }
  }

  render() {
    const { items, checkedListAll, checkAll } = this.state;

    return (
      <div className="App my-4">
        <header>
          <FormGroup className="m-0 custom-control custom-checkbox">
            <Input
              className="custom-control-input"
              id="select-all"
              type="checkbox"
              checked={checkAll}
              onChange={this.handleChangeAll}
            />
            <Label htmlFor="select-all" className="custom-control-label">
              Select all
            </Label>
          </FormGroup>
        </header>
        <ul className="w-50 list-group mx-auto my-5">
          {items.map((item, i) => {
            return (
              <li key={i} className="my-1 py-2 rounded list-group-item">
                <Checkbox
                  id={item.id}
                  isChecked={checkedListAll.includes(item.id)}
                  handleChange={this.handleChange}
                  title={item.title}
                />
              </li>
            );
          })}
        </ul>
        <div className="w-50 my-3 mx-auto text-left">
          {this.state.checkedListAll.map((item, i) => {
            return (
              <div
                key={i}
                className="rounded px-2 bg-info py-1 my-2 mx-1 d-inline-block"
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

class Checkbox extends Component {
  render() {
    const { id, isChecked, handleChange, title } = this.props;

    return (
      <FormGroup className="m-0 custom-control custom-checkbox d-flex flex-column justify-content-between">
        <Input
          className="custom-control-input"
          type="checkbox"
          id={this.props.id}
          value={id}
          checked={isChecked}
          onChange={handleChange}
        />
        <Label htmlFor={id} className="custom-control-label">
          {title}
        </Label>
      </FormGroup>
    );
  }
}

export default App;
