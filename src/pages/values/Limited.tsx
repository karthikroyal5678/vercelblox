import { FaStar} from "react-icons/fa";
  const items = [
    {
      name: "Dragon Token",
      category: "Limited",
      status: "Overpaid",
      icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FDragon%20Token_Icon.webp&w=256&q=75" alt="Rocket" className="h-24 w-24 mx-auto" />, 
      value: 450000000,
      demand: "10/10",
    },
    {
      name: "Permanent Dragon Token",
      category: "Limited",
      status: "Overpaid",
      icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FPermanent%20Dragon%20Token_Icon.webp&w=256&q=75" alt="Rocket" className="h-24 w-24 mx-auto" />, 
      value: 1000000000,
      demand: "10/10",
    },
    {
      name: "Chromatic Skin",
      category: "Limited",
      status: "Overpaid",
      icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FChromatic%20Skin_Icon.webp&w=256&q=75" alt="Rocket" className="h-24 w-24 mx-auto" />, 
      value: 1950000000,
      demand: "10/10",
    },
  ];
  
  export function LimitedPage() {
    return (
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-white mb-6">Limited Items</h1>
  
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
  