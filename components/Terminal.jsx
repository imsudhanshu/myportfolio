"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Terminal() {
  const [isImmersive, setIsImmersive] = useState(false);
  const [history, setHistory] = useState([
    { type: "system", content: "Welcome to Sudhanshu's Interactive Terminal." },
    { type: "system", content: "Type 'help' to see a list of available commands." }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  const commands = {
    help: "Available commands: help, whoami, skills, experience, clear, exit",
    whoami: "Sudhanshu Mishra - Sr. Software Engineer specializing in scalable backend systems, serverless architectures, and cloud deployments.",
    skills: "PHP, Laravel, Node.js, AWS Lambda, S3, DynamoDB, MySQL, React, Next.js, Docker, CI/CD, Stripe, Serverless.",
    experience: "6.5+ years of experience. Currently Sr. Software Engineer at Mindfire Solutions. Prev: Backend Developer at Capital Now."
  };

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (!cmd) return;

    if (cmd === "exit") {
      setIsImmersive(false);
      setInput("");
      return;
    }

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const newEntry = { type: "user", content: `guest@portfolio:~$ ${input}` };
    const response = commands[cmd] 
      ? { type: "system", content: commands[cmd] } 
      : { type: "error", content: `bash: ${cmd}: command not found` };

    setHistory((prev) => [...prev, newEntry, response]);
    setInput("");
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isImmersive]);

  useEffect(() => {
    if (isImmersive) {
      document.body.style.overflow = "hidden";
      inputRef.current?.focus();
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isImmersive]);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 30 }}
      onClick={handleContainerClick}
      className={`${
        isImmersive 
          ? "fixed inset-0 z-[100] w-full h-full rounded-none" 
          : "relative w-full max-w-4xl h-[500px] mx-auto rounded-xl hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-shadow"
      } overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a] text-[#00ff00] font-mono text-sm leading-relaxed flex flex-col`}
    >
      <div className="flex items-center px-4 py-3 bg-[#1f1f1f] border-b border-white/10 shrink-0">
        <div className="flex gap-2">
          <button 
            type="button"
            onClick={(e) => { e.stopPropagation(); setIsImmersive(false); }}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition"
            title="Close"
          />
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <motion.button 
            type="button"
            onClick={(e) => { e.stopPropagation(); setIsImmersive(!isImmersive); }}
            className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition"
            title="Toggle Fullscreen"
          />
        </div>
        <div className="mx-auto text-gray-400 text-xs tracking-wider">
          {isImmersive ? "guest@sudhanshu-mishra:~ (IMMERSIVE MODE)" : "guest@sudhanshu-mishra:~"}
        </div>
      </div>
      
      <div ref={scrollRef} className={`p-5 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent flex-1 ${isImmersive ? 'text-lg' : ''}`}>
        {history.map((entry, i) => (
          <div key={i} className={`mb-2 ${entry.type === "error" ? "text-red-400" : entry.type === "user" ? "text-white" : "text-[#00ff00]"}`}>
            {entry.content}
          </div>
        ))}
        
        <form onSubmit={handleCommand} className="flex mt-2">
          <span className="text-white mr-2">guest@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-[#00ff00]"
          />
        </form>
      </div>
    </motion.div>
  );
}
