
import { cn } from '../lib/utils';

type Status = 'Stable' | 'Underpaid' | 'Overpaid';

interface ItemCardProps {
  name: string;
  category: string;
  status: Status;
  imageUrl: string;
  value: number;
  demand: string;
  physicalValue?: string;
}

export function ItemCard({ name, category, status, imageUrl, value, demand, physicalValue = 'Physical Value' }: ItemCardProps) {
  const statusColors = {
    Stable: 'bg-green-600',
    Underpaid: 'bg-red-600',
    Overpaid: 'bg-yellow-600',
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-gray-400 text-sm">{category}</span>
            <h3 className="text-white text-xl font-semibold">{name}</h3>
          </div>
          <span className={cn('px-2 py-1 rounded text-xs text-white', statusColors[status])}>
            {status}
          </span>
        </div>
        
        <div className="flex justify-center my-4">
          <div className="w-32 h-32 flex items-center justify-center">
            <img src={imageUrl} alt={name} className="max-w-full max-h-full" />
          </div>
        </div>

        <div className="flex justify-between text-white mb-2">
          <div>
            <div className="text-gray-400 text-sm">Value</div>
            <div className="font-semibold">{value.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-gray-400 text-sm">Demand</div>
            <div className="font-semibold">{demand}/10</div>
          </div>
          <button className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>

        <select className="w-full bg-gray-700 text-white rounded px-3 py-2 mt-2">
          <option>{physicalValue}</option>
        </select>
      </div>
    </div>
  );
}