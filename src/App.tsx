import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from "framer-motion";
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

const images = [
  "https://bloxfruitsvalues.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.8c8b2355.webp&w=1920&q=75",
  "https://bloxfruitsvalues.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.ceb66b51.webp&w=1920&q=75",
  "https://bloxfruitsvalues.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.50c3ed77.webp&w=1920&q=75"
];

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

const HomePage = () => {
  return (
    <div className="text-center py-10">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">The Most Trusted Value List for Blox Fruits</h2>
      <p className="text-lg sm:text-xl mt-2">NEW! Check out our trade calculator!</p>

      <div className="flex justify-center gap-4 sm:gap-10 mt-10 flex-wrap">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            className="w-full sm:w-1/3 lg:w-1/4 rounded-lg border-4 border-blue-500"
            animate={{ x: [0, 20, -20, 0], opacity: [0, 1], scale: [0.9, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
        ))}
      </div>

      <motion.div className="text-center py-5 text-lg sm:text-xl lg:text-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}>
        <h3 className="text-xl sm:text-2xl">Stock Reset Countdown</h3>
        <p className="text-4xl font-bold">01:24:01</p>
      </motion.div>

      <div className="flex justify-center gap-2 sm:gap-5 mt-5 flex-wrap">
        {["Common", "Uncommon", "Rare", "Legendary", "Mythical", "Gamepass"].map((category, index) => (
          <motion.div
            key={index}
            className="px-4 sm:px-5 py-2 sm:py-3 bg-gray-700 rounded-lg text-center text-white text-sm sm:text-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.1, backgroundColor: "#4F46E5" }}
            transition={{ duration: 0.3 }}
          >
            {category}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default App;
