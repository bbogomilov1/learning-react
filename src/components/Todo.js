import { useState } from "react";
import ListItem from "./ListItem";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const tempList = todoList;
    tempList.push(todo);
    setTodoList(tempList);
    console.log(todoList);
    setTodo("");
  };

  return (
    <div>
      TO DO:
      <form onSubmit={handleSubmit}>
        <input value={todo} onChange={handleChange} type="text"></input>
        <button type="submit">Add</button>
      </form>
      {todoList.map((x) => (
        <ListItem key={x} name={x}></ListItem>
      ))}
    </div>
  );
}
