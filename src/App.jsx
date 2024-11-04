import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router/routes";
import "./App.css";
import Theme from "./themes/theme";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <Provider store={store}>
      <Theme
        children={
          <Router>
            <Routes />
          </Router>
        }
      />
    </Provider>
  );
}

export default App;
