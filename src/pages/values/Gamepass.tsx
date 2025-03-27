import { FaStar} from "react-icons/fa";
  const items = [
    {
      name: "Fast Boats",
      category: "UnCommon",
      status: "Stable",
      icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FFast%20Boats_Icon.webp&w=256&q=75" alt="Rocket" className="h-24 w-24 mx-auto" />, // Updated to use uploaded image
      value: 1000000,
      demand: "1/10",
    },
    {
      name: "2x Boss Drops",
      category: "Underpaid",
      status: "Stable",
      icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2F2x%20Boss%20Drops_Icon.webp&w=256&q=75" alt="Rocket" className="h-24 w-24 mx-auto" />, 
      value: 1500000,
      demand: "1/10",
    },
    {
      name: "2x Money",
      category: "UnCommon",
      status: "Stable",
      icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2F2x%20Money_Icon.webp&w=256&q=75" alt="Rocket" className="h-24 w-24 mx-auto" />, 
      value: 1500000,
      demand: "1/10",
    },
    {
      name: "2x Mastery",
      category: "Underpaid",
      status: "Stable",
      icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2F2x%20Mastery_Icon.webp&w=256&q=75" alt="Rocket" className="h-24 w-24 mx-auto" />, 
      value: 2000000,
      demand: "1/10",
    },
    {
      name: "+1 Fruit Storage",
      category: "Overpaid",
      status: "Stable",
      icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2F%2B1%20Fruit%20Storage_Icon.webp&w=256&q=75" alt="Rocket" className="h-24 w-24 mx-auto" />, 
      value: 2500000,
      demand: "4/10",
    },
    {
      name: "Legendary Scrolls",
      category: "UnCommon",
      status: "Stable",
      icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FLegendary%20Scrolls_Icon.webp&w=256&q=75" alt="Rocket" className="h-24 w-24 mx-auto" />, // Updated to use uploaded image
      value: 2750000,
      demand: "4/10",
    },
    {
      name: "Dark Blade",
      category: "Underpaid",
      status: "Stable",
      icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FDark%20Blade_Icon.webp&w=256&q=75" alt="Rocket" className="h-24 w-24 mx-auto" />, 
      value: 5000000,
      demand: "6/10",
    },
    {
      name: "Mythical Scrolls",
      category: "UnCommon",
      status: "Stable",
      icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FLegendary%2FRumble_Icon.webp&w=256&q=75" alt="Rocket" className="h-24 w-24 mx-auto" />, 
      value: 7000000,
      demand: "7/10",
    },
    {
      name: "Fruit Notifier",
      category: "Underpaid",
      status: "Stable",
      icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FFruit%20Notifier_Icon.webp&w=256&q=75" alt="Rocket" className="h-24 w-24 mx-auto" />, 
      value: 11000000,
      demand: "10/10",
    },
  ];
  
  export function GamepassPage() {
    return (
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-white mb-6">Gamepass</h1>
  
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
  
