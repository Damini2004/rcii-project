import React from "react";

function UserDashboard() {
  return (
    <div className="min-h-screen bg-[#f5f6fb] p-6 text-[#071044]">
      <div className="mx-auto max-w-4xl rounded-[20px] bg-white p-8 shadow-[0_22px_70px_rgba(16,24,40,0.08)]">
        <h1 className="text-[28px] font-bold">User Dashboard</h1>
        <p className="mt-4 text-[15px] text-[#5a6178]">
          Welcome to your dashboard. This area is available to all authenticated users.
        </p>
      </div>
    </div>
  );
}

export default UserDashboard;
