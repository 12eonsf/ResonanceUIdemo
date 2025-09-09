"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Triangle,
  Brain,
  Languages,
  FileText,
  AudioLines,
  Video,
  Mail,
  BookOpen,
  MapPin,
  Globe2,
  Play,
  Pause,
  Volume2,
  Sparkles,
  AlertTriangle,
  Send,
  Scan,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

/**
 * Δ RESONANTIA · INTERNAL INTERFACE (English-only)
 * Theme: black, grid, glitch, afterimage aesthetics.
 * Sections: Info / Query / Output / Archives / Profiles / Group Prayer Resonance Detection
 */

// ---------- Water Ripple Background ----------
const DynamicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Multiple random ripple points with varying sizes and ultra-subtle colors */}
      
      {/* Center point ripples */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="absolute w-3 h-3 border border-white/8 rounded-full" style={{ animation: 'ripple-expand 3.2s ease-out infinite', animationDelay: '0s' }}></div>
        <div className="absolute w-6 h-6 border border-white/6 rounded-full" style={{ animation: 'ripple-expand 3.2s ease-out infinite', animationDelay: '0.4s' }}></div>
        <div className="absolute w-12 h-12 border border-white/5 rounded-full" style={{ animation: 'ripple-expand 3.2s ease-out infinite', animationDelay: '0.8s' }}></div>
        <div className="absolute w-24 h-24 border border-white/4 rounded-full" style={{ animation: 'ripple-expand 3.2s ease-out infinite', animationDelay: '1.2s' }}></div>
        <div className="absolute w-48 h-48 border border-white/3 rounded-full" style={{ animation: 'ripple-expand 3.2s ease-out infinite', animationDelay: '1.6s' }}></div>
        <div className="absolute w-96 h-96 border border-white/2 rounded-full" style={{ animation: 'ripple-expand 3.2s ease-out infinite', animationDelay: '2s' }}></div>
      </div>

      {/* Top-left ripples */}
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <div className="absolute w-2 h-2 border border-white/7 rounded-full" style={{ animation: 'ripple-expand 4.1s ease-out infinite', animationDelay: '0.3s' }}></div>
        <div className="absolute w-5 h-5 border border-white/6 rounded-full" style={{ animation: 'ripple-expand 4.1s ease-out infinite', animationDelay: '0.7s' }}></div>
        <div className="absolute w-10 h-10 border border-white/5 rounded-full" style={{ animation: 'ripple-expand 4.1s ease-out infinite', animationDelay: '1.1s' }}></div>
        <div className="absolute w-20 h-20 border border-white/4 rounded-full" style={{ animation: 'ripple-expand 4.1s ease-out infinite', animationDelay: '1.5s' }}></div>
        <div className="absolute w-40 h-40 border border-white/3 rounded-full" style={{ animation: 'ripple-expand 4.1s ease-out infinite', animationDelay: '1.9s' }}></div>
      </div>

      {/* Top-right ripples */}
      <div className="absolute top-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <div className="absolute w-4 h-4 border border-white/6 rounded-full" style={{ animation: 'ripple-expand 3.8s ease-out infinite', animationDelay: '0.6s' }}></div>
        <div className="absolute w-8 h-8 border border-white/5 rounded-full" style={{ animation: 'ripple-expand 3.8s ease-out infinite', animationDelay: '1s' }}></div>
        <div className="absolute w-16 h-16 border border-white/4 rounded-full" style={{ animation: 'ripple-expand 3.8s ease-out infinite', animationDelay: '1.4s' }}></div>
        <div className="absolute w-32 h-32 border border-white/3 rounded-full" style={{ animation: 'ripple-expand 3.8s ease-out infinite', animationDelay: '1.8s' }}></div>
      </div>

      {/* Bottom-right ripples */}
      <div className="absolute bottom-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <div className="absolute w-3 h-3 border border-white/7 rounded-full" style={{ animation: 'ripple-expand 4.5s ease-out infinite', animationDelay: '0.2s' }}></div>
        <div className="absolute w-7 h-7 border border-white/6 rounded-full" style={{ animation: 'ripple-expand 4.5s ease-out infinite', animationDelay: '0.8s' }}></div>
        <div className="absolute w-14 h-14 border border-white/5 rounded-full" style={{ animation: 'ripple-expand 4.5s ease-out infinite', animationDelay: '1.4s' }}></div>
        <div className="absolute w-28 h-28 border border-white/4 rounded-full" style={{ animation: 'ripple-expand 4.5s ease-out infinite', animationDelay: '2s' }}></div>
        <div className="absolute w-56 h-56 border border-white/3 rounded-full" style={{ animation: 'ripple-expand 4.5s ease-out infinite', animationDelay: '2.6s' }}></div>
      </div>

      {/* Bottom-left ripples */}
      <div className="absolute bottom-1/3 left-1/5 transform -translate-x-1/2 -translate-y-1/2">
        <div className="absolute w-2 h-2 border border-white/8 rounded-full" style={{ animation: 'ripple-expand 5.2s ease-out infinite', animationDelay: '0.4s' }}></div>
        <div className="absolute w-6 h-6 border border-white/6 rounded-full" style={{ animation: 'ripple-expand 5.2s ease-out infinite', animationDelay: '1s' }}></div>
        <div className="absolute w-12 h-12 border border-white/5 rounded-full" style={{ animation: 'ripple-expand 5.2s ease-out infinite', animationDelay: '1.6s' }}></div>
        <div className="absolute w-24 h-24 border border-white/4 rounded-full" style={{ animation: 'ripple-expand 5.2s ease-out infinite', animationDelay: '2.2s' }}></div>
        <div className="absolute w-48 h-48 border border-white/3 rounded-full" style={{ animation: 'ripple-expand 5.2s ease-out infinite', animationDelay: '2.8s' }}></div>
      </div>

      {/* Additional random ripple points */}
      <div className="absolute top-1/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="absolute w-1 h-1 border border-white/9 rounded-full" style={{ animation: 'ripple-expand 3.5s ease-out infinite', animationDelay: '0.1s' }}></div>
        <div className="absolute w-4 h-4 border border-white/7 rounded-full" style={{ animation: 'ripple-expand 3.5s ease-out infinite', animationDelay: '0.5s' }}></div>
        <div className="absolute w-9 h-9 border border-white/5 rounded-full" style={{ animation: 'ripple-expand 3.5s ease-out infinite', animationDelay: '0.9s' }}></div>
        <div className="absolute w-18 h-18 border border-white/4 rounded-full" style={{ animation: 'ripple-expand 3.5s ease-out infinite', animationDelay: '1.3s' }}></div>
      </div>

      <div className="absolute top-2/3 right-1/6 transform -translate-x-1/2 -translate-y-1/2">
        <div className="absolute w-2 h-2 border border-white/8 rounded-full" style={{ animation: 'ripple-expand 4.8s ease-out infinite', animationDelay: '0.7s' }}></div>
        <div className="absolute w-5 h-5 border border-white/6 rounded-full" style={{ animation: 'ripple-expand 4.8s ease-out infinite', animationDelay: '1.2s' }}></div>
        <div className="absolute w-11 h-11 border border-white/5 rounded-full" style={{ animation: 'ripple-expand 4.8s ease-out infinite', animationDelay: '1.7s' }}></div>
        <div className="absolute w-22 h-22 border border-white/4 rounded-full" style={{ animation: 'ripple-expand 4.8s ease-out infinite', animationDelay: '2.2s' }}></div>
      </div>

      <div className="absolute bottom-1/6 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
        <div className="absolute w-3 h-3 border border-white/7 rounded-full" style={{ animation: 'ripple-expand 3.7s ease-out infinite', animationDelay: '0.2s' }}></div>
        <div className="absolute w-7 h-7 border border-white/5 rounded-full" style={{ animation: 'ripple-expand 3.7s ease-out infinite', animationDelay: '0.6s' }}></div>
        <div className="absolute w-15 h-15 border border-white/4 rounded-full" style={{ animation: 'ripple-expand 3.7s ease-out infinite', animationDelay: '1s' }}></div>
        <div className="absolute w-30 h-30 border border-white/3 rounded-full" style={{ animation: 'ripple-expand 3.7s ease-out infinite', animationDelay: '1.4s' }}></div>
      </div>

      {/* Subtle grid pattern with very low opacity */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* CSS Animation Keyframes */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes ripple-expand {
            0% {
              transform: scale(0);
              opacity: 1;
            }
            50% {
              opacity: 0.8;
            }
            100% {
              transform: scale(1);
              opacity: 0;
            }
          }
        `
      }} />
    </div>
  );
};

// Glitch Effect Component
const GlitchText: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Main text */}
      <span className="relative z-10">{children}</span>
      
      {/* Glitch layers - Enhanced visibility */}
      <span 
        className="absolute top-0 left-0 text-red-500 opacity-80 animate-pulse"
        style={{ 
          clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)",
          transform: "translate(-2px, 0)",
          zIndex: 1
        }}
      >
        {children}
      </span>
      <span 
        className="absolute top-0 left-0 text-cyan-400 opacity-80 animate-pulse"
        style={{ 
          clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
          transform: "translate(2px, 0)",
          animationDelay: "0.1s",
          zIndex: 1
        }}
      >
        {children}
      </span>
      
      {/* Random glitch effect - More frequent and visible */}
      <motion.span 
        className="absolute top-0 left-0 text-white opacity-60"
        animate={{ 
          x: [0, -3, 3, 0],
          opacity: [0, 0.5, 0, 0]
        }}
        transition={{ 
          duration: 0.2, 
          repeat: Infinity, 
          repeatDelay: 1.5,
          ease: "easeInOut"
        }}
        style={{ zIndex: 2 }}
      >
        {children}
      </motion.span>
      
      {/* Additional glitch layer */}
      <motion.span 
        className="absolute top-0 left-0 text-yellow-400 opacity-40"
        animate={{ 
          x: [0, 1, -1, 0],
          y: [0, 1, -1, 0]
        }}
        transition={{ 
          duration: 0.1, 
          repeat: Infinity, 
          repeatDelay: 1.2,
          ease: "easeInOut"
        }}
        style={{ zIndex: 3 }}
      >
        {children}
      </motion.span>
    </div>
  );
};

// ---------- Utils ----------
const GLYPHS = "ΔΞΨΦΩλκγπσϕημτχθ◬◇⋄◈◊⟟⟊αβγδεζηθικλμνξοπρστυφχψω".split("");
const CORRUPT_CHARS = "█▓▒░▄▀▐▌▬▫▪▫▬▄▀▐▌█▓▒░".split("");
const MIXED = [
  "Δ", "echo", "afterimage", "λόγος", "συν", "memory", "phase", "φάσμα", "resonance", "mind", "θ",
  "共振", "共鸣", "回响", "记忆", "感知", "量子", "干涉", "痕迹", "重叠", "状态",
  "共鳴", "記憶", "知覚", "量子", "干渉", "痕跡", "重複", "状態", "響き", "波",
  "resonantia", "memoria", "perceptio", "quantum", "interferentia", "vestigium", "superpositio", "status",
  "glitch", "error", "corrupt", "fragment", "noise", "static", "distort", "fade"
]; 

// Multi-language text base
const MULTI_LANG_BASE = "Echo Script: glyphs braid through languages — comprehension partial, alignment dangerous. 共振状态下的记忆碎片 — 量子干涉痕迹重叠。記憶の断片が共鳴する — 知覚の境界が曖昧になる。Resonantia memoriae fragmenta — quantum interferentia vestigia superposita.";

// Enhanced deterministic utilities for multi-language corruption
const DeterministicUtils = {
  pick: <T,>(arr: T[], seed: number) => arr[Math.floor(seed * arr.length)],
  scramble: (s: string, seed: number, p = 0.6) => s.split("").map((ch, i) => {
    const charSeed = (seed * 0.8 + i * 0.2) % 1;
    const corruptSeed = (seed * 0.6 + i * 0.4) % 1;
    
    if (/[\w\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff]/.test(ch)) {
      if (charSeed < p) {
        return DeterministicUtils.pick(GLYPHS, charSeed);
      } else if (corruptSeed < 0.4) {
        return DeterministicUtils.pick(CORRUPT_CHARS, corruptSeed);
      }
    }
    return ch;
  }).join(""),
  toMixed: (s: string, seed: number) => s.split(/(\s+)/).map((tok, i) => {
    const tokSeed = (seed * 0.7 + i * 0.3) % 1;
    const corruptSeed = (seed * 0.5 + i * 0.4) % 1;
    
    if (tokSeed < 0.3) {
      return `${tok}${DeterministicUtils.pick(MIXED, tokSeed)}`;
    } else if (corruptSeed < 0.25) {
      return `${tok}${DeterministicUtils.pick(CORRUPT_CHARS, corruptSeed)}`;
    }
    return tok;
  }).join("")
};

// ---------- WebAudio ripple ----------
function useRippleSound() {
  const ctxRef = useRef<AudioContext | null>(null);
  const ensure = () => {
    if (!ctxRef.current) ctxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    return ctxRef.current!;
  };
  return (strength = 1) => {
    const ctx = ensure();
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(180, t);
    osc.frequency.exponentialRampToValueAtTime(880, t + 0.25 * (0.6 + 0.4 * strength));
    g.gain.setValueAtTime(0.001, t);
    g.gain.exponentialRampToValueAtTime(0.35 * strength, t + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0008, t + 0.36);
    osc.connect(g).connect(ctx.destination);
    osc.start(t); osc.stop(t + 0.38);
  };
}

// ---------- Glitch Text (for dynamic content) ----------
const GlitchTextDynamic: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const [seed, setSeed] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSeed(s => s + 1), 1500);
    return () => clearInterval(id);
  }, []);
  
  // Check if text contains HTML tags
  const hasHtml = /<[^>]*>/g.test(text);
  
  if (hasHtml) {
    return (
      <div className={`relative select-none ${className || ""}`}>
        <div 
          className="relative z-10" 
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <div 
          className="absolute inset-0 z-0 translate-x-[1px] translate-y-[-1px] opacity-40 text-cyan-300 mix-blend-screen" 
          aria-hidden
          dangerouslySetInnerHTML={{ __html: text.replace(/<[^>]*>/g, '') }}
        />
        <div 
          className="absolute inset-0 z-0 -translate-x-[1px] translate-y-[1px] opacity-40 text-pink-300 mix-blend-screen" 
          aria-hidden
          dangerouslySetInnerHTML={{ __html: text.replace(/<[^>]*>/g, '') }}
        />
      </div>
    );
  }
  
  return (
    <div className={`relative select-none ${className || ""}`}>
      <span className="relative z-10">{text}</span>
      <span className="absolute inset-0 z-0 translate-x-[1px] translate-y-[-1px] opacity-40 text-cyan-300 mix-blend-screen" aria-hidden>{text}</span>
      <span className="absolute inset-0 z-0 -translate-x-[1px] translate-y-[1px] opacity-40 text-pink-300 mix-blend-screen" aria-hidden>{text}</span>
    </div>
  );
};

// ---------- Animated Δ Logo ----------
const DeltaLogo: React.FC = () => {
  const controls = useAnimation();
  const [hover, setHover] = useState(false);
  useEffect(() => { controls.start({ rotate: [0, 2, 0], y: [0, -2, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }); }, [controls]);
  return (
    <div className="flex items-center gap-3 select-none">
      <div className="relative w-12 h-12">
        <motion.svg viewBox="0 0 100 100" className="absolute inset-0" animate={controls} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <defs>
            <linearGradient id="dg" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity={0.95} />
              <stop offset="50%" stopColor="#bfe3ff" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#efc6ff" stopOpacity={0.9} />
            </linearGradient>
          </defs>
          <motion.polygon points="50,10 90,88 10,88" fill="none" stroke="url(#dg)" strokeWidth={2} />
          {hover && (
            <g>
              <polygon points="50,14 86,84 14,84" fill="none" stroke="#76a0ff" strokeWidth={1} opacity={0.35} />
              <polygon points="50,6 94,92 6,92" fill="none" stroke="#ff9af4" strokeWidth={1} opacity={0.3} />
            </g>
          )}
        </motion.svg>
      </div>
      <div>
        <div className="text-lg tracking-[0.18em] font-semibold">Δ RESONANTIA · INTERNAL INTERFACE</div>
        <div className="text-[11px] text-white/60 -mt-1">Noesis Institute</div>
      </div>
    </div>
  );
};

// ---------- Progress (minimal) ----------
const Bar: React.FC<{ value: number; animated?: boolean }> = ({ value, animated = false }) => (
  <div className="h-2 bg-white/10 rounded w-full overflow-hidden">
    <motion.div 
      className="h-full bg-white" 
      initial={{ width: "0%" }}
      animate={{ 
        width: `${value}%`,
        ...(animated ? {
          opacity: [0.7, 1, 0.7],
          scaleX: [0.95, 1, 0.95]
        } : {})
      }}
      transition={{
        width: { duration: 3, ease: "easeOut" },
        ...(animated ? {
          opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          scaleX: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        } : {})
      }}
    />
  </div>
);

// ---------- Circular Progress ----------
const CircularProgress: React.FC<{ value: number; label: string; unit: string; animated?: boolean }> = ({ 
  value, 
  label, 
  unit, 
  animated = false 
}) => {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-12 h-12">
        <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
          {/* Background circle */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="3"
            fill="none"
          />
          {/* Progress circle */}
          <motion.circle
            cx="24"
            cy="24"
            r={radius}
            stroke="white"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ 
              strokeDashoffset,
              ...(animated ? {
                opacity: [0.7, 1, 0.7]
              } : {})
            }}
            transition={{ 
              strokeDashoffset: { duration: 0.8, ease: "easeOut" },
              ...(animated ? {
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              } : {})
            }}
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-xs font-mono text-white/80">{value}%</div>
        </div>
      </div>
      <div className="text-xs text-white/70 font-mono mt-1 text-center">
        <div>{label}</div>
        <div className="text-white/50">{unit}</div>
      </div>
    </div>
  );
};

// ---------- Observer (map + ripples) ----------
type CityKey = "london" | "nyc" | "shanghai";
// 真实地理坐标 (经度, 纬度)
const CITY_COORDS: Record<CityKey, { lng: number; lat: number; label: string }> = {
  london: { lng: -0.1276, lat: 51.5074, label: "London" },
  nyc: { lng: -74.0060, lat: 40.7128, label: "New York" },
  shanghai: { lng: 121.4737, lat: 31.2304, label: "Shanghai" },
};

// 将地理坐标转换为屏幕百分比坐标 (针对 Natural Earth 投影优化)
const geoToScreen = (lng: number, lat: number) => {
  // 考虑 Natural Earth 投影的变形，进行微调
  // 将经度从 [-180, 180] 映射到 [0, 100]
  let x = ((lng + 180) / 360) * 100;
  // 将纬度从 [90, -90] 映射到 [0, 100] (注意纬度是反向的)
  let y = ((90 - lat) / 180) * 100;
  
  // 针对 Natural Earth 投影进行微调
  // 经度微调：考虑投影的横向压缩
  if (lng > 0) {
    x = x * 0.95 + 2.5; // 东半球稍微向右调整
  } else {
    x = x * 1.05 - 2.5; // 西半球稍微向左调整
  }
  
  // 纬度微调：考虑投影的纵向变形
  if (lat > 0) {
    y = y * 0.9 + 5; // 北半球稍微向下调整
  } else {
    y = y * 1.1 - 5; // 南半球稍微向上调整
  }
  
  return { x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) };
};

const CITY_POS: Record<CityKey, { x: number; y: number; label: string }> = {
  london: { ...geoToScreen(CITY_COORDS.london.lng, CITY_COORDS.london.lat), label: "London" },
  nyc: { ...geoToScreen(CITY_COORDS.nyc.lng, CITY_COORDS.nyc.lat), label: "New York" },
  shanghai: { ...geoToScreen(CITY_COORDS.shanghai.lng, CITY_COORDS.shanghai.lat), label: "Shanghai" },
};

const ResonanceObserver: React.FC<{ city: CityKey; onCity: (c: CityKey) => void; rate: number }> = ({ city, onCity, rate }) => {
  const c = CITY_POS[city];
  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="flex items-center gap-2"><Triangle className="h-4 w-4"/> <GlitchText>Group Prayer Resonance Detection</GlitchText></CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* City Selection */}
        <div className="flex gap-2 justify-center">
          {(Object.keys(CITY_POS) as CityKey[]).map(key => (
            <Button key={key} variant={city===key?"default":"outline"} onClick={() => onCity(key)} className="gap-1">
              <MapPin className="h-4 w-4"/>{CITY_POS[key].label}
            </Button>
          ))}
        </div>
        
        {/* Interactive Map */}
        <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black h-80">
          {/* World Map Background */}
          <div className="absolute inset-0">
            <ComposableMap
              projection="geoNaturalEarth1"
              projectionConfig={{
                scale: 120,
                center: [0, 0]
              }}
              style={{ width: "100%", height: "100%" }}
            >
              <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                {({ geographies }: { geographies: any[] }) =>
                  geographies.map((geo: any) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="rgba(255,255,255,0.1)"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth={0.5}
                      style={{
                        default: {
                          fill: "rgba(255,255,255,0.1)",
                          stroke: "rgba(255,255,255,0.3)",
                          strokeWidth: 0.5,
                          outline: "none",
                        },
                        hover: {
                          fill: "rgba(255,255,255,0.2)",
                          stroke: "rgba(255,255,255,0.5)",
                          strokeWidth: 1,
                          outline: "none",
                        },
                        pressed: {
                          fill: "rgba(255,255,255,0.3)",
                          stroke: "rgba(255,255,255,0.7)",
                          strokeWidth: 1,
                          outline: "none",
                        },
                      }}
                    />
                  ))
                }
              </Geographies>
            </ComposableMap>
            
            {/* Grid overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full opacity-30">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)"/>
              </svg>
            </div>
          </div>
          
          {/* Resonance Ripples */}
          <div className="absolute" style={{ left: `${c.x}%`, top: `${c.y}%`, transform: "translate(-50%, -50%)" }}>
            {[0,1,2,3,4].map(i => (
              <motion.div key={i} className="absolute rounded-full border border-white/60" style={{ width: 6, height: 6 }}
                animate={{ opacity: [0.6, 0, 0], scale: [1, 35, 55] }} transition={{ duration: 5.8, delay: i*0.7, repeat: Infinity, ease: "easeOut" }} />
            ))}
            <div className="w-4 h-4 rounded-full bg-white shadow-lg border-2 border-white/80"/>
            <div className="absolute inset-0 w-4 h-4 rounded-full bg-white/30 animate-ping"/>
            
            {/* City Label */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black/80 border border-white/30 rounded px-2 py-1 text-xs text-white font-mono whitespace-nowrap">
              {c.label}
            </div>
          </div>
          
          {/* Status Display */}
          <div className="absolute bottom-4 left-4 text-sm text-white/70">
            <div>City: {c.label}</div>
            <div>Echo Spreading Rate: {rate}%</div>
          </div>
          
          {/* Resonance Pattern */}
          <div className="absolute top-4 right-4 text-xs text-white/50">
            <div>Resonance Pattern</div>
            <div>Active</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// ---------- Archives ----------
const AudioItem: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isDragging, setIsDragging] = useState(false);
  const [waveformData, setWaveformData] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationRef = useRef<number | undefined>(undefined);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const newVolume = parseFloat(e.target.value);
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current || isDragging) return;
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  // Generate waveform data
  const generateWaveformData = () => {
    const bars = 50;
    const data = Array.from({ length: bars }, (_, i) => (Math.sin(i * 0.1) * 0.4 + 0.5));
    setWaveformData(data);
  };

  // Animate waveform when playing
  const animateWaveform = () => {
    if (playing) {
      setWaveformData(prev => prev.map((_, i) => (Math.sin(Date.now() * 0.01 + i * 0.1) * 0.4 + 0.5)));
      animationRef.current = requestAnimationFrame(animateWaveform);
    }
  };

  useEffect(() => {
    generateWaveformData();
  }, []);

  useEffect(() => {
    if (playing) {
      animateWaveform();
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [playing]);

  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-sm"><AudioLines className="h-3 w-3"/> <GlitchText>Audio</GlitchText></CardTitle>
        <div className="text-xs text-white/40 font-mono">FILE-043-AUDIO</div>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <div className="flex items-center justify-between gap-2">
          <div className="truncate">Noesis Institute · Hallucinogenic Research Lab</div>
        </div>
        
        {/* Audio Player */}
        <div className="bg-black/20 border border-white/10 rounded-lg p-4 space-y-3">
          {/* Waveform Visualization */}
          <div className="flex items-center justify-center h-12 bg-black/30 rounded border border-white/5 p-2 mx-0 overflow-hidden">
            <div className="grid items-end gap-px h-full w-full" style={{ gridTemplateColumns: 'repeat(50, minmax(0, 1fr))' }}>
              {waveformData.map((height, index) => (
                <motion.div
                  key={index}
                  className="bg-white/60 rounded-sm"
                  style={{
                    width: '100%',
                    height: `${height * 100}%`,
                    minHeight: '2px'
                  }}
                  animate={playing ? {
                    height: [`${height * 100}%`, `${(height + 0.3) * 100}%`, `${height * 100}%`],
                    opacity: [0.6, 1, 0.6]
                  } : {}}
                  transition={{
                    duration: 0.5,
                    repeat: playing ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-white/60">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #fff 0%, #fff ${(currentTime / duration) * 100}%, rgba(255,255,255,0.1) ${(currentTime / duration) * 100}%, rgba(255,255,255,0.1) 100%)`
              }}
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button 
                onClick={handlePlayPause}
                className="bg-white/10 hover:bg-white/20 border border-white/20"
                size="sm"
              >
                {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <div className="text-xs text-white/70">
                {playing ? "Playing" : "Paused"}
              </div>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-2">
              <Volume2 className="h-4 w-4 text-white/60" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #fff 0%, #fff ${volume * 100}%, rgba(255,255,255,0.1) ${volume * 100}%, rgba(255,255,255,0.1) 100%)`
                }}
              />
              <span className="text-xs text-white/60 w-8">{Math.round(volume * 100)}%</span>
            </div>
          </div>
        </div>

        <audio
          ref={audioRef}
          src="/audio/noesis-hallucinogenic-lab.mp3" 
          onPlay={() => setPlaying(true)} 
          onPause={() => setPlaying(false)}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        />
      </CardContent>
    </Card>
  );
};

