import { useState } from "react";

const AppointmentForm = ({ addAppointment }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addAppointment(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      service: "",
      notes: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Add New Appointment
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Service */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service
          </label>

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select service</option>
            <option value="Consultation">Consultation</option>
            <option value="Checkup">Checkup</option>
            <option value="Follow-up">Follow-up</option>
            <option value="General Appointment">General Appointment</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date
          </label>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Time
          </label>

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Notes */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Notes
          </label>

          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Add any additional notes..."
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          + Add Appointment
        </button>
      </div>
    </form>
  );
};

export default AppointmentForm;
