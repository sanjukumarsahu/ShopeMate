import React from "react";

const Category = ({ selected, onChange }) => {
  return (
    <div className="p-4">
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value.toLowerCase())}
        className="px-12 py-2 rounded-md border border-gray-400 text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="">All</option>
        <option value="women">Woman</option>
        <option value="men">Man</option>
      </select>
    </div>
  );
};

export default Category;
