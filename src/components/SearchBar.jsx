import { Filter, Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="px-4 pt-4 pb-2 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 sticky top-0 z-20">
      <div className="relative flex items-center gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 rounded-full bg-white shadow-sm ring-1 ring-slate-200/70 px-4 py-3">
            <Search className="w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search products"
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 focus:outline-none"
            />
          </div>
        </div>
        <button className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full bg-sky-50 text-sky-600 ring-1 ring-sky-200 hover:bg-sky-100 transition">
          <Filter className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