const VideoItem: React.FC = () => (
  <Card className="bg-white/5 border-white/10">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-sm"><Video className="h-3 w-3"/> <GlitchText>Video</GlitchText></CardTitle>
        <div className="text-xs text-white/40 font-mono">FILE-044-VIDEO</div>
      </CardHeader>
    <CardContent className="space-y-3 text-sm">
      <div className="flex items-center justify-between gap-2">
        <div className="truncate">London Apollo Theatre · Prayer Death Scene</div>
      </div>
      <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black">
        <video 
          src="/video/london-apollo-prayer-death.mp4" 
          controls 
          preload="metadata"
          className="w-full h-auto"
          onError={(e) => {
            // Fallback to placeholder if video fails to load
            e.currentTarget.style.display = 'none';
            const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
            if (nextElement) {
              nextElement.style.display = 'flex';
            }
          }}
        >
          Your browser does not support the video tag.
        </video>
        <div className="w-full h-40 flex items-center justify-center text-white/60 text-xs" style={{display: 'none'}}>
          [ video player placeholder ]
        </div>
      </div>
    </CardContent>
  </Card>
);

const EchoScriptItem: React.FC = () => {
  const [seed, setSeed] = useState(0);
  const text = DeterministicUtils.scramble(DeterministicUtils.toMixed(MULTI_LANG_BASE, seed), seed, 0.7);
  
  useEffect(() => {
    const id = setInterval(() => setSeed(s => s + 0.4), 600);
    return () => clearInterval(id);
  }, []);
  
  return (
    <Card className="bg-white/5 border-white/10 h-48 md:h-32 flex flex-col overflow-hidden">
      <CardHeader className="flex items-center justify-between flex-shrink-0 p-4 pb-2">
        <CardTitle className="flex items-center gap-2 text-sm">
          <Languages className="h-3 w-3"/> 
          <GlitchText>Echo Script</GlitchText>
        </CardTitle>
        <div className="text-xs text-white/40 font-mono">FILE-042-ECHO</div>
      </CardHeader>
      <CardContent className="text-sm text-white/80 font-mono leading-relaxed flex-1 p-4 pt-2 overflow-hidden">
        <div className="h-full overflow-y-auto break-words overflow-wrap-anywhere">
          {text}
        </div>
      </CardContent>
    </Card>
  );
};

