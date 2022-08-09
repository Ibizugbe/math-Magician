import "./App.css";
/* eslint-disable  react/prefer-stateless-function */
import React from "react";
import Calculator from "./components/Calculator";

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./components/Calculator" element={<Calculator />} />
        <Route path="./components/About" element={<About />} />
        <Route path="./components/Quotes" element={<Quotes />} />
      </Routes>
    );
  }
}

export default App;
