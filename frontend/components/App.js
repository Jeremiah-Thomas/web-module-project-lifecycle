import React from "react";
import axios from "axios";
import TodoList from "./TodoList";
import Form from "./Form";

const URL = "http://localhost:9000/api/todos";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  async componentDidMount() {
    axios
      .get("http://localhost:9000/api/todos")
      .then((res) => this.setState({ todos: res.data.data }))
      .then(console.log(this.state.todos));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.todos);
  }

  render() {
    return (
      <>
        {this.state.todos.length !== 0 ? (
          <TodoList todos={this.state.todos} />
        ) : (
          <p>Loading ...</p>
        )}
        <Form />
      </>
    );
  }
}
