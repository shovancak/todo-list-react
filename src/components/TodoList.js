import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <section>
        <h2>TodoList</h2>
        <TodoItem />
      </section>
    );
  }
}
