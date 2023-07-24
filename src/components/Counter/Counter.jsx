import React from "react";
import styles from "./Counter.module.css";
import PropTypes from 'prop-types';

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
  
    handleIncrement = () => {
      const { count } = this.state;
      const { step } = this.props;
      this.setState({ count: count + step });
    };
  
    handleDecrement = () => {
      const { count } = this.state;
      const { step } = this.props;
      this.setState({ count: count - step });
    };
  
    render() {
      const { count } = this.state;
      const { step } = this.props;
  

    return (
      <div className={styles.container}>
        <span className={styles.counter}>{count}</span>
        <button className={styles.button} type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button className={styles.button} type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}


Counter.propTypes = {
    step: PropTypes.number.isRequired,
    initialCount: PropTypes.number,
  };


// Використання лічильника з певним значенням кроку (step)
const AppCounter = () => {
    return <Counter step={5} />;
  };

export default AppCounter;
