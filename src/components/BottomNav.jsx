import { Heart, Home, LayoutGrid, ShoppingCart, User } from "lucide-react";
import { useState } from "react";

const items = [
  { label: "Home", icon: Home },
  { label: "Categories", icon: LayoutGrid },
  { label: "Cart", icon: ShoppingCart },
  { label: "Wishlist", icon: Heart },
  { label: "Profile", icon: User },
];

export default function BottomNav() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-md rounded-2xl bg-white/90 backdrop-blur ring-1 ring-slate-200/70 shadow-lg p-2 z-30">
      <ul className="grid grid-cols-5">
        {items.map(({ label, icon: Icon }) => {
          const selected = active === label;
          return (
            <li key={label}>
              <button
                onClick={() => setActive(label)}
                className={`group w-full flex flex-col items-center gap-1 py-2 rounded-xl transition ${
                  selected ? "text-sky-600" : "text-slate-500"
                }`}
              >
                <div
                  className={`w-10 h-10 inline-flex items-center justify-center rounded-xl transition ring-1 ${
                    selected
                      ? "bg-sky-50 ring-sky-200"
                      : "bg-white ring-slate-200"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition ${
                      selected ? "fill-sky-600/10" : ""
                    }`}
                  />
                </div>
                <span className="text-[11px]">{label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
