import React from "react";
import ReactDOM from "react-dom";

import ColorPicker from "colorPicker/ColorPicker";
import ColorList from "colorList/ColorList";

const App = () => (
  <>
    <h1 className="text-center bg-dark text-white p-2">Color Picker</h1>
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-4">
          <ColorList />
        </div>
        <div className="col-12 col-md-8">
          <ColorPicker />
        </div>
      </div>
    </div>
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
