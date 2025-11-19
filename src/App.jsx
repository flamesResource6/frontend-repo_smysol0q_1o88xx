import SearchBar from "./components/SearchBar";
import CategoriesRow from "./components/CategoriesRow";
import HeroCarousel from "./components/HeroCarousel";
import ProductGrid from "./components/ProductGrid";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <div className="mx-auto max-w-md min-h-screen relative">
        <SearchBar />
        <div className="space-y-3">
          <CategoriesRow />
          <div className="px-4">
            <HeroCarousel />
          </div>
          <ProductGrid />
        </div>
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
