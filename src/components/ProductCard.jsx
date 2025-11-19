import { Star } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="rounded-2xl bg-white ring-1 ring-slate-200/70 shadow-sm p-3 flex flex-col">
      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="mt-3 space-y-1">
        <h4 className="text-slate-800 font-medium truncate">{product.name}</h4>
        <div className="flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < product.rating ? 'fill-amber-400 stroke-amber-400' : 'stroke-amber-300'}`} />
          ))}
          <span className="text-xs text-slate-500 ml-1">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-slate-900 font-semibold">${product.price}</span>
          <button className="px-3 py-1.5 rounded-full bg-sky-500 text-white text-sm hover:bg-sky-600 transition">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
