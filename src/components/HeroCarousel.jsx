import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1542293787938-c9e299b88054?q=80&w=1200&auto=format&fit=crop",
    tag: "-30%",
    title: "Premium Sneakers",
    subtitle: "Lightweight comfort with modern style",
    accent: "sky",
  },
  {
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    tag: "Bundle",
    title: "Smart Electronics",
    subtitle: "Upgrade your everyday essentials",
    accent: "amber",
  },
  {
    img: "https://images.unsplash.com/photo-1500043331707-06b19b1776de?q=80&w=1200&auto=format&fit=crop",
    tag: "New",
    title: "Home Decor",
    subtitle: "Textured ceramics and warm finishes",
    accent: "rose",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);

  const slide = slides[index];

  return (
    <div className="relative">
      <div className="relative h-56 w-full overflow-hidden rounded-3xl">
        <div className="absolute inset-0"><Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} /></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative h-full w-full"
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="absolute inset-0 h-full w-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-white/20 to-transparent" />
            <div className="absolute left-4 bottom-4 right-4 flex items-end justify-between gap-3">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-${slide.accent}-100 text-${slide.accent}-700 ring-1 ring-${slide.accent}-200`}>{slide.tag}</span>
                <h3 className="text-slate-900 text-lg font-semibold mt-2">{slide.title}</h3>
                <p className="text-slate-600 text-sm">{slide.subtitle}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
