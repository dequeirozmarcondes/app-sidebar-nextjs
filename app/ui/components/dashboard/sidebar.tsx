// app/ui/components/dashboard/Sidebar.tsx
import NavLinks from "./nav-links";

export default function Sidebar() {
  return (
    <div className="flex flex-col bg-gray-800 h-screen p-4 w-64 text-white">
      <h2 className="text-lg font-bold">Meu Painel</h2>
      <NavLinks />
    </div>
  );
}