const ManuscriptItem: React.FC = () => (
  <Card className="bg-white/5 border-white/10">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-sm"><FileText className="h-3 w-3"/> <GlitchText>Manuscript / Letters</GlitchText></CardTitle>
        <div className="text-xs text-white/40 font-mono">FILE-045-MANUSCRIPT</div>
      </CardHeader>
    <CardContent className="space-y-4 text-sm">
      <div className="font-mono text-white/80">Everlyn — field notes in cipher; edges hum at choir convergence.</div>
      <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black">
        <img 
          src="/Everlyn Manuscript.png" 
          alt="Everlyn Manuscript" 
          className="w-full h-auto object-contain bg-gray-900"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            e.currentTarget.style.display = 'none';
            const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
            if (nextElement) {
              nextElement.style.display = 'flex';
            }
          }}
        />
        <div className="w-full h-48 flex items-center justify-center bg-gray-900" style={{display: 'none'}}>
          <div className="text-center text-white/60">
            <div className="text-lg font-mono mb-2">Everlyn</div>
            <div className="text-lg font-mono mb-2">Manuscript</div>
            <div className="text-sm text-white/40">[Placeholder Image]</div>
            <div className="text-xs text-white/30 mt-2">Ancient symbols and ciphers</div>
          </div>
        </div>
      </div>
      <div className="font-mono text-white/60">Encrypted email exchange: Everlyn ↔ Lucian (headers obfuscated).</div>
      <div className="space-y-3 text-xs font-mono text-white/70 leading-relaxed">
        <div className="border-l-2 border-white/20 pl-3">
          <div className="text-white/60 mb-2">From: Everlyn Okoro e.okoro@noesis-institute.org</div>
          <div className="text-white/60 mb-2">To: Lucian Varga l.varga@imperial.ac.uk</div>
          <div className="text-white/60 mb-3">Subject: Residual text anomalies</div>
          <div className="space-y-2">
            <p>Lucian,</p>
            <p>The Zurich fragments you asked me to re-analyze are… unsettling. When I applied my phonetic decomposition model, the symbols didn't dissolve into meaningless noise as expected. Instead, they clustered into rhythmic units—almost chant-like, but without a source grammar.</p>
            <p>Linguistically, there's no parent language. Yet when I read the transcription aloud, my assistant described an inexplicable sense of déjà vu. This isn't semantic recognition—it's pre-semantic resonance. The words don't mean, they recur.</p>
            <p>I know your field doesn't usually indulge in such phenomenology, but the consistency of the technicians' reactions suggests the traces interact with cognition at a level deeper than language. You once mentioned "observer interference" in your quantum models—do you think that applies here?</p>
            <p>—E.</p>
          </div>
        </div>
        <div className="text-white/50 text-center">⸻</div>
        <div className="border-l-2 border-white/20 pl-3">
          <div className="text-white/60 mb-2">From: Lucian Varga l.varga@imperial.ac.uk</div>
          <div className="text-white/60 mb-2">To: Everlyn Okoro e.okoro@noesis-institute.org</div>
          <div className="text-white/60 mb-3">Subject: Re: Residual text anomalies</div>
          <div className="space-y-2">
            <p>Everlyn,</p>
            <p>Your observations align disturbingly well with what I recorded during the Kraków series. The patterns only stabilize once they are observed—before that, they remain stochastic, like waveforms awaiting collapse.</p>
            <p>From a quantum perspective, the "chanting" you describe may not be encoded information at all, but interference generated when a cognitive system attempts to impose structure. The brain, like any measuring apparatus, introduces order where none exists. That order then feeds back into perception, reinforcing itself.</p>
            <p>If you are correct that no parent language exists, then the resonance must originate not in the text but in the observer. In physics we call this a "closed loop system": input and measurement are inseparable.</p>
            <p>Be cautious. Repeated exposure could entangle perception and artifact more tightly than you anticipate. Familiarity, in this case, is not benign—it is the first stage of assimilation.</p>
            <p>—L.</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const LabBookItem: React.FC = () => (
  <Card className="bg-white/5 border-white/10">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-sm"><BookOpen className="h-3 w-3"/> <GlitchText>Lab Book</GlitchText></CardTitle>
        <div className="text-xs text-white/40 font-mono">FILE-046-LABBOOK</div>
      </CardHeader>
    <CardContent className="space-y-3 text-xs text-white/80 font-mono leading-relaxed">
      <div className="space-y-2">
        <p className="text-white/90 font-semibold">Experiment Log — Confidential</p>
        <p>Subject: G.S.</p>
        <p>Experiment: Induced Near-Death Experience (NDE Protocol / Echo Synchronization)</p>
        <p>Date: [REDACTED]</p>
        <p>Lead Investigator: Dr. Katherine Li-Weston</p>
      </div>
      
      <div className="border-t border-white/20 pt-2">
      </div>
      
      <div className="space-y-2">
        <p className="text-white/90 font-semibold">Entry 01 — Baseline</p>
        <p>Vitals stable. EEG shows irregular but non-pathological theta activity. Subject G.S. reports a sense of anticipation and claims to have "heard fragments before" despite no prior exposure to Echo scripts. Cognitive baseline intact.</p>
      </div>
      
      <div className="space-y-2">
        <p className="text-white/50">—</p>
      </div>
      
      <div className="space-y-2">
        <p className="text-white/90 font-semibold">Entry 02 — Induction</p>
        <p>Controlled hypoxia initiated.</p>
        <p>Loss of consciousness at 11.2 seconds.</p>
        <p className="mt-2">At 9.7 seconds, subject vocalized:</p>
        <p className="text-white/70 italic ml-4">"Δ… lumen… return is not permitted…"</p>
        <p className="text-white/70 italic ml-4">"The lattice… closes ███ …"</p>
        <p className="mt-2">Gamma bursts recorded across frontal and temporal cortices, followed by full-brain coherence atypical for hypoxic states.</p>
      </div>
      
      <div className="space-y-2">
        <p className="text-white/50">—</p>
      </div>
      
      <div className="space-y-2">
        <p className="text-white/90 font-semibold">Entry 03 — Threshold Phase</p>
        <p>Pupil reflex absent. ECG flatline for 4.4 seconds.</p>
        <p className="mt-2">During this period, low-amplitude whispers captured by microphone:</p>
        <p className="text-white/70 italic ml-4">"…familiar voices, but none my own…"</p>
        <p className="text-white/70 italic ml-4">"…echoes folding…into themselves…"</p>
        <p className="mt-2">Spectral analysis revealed overlapping frequencies inconsistent with single-source human speech.</p>
      </div>
      
      <div className="space-y-2">
        <p className="text-white/50">—</p>
      </div>
      
      <div className="space-y-2">
        <p className="text-white/90 font-semibold">Entry 04 — Recovery</p>
        <p>Resuscitation via electrical stimulation and re-oxygenation successful. Subject regains consciousness with acute distress.</p>
        <p className="mt-2">Post-revival statements:</p>
        <p className="text-white/70 italic ml-4">"It wasn't death. It was a grid—pulling me inward. Every breath returned, amplified."</p>
        <p className="text-white/70 italic ml-4">"They spoke my name, but not in any language I know."</p>
      </div>
      
      <div className="space-y-2">
        <p className="text-white/50">—</p>
      </div>
      
      <div className="space-y-2">
        <p className="text-white/90 font-semibold">Researcher's Notes (K. Li-Weston)</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Short-term amnesia: ~15 minutes missing from subject's recall.</li>
          <li>Involuntary writing observed: G.S. produced residual symbols (Δ, Ψ, ʘ) without awareness.</li>
          <li>Risk Level: High.</li>
          <li>Strong recommendation: implement neural shielding before any repeated exposure.</li>
        </ul>
      </div>
      
      <div className="space-y-2">
        <p className="text-white/50">—</p>
      </div>
    </CardContent>
  </Card>
);

