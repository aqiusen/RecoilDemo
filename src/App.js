import './App.css';
import CharacterCounter from "./components/CharacterCounter";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
          Learn React
          <CharacterCounter/>
        <br/>
        <br/>
        <br/>
         <TodoList/>
        <Counter/>
    </div>
  );
}

export default App;
