import React from "react";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    value: state.counter.value,
  };
};

const Counter = (props) => {
  return (
    <div>
      <h1>{props.value}</h1>
    </div>
  );
};

export default connect(mapStateToProps)(Counter);
