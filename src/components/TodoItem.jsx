import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from "../redux/actions"; // Importing action creators
import {
  FaToggleOn,
  FaToggleOff,
  FaTrash,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch(); // Hook to get the dispatch function from Redux store

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      {/* Displaying todo information */}
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">
          {index + 1}. {/* Displaying todo index */}
        </span>
        <span
          className={`mr-4 ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text} {/* Displaying todo text */}
        </span>
      </div>
      {/* Buttons for todo actions */}
      <div className="space-x-3 ml-8">
        {/* Button to toggle todo completion */}
        <button
          className="mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(toggleTodo(index))} // Dispatching action to toggle todo completion
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}{" "}
          {/* Displaying appropriate icon based on todo completion */}
        </button>
        {/* Button to remove todo */}
        <button
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(removeTodo(index))} // Dispatching action to remove todo
        >
          <FaTrash /> {/* Trash icon */}
        </button>
        {/* Button to mark todo as completed */}
        {!todo.completed && (
          <button
            className="text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markCompleted(index))} // Dispatching action to mark todo as completed
          >
            <FaCheck /> {/* Check icon */}
          </button>
        )}
        {/* Button to mark todo as incomplete */}
        {todo.completed && (
          <button
            className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markIncomplete(index))} // Dispatching action to mark todo as incomplete
          >
            <FaTimes /> {/* Times icon */}
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
