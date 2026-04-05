'use client';

import { useEffect, useRef } from 'react';

export default function MeshGradient() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Cutesy pastel color palette
    const colors = [
      { r: 255, g: 182, b: 193 }, // Light Pink
      { r: 255, g: 218, b: 185 }, // Peach
      { r: 221, g: 160, b: 221 }, // Plum
      { r: 176, g: 224, b: 230 }, // Powder Blue
      { r: 255, g: 240, b: 245 }, // Lavender Blush
      { r: 240, g: 248, b: 255 }, // Alice Blue
      { r: 255, g: 250, b: 205 }, // Lemon Chiffon
      { r: 255, g: 228, b: 225 }, // Misty Rose
    ];

    // Create gradient points that move
    class GradientPoint {
      constructor(index) {
        this.baseX = (index % 3) / 2;
        this.baseY = Math.floor(index / 3) / 2;
        this.offsetX = Math.random() * 0.3;
        this.offsetY = Math.random() * 0.3;
        this.speedX = 0.00005 + Math.random() * 0.00015;
        this.speedY = 0.00005 + Math.random() * 0.00015;
        this.colorIndex = index % colors.length;
        this.colorTransition = 0;
        this.nextColorIndex = (index + 1) % colors.length;
      }

      update(time) {
        this.offsetX = Math.sin(time * this.speedX) * 0.2;
        this.offsetY = Math.cos(time * this.speedY) * 0.2;
        
        // Slowly transition between colors
        this.colorTransition += 0.0005;
        if (this.colorTransition >= 1) {
          this.colorTransition = 0;
          this.colorIndex = this.nextColorIndex;
          this.nextColorIndex = (this.nextColorIndex + 1) % colors.length;
        }
      }

      getPosition(canvas) {
        return {
          x: (this.baseX + this.offsetX) * canvas.width,
          y: (this.baseY + this.offsetY) * canvas.height
        };
      }

      getColor() {
        const c1 = colors[this.colorIndex];
        const c2 = colors[this.nextColorIndex];
        const t = this.colorTransition;
        
        return {
          r: c1.r + (c2.r - c1.r) * t,
          g: c1.g + (c2.g - c1.g) * t,
          b: c1.b + (c2.b - c1.b) * t
        };
      }
    }

    // Create 9 gradient points (3x3 grid)
    const points = Array.from({ length: 9 }, (_, i) => new GradientPoint(i));

    // Animation loop
    const animate = () => {
      time++;
      
      // Update all points
      points.forEach(point => point.update(time));

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create mesh gradient effect
      const gridSize = 50;
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let y = 0; y < canvas.height; y += gridSize) {
        for (let x = 0; x < canvas.width; x += gridSize) {
          // Find influence from all points
          let totalR = 0, totalG = 0, totalB = 0, totalWeight = 0;

          points.forEach(point => {
            const pos = point.getPosition(canvas);
            const dx = x - pos.x;
            const dy = y - pos.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const weight = 1 / (1 + distance * 0.001);

            const color = point.getColor();
            totalR += color.r * weight;
            totalG += color.g * weight;
            totalB += color.b * weight;
            totalWeight += weight;
          });

          const r = totalR / totalWeight;
          const g = totalG / totalWeight;
          const b = totalB / totalWeight;

          // Fill grid cell
          for (let dy = 0; dy < gridSize && y + dy < canvas.height; dy++) {
            for (let dx = 0; dx < gridSize && x + dx < canvas.width; dx++) {
              const index = ((y + dy) * canvas.width + (x + dx)) * 4;
              data[index] = r;
              data[index + 1] = g;
              data[index + 2] = b;
              data[index + 3] = 255;
            }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);

      // Add blur for smooth effect
      ctx.filter = 'blur(80px)';
      ctx.drawImage(canvas, 0, 0);
      ctx.filter = 'none';

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ opacity: 0.6 }}
    />
  );
}
