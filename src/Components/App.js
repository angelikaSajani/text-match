import React from "react";
import "./App.css";
import TextMatcher from "./TextMatcher";

function App() {
  return (
    <div className="App">
      <TextMatcher defaultCaseSensitive={true} />
    </div>
  );
}

export default App;
