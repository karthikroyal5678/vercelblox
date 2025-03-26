import React from 'react';

export function FAQPage() {
  const faqs = [
    {
      question: "How accurate are the item values?",
      answer: "Our values are updated regularly based on market trends, trading patterns, and community feedback. We strive to maintain the most accurate values possible."
    },
    {
      question: "How often are values updated?",
      answer: "Values are updated daily to reflect the current market conditions and trading patterns in the game."
    },
    {
      question: "How can I contribute to value updates?",
      answer: "You can join our Discord community and provide feedback or report trades in the dedicated channels."
    },
    {
      question: "Why do some items show as 'Underpaid' or 'Overpaid'?",
      answer: "These indicators show the current trading trend for items. 'Underpaid' means the item often trades below its listed value, while 'Overpaid' means it trades above."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-800/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
            <p className="text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}