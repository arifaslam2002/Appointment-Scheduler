const FilterBar = ({ filter, setFilter }) => {
  return (
    <div>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="bg-white border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      >
        {" "}
        <option value="All">All</option> <option value="Today">Today</option>{" "}
        <option value="Upcoming">Upcoming</option>{" "}
        <option value="Completed">Completed</option>{" "}
        <option value="Cancelled">Cancelled</option>{" "}
      </select>
    </div>
  );
};

export default FilterBar;
