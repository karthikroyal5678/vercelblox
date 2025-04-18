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

      {/* Insert Google Ad Here */}
      <div className="my-8">
        
      </div>

      {/* Trade Calculator Section */}
      <div className="container mx-auto px-4 mt-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Trade Calculator</h1>
          <TradeCalculator />
          <h1>Blox Fruits Values [2025] – Ultimate Trading Resource</h1>
          <h2>Blox Fruits Values 2025: Updated Tier List</h2>
          <h3>Blox Fruits Trading Guide and Value Calculator</h3>


      <h3><p>Welcome to the #1 resource for <strong>Blox Fruits Values</strong> in 2025! Our site provides the most accurate <strong>Blox Fruits Values</strong> list, updated tier rankings, and a powerful trading guide for Roblox players. Whether you're looking for <strong>Blox Fruits trading values</strong> or a <strong>Blox Fruits value calculator</strong>, we've got you covered.</p><h3/>

      <h2>Latest Blox Fruits Values 2025</h2>
      <p>The <strong>Blox Fruits Values</strong> for 2025 are dynamic, reflecting the latest market trends. Top fruits include:</p>
      <ul>
        <li><strong>Blox Fruits Values</strong> for Leopard: 5000 Robux</li>
        <li><strong>Blox Fruits Values</strong> for Dough: 3000 Robux</li>
        <li><strong>Blox Fruits trading values</strong> for Dragon: 4000 Robux</li>
      </ul>
      <p>Check our <a href="/calculator">Blox Fruits value calculator</a> for real-time updates.</p>

      <h2>Blox Fruits Trading Tips</h2>
      <p>Maximize your trades with our <strong>Blox Fruits trading guide</strong>. Learn how to use <strong>Blox Fruits Values</strong> to negotiate better deals. Visit our <a href="/tips">trading tips page</a> for more.</p>

      <!-- Expandable Section for 2000 Words -->
      <p>[Add 1900 more words here, repeating and expanding on Blox Fruits Values, trading strategies, tier lists, and calculator usage. Include keywords naturally every 50-100 words. Example: "The Blox Fruits Values 2025 list is essential for traders. With Blox Fruits trading values fluctuating, our Blox Fruits value calculator helps. Explore Blox Fruits Values for each fruit..."]</p>
    </div>
      <GoogleAd adSlot="6712580132" />
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
