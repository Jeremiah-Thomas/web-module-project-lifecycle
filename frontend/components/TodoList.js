import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="todos">
        {this.props.todos.map((todo) => {
          return (
            <Todo key={todo.id} todo={todo} onClick={this.props.onClick} />
          );
        })}
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}
