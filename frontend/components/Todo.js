import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className={`todo ${this.props.todo.completed ? "completed" : ""}`}
        onClick={(e) => {
          this.props.onClick(e, this.props.todo.id);
        }}
        todo={this.props.todo}
      >
        {this.props.todo.name}
      </div>
    );
  }
}