const LabBookItem2: React.FC = () => (
  <Card className="bg-white/5 border-white/10">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-sm"><BookOpen className="h-3 w-3"/> <GlitchText>Lab Book</GlitchText></CardTitle>
        <div className="text-xs text-white/40 font-mono">FILE-047-LABBOOK</div>
      </CardHeader>
    <CardContent className="space-y-3 text-xs text-white/80 font-mono leading-relaxed">
      <div className="space-y-2">
        <p className="text-white/90 font-semibold">Experiment Log — Restricted Access</p>
        <p>Researcher: Dr. Lucian Varga</p>
        <p>Date: [REDACTED]</p>
        <p>Experiment ID: QI-Δ-47</p>
        <p>Objective: Controlled observation of anomalous residual traces within a quantum interference framework.</p>
      </div>
      
      <div className="border-t border-white/20 pt-2">
      </div>
      
      <div className="space-y-2">
        <p className="text-white/90 font-semibold">Entry 01 — Baseline Calibration</p>
        <p>Mach-Zehnder interferometer aligned.</p>
        <p>Photon source stabilized at 532 nm.</p>
        <p>Vacuum chamber integrity confirmed.</p>
        <p>Initial interference pattern matches prediction. Visibility = 0.93.</p>
        <p className="mt-2">No anomalies detected.</p>
      </div>
      
      <div className="space-y-2">
        <p className="text-white/50">—</p>
      </div>
      
      <div className="space-y-2">
        <p className="text-white/90 font-semibold">Entry 02 — Residual Injection</p>
        <p>Introduced encoded "Echo fragment" into phase modulator (external script provided by Noesis Institute).</p>
        <p>Expected outcome: pattern disruption with statistical noise.</p>
        <p className="mt-2">Actual outcome:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Interference visibility collapsed to 0.14 within 2.3s.</li>
          <li>Spontaneous formation of secondary fringe lattice not predicted by quantum model.</li>
          <li>Pattern resembled recursive glyphs (Δ, ∴, ʘ).</li>
        </ul>
        <p className="mt-2">Note: detector logs showed phantom counts at positions with no incident photons.</p>
      </div>
      
      <div className="space-y-2">
        <p className="text-white/50">—</p>
      </div>
      
      <div className="space-y-2">
        <p className="text-white/90 font-semibold">Entry 03 — Observer Effect</p>
        <p>Repeated trial with additional shielding.</p>
        <p>Despite no external observers in chamber, sensors registered phase collapse identical to "measurement-induced collapse."</p>
        <p className="mt-2">Hypothesis: system responding to potential observation, not actual detection.</p>
        <p>This is not consistent with quantum mechanics as we understand it.</p>
      </div>
      
      <div className="space-y-2">
        <p className="text-white/50">—</p>
      </div>
      
      <div className="space-y-2">
        <p className="text-white/90 font-semibold">Entry 04 — Incident Report</p>
        <p>During final run, anomalous auditory interference recorded via control room microphone:</p>
        <p className="text-white/70 italic ml-4">"…the lattice is closed… divergence impossible…"</p>
        <p className="mt-2">No personnel spoke at the time.</p>
        <p>Sound signature matched neither lab staff nor environmental noise.</p>
      </div>
      
      <div className="space-y-2">
        <p className="text-white/50">—</p>
      </div>
      
      <div className="space-y-2">
        <p className="text-white/90 font-semibold">Researcher's Note (Varga)</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Statistical impossibility exceeds 10⁻⁸ threshold.</li>
          <li>The "residual lattice" behaves as if it anticipates measurement, not merely reacting.</li>
          <li>Conclusion: Experiment confirms closed-loop causality between observer and artifact.</li>
          <li>Personal remark (not for publication): I fear that every attempt to measure only strengthens the cage.</li>
        </ul>
      </div>
      
      <div className="space-y-2">
        <p className="text-white/50">—</p>
      </div>
    </CardContent>
  </Card>
);

