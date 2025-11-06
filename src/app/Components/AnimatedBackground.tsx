'use client';
import React, { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-amber-200 to-orange-200 opacity-20 blur-3xl"
        style={{
          transform: `translate3d(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px, 0)`,
          left: '10%',
          top: '20%'
        }}
      />
      <div 
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-yellow-200 to-amber-200 opacity-20 blur-3xl"
        style={{
          transform: `translate3d(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px, 0)`,
          right: '10%',
          bottom: '20%'
        }}
      />
      <style jsx>{`
        @keyframes float3d {
          0%,100% { transform: translate3d(0,0,0); }
          50% { transform: translate3d(20px,-20px,50px); }
        }
      `}</style>
    </div>
  );
}
