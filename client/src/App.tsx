import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Router from "./component/router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
