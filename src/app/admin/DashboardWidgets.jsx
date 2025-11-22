export default function DashboardWidgets() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start border-l-4 border-primary">
        <span className="text-xs text-primary mb-1 font-semibold">Users</span>
        <span className="text-2xl font-bold text-tertiary">1,245</span>
        <span className="text-xs text-green-600 mt-2 font-medium">+5% this month</span>
      </div>
      <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start border-l-4 border-secondary">
        <span className="text-xs text-secondary mb-1 font-semibold">Orders</span>
        <span className="text-2xl font-bold text-tertiary">320</span>
        <span className="text-xs text-green-600 mt-2 font-medium">+2% this month</span>
      </div>
      <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start border-l-4 border-tertiary">
        <span className="text-xs text-tertiary mb-1 font-semibold">Revenue</span>
        <span className="text-2xl font-bold text-tertiary">$12,400</span>
        <span className="text-xs text-green-600 mt-2 font-medium">+8% this month</span>
      </div>
    </div>
  );
}
