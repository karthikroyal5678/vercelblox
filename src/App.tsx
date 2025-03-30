import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CommonPage } from "./pages/values/Common";
import { UncommonPage } from "./pages/values/Uncommon";
import { RarePage } from "./pages/values/Rare";
import { LegendaryPage } from "./pages/values/Legendary";
import { MythicalPage } from "./pages/values/Mythical";
import { GamepassPage } from "./pages/values/Gamepass";
import { LimitedPage } from "./pages/values/Limited";
import { CalculatorPage } from "./pages/Calculator";
import { LoginPage } from "./pages/auth/Login";
import { RegisterPage } from "./pages/auth/Register";
import { ForgotPasswordPage } from "./pages/auth/ForgotPassword";
import { FAQPage } from "./pages/information/FAQ";
import { UsageGuidePage } from "./pages/information/UsageGuide";
import { DonatePage } from "./pages/Donate";

import GoogleAd from "./pages/values/GoogleAd"; // Ensure it's inside `components`
import {TradeCalculator} from "./components/TradeCalculator"; // Corrected path

const adSlots = [
  "1234567894", "1234567895", "1234567896", "1234567897",
  "1234567898", "1234567899", "1234567800", "1234567801",
  "1234567802", "1234567803", "1234567804", "1234567805",
  "1234567806", "1234567807", "1234567808", "1234567809",
  "1234567810", "1234567811", "1234567812", "1234567813"
];

const HomePage = () => {
  return (
    <div className="text-center py-10 px-4">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
        The Most Trusted Value List for Blox Fruits
      </h2>
      <p className="text-lg sm:text-xl mt-2 text-gray-300">
        NEW! Check out our trade calculator!
      </p>

      {/* Google Ads Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-8">
        {adSlots.map((slot, index) => (
          <GoogleAd key={index} adSlot={slot} width={120} height={120} />
        ))}
      </div>

      {/* Trade Calculator Section */}
      <div className="container mx-auto px-4 mt-16">
        <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            Trade Calculator
          </h1>
          <TradeCalculator />
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
