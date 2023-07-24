import React, { Component } from "react";
import ReactDOM from "react-dom";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = (evt) => {
    // Отримуємо поточний стан count
    const { count } = this.state;
    // Отримуємо значення кроку з пропів
    const { step } = this.props;
    // Оновлюємо стан, збільшуючи count на значення кроку
    this.setState({ count: count + step });
  };

  handleDecrement = (evt) => {
    // Отримуємо поточний стан count
    const { count } = this.state;
    // Отримуємо значення кроку з пропів
    const { step } = this.props;
    // Оновлюємо стан, зменшуючи count на значення кроку
    this.setState({ count: count - step });
  };

  render() {
    // Отримуємо поточний стан count
    const { count } = this.state;
    // Отримуємо значення кроку з пропів
    const { step } = this.props;

    return (
      <div>
        <span>{count}</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Counter step={5} />, document.getElementById("root"));
