import React, { useState } from "react";
import './App.css';

const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

function App() {
  const [ todos, setTodos ] = useState([
    { text: 'learn abut some hooks yo' },
    { text: 'call the cable company ask for more internets' },
    { text: 'make a new friend' },
  ]);

  function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const renderTodos =() => todos.map((todo, i) => (
    <Todo
      key={i}
      index={i}
      todo={todo}
    />
  ));

  return (
    <div className="app">
      <div className="todo-list">
        { renderTodos() }
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
