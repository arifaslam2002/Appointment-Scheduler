import { useState } from "react";
import Navbar from "./components/Navbar";
import DashboardStats from "./components/DashboardStats";
import AppointmentForm from "./components/AppointmentForm";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import AppointmentList from "./components/AppointmentList";

const App = () => {
  const [appointments, setAppointments] = useState([]);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
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
    const search = searchTerm.toLowerCase();

  return (
    appointment.name.toLowerCase().includes(search) ||
    appointment.email.toLowerCase().includes(search) ||
    appointment.phone.toString().includes(search)
  );
  });
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
          <SearchBar   searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}/>
          <FilterBar />
        </div>

        <AppointmentList
          appointments={filteredAppointments}
          deleteAppointment={deleteAppointment}
          editAppointment={setEditingAppointment}
        />
      </main>
    </div>
  );
};

export default App;
