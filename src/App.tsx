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
// Removed unused import for sitemapChecker
const HomePage = () => {
  return (
    <div className="text-center py-10 px-4">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">The Most Trusted Value List for Blox Fruits</h2>
      <p className="text-lg sm:text-xl mt-2">NEW! Check out our trade calculator!</p>

      {/* Insert Google Ad Here */}
      <div className="my-8">
        <GoogleAd adSlot="6712580132" />
      </div>

      {/* Trade Calculator Section */}
      <div className="container mx-auto px-4 mt-16">
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
            <Route path="/sitemap-checker" element={<HomePage />} />
            <Route path="/sitemap-checker/common" element={<CommonPage />} />
            <Route path="/sitemap-checker/uncommon" element={<UncommonPage />} />
            <Route path="/sitemap-checker/rare" element={<RarePage />} />
            <Route path="/sitemap-checker/legendary" element={<LegendaryPage />} />
            <Route path="/sitemap-checker/mythical" element={<MythicalPage />} />
            <Route path="/sitemap-checker/gamepass" element={<GamepassPage />} />
            <Route path="/sitemap-checker/limited" element={<LimitedPage />} />
            <Route path="/sitemap-checker/calculator" element={<CalculatorPage />} />
            <Route path="/sitemap-checker/login" element={<LoginPage />} />
            <Route path="/sitemap-checker/register" element={<RegisterPage />} />
            <Route path="/sitemap-checker/faq" element={<FAQPage />} />
            <Route path="/sitemap-checker/guide" element={<UsageGuidePage />} />
            <Route path="/sitemap-checker/donate" element={<DonatePage />} />
            <Route path="/sitemap-checker/trade-calculator" element={<TradeCalculator />} />
            <Route path="/sitemap-checker/google-ad" element={<GoogleAd adSlot="6712580132" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
