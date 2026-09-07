import AppointmentCard from "./AppointmentCard";

const AppointmentList = ({
  appointments,
  deleteAppointment,
  editAppointment,
  updateStatus,
}) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Appointments</h2>

      {appointments.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-10 text-center">
          <p className="text-gray-500">No appointments found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {appointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              deleteAppointment={deleteAppointment}
              editAppointment={editAppointment}
              updateStatus={updateStatus}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentList;
