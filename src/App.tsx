import { Provider } from "react-redux";
import { Store } from "./redux/store/store"
function App() {
  return (
    <Provider store={Store}>
      <div>tool</div>
    </Provider>
  );
}

export default App;
