import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import GoogleAd from "../components/GoogleAd"; // Ensure it's inside `components`
const DONATION_TIERS = [
  { id: 'tier3', amount: 5, description: 'Gold Supporter' },
  { id: 'tier4', amount: 6, description: 'Diamond Supporter' },
  { id: 'tier5', amount: 10, description: 'Legendary Supporter' },
];

export function DonatePage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const adSlots = [
    "1234567894", "1234567895", "1234567896", "1234567897",
    "1234567898", "1234567899", "1234567800", "1234567801",
    "1234567802", "1234567803", "1234567804", "1234567805",
    "1234567806", "1234567807", "1234567808", "1234567809",
    "1234567810", "1234567811", "1234567812", "1234567813"
  ];
  const getDonationUrl = (amount: number) => {
    if (amount === 5 || amount === 6) {
      return "https://karthikroyal0.gumroad.com/l/ctmld?_gl=1*qpdxl3*_ga*NzQxODA2NzY4LjE3NDI0MTk1NDk.*_ga_6LJN6D94N6*MTc0MjQyNDU0OS4yLjEuMTc0MjQyNTU1OS4wLjAuMA..";
    } else if (amount === 10) {
      return "https://karthikroyal0.gumroad.com/l/flonw?_gl=1*18tiivk*_ga*NzQxODA2NzY4LjE3NDI0MTk1NDk.*_ga_6LJN6D94N6*MTc0MjQyNDU0OS4yLjEuMTc0MjQyNTY1NS4wLjAuMA..";
    }
    return "#";
  };

  const handleDonation = async (amount: number) => {
    setLoading(true);
    setError(null);

    try {
      window.location.href = getDonationUrl(amount);
    } catch (err) {
      setError('Failed to process donation');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Support Our Project</h1>
          <p className="text-gray-300 text-lg">
            Your donations help us maintain and improve the website. All supporters receive special recognition and exclusive features.
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 rounded-lg p-4 mb-6">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DONATION_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`bg-gray-800 rounded-lg p-6 border-2 transition-all ${
                selectedTier === tier.id
                  ? 'border-blue-500 transform scale-105'
                  : 'border-transparent hover:border-gray-700'
              }`}
            >
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {tier.description}
                </h3>
                <p className="text-3xl font-bold text-blue-400">
                  ${tier.amount}
                </p>
              </div>

              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Special Badge
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Name Color
                </li>
                {tier.amount >= 25 && (
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Early Access
                  </li>
                )}
                {tier.amount >= 50 && (
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom Profile
                  </li>
                )}
                {tier.amount >= 100 && (
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Direct Support
                  </li>
                )}
              </ul>

              <button
                onClick={() => handleDonation(tier.amount)}
                disabled={loading}
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                  loading
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white`}
              >
                {loading ? 'Processing...' : `Donate $${tier.amount}`}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-gray-400">
          <p className="mb-2">
            All donations are processed securely through Gumroad.
          </p>
          <p>
            By donating, you agree to our terms of service and privacy policy.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-8">
            {adSlots.map((slot, index) => (
              <GoogleAd key={index} adSlot={slot} width={120} height={120} />
         ))}
      </div>
        </div>
      </div>
    </div>
  );
}
