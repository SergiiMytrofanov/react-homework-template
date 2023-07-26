import { render } from "@testing-library/react";
import React from "react";


class CounterSecond extends React.Component {
  static defaultProps = {
    initialVallue: 0,
  }


static propTypes = {

};

state ={
  value: this.props.initialVallue,
};

handleIncrement = () => {
  this.setState(prevState => ({
    value: prevState.value + 1,
  }));
};
handleDecrement = () => {
  this.setState(prevState => ({
    value: prevState.value - 1,
  }));
};

render() {
  return(
<div className="Counter">
  <span className="Counter__vallue">{this.state.value}</span>

  <div className="Counter__controls">
    <button type="button" onClick={this.handleIncrement}>Increase on 1</button>
    <button type="button" onClick={this.handleDecrement}>Decrease on 1</button>
  </div>
</div>
  );
}
};

export default CounterSecond;
