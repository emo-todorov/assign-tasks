import Form from "./components/Form";
import { useDispatch, useSelector } from "react-redux";
import { addHuman } from "./store/slices/humansSlice";
import { addTask, assignToUser } from "./store/slices/tasksSlice";
import AllHumans from "./components/AllHumans";
import AllTasks from "./components/AllTasks";

function App() {

  return (
    <div className="App">
      <h1>App</h1>

      <div className="app-wrapper">
        <AllHumans />
        <AllTasks />
      </div>
    </div>
  );
}

export default App;