// ---------- Photo Archive ----------
const PhotoArchiveItem: React.FC = () => (
  <Card className="bg-white/5 border-white/10">
    <CardHeader className="flex items-center justify-between">
      <CardTitle className="flex items-center gap-2 text-sm">
        <MapPin className="h-3 w-3"/> 
        <GlitchText>Photo</GlitchText>
      </CardTitle>
      <div className="text-xs text-white/40 font-mono">FILE-047-PHOTO</div>
    </CardHeader>
    <CardContent className="space-y-4 text-sm">
      <div className="font-mono text-white/80">Paris After Global Resonance — Scene Documentation</div>
      
      <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black">
        <img 
          src="/case-scene-042-Paris-after-global-resonance.png" 
          alt="Paris After Global Resonance Scene" 
          className="w-full h-auto object-contain bg-gray-900"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
            if (nextElement) {
              nextElement.style.display = 'flex';
            }
          }}
        />
        <div className="w-full h-48 flex items-center justify-center bg-gray-900" style={{display: 'none'}}>
          <div className="text-center text-white/60">
            <div className="text-lg font-mono mb-2">Paris Scene</div>
            <div className="text-lg font-mono mb-2">After Global Resonance</div>
            <div className="text-sm text-white/40">[Placeholder Image]</div>
            <div className="text-xs text-white/30 mt-2">Case Scene 042</div>
          </div>
        </div>
      </div>
      
      <div className="space-y-2 text-xs text-white/60 font-mono">
        <div>Classification: PHOTO-047</div>
        <div>Date: 2047.03.15</div>
        <div>Location: Paris, France</div>
        <div>Event: Post-Global Resonance Documentation</div>
        <div>Status: Classified - Internal Use Only</div>
      </div>
    </CardContent>
  </Card>
);

