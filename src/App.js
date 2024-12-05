import { useDispatch } from "react-redux";
import AllHumans from "./components/AllHumans";
import AllTasks from "./components/AllTasks";
import { resetAction } from "./store/actions/actions";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>App</h1>

      <button onClick={() => dispatch(resetAction())}>Reset lists</button>

      <div className="app-wrapper">
        <AllHumans />
        <AllTasks />
      </div>
    </div>
  );
}

export default App;