import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Minimal Sneakers",
    image:
      "https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=1200&auto=format&fit=crop",
    rating: 5,
    reviews: 214,
    price: 129,
  },
  {
    id: 2,
    name: "Noise-Cancel Headphones",
    image:
      "https://images.unsplash.com/photo-1518443760066-4ad2b9cdddf5?q=80&w=1200&auto=format&fit=crop",
    rating: 4,
    reviews: 98,
    price: 199,
  },
  {
    id: 3,
    name: "Ceramic Vase",
    image:
      "https://images.unsplash.com/photo-1523419409543-a5e549c1da6b?q=80&w=1200&auto=format&fit=crop",
    rating: 5,
    reviews: 62,
    price: 39,
  },
  {
    id: 4,
    name: "Smart Watch",
    image:
      "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=1200&auto=format&fit=crop",
    rating: 4,
    reviews: 321,
    price: 249,
  },
  {
    id: 5,
    name: "Leather Backpack",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop",
    rating: 4,
    reviews: 77,
    price: 149,
  },
  {
    id: 6,
    name: "Table Lamp",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
    rating: 5,
    reviews: 48,
    price: 59,
  },
];

export default function ProductGrid() {
  return (
    <div className="px-4 pb-24">
      <div className="grid grid-cols-2 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
