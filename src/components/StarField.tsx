
import React, { useEffect, useRef } from 'react';

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      twinkle: number;
      originalX: number;
      originalY: number;
    }> = [];

    // Create more stars for better effect
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      stars.push({
        x,
        y,
        originalX: x,
        originalY: y,
        size: Math.random() * 3 + 0.5,
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * Math.PI * 2
      });
    }

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star, index) => {
        // Twinkle effect
        star.twinkle += 0.02;
        const twinkleOpacity = star.opacity * (0.5 + 0.5 * Math.sin(star.twinkle));

        // Mouse attraction effect
        const dx = mouseX - star.x;
        const dy = mouseY - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          star.x += dx * force * 0.003;
          star.y += dy * force * 0.003;
        } else {
          // Slowly return to original position
          star.x += (star.originalX - star.x) * 0.001;
          star.y += (star.originalY - star.y) * 0.001;
        }

        // Gentle floating movement
        star.y += Math.sin(Date.now() * 0.001 + index) * 0.1;
        star.x += Math.cos(Date.now() * 0.0008 + index) * 0.05;

        // Wrap around screen
        if (star.y > canvas.height + 10) {
          star.y = -10;
          star.originalY = star.y;
        }
        if (star.x > canvas.width + 10) {
          star.x = -10;
          star.originalX = star.x;
        }
        if (star.x < -10) {
          star.x = canvas.width + 10;
          star.originalX = star.x;
        }

        // Draw star with glow effect
        ctx.save();
        ctx.globalAlpha = twinkleOpacity;
        
        // Create gradient for glow
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
        gradient.addColorStop(0, '#ffffff');
        gradient.addColorStop(0.3, '#8b5cf6');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core star
        ctx.globalAlpha = twinkleOpacity;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Redistribute stars
      stars.forEach(star => {
        star.originalX = Math.random() * canvas.width;
        star.originalY = Math.random() * canvas.height;
        star.x = star.originalX;
        star.y = star.originalY;
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ zIndex: 0 }}
    />
  );
};

export default StarField;
