import React from "react";
import ReactDOM from "react-dom";
import './_App.scss';
import 'bootstrap';

import Navbar from './components/Navbar';
import SalesHistory from './components/SalesHistory/SalesHistory';

const App = () => {
  return (
    <div>
      <Navbar/>
      <SalesHistory />
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));