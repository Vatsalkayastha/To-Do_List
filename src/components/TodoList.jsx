import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // Selecting filtered todos from the Redux store state
  const filteredTodos = useSelector((state) => {
    const todos = state.todos; // Extracting todos array from the state
    const filter = state.filter; // Extracting filter value from the state
    const searchTerm = state.searchTerm.toLowerCase(); // Convert search term to lowercase for case-insensitive search

    // Filtering todos based on filter and search term
    return todos.filter((todo) => {
      // Checking if the todo matches the filter condition
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      // Checking if the todo's text matches the search term
      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      // Returning true only if the todo matches both filter and search conditions
      return matchesFilter && matchesSearch;
    });
  });

  // Logging the filtered todos
  console.log("Filtered Todos:", filteredTodos);

  return (
    <ul>
      {/* Placeholder message for the list */}
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {/* Rendering todo items based on filteredTodos */}
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} /> // Rendering TodoItem component for each todo
      ))}
    </ul>
  );
};

export default TodoList;
