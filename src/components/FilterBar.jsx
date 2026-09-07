
const FilterBar = ({ filter, setFilter }) => {
  const filters = [
    "All",
    "Today",
    "Upcoming",
    "Completed",
    "Cancelled",
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((item) => (
        <button
          key={item}
          onClick={() => setFilter(item)}
          className={`px-4 py-3 rounded-lg text-sm font-medium transition ${
            filter === item
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-100"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;

