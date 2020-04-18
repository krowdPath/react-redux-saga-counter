import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../action";

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.props.onClickIncrement}>
          +
        </button>
        <button type="button" onClick={this.props.onClickDecrement}>
          -
        </button>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onClickIncrement: () => dispatch(increment()),
    onClickDecrement: () => dispatch(decrement()),
  };
};
export default connect(undefined, mapDispatchToProps)(Buttons);
