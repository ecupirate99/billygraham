import React from 'react';
import { Plus, Book, Users } from 'lucide-react';

export default function WelcomeMessage() {
  const suggestions = [
    { icon: Plus, text: "How can I have a personal relationship with God?" },
    { icon: Book, text: "What does the Bible say about salvation?" },
    { icon: Users, text: "How can I share my faith with others?" }
  ];

  return (
    <div className="text-center py-8 px-4">
      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
        <Plus className="w-10 h-10 text-white" />
      </div>
      
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
        AI Billy Graham Chatbot
      </h2>
      
      <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
        Ask me questions about God, the Bible, and Christianity. I'll answer in the spirit of Billy Graham's teachings and wisdom.
      </p>
      
      <div className="space-y-3 max-w-lg mx-auto">
        <p className="text-sm font-medium text-gray-700 mb-4">Try asking:</p>
        {suggestions.map((suggestion, index) => (
          <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
            <suggestion.icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="text-sm text-gray-700 text-left">{suggestion.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}