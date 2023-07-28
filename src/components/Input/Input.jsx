import React, {Component} from "react";

import { Container } from "react";

import initialTodos from "./todos.json"

class AppInput extends Component {
state = {
  todos: initialTodos,
  inputValue: "123",
}
deleteTodo = todoId =>{
  this.setState(prevState => ({
    todos: prevState.todos.filter(todo.id !==todoId),

  }));
};
deleteTodo = todoId => {

};

handleInputChange = event => {
console.log(event);
}

render() {

  return(
    <Container>
     <input type="text"
     value={this.state.inputValue}
      onChange={this.handleInputChange}
     />
      {}
      {}
      {}
    </Container>
  )
}
}
export default AppInput
