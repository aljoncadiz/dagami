import React from "react";
import ReactDOM from "react-dom";
import './_App.scss';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div>
      <Navbar/>
      <p>React here!</p>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));