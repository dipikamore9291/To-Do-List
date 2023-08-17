import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./App.scss";

import ToDoList from "./containers/ToDoList";
import AddToDo from "./containers/AddToDo";
import ToDoActions from "./containers/ToDoActions";
function App() {
  return (
    <div className="to-do-app">
      <div className="container">
        <div className="main-container">
          <h1 className="heading">THINGS TO DO</h1>
          <div className="inner-container">
            <AddToDo />
            <ToDoList />
          </div>
        </div>
        <ToDoActions />
      </div>
    </div>
  );
}

export default App;
