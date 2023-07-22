import React from "react";
import { connect } from "react-redux";
import Balance from "../components/Balance";
import AddTransactions from "../components/AddTransactions";

export const Main = ({ transctions }) => {
  console.log(transctions);
  return (
    <div>
      <Balance transctions={transctions} />
      <AddTransactions />
    </div>
  );
};

const mapStateToProps = (state) => ({
  transctions: state.transctions,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
