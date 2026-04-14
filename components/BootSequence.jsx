"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BootSequence({ onComplete }) {
  const [logs, setLogs] = useState([]);
  
  const bootLogs = [
    "BIOS Date 04/14/26 18:32:00 Ver 08.00.10",
    "CPU: AMD EPYC 7763 64-Core Processor",
    "Speed: 3.5GHz",
    "Memory Testing: 65536K OK",
    "Detecting IDE Primary Master... [Found]",
    "Mounting swap... [OK]",
    "Loading Linux kernel 6.5.0-generic...",
    "Mounting root filesystem... [OK]",
    "Starting system logger... [OK]",
    "Loading ACPI kernel modules... [OK]",
    "Starting kernel event manager... [OK]",
    "Starting network interfaces... [OK]",
    "Checking DOCKER daemon... [OK]",
    "Mounting cgroupfs... [OK]",
    "Starting Docker Application Container Engine...",
    "Initializing PostgREST API gateway...",
    "Establishing connection to backend cluster...",
    "Verifying TLS handshake with port 443...",
    "Starting Supabase client auth... [OK]",
    "Fetching identity headers... [OK]",
    "Loading portfolio dependencies... [OK]",
    "Warming up React cache... [OK]",
    "Compiling UI components... [OK]",
    "System ready. Initializing interactive environment...",
  ];

  useEffect(() => {
    let currentIndex = 0;
    
    // We run the interval around 115ms for 24 items (~2.7s), plus a small delay to hit 3s.
    const interval = setInterval(() => {
      if (currentIndex < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 240); // exactly ~3 seconds total
      }
    }, 115);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
      className="fixed inset-0 z-[99999] bg-[#050505] text-[#00ff00] font-mono text-sm sm:text-base p-6 sm:p-10 flex flex-col overflow-hidden"
    >
      <div className="flex-1 overflow-y-auto scrollbar-none flex flex-col justify-end">
        {logs.map((log, i) => (
          <div key={i} className="mb-1 opacity-90">{log}</div>
        ))}
        {logs.length < bootLogs.length && (
          <div className="animate-pulse opacity-90 mt-1">_</div>
        )}
      </div>
    </motion.div>
  );
}
