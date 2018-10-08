import React, { Component } from "react";
import { FormGroup, Input, Label  } from 'reactstrap';
import { list } from './list';

const createListItems = list.map(item=> ({title: item.title, id: item.objectID}))

class Items extends Component {
  constructor(props) {
    super(props);
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    this.selectedItems = this.selectedItems.bind(this);
    this.selectItem = this.selectItem.bind(this);

    this.state = {
      items: createListItems,
      checkedListAll: [],
      ItemsChecked: false
    };
  }

  selectedItems(e) {
    const { value, checked } = e.target;
    let { checkedListAll } = this.state;

    if (checked) {
      checkedListAll = [...checkedListAll, value];
    } else {
      checkedListAll = checkedListAll.filter(el => el !== value);
      if (this.state.ItemsChecked) {
        this.setState({
          ItemsChecked: !this.state.ItemsChecked
        });
      }
    }
    this.setState({ checkedListAll });
  }
  selectItem(e) {
    const { checked } = e.target;
    const { categories } = this.state;
    const collection = [];

    if (checked) {
      for (const cat of categories) {
        for (const item of cat.items) {
          collection.push(item.id);
        }
      }
    }

    this.setState({
      checkedListAll: collection,
      ItemsChecked: checked
    });
  }

  handleCheckboxClick(e) {
    const { value, checked } = e.target;

    if (checked) {
      this.setState(prevState => ({
        checkedListAll: [...prevState.checkedListAll, value * 1]
      }));
    } else {
      this.setState(prevState => ({
        checkedListAll: prevState.checkedListAll.filter(item => item != value)
      }));
    }
  }

  render() {
    const { items, checkedListAll, ItemsChecked } = this.state;
    console.log('this.state from main: ', this.state)
    return (
      <div>
        <header>
          <label>
            <input
              type="checkbox"
              checked={ItemsChecked}
              onClick={this.selectItem.bind(this)}
            />Select all
          </label>
        </header>
        {items.map(item => {
            console.log(item);
          return (
            <ItemCategory
              array={items}
              key={item.id}
              selectedItems={this.selectedItems}
              ItemsChecked={ItemsChecked}
              checkedListAll={checkedListAll}
              handleCheckboxClick={this.handleCheckboxClick}
            />
          );
        })}
        {<pre>All Selected: {JSON.stringify(ItemsChecked, null, 2)}</pre>}
        {<pre>Selected List: {JSON.stringify(checkedListAll, null, 2)}</pre>}
      </div>
    );
  }
}

class ItemCategory extends Component {
  render() {
    const {
      array,
      name,
      selectedItems,
      ItemsChecked,
      checkedListAll
    } = this.props;

    const getItems = array.map(item => {
      return item;
    });

    console.log('list: ', createListItems);
    console.log('items from ItemCategory: ', this.props);

    return (
      <div>
        <ul className="w-50 text-center mx-auto list-group">
          {getItems.map(item => {
            return (
              <li key={item.id} className="list-group-item my-1 py-2 rounded">
                <Checkbox
                  item={item.title}
                  selectedItems={selectedItems}
                  isChecked={checkedListAll.includes(item.id)}
                  handleCheckboxClick={this.props.handleCheckboxClick}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

class Checkbox extends Component {
  render() {
    const { item, isChecked } = this.props;

    return (
      <FormGroup className="m-0 custom-control custom-checkbox">
      <Input
        className="custom-control-input"
        value={item.id}
        id={`item${item.id}`}
        type="checkbox"
        checked={isChecked}
        onChange={this.props.handleCheckboxClick}
      />
      <Label htmlFor={`item${item.id}`} className="custom-control-label">
        {item.title}
      </Label>
    </FormGroup>
    );
  }
}

export default Items;