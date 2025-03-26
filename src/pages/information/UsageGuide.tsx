import React from 'react';

export function UsageGuidePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Usage Guide</h1>
      
      <div className="grid gap-8">
        <section className="bg-gray-800/50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Getting Started</h2>
          <div className="prose prose-invert">
            <p className="text-gray-300">
              Welcome to Blox Fruits Values! This guide will help you understand how to use our website effectively
              to make informed trading decisions in Blox Fruits.
            </p>
          </div>
        </section>

        <section className="bg-gray-800/50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Using the Calculator</h2>
          <div className="space-y-4">
            <p className="text-gray-300">1. Click the + button to add items to either side of the trade</p>
            <p className="text-gray-300">2. Select items from the comprehensive list of available items</p>
            <p className="text-gray-300">3. The calculator will automatically compute the total value</p>
            <p className="text-gray-300">4. Use the comparison to ensure fair trades</p>
          </div>
        </section>

        <section className="bg-gray-800/50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Understanding Values</h2>
          <div className="space-y-4">
            <p className="text-gray-300">• Green (Stable): Item is trading at its listed value</p>
            <p className="text-gray-300">• Red (Underpaid): Item often trades below its listed value</p>
            <p className="text-gray-300">• Yellow (Overpaid): Item often trades above its listed value</p>
          </div>
        </section>

        <section className="bg-gray-800/50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Trading Tips</h2>
          <div className="space-y-4">
            <p className="text-gray-300">• Always verify trades in-game before confirming</p>
            <p className="text-gray-300">• Consider demand ratings alongside pure value</p>
            <p className="text-gray-300">• Keep track of market trends and updates</p>
            <p className="text-gray-300">• Join our community for trading advice and discussions</p>
          </div>
        </section>
      </div>
    </div>
  );
}