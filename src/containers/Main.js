import React from "react";
import { connect } from "react-redux";
import Balance from "../components/Balance";
import AddTransactions from "../components/AddTransactions";
import { addTransaction } from "../redux/action";

export const Main = ({ transctions, addTransaction }) => {
  console.log(transctions);
  return (
    <div>
      <Balance transctions={transctions} />
      <AddTransactions
        addTransaction={(transction) => addTransaction(transction)}
        id={transctions[0] ? transctions[0].id + 1 : 1}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  transctions: state.transctions,
});

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transctions) => dispatch(addTransaction(transctions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
