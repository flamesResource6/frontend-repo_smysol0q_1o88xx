import { Backpack, Camera, Home, MonitorSmartphone, Sparkles } from "lucide-react";

const categories = [
  { name: "Fashion", icon: Backpack },
  { name: "Electronics", icon: MonitorSmartphone },
  { name: "Home Decor", icon: Home },
  { name: "Beauty", icon: Sparkles },
  { name: "Accessories", icon: Camera },
];

export default function CategoriesRow() {
  return (
    <div className="px-4 py-3 overflow-x-auto no-scrollbar">
      <div className="flex gap-4 min-w-max">
        {categories.map(({ name, icon: Icon }) => (
          <button
            key={name}
            className="inline-flex flex-col items-center justify-center gap-2 rounded-2xl bg-white ring-1 ring-slate-200/70 shadow-sm px-4 py-3 hover:shadow transition"
          >
            <div className="w-11 h-11 rounded-full bg-sky-50 text-sky-600 inline-flex items-center justify-center">
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-xs text-slate-600 whitespace-nowrap">{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
