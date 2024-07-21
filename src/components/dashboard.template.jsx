import React from "react";
import { Home2 } from "solar-icon-set/essentionalui";
import { Paper } from "solar-icon-set/notes";
import { Diploma } from "solar-icon-set/school";
import { VideoLibrary } from "solar-icon-set/videoaudiosound";

export const DashboardTemplate = ({ children }) => {
  return (
    <div className="flex h-screen">
      <aside className="w[230px] bg-slate-50 border-r p-2">
        <div className="p-4 font-bold tracking-tight">
          Learning Management System
        </div>
        <section>
          <Menu label="Dashboard" icon={<Home2 />} />
          <Menu label="Courses" icon={<VideoLibrary />} />
          <Menu label="Billing" icon={<Paper />} />
          <Menu label="Settings" icon={<Diploma />} />
        </section>
      </aside>
      <main className="w-[calc(100%-230px)] p-8">
        <div className="max-w-3xl m-auto">{children}</div>
      </main>
    </div>
  );
};

const Menu = ({ label, icon }) => {
  return (
    <div className="bg-transparent hover:bg-indigo-600 text-sm font-medium hover:text-white px-3 py-2 rounded-lg flex gap-2 items-center">
      {icon}
      <div>{label}</div>
    </div>
  );
};
