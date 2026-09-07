const DashboardStats = ({ appointments }) => {
  const total = appointments.length;

  const today = new Date();

  const todayString = `${today.getFullYear()}-${String(
    today.getMonth() + 1,
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  const todayCount = appointments.filter(
    (appointment) => appointment.date === todayString,
  ).length;

  const upcomingCount = appointments.filter(
    (appointment) => appointment.status === "Upcoming",
  ).length;

  const completedCount = appointments.filter(
    (appointment) => appointment.status === "Completed",
  ).length;

  const cancelledCount = appointments.filter(
    (appointment) => appointment.status === "Cancelled",
  ).length;

  const stats = [
    {
      title: "Total",
      value: total,
    },
    {
      title: "Today",
      value: todayCount,
    },
    {
      title: "Upcoming",
      value: upcomingCount,
    },
    {
      title: "Completed",
      value: completedCount,
    },
    {
      title: "Cancelled",
      value: cancelledCount,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-5"
        >
          <p className="text-sm text-gray-500">{stat.title}</p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            {stat.value}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
