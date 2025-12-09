
"use client";
import React from "react";
import DATA from "../data/productData";
import Link from "next/link";
import { Hospital, FlaskConical, PawPrint, GraduationCap, ArrowLeft, Filter, ListFilter, SortAsc, SortDesc } from "lucide-react";

const ICONS = {
  hospital: Hospital,
  laboratory: FlaskConical,
  veterinary: PawPrint,
  academic: GraduationCap,
};

import Image from "next/image";
import debounce from "../../utils/debounce";

const ProductCard = React.memo(function ProductCard({ name, sub, imageUrl }) {
  const hasImage = typeof imageUrl === "string" && imageUrl.trim() !== "";
  return (
    <div className={
      hasImage
        ? "rounded-xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition p-0 flex flex-col items-center overflow-hidden group"
        : "rounded-lg border border-[#dfddddad] bg-white shadow-sm hover:shadow-md transition p-4 flex flex-col items-center group"
    }>
      {hasImage && (
        <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
          <Image
            src={imageUrl}
            alt={name}
            width={220}
            height={165}
            className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
            style={{ maxHeight: 220, maxWidth: 320 }}
          />
        </div>
      )}
      <div className={hasImage ? "px-4 py-3 w-full flex flex-col items-center" : "font-semibold text-primary text-base mb-1 text-center"}>
        <div className="font-bold text-primary text-base mb-1 text-center group-hover:text-primary-dark transition">{name}</div>
        <div className="text-xs text-gray-500 text-center">{sub}</div>
      </div>
    </div>
  );
});

export default function Products() {

  const [activeCat, setActiveCat] = React.useState(DATA[0].key);
  const activeCategory = DATA.find((cat) => cat.key === activeCat);
  const [activeSub, setActiveSub] = React.useState("All");
  const [search, setSearch] = React.useState("");
  const [sort, setSort] = React.useState("name-asc");
  const [filter, setFilter] = React.useState("All");
  const searchRef = React.useRef(null);

  // Debounced search setter (stable reference)
  const debouncedSetSearch = React.useMemo(() => debounce((val) => setSearch(val), 300), []);

  React.useEffect(() => {
    setActiveSub("All");
    setFilter("All");
    setSearch("");
    setSort("name-asc");
  }, [activeCat]);

  // Memoized products to show (filters, search, sort)
  const productsToShow = React.useMemo(() => {
    const allProducts = activeCategory.subs.flatMap((sub) => sub.products.map(p => ({ ...p, sub: sub.name })));
    let filtered =
      activeSub === "All"
        ? allProducts
        : activeCategory.subs.find((sub) => sub.name === activeSub)?.products.map(p => ({ ...p, sub: activeSub })) || [];

    if (search.trim()) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (filter !== "All") {
      filtered = filtered.filter(p => p.sub === filter);
    }
    if (sort === "name-asc") {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "name-desc") {
      filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));
    }
    return filtered;
  }, [activeCategory, activeSub, search, filter, sort]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#f7fafd] to-[#eaf3fa] pt-8 pb-12">
      {/* Top bar: Back button left, filters/search right */}
      <div className="flex flex-row items-center justify-between px-4 mb-6 w-full">
        <div className="flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary font-semibold text-base border border-primary px-4 py-2 rounded-lg bg-white hover:bg-primary transition-colors duration-150 shadow-sm"
            style={{ textDecoration: 'none' }}
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          {/* Sort icons */}
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition cursor-pointer ${sort === 'name-asc' ? 'bg-secondary text-white' : 'bg-white text-secondary hover:bg-secondary'} font-semibold`}
            onClick={() => setSort('name-asc')}
          >
            <SortAsc size={20} />
            A-Z
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition cursor-pointer ${sort === 'name-desc' ? 'bg-secondary text-white' : 'bg-white text-secondary hover:bg-secondary'} font-semibold`}
            onClick={() => setSort('name-desc')}
          >
            <SortDesc size={20} />
            Z-A
          </button>
          <input
            type="text"
            placeholder="Search products..."
            defaultValue={search}
            onChange={e => debouncedSetSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-[180px] bg-white focus:outline-none focus:ring-2 focus:ring-primary transition text-base"
            ref={searchRef}
          />
          <button
            type="button"
            className="bg-gray-200 hover:bg-primary text-gray-700 font-semibold px-6 py-2 rounded-lg transition whitespace-nowrap cursor-pointer"
            onClick={() => {
              setSearch("");
              setFilter("All");
              setSort("name-asc");
              setActiveSub("All");
              if (searchRef.current) searchRef.current.value = "";
            }}
          >
            Reset
          </button>
        </div>
      </div>
      {/* Category Tabs */}
      <div className="flex flex-col md:flex-row gap-6 mb-6 px-4">
        {DATA.map((cat) => {
          const Icon = ICONS[cat.key];
          const isActive = cat.key === activeCat;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCat(cat.key)}
              className={`group flex-1 flex flex-col items-center justify-center p-6 rounded-xl shadow-md min-h-[120px] transition-colors duration-150 focus:outline-none border-2 ${isActive ? 'bg-primary text-white border-primary' : 'bg-secondary text-white border-white hover:bg-primary hover:text-white hover:border-primary'}`}
              style={{ cursor: 'pointer' }}
            >
              <div className="mb-2">
                {Icon && <Icon size={44} className={isActive ? "transition-colors duration-150" : "transition-colors duration-150 group-hover:text-white text-white"} />}
              </div>
              <div className={isActive ? "font-bold text-lg text-center tracking-wide" : "font-bold text-lg text-center tracking-wide transition-colors duration-150 group-hover:text-white text-white"}>{cat.label}</div>
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Subcategories list (left) */}
        <aside className="col-span-1 bg-primary rounded-xl p-6 text-white shadow-md">
          <div className="font-bold text-xl mb-6 tracking-wide">Subcategories</div>
          <ul className="space-y-2">
            <li key="All" className="">
              <button
                className={`w-full text-left px-4 py-2 rounded-lg text-base transition-colors font-semibold cursor-pointer ${activeSub === "All" ? 'bg-secondary text-white' : 'bg-primary hover:bg-primary-dark text-white'}`}
                onClick={() => setActiveSub("All")}
              >
                All
              </button>
            </li>
            {activeCategory.subs.map((sub) => (
              <li key={sub.name} className="">
                <button
                  className={`w-full text-left px-4 py-2 rounded-lg text-base transition-colors font-semibold cursor-pointer ${activeSub === sub.name ? 'bg-secondary text-white' : 'bg-primary hover:bg-primary-dark text-white'}`}
                  onClick={() => setActiveSub(sub.name)}
                >
                  {sub.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        {/* Products grid (right) */}
        <section className="col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {productsToShow.map((p) => (
              <ProductCard key={p.id} name={p.name} sub={activeSub === "All" ? p.sub || "" : activeSub} imageUrl={p.imageUrl} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
