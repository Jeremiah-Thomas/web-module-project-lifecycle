import React from "react";
import axios from "axios";
import TodoList from "./TodoList";
import Form from "./Form";
import e from "cors";

const URL = "http://localhost:9000/api/todos";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      inputText: "",
    };
  }

  async componentDidMount() {
    axios
      .get("http://localhost:9000/api/todos")
      .then((res) => this.setState({ todos: res.data.data }));
  }

  componentDidUpdate(prevProps, prevState) {}

  onChange = (e) => {
    this.setState({ inputText: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/api/todos", {
      name: this.state.inputText,
    });
    axios
      .get("http://localhost:9000/api/todos")
      .then((res) => this.setState({ todos: res.data.data, inputText: "" }));
  };

  onClick = (e, id) => {
    axios.patch(`http://localhost:9000/api/todos/${id}`).then((res) =>
      this.setState({
        todos: [
          ...this.state.todos.filter((todo) => {
            return todo.id !== id;
          }),
          res.data.data,
        ],
      })
    );
    console.log(e.target.attributes);
  };

  clearCompleted = () => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return !todo.completed;
        }),
      ],
    });
  };

  render() {
    return (
      <>
        {this.state.todos.length !== 0 ? (
          <TodoList
            todos={this.state.todos}
            onClick={this.onClick}
            clearCompleted={this.clearCompleted}
          />
        ) : (
          <p>Loading ...</p>
        )}
        <Form
          onChange={this.onChange}
          inputText={this.state.inputText}
          onSubmit={this.onSubmit}
        />
      </>
    );
  }
}
