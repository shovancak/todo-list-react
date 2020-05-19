import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
// github setup
class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "make a breakfast" },
      { id: 3, title: "wear trousers" },
    ],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

  handleChange = (event) => {
    console.log("handle change");
  };

  handleSubmit = (event) => {
    console.log("handle submit");
  };

  clearList = (event) => {
    console.log("clear List");
  };

  handleEdit = (id) => {
    console.log(`handle edit ${id}`);
  };

  handleDelete = (id) => {
    console.log(`handle delete ${id}`);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">ToDo Input</h3>
          </div>
          <TodoInput
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
          />
          <TodoList
            items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleChange}
            handleEdit={this.handleEdit}
          />
        </div>
      </div>
    );
  }
}

export default App;
