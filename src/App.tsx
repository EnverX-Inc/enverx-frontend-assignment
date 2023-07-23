import React from 'react';
import './App.css';
// import { ExpenseListing } from './components/ExpenseListing';
import ExpenseListing from './components/ExpenseListing'
import configureStore from './store'
import { Provider } from 'react-redux';

export class App extends React.PureComponent<{}> {
  render() {
    const store = configureStore()
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.tsx</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <Provider store={store}>
        <ExpenseListing />
      </Provider>
    );
  }
}

export default App;
