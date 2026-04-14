"use client";

import { useEffect, useRef } from "react";

export default function TerminalBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Terminal characters to display
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
    const charArray = chars.split("");

    const fontSize = 14;
    let columns = canvas.width / fontSize;
    let drops = [];

    // Initialize drop positions array
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    let animationFrameId;

    const draw = () => {
      // Recalculate columns if canvas resized significantly
      if (Math.floor(canvas.width / fontSize) !== columns.length) {
        columns = canvas.width / fontSize;
        drops = [];
        for (let x = 0; x < columns; x++) {
          drops[x] = Math.random() * canvas.height;
        }
      }

      // Translucent black background creates the "trail" effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Green text color
      ctx.fillStyle = "#0f0";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        // Pick a random char
        const text = charArray[Math.floor(Math.random() * charArray.length)];

        // Draw character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Randomly reset a drop to the top to stagger
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment drop Y coordinate
        drops[i]++;
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-20"
      style={{ display: "block" }}
    />
  );
}
