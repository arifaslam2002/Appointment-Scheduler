const Navbar = () => {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          📅 Appointment Scheduler
        </h1>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          + New Appointment
        </button>
      </div>
    </nav>
  );
};

export default Navbar;