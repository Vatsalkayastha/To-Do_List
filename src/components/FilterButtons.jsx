import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodos, markAllCompleted } from "../redux/actions"; // Importing action creators

const FilterButtons = () => {
  const dispatch = useDispatch(); // Hook to get the dispatch function from Redux store
  const currentFilter = useSelector((state) => state.filter); // Hook to extract filter state from Redux store

  // Function to dispatch action for filtering todos based on selected filter
  const handleFilter = (filter) => {
    dispatch(filterTodos(filter)); // Dispatching action with the selected filter
  };

  return (
    <div className="flex space-x-4 items-center">
      {/* Dropdown menu for selecting filter */}
      <select
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
        value={currentFilter} // Setting the value of dropdown to current filter state
        onChange={(e) => handleFilter(e.target.value)} // Calling handleFilter function on change
      >
        {/* Options for different filters */}
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>

      {/* Button to mark all todos as completed */}
      <button
        className="text-sm px-2 py-1 bg-purple-500 text-white rounded ml-2"
        onClick={() => dispatch(markAllCompleted())} // Dispatching action to mark all todos as completed
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButtons;