// ---------- Profiles ----------
const ProfileCard: React.FC<{
  name: string; dob: string; nationality: string; occupation: string; affiliation: string; profile: string;
}> = ({ name, dob, nationality, occupation, affiliation, profile }) => {
  // Generate photo filename based on name
  const getPhotoSrc = (name: string) => {
    const nameMap: { [key: string]: string } = {
      'Lucian Varga': '/Lucian.png',
      'Katherine Li-Weston': '/Katherian.png', 
      'Everlyn Okoro': '/Everlyn.png',
      'Marius Tanaka': '/Marius.png'
    };
    return nameMap[name] || '';
  };

  return (
    <Card className="bg-white/5 border-white/10">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Photo - Top on mobile, Left on desktop */}
          <div className="w-full md:w-24 h-72 md:h-32 rounded-lg overflow-hidden border border-white/20 bg-white/5 flex items-start justify-center mx-auto md:mx-0 flex-shrink-0">
            <img 
              src={getPhotoSrc(name)} 
              alt={`${name} photo`}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                // Fallback to initials if photo fails to load
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'flex';
                }
              }}
            />
            <div className="text-center text-white/60 text-xs" style={{display: 'none'}}>
              <div className="text-lg font-mono mb-1">{name.split(' ').map(n => n[0]).join('')}</div>
              <div className="text-xs">PHOTO</div>
            </div>
          </div>
          
          {/* Profile Info - Bottom on mobile, Right on desktop */}
          <div className="flex-1 space-y-3 text-sm">
            <div className="font-mono text-white/90">
              <div className="text-white/60 mb-1">Name: {name}</div>
              <div className="text-white/60 mb-1">Date of Birth: {dob}</div>
              <div className="text-white/60 mb-1">Nationality: {nationality}</div>
              <div className="text-white/60 mb-1">Occupation: {occupation}</div>
              <div className="text-white/60 mb-3">Affiliation: {affiliation}</div>
              <div className="text-white/60 mb-1">Profile:</div>
              <div className="text-white/80 leading-relaxed pl-4 border-l-2 border-white/20">
                {profile}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// ---------- Main ----------
