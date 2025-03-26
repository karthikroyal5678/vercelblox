
import { FaStar} from "react-icons/fa";

const items = [
  {
    name: "Gravity",
    category: "Mythical",
    status: "Stable",
    icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FGravity_Icon.webp&w=256&q=75" alt="Gravity" className="h-24 w-24 mx-auto" />, 
    value: 2000000,
    demand: "1/10",
  },
  {
    name: "Shadow",
    category: "Mythical",
    status: "Stable",
    icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FShadow_Icon.webp&w=256&q=75" alt="Shadow" className="h-24 w-24 mx-auto" />, 
    value: 6500000,
    demand: "6/10",
  },
  {
    name: "Venom",
    category: "Mythical",
    status: "Stable",
    icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FVenom_Icon.webp&w=256&q=75" alt="Venom" className="h-24 w-24 mx-auto" />, 
    value: 8000000,
    demand: "7/10",
  },
  {
    name: "Mammoth",
    category: "Mythical",
    status: "Stable",
    icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FMammoth_Icon.webp&w=256&q=75" alt="Mammoth" className="h-24 w-24 mx-auto" />, 
    value: 8000000,
    demand: "6/10",
  },
  {
    name: "Spirit",
    category: "Mythical",
    status: "Stable",
    icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FSpirit_Icon.webp&w=256&q=75" alt="Spirit" className="h-24 w-24 mx-auto" />, 
    value: 10000000,
    demand: "7/10",
  },
  {
    name: "T-Rex",
    category: "Mythical",
    status: "Stable",
    icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FT-Rex_Icon.webp&w=256&q=75" alt="T-Rex" className="h-24 w-24 mx-auto" />, 
    value: 20000000,
    demand: "8/10",
  },

  {
    name: "Dough",
    category: "Mythical",
    status: "Stable",
    icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FDough_Icon.webp&w=256&q=75" alt="T-Rex" className="h-24 w-24 mx-auto" />, 
    value: 20000000,
    demand: "8/10",
  },
  {
    name: "Control",
    category: "Mythical",
    status: "Stable",
    icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FControl_Icon.webp&w=256&q=75" alt="T-Rex" className="h-24 w-24 mx-auto" />, 
    value: 40000000,
    demand: "8/10",
  },
  {
    name: "Leopard",
    category: "Mythical",
    status: "Stable",
    icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FLeopard_Icon.webp&w=256&q=75" alt="T-Rex" className="h-24 w-24 mx-auto" />, 
    value: 55000000,
    demand: "8/10",
  },
  {
    name: "Gas",
    category: "Mythical",
    status: "Stable",
    icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FGas_Icon.webp&w=256&q=75" alt="T-Rex" className="h-24 w-24 mx-auto" />, 
    value: 85000000,
    demand: "8/10",
  },
  {
    name: "Yeti",
    category: "Mythical",
    status: "Stable",
    icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FYeti_Icon.webp&w=256&q=75" alt="T-Rex" className="h-24 w-24 mx-auto" />, 
    value: 140000000,
    demand: "8/10",
  },
  {
    name: "Kitsune",
    category: "Mythical",
    status: "Stable",
    icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FKitsune_Icon.webp&w=256&q=75" alt="T-Rex" className="h-24 w-24 mx-auto" />, 
    value: 215000000,
    demand: "8/10",
  },
  {
    name: "East Dragon",
    category: "Mythical",
    status: "Stable",
    icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FEast%20Dragon_Icon.webp&w=256&q=75" alt="East Dragon" className="h-24 w-24 mx-auto" />, 
    value: 860000000,
    demand: "10/10",
  },
  {
    name: "West Dragon",
    category: "Mythical",
    status: "Stable",
    icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FWest%20Dragon_Icon.webp&w=256&q=75" alt="West Dragon" className="h-24 w-24 mx-auto" />, 
    value: 1000000000,
    demand: "10/10",
  },
];

export function MythicalPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-white mb-6">Mythical Items</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.name} className="bg-gray-900 p-4 rounded-lg shadow-lg relative">
            {/* Status Indicator */}
            <span className="absolute top-2 right-2 text-green-500 text-xs font-bold">
              🟢 {item.status}
            </span>

            {/* Item Icon */}
            <div className="flex justify-center mt-2">{item.icon}</div>

            {/* Item Name */}
            <h2 className="text-xl font-bold text-white mt-4">{item.name}</h2>

            {/* Value & Demand */}
            <p className="text-gray-400 text-xl text-white">Value: {item.value.toLocaleString()}</p>
            <p className="text-gray-400">Demand: {item.demand}</p>

            {/* Dropdown for Value Type */}
            <select className="mt-2 w-full bg-gray-800 text-white p-2 rounded">
              <option>Physical Value</option>
              <option>Trade Value</option>
            </select>

            {/* Favorite Button */}
            <button className="absolute bottom-2 right-2 text-gray-400 hover:text-yellow-400">
              <FaStar />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
