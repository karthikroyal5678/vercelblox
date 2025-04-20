import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { CommonPage } from './pages/values/Common';
import { UncommonPage } from './pages/values/Uncommon';
import { RarePage } from './pages/values/Rare';
import { LegendaryPage } from './pages/values/Legendary';
import { MythicalPage } from './pages/values/Mythical';
import { GamepassPage } from './pages/values/Gamepass';
import { LimitedPage } from './pages/values/Limited';
import { CalculatorPage } from './pages/Calculator';
import { LoginPage } from './pages/auth/Login';
import { RegisterPage } from './pages/auth/Register';
import { ForgotPasswordPage } from './pages/auth/ForgotPassword';
import { FAQPage } from './pages/information/FAQ';
import { UsageGuidePage } from './pages/information/UsageGuide';
import { DonatePage } from './pages/Donate';
import { TradeCalculator } from './components/TradeCalculator';
import GoogleAd from "./pages/values/GoogleAd";


const HomePage = () => {
  return (
    <div className="text-center py-10 px-4">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">The Most Trusted Value List for Blox Fruits</h2>
      <p className="text-lg sm:text-xl mt-2">NEW! Check out our trade calculator!</p>


      {/* Trade Calculator Section */}
      <div className="container mx-auto px-4 mt-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Trade Calculator</h1>
          <TradeCalculator />
                {/* Insert Google Ad Here */}
          <div className="my-8">
            <GoogleAd adSlot="6712580132" />
          </div>
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
              </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/values/common" element={<CommonPage />} />
            <Route path="/values/uncommon" element={<UncommonPage />} />
            <Route path="/values/rare" element={<RarePage />} />
            <Route path="/values/legendary" element={<LegendaryPage />} />
            <Route path="/values/mythical" element={<MythicalPage />} />
            <Route path="/values/gamepass" element={<GamepassPage />} />
            <Route path="/values/limited" element={<LimitedPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/guide" element={<UsageGuidePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/donate" element={<DonatePage />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
