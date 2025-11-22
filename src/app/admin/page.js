
export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-primary-100">
      {/* Sidebar */}
      <aside className="w-64 bg-tertiary flex flex-col shadow-lg">
        <div className="h-16 flex items-center justify-center border-b border-white/10 text-2xl font-bold text-white tracking-wide">
          Admin
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <span className="block px-4 py-2 rounded text-white hover:bg-primary/20 font-medium transition cursor-pointer">Hero Section</span>
          <span className="block px-4 py-2 rounded text-white/80 hover:bg-primary/20 font-medium transition cursor-pointer">Second Section</span>
        </nav>
        <div className="p-4 border-t border-white/10 text-xs text-white/40">&copy; 2025 Salmon Medic</div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b border-primary/10 flex items-center px-8 justify-between shadow-sm">
          <h1 className="text-xl font-semibold text-tertiary">Dashboard Overview</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-primary font-medium">Admin User</span>
            <img src="https://ui-avatars.com/api/?name=Admin&background=00718b&color=fff" alt="Admin Avatar" className="w-8 h-8 rounded-full border border-primary" />
          </div>
        </header>

        {/* Dashboard Widgets */}
        <main className="flex-1 p-8 bg-primary-100">
          
        </main>
      </div>
    </div>
  );
}
