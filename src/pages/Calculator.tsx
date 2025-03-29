import { TradeCalculator } from '../components/TradeCalculator';

export function CalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Trade Calculator</h1>
      </div>

      <div className="flex justify-center">
        <TradeCalculator />
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-white mb-4">How to Use</h2>
          <ul className="text-gray-300 space-y-2 list-disc pl-5">
            <li>Click the + button to add items to either side</li>
            <li>Select items from your inventory or search for specific items</li>
            <li>The calculator will automatically compute values and price differences</li>
            <li>
              <span className="text-green-400">Green</span> = Fair trade,{' '}
              <span className="text-yellow-400">Yellow</span> = Slightly uneven,{' '}
              <span className="text-red-400">Red</span> = Significantly uneven
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-white mb-4">Trading Tips</h2>
          <ul className="text-gray-300 space-y-2 list-disc pl-5">
            <li>Always verify the items in the trade window match the calculator</li>
            <li>Consider demand ratings alongside pure value</li>
            <li>Be cautious of trades that seem too good to be true</li>
            <li>Take your time to double-check everything before confirming</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
