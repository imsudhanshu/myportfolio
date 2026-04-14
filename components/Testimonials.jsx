"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Alex R.",
      role: "Engineering Manager",
      text: "Sudhanshu owned our entire backend infrastructure. His ability to architect serverless systems that saved us thousands in AWS costs while handling peak traffic was remarkable.",
      initial: "A"
    },
    {
      id: 2,
      name: "Priya S.",
      role: "Lead Product Manager",
      text: "Working with Sudhanshu is a breeze. He doesn't just write code; he understands the business logic deeply, particularly when it came to our complex payment workflows.",
      initial: "P"
    },
    {
      id: 3,
      name: "David K.",
      role: "Senior DevOps Engineer",
      text: "During our server migration crisis, Sudhanshu's calm remediation and zero-downtime execution proved he is an engineer who thrives under pressure.",
      initial: "D"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <motion.div
          key={t.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md relative group transition-colors hover:bg-white/10"
        >
          <FaQuoteLeft className="text-3xl text-violet-500/30 mb-4 group-hover:text-violet-500/50 transition-colors" />
          <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center font-bold text-white shadow-lg">
              {t.initial}
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">{t.name}</h4>
              <p className="text-xs text-violet-400">{t.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
