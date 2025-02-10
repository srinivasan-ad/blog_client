"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Many people who are worried about the AI revolution don’t realize that they already trust AI every time they do a web search.", author: "Geoffrey Hinton" },
  { text: "A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.", author: "Alan Turing" },
  { text: "The most dangerous phrase in the language is, 'We've always done it this way.'", author: "Grace Hopper" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Your most unhappy customers are your greatest source of learning.", author: "Bill Gates" },
  { text: "The web does not just connect machines, it connects people.", author: "Tim Berners-Lee" },
  { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
  { text: "He who refuses to do arithmetic is doomed to talk nonsense.", author: "John McCarthy" },
  { text: "If you're changing the world, you're working on important things. You're excited to get up in the morning.", author: "Larry Page" },
  { text: "There was no choice but to be pioneers; no time to be beginners.", author: "Margaret Hamilton" },
  { text: "When something is important enough, you do it even if the odds are not in your favor.", author: "Elon Musk" },
  { text: "Wear your failures as a badge of honor.", author: "Sundar Pichai" }
];


export default function Quote() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-200 h-screen flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuote.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-xl text-center">
            <p className="text-3xl font-bold mb-4">"{currentQuote.text}"</p>
            <p className="text-xl font-semibold mb-2">{currentQuote.author}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
