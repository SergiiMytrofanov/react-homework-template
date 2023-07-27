import React from "react";
import styles from './CounterSecond.module.css';

class CounterSecond extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };
  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div className={styles.CounterContainer}>
      <div className={styles.Counter}>
        <span className={styles.Counter__value}>{this.state.value}</span>

        <div className={styles.Counter__controls}>
          <button type="button" onClick={this.handleIncrement}>
            Increase on 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Decrease on 1
          </button>
        </div>
      </div>
      </div>
    );
  }
}

export default CounterSecond;
