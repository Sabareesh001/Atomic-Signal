import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router/routes";
import "./App.css";
import Theme from "./themes/theme";
function App() {
  return (
    <Theme>
      <Router>
        <Routes />
      </Router>
    </Theme>
  );
}

export default App;
