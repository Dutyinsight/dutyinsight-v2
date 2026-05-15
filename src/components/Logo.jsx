import React from 'react';

export default function Logo({ size = 32, light = false, showText = true }) {
  const navy = "#0F2341";
  
  return (
    <div className="flex items-center gap-3 select-none">
      {/* AMBLEM KUTUSU (SVG ile çizildi, asla kaybolmaz) */}
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 64 64" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* light=true ise BEYAZ KUTU, değilse LACİVERT KUTU */}
        <rect width="64" height="64" rx="12" fill={light ? "white" : navy} />
        
        {/* light=true ise LACİVERT HARF, değilse BEYAZ HARF */}
        <text 
          x="32" 
          y="44" 
          textAnchor="middle" 
          fill={light ? navy : "white"} 
          style={{ 
            fontFamily: 'sans-serif', 
            fontSize: '30px', 
            fontWeight: '800',
            letterSpacing: '-1px'
          }}
        >
          DI
        </text>
      </svg>

      {/* YAZI (Sarı renk iptal, sadece Beyaz veya Lacivert) */}
      {showText && (
        <span 
          className={`font-display font-bold tracking-tight ${
            light ? 'text-white' : 'text-[#0F2341]'
          }`}
          style={{ fontSize: `${size * 0.65}px` }}
        >
          DutyInsight
        </span>
      )}
    </div>
  );
}