export default function ResonantiaInterface() {
  const playRipple = useRippleSound();
  const [mode, setMode] = useState<"interpretation"|"translation"|"ar"|"sync">("translation");
  const [city, setCity] = useState<CityKey>("london");
  const [rate] = useState(20);
  const [output, setOutput] = useState<string>("Γνῶθι σεαυτόν · Μηδὲν ἄγαν · Δ resonates where symmetry breaks and truth arrives as an echo.");
  const [inputText, setInputText] = useState<string>("What is Δ Resonantia?");
  
  // Hallucination values state
  const [systemHallucination, setSystemHallucination] = useState(73);
  const [visitorHallucination, setVisitorHallucination] = useState(42);
  const [neuralSyncProgress, setNeuralSyncProgress] = useState(0);

  // Neural Sync progress animation
  useEffect(() => {
    const interval = setInterval(() => {
      setNeuralSyncProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50); // Update every 50ms for smooth animation

    return () => clearInterval(interval);
  }, []);

  const onMode = (m: typeof mode) => { setMode(m); playRipple(0.7); if(m==="interpretation") setOutput("Interpretation: symbols indicate constructive interference ahead."); if(m==="translation") setOutput("Echo Translation: partial comprehension achieved. Alignment not advised."); if(m==="ar") setOutput("Argument Reality: overlay ready. Keep distance from threshold."); if(m==="sync") setOutput("Neural Sync: coherence at 100%. Proceed with caution."); };

  // Handle send button click
  const handleSend = () => {
    if (inputText.trim() === "What is Δ Resonantia?") {
      setOutput(`Resonantia is not a concept.  
It is a **state of interference** — where memory, perception, and quantum trace overlap.  
It cannot be observed without altering its form.  
It cannot be named without invoking its echo.  

Residual analysis suggests:
「Δ — the fracture where silence speaks」  
「∴ echoes entwined with forgotten prayers」  
「 ███ the lattice closes ███  ʘ  Δ  Ψ  」

<span style="color: #ff4444;">Warning: Exposure risk [HIGH].</span>  
All attempts to define *Resonantia* will converge to recursion.`);
    } else {
      setOutput("Processing query... Analysis incomplete. Try: 'What is Δ Resonantia?'");
    }
    playRipple(0.8);
  };

  // Handle page click to reduce hallucination values
  const handlePageClick = (e: React.MouseEvent) => {
    // Only trigger if clicking on the background, not on interactive elements
    if (e.target === e.currentTarget) {
      const reductions = [1, 5, 20];
      // Use timestamp-based "random" selection for consistency
      const randomReduction = reductions[Math.floor((Date.now() % 1000) / 1000 * reductions.length)];
      
      setSystemHallucination(prev => Math.max(0, prev - randomReduction));
      setVisitorHallucination(prev => Math.max(0, prev - randomReduction));
      
      playRipple(0.3);
    }
  };

  return (
    <div className="min-h-screen text-white relative" onClick={handlePageClick}>
      {/* Dynamic Background */}
      <DynamicBackground />
      {/* Background grid / glitch */}
      <div className="fixed inset-0 -z-5 pointer-events-none">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <motion.svg 
                  viewBox="0 0 100 100" 
                  className="absolute inset-0"
                  animate={{ 
                    rotate: [0, 2, 0], 
                    y: [0, -2, 0] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <defs>
                    <linearGradient id="dg" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#fff" stopOpacity={0.95} />
                      <stop offset="50%" stopColor="#bfe3ff" stopOpacity={0.9} />
                      <stop offset="100%" stopColor="#efc6ff" stopOpacity={0.9} />
                    </linearGradient>
                  </defs>
                  <polygon points="50,10 90,88 10,88" fill="none" stroke="url(#dg)" strokeWidth={2} />
                </motion.svg>
              </div>
              <div className="text-center">
                <GlitchText className="text-xl md:text-2xl font-bold tracking-wider text-white/90">
                  RESONANTIA
                </GlitchText>
                <GlitchText className="text-xs md:text-sm text-white/60 font-light">
                  INTERNAL INTERFACE
                </GlitchText>
              </div>
            </div>
            <div className="text-xs text-white/40 font-mono">
              Noesis Institute
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-10">
        {/* Info */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2"><Triangle className="h-4 w-4"/> <GlitchText>Info</GlitchText></CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-xs">
            {/* Version */}
            <div>
              <div className="text-white/60 mb-2">Version</div>
              <div className="text-white">Δ Resonantia 1.1</div>
            </div>
            
            {/* System Dashboard and Visitor Status */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-white/60 mb-3">System Dashboard</div>
                <div className="grid grid-cols-3 gap-4">
                  <CircularProgress value={78} label="Inference Speed" unit="2.4 TFLOPS" animated={true} />
                  <CircularProgress value={62} label="Neural Engine Power" unit="156W" animated={true} />
                  <CircularProgress value={85} label="Stability" unit="85%" animated={true} />
                </div>
              </div>
              
              <div>
                <div className="text-white/60 mb-3">Visitor Status</div>
                <div className="space-y-3">
                  {/* Neural Sync and AR Module Labels */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <div className="text-green-400">Neural Sync</div>
                      <div className="flex items-center gap-1">
                        <motion.div 
                          className="w-1 h-1 bg-green-400 rounded-full"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div 
                          className="w-1 h-1 bg-green-400 rounded-full"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div 
                          className="w-1 h-1 bg-green-400 rounded-full"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                    <div className="text-white/70">AR Module</div>
                  </div>
                  
                  {/* Progress Bar and Switch */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <Bar value={neuralSyncProgress} animated={true} />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-4 bg-black/40 border border-white/20 rounded-full relative">
                        <div className="w-3 h-3 bg-white/80 rounded-full absolute right-0.5 top-0.5"></div>
                      </div>
                      <span className="text-white/80 text-xs font-mono">ON</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Query */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2"><Triangle className="h-4 w-4"/> <GlitchText>Query</GlitchText></CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Input Box */}
            <div className="space-y-2">
              <div className="text-white/60 text-sm">Input Fragment</div>
              <div className="relative">
                <textarea
                  className="w-full h-24 bg-black/40 border border-white/10 rounded-lg p-4 pr-20 text-white placeholder-white/40 resize-none focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Enter fragment, phrase, or code…"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                <div className="absolute right-3 bottom-3 flex gap-1">
                  <Button
                    className="bg-transparent hover:bg-white/10 text-white/60 hover:text-white transition-all duration-200 p-1 h-auto"
                    size="sm"
                  >
                    <Scan className="h-4 w-4" />
                  </Button>
                  <Button
                    className="bg-transparent hover:bg-white/10 text-white/60 hover:text-white transition-all duration-200 p-1 h-auto"
                    size="sm"
                    onClick={handleSend}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Analysis Modes */}
            <div className="space-y-4">
              <div className="text-white/60 text-sm">Analysis Mode</div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <div 
                  onClick={() => onMode("interpretation")} 
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                    mode === 'interpretation' 
                      ? 'bg-white/10 border border-white/20' 
                      : 'bg-white/5 hover:bg-white/8 border border-transparent hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded border border-white/20 bg-black/40 flex items-center justify-center">
                      <FileText className="h-4 w-4 text-white/80" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Interpretation</div>
                      <div className="text-xs text-white/60">Symbolic analysis</div>
                    </div>
                  </div>
                </div>
                
                <div 
                  onClick={() => onMode("translation")} 
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                    mode === 'translation' 
                      ? 'bg-white/10 border border-white/20' 
                      : 'bg-white/5 hover:bg-white/8 border border-transparent hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded border border-white/20 bg-black/40 flex items-center justify-center">
                      <Languages className="h-4 w-4 text-white/80" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Echo Translation</div>
                      <div className="text-xs text-white/60">Linguistic decoding</div>
                    </div>
                  </div>
                </div>
                
                <div 
                  onClick={() => onMode("ar")} 
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                    mode === 'ar' 
                      ? 'bg-white/10 border border-white/20' 
                      : 'bg-white/5 hover:bg-white/8 border border-transparent hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded border border-white/20 bg-black/40 flex items-center justify-center">
                      <Globe2 className="h-4 w-4 text-white/80" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Argument Reality</div>
                      <div className="text-xs text-white/60">Reality overlay</div>
                    </div>
                  </div>
                </div>
                
                <div 
                  onClick={() => onMode("sync")} 
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                    mode === 'sync' 
                      ? 'bg-white/10 border border-white/20' 
                      : 'bg-white/5 hover:bg-white/8 border border-transparent hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded border border-white/20 bg-black/40 flex items-center justify-center">
                      <Brain className="h-4 w-4 text-white/80" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Neural Sync</div>
                      <div className="text-xs text-white/60">Cognitive sync</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Output */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2"><Triangle className="h-4 w-4"/> <GlitchText>Output</GlitchText></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-xl border border-white/10 p-5 bg-black/40 font-mono text-sm leading-relaxed">
              <GlitchTextDynamic text={output} />
            </div>
          </CardContent>
        </Card>

        {/* Archives */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2"><Triangle className="h-4 w-4"/> <GlitchText>Archives</GlitchText></CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-4">
            <EchoScriptItem />
            <AudioItem />
            <VideoItem />
            <ManuscriptItem />
            <LabBookItem />
            <LabBookItem2 />
            <PhotoArchiveItem />
          </CardContent>
        </Card>

        {/* Profiles */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2"><Triangle className="h-4 w-4"/> <GlitchText>Profiles</GlitchText></CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-6">
            <ProfileCard 
              name="Lucian Varga"
              dob="2001"
              nationality="Romanian"
              occupation="Quantum Physicist"
              affiliation="Imperial College London"
              profile="Specialist in quantum interference and measurement theory. Known for his rigorous and skeptical approach to unverified phenomena. His reports suggest a growing private interest in anomalous data linked to 'Echo' incidents. Considered highly rational, but prolonged exposure may indicate underlying fixation."
            />
            
            <div className="text-center text-white/30 text-sm py-2">⸻</div>
            
            <ProfileCard 
              name="Katherine Li-Weston"
              dob="2003"
              nationality="British-Chinese (dual heritage)"
              occupation="Neuroscientist"
              affiliation="Noetex Neuroscience Institute"
              profile="Researcher in neuroplasticity and consciousness studies. Documented case of involuntary synchronization with residual script during controlled experiments. Displays both exceptional insight and heightened vulnerability due to personal involvement. Subject to close monitoring."
            />
            
            <div className="text-center text-white/30 text-sm py-2">⸻</div>
            
            <ProfileCard 
              name="Everlyn Okoro"
              dob="2004"
              nationality="Nigerian-British"
              occupation="Linguist"
              affiliation="Noesis Institute"
              profile="Expert in semiotics, ancient languages, and cryptographic systems. First identified liturgical-like recurrence within residual text fragments. Displays obsessive tendencies in fieldwork journals; handwriting analysis suggests elevated stress and fixation. Valuable for deciphering, but psychological stability is in question."
            />
            
            <div className="text-center text-white/30 text-sm py-2">⸻</div>
            
            <ProfileCard 
              name="Marius Tanaka"
              dob="Unknown"
              nationality="Japanese-American"
              occupation="[REDACTED]"
              affiliation="Unknown"
              profile="Background and current employment remain unclear. Multiple sources place him in proximity to Echo-related events, though his precise role is undetermined. Records suggest deliberate concealment of professional history. Subject classified as 'High Uncertainty / Potential Asset.'"
            />
          </CardContent>
        </Card>

        {/* Group Prayer Resonance Detection */}
        <ResonanceObserver city={city} onCity={setCity} rate={rate} />


        <footer className="pt-6 border-t border-white/10 text-center text-xs text-white/60 space-y-2">
          <div>Γνῶθι σεαυτόν · Μηδὲν ἄγαν</div>
          <div>Noesis Institute 2000–2053 · <span className="text-white">Do not attempt to align.</span></div>
      </footer>
      </main>

      {/* Floating Hallucination Monitor - Auto-collapsed */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50" style={{ position: 'fixed', bottom: '1rem', right: '1rem' }}>
        <details className="group">
          <summary className="cursor-pointer bg-black/90 border border-white/20 rounded-lg p-2 md:p-3 backdrop-blur-sm hover:bg-black/95 transition-colors">
            <div className="text-xs text-white/60 font-mono">HALLUCINATION MONITOR</div>
            <div className="flex items-center justify-between gap-2 md:gap-4 mt-1 md:mt-2">
              <div className="text-xs text-white/70 font-mono">S:{systemHallucination} V:{visitorHallucination}</div>
              <div className="text-xs text-white/40 font-mono">▼</div>
            </div>
          </summary>
          <div className="mt-2 bg-black/90 border border-white/20 rounded-lg p-3 md:p-4 backdrop-blur-sm">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <div className="text-xs text-white/70 font-mono">System</div>
                <div className="text-lg font-mono">
                  <GlitchTextDynamic text={systemHallucination.toString()} />
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="text-xs text-white/70 font-mono">Visitor</div>
                <div className="text-lg font-mono">
                  <GlitchTextDynamic text={visitorHallucination.toString()} />
                </div>
              </div>
            </div>
            <div className="mt-2 text-xs text-white/40 font-mono">Max: 100</div>
            
            {/* Warning Message - Collapsible */}
            <div className="mt-3">
              <details className="group">
                <summary className="cursor-pointer p-2 bg-red-900/20 border border-red-500/30 rounded text-xs text-red-300/80 font-mono hover:bg-red-900/30 transition-colors">
                  <span className="font-semibold text-red-200">⚠️ WARNING</span>
                  <span className="ml-2 text-red-400/60 group-open:hidden">[Click to expand]</span>
                  <span className="ml-2 text-red-400/60 hidden group-open:inline">[Click to collapse]</span>
                </summary>
                <div className="absolute bottom-full right-0 mb-2 w-72 md:w-80 p-3 bg-red-900/20 border border-red-500/30 rounded text-xs text-red-300/80 font-mono backdrop-blur-sm z-10">
                  Maintain low hallucination levels at all times. If values exceed 50, seek medical department for anti-hallucinogenic medication. Rapid hallucination spikes may trigger epilepsy and mania.
                </div>
              </details>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}
