import { useState } from "react";
import Navbar from "./components/Navbar"
import DashboardStats from "./components/DashboardStats";
import AppointmentForm from "./components/AppointmentForm";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import AppointmentList from "./components/AppointmentList";
const App = () => {
   const [appointments, setAppointments] = useState([]);
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
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
            <main className="max-w-7xl mx-auto p-6">
        <DashboardStats appointments={appointments} />

        <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
          <AppointmentForm addAppointment={addAppointment} />
        </div>

        <div className="flex gap-4 mt-6">
          <SearchBar />
          <FilterBar />
        </div>

        <AppointmentList appointments={appointments} />
      </main>
    </div>
  )
}

export default App