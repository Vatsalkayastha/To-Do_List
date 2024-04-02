import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import { BsSearch, BsPlus } from "react-icons/bs";
import { addTodo, updateSearchTerm } from "../redux/actions";

const Todo = () => {
  // Extracting todos and filter from the Redux store state
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch(); // Hook to get the dispatch function from Redux store
  const [newTodoText, setNewTodoText] = useState(""); // State to manage the input field for adding new todo
  const [searchTerm, setSearchTerm] = useState(""); // State to manage the search term input field

  // Function to add a new todo
  const handleAddTodo = (text) => {
    dispatch(addTodo(text)); // Dispatching action to add todo with provided text
  };

  // Handler for adding a todo when the add todo button is clicked
  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      // Check if the input is not empty
      handleAddTodo(newTodoText.trim()); // Add the todo with trimmed text
      setNewTodoText(""); // Clear the input field after adding todo
    }
  };

  // Handler for updating the search term
  const handleSearchChange = (value) => {
    setSearchTerm(value); // Update the search term state
    dispatch(updateSearchTerm(value)); // Dispatch action to update search term in Redux store
  };

  return (
    <div className="lg:max-w-4xl md:max-w-3xl max-w-xl sm:mx-5 md:mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        Personal TODO APP
      </h2>
      {/* Input field for adding new todo */}
      <div className="flex items-center mb-4">
        <input
          id="addTodoInput"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Add Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)} // Update newTodoText state on change
        />
        {/* Button to add new todo */}
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTodoClick} // Call handleAddTodoClick function when clicked
        >
          <BsPlus size={20} /> {/* Plus icon */}
        </button>
      </div>

      {/* Filter buttons and search input */}
      <div className="flex flex-col sm:flex-row md:items-center justify-between gap-4">
        {/* Component for filter buttons */}
        <FilterButtons />
        {/* Input field for searching todos */}
        <div className="flex items-center mb-4">
          <input
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)} // Call handleSearchChange function on change
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsSearch size={20} /> {/* Search icon */}
          </button>
        </div>
      </div>

      {/* Component to display the list of todos */}
      <TodoList />
    </div>
  );
};

export default Todo;
