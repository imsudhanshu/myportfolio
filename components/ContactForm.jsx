"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCheckCircle, FaSpinner } from "react-icons/fa";
import { supabase } from "../lib/supabase";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          { name: formData.name, email: formData.email, message: formData.message }
        ]);

      if (error) {
        console.error("Error inserting message: ", error);
        alert("Failed to send message. Have you configured Supabase .env and table yet?");
        setStatus("idle");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset after a few seconds
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
      setStatus("idle");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a] text-[#00ff00] font-mono text-sm leading-relaxed"
    >
      <div className="flex items-center px-4 py-3 bg-[#1f1f1f] border-b border-white/10 shrink-0">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mx-auto text-gray-400 text-xs tracking-wider">guest@sudhanshu-mishra:~/contact</div>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <p className="text-white">Executing script: <span className="text-blue-400">./send_message.sh</span></p>
          <p className="text-gray-400">Powered by Supabase DB</p>
        </div>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col py-6"
          >
            <p className="text-white">[✔] Connection established...</p>
            <p className="text-white">[✔] Payload encrypted...</p>
            <p className="text-[#00ff00] font-bold mt-2">SUCCESS: Message delivered securely.</p>
            <p className="text-gray-500 mt-4">Resetting session...</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-blue-400">Enter Name:</label>
              <div className="flex">
                <span className="text-white mr-2">{'>'}</span>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="flex-1 bg-transparent border-none outline-none text-[#00ff00] placeholder:text-gray-700"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-blue-400">Enter Email:</label>
              <div className="flex">
                <span className="text-white mr-2">{'>'}</span>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="flex-1 bg-transparent border-none outline-none text-[#00ff00] placeholder:text-gray-700"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-blue-400">Enter Message:</label>
              <div className="flex items-start">
                <span className="text-white mr-2 mt-1">{'>'}</span>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="flex-1 bg-transparent border-none outline-none text-[#00ff00] placeholder:text-gray-700 resize-none"
                  placeholder="Write your payload here..."
                />
              </div>
            </div>

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.01, color: "#fff" }}
                whileTap={{ scale: 0.99 }}
                disabled={status === "loading"}
                type="submit"
                className="text-[#00ff00] hover:text-white transition disabled:opacity-50"
              >
                {status === "loading" ? (
                  <span className="animate-pulse">Executing... Please wait</span>
                ) : (
                  <span>[ EXECUTE ./send_message ]</span>
                )}
              </motion.button>
            </div>
          </form>
        )}
      </div>
    </motion.div>
  );
}
