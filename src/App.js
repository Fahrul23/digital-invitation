import { Provider } from "react-redux";
import { Routes, store } from "./config";


function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <Routes />
        </Provider>
    </div>
  );
}

export default App;
