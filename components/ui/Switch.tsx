import { ReactNode } from "react";

interface SwitchProps {
  isOn: boolean;
  onToggle: () => void;
  iconOn?: ReactNode; // Icon when active
  iconOff?: ReactNode; // Icon when inactive
}

export function Switch({ isOn, onToggle, iconOn, iconOff }: SwitchProps) {
  return (
    <button
      onClick={onToggle}
      className={`
        relative w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        ${isOn ? "bg-slate-700" : "bg-sky-200"}
      `}
    >
      {/* Sliding Circle */}
      <div
        className={`
          bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-xs
          ${isOn ? "translate-x-8" : "translate-x-0"}
        `}
      >
        {/* Render the appropriate icon based on state */}
        <span className="text-gray-800">{isOn ? iconOn : iconOff}</span>
      </div>
    </button>
  );
}
