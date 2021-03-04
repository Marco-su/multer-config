import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Navbar from "./common/Navbar";
import RoutesContainer from "./components/RoutesContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <RoutesContainer />
      </Router>
    </div>
  );
}

export default App;
