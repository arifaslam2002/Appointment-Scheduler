const AppointmentCard = ({
  appointment,
  editAppointment,
  deleteAppointment,
  updateStatus,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800">
            {appointment.name}
          </h3>

          <p className="text-sm text-gray-500">{appointment.email}</p>
        </div>

        <span
          className={`px-3 py-1 text-sm rounded-full ${
            appointment.status === "Upcoming"
              ? "bg-blue-100 text-blue-700"
              : appointment.status === "Completed"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
          }`}
        >
          {appointment.status}
        </span>
      </div>

      {/* Appointment details */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-400">Phone</p>
          <p className="font-medium text-gray-700">{appointment.phone}</p>
        </div>

        <div>
          <p className="text-gray-400">Service</p>
          <p className="font-medium text-gray-700">{appointment.service}</p>
        </div>

        <div>
          <p className="text-gray-400">Date</p>
          <p className="font-medium text-gray-700">{appointment.date}</p>
        </div>

        <div>
          <p className="text-gray-400">Time</p>
          <p className="font-medium text-gray-700">{appointment.time}</p>
        </div>
      </div>

      {/* Notes */}
      {appointment.notes && (
        <div className="mt-4 pt-4 border-t">
          <p className="text-gray-400 text-sm">Notes</p>

          <p className="text-gray-600 text-sm mt-1">{appointment.notes}</p>
        </div>
      )}

      {/* Status Actions */}
      <div className="flex gap-2 mt-5">
        <button
          onClick={() => updateStatus(appointment.id, "Completed")}
          disabled={appointment.status === "Completed"}
          className="flex-1 px-3 py-2 text-sm rounded-lg border border-green-300 text-green-600 hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ✓ Completed
        </button>

        <button
          onClick={() => updateStatus(appointment.id, "Cancelled")}
          disabled={appointment.status === "Cancelled"}
          className="flex-1 px-3 py-2 text-sm rounded-lg border border-red-300 text-red-600 hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ✕ Cancelled
        </button>
      </div>

      {/* Edit / Delete */}
      <div className="flex justify-end gap-2 mt-3 pt-4 border-t">
        <button
          onClick={() => editAppointment(appointment)}
          className="px-4 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-100"
        >
          Edit
        </button>

        <button
          onClick={() => deleteAppointment(appointment.id)}
          className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
