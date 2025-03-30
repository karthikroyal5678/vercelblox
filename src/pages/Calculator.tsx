
import { TradeCalculator } from '../components/TradeCalculator';
import GoogleAd from '../components/GoogleAd'; // Ensure it's inside `components`
export function CalculatorPage() {
  const adSlots = [
    "1234567894", "1234567895", "1234567896", "1234567897",
    "1234567898", "1234567899", "1234567800", "1234567801",
    "1234567802", "1234567803", "1234567804", "1234567805",
    "1234567806", "1234567807", "1234567808", "1234567809",
    "1234567810", "1234567811", "1234567812", "1234567813"
  ];
  return (
    
    <div className="container mx-auto px-4">
      
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Trade Calculator</h1>
        <TradeCalculator />
        
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">How to Use</h2>
            <ul className="text-gray-300 space-y-2">
              <li>1. Click the + button to add items to either side</li>
              <li>2. Select items from your inventory or search for specific items</li>
              <li>3. The calculator will automatically compute values and price differences</li>
              <li>4. Green indicates a fair trade, yellow means slightly uneven, red means significantly uneven</li>
            </ul>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Trading Tips</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Always verify the items in the trade window match the calculator</li>
              <li>• Consider demand ratings alongside pure value</li>
              <li>• Be cautious of trades that seem too good to be true</li>
              <li>• Take your time to double-check everything before confirming</li>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-8">
            {adSlots.map((slot, index) => (
              <GoogleAd key={index} adSlot={slot} width={120} height={120} />
         ))}
      </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
