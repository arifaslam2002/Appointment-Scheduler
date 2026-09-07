import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import DashboardStats from "./components/DashboardStats";
import AppointmentForm from "./components/AppointmentForm";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import AppointmentList from "./components/AppointmentList";

const App = () => {
  const [appointments, setAppointments] = useState(() => {
    const savedAppointments = localStorage.getItem("appointments");
    return savedAppointments ? JSON.parse(savedAppointments) : [];
  });
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  // Add appointment
  const addAppointment = (appointment) => {
    setAppointments((previous) => [
      ...previous,
      {
        ...appointment,
        id: Date.now(),
        status: "Upcoming",
      },
    ]);
  };

  // Delete appointment
  const deleteAppointment = (id) => {
    setAppointments((previous) =>
      previous.filter((appointment) => appointment.id !== id),
    );
  };

  // Edit appointment
  const editAppointment = (updatedAppointment) => {
    setAppointments((previous) =>
      previous.map((appointment) =>
        appointment.id === updatedAppointment.id
          ? updatedAppointment
          : appointment,
      ),
    );

    // Exit edit mode
    setEditingAppointment(null);
  };

  const filteredAppointments = appointments.filter((appointment) => {
    // Search
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      appointment.name.toLowerCase().includes(search) ||
      appointment.email.toLowerCase().includes(search) ||
      appointment.phone.toString().includes(search);

    if (!matchesSearch) {
      return false;
    }

    // Filter
    if (filter === "All") {
      return true;
    }

    if (filter === "Today") {
      const today = new Date();

      const todayString = `${today.getFullYear()}-${String(
        today.getMonth() + 1,
      ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

      return appointment.date === todayString;
    }

    return appointment.status === filter;
  });

  const updateStatus = (id, newStatus) => {
    setAppointments((previous) =>
      previous.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: newStatus }
          : appointment,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-7xl mx-auto p-6">
        <DashboardStats appointments={appointments} />

        <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
          <AppointmentForm
            addAppointment={addAppointment}
            editAppointment={editAppointment}
            editingAppointment={editingAppointment}
            setEditingAppointment={setEditingAppointment}
          />
        </div>

        <div className="flex gap-4 mt-6">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterBar filter={filter} setFilter={setFilter} />
        </div>

        <AppointmentList
          appointments={filteredAppointments}
          deleteAppointment={deleteAppointment}
          editAppointment={setEditingAppointment}
          updateStatus={updateStatus}
        />
      </main>
    </div>
  );
};

export default App;
