"use client";

//Price Range Slider in sidebar
import { Range } from "react-range";

//context imports
import { useFilters } from "@/context/FilterContext";

//placed outside component for performance optimization(to prevent unnecessary re-renders)
const categories = ["All", "Electronics", "Clothing", "Home"];

export default function Sidebar() {
  const { urlFilters, updateUrlFilters } = useFilters();

  const ABS_MIN = 0;
  const ABS_MAX = 1000;

  const handleCategoryChange = (e) => {
    updateUrlFilters({
      category: e.target.value,
    });
  };

  const handlePriceChange = (values) => {
    updateUrlFilters({ price: `${values[0]}-${values[1]}` });
  };

  return (
    <div className="bg-[#005cbf] text-white px-4 py-6 rounded-xl space-y-6 text-sm w-full max-w-[220px] mx-auto">
      <h2 className="text-lg font-semibold">Filters</h2>
      {/* Category Filter */}
      <div>
        <h3 className="mb-3 font-medium">Category</h3>
        <ul className="space-y-3">
          {categories.map((cat) => (
            <li key={cat}>
              <label className="flex items-center space-x-3 cursor-pointer">
                <span
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    urlFilters.category === cat
                      ? "border-white"
                      : "border-white/40"
                  }`}
                ></span>
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={urlFilters.category === cat}
                  onChange={handleCategoryChange}
                  className="hidden"
                ></input>
                <span className="text-sm">{cat}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range Slider */}
      <div>
        <h3 className="mb-3 font-medium">Price</h3>
        <Range
          step={50}
          min={ABS_MIN}
          max={ABS_MAX}
          values={[urlFilters.minPrice, urlFilters.maxPrice]}
          onChange={handlePriceChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="h-1 bg-white/40 rounded-full"
              style={{ ...props.style }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => {
            const { key, ...restProps } = props;

            return (
              <div
                key={key}
                {...restProps}
                className="w-4 h-4 bg-white border-2 border-white rounded-full shadow"
              ></div>
            );
          }}
        ></Range>
        <div className="flex justify-between text-xs text-white mt-2">
          <span>${urlFilters.minPrice}</span>
          <span>${urlFilters.maxPrice}</span>
        </div>
      </div>
    </div>
  );
}
