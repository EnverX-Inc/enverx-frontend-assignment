import React from "react";
import { connect } from "react-redux";
import Balance from "../components/Balance";

export const Main = (props) => {
  return (
    <div>
      <Balance />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
