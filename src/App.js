import "./App.css";
import AddTask from "./Components/AddTask";
import FilterTask from "./Components/FilterTask";
import ToDoList from "./Components/ToDoList";

function App() {
  return (
    <div className="App">
      <h1 style={{ alignSelf: "center" }}>ToDoList redux</h1>

      <AddTask />
      <FilterTask />
      <ToDoList />
    </div>
  );
}

export default App;
