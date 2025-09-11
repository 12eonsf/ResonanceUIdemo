"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

/**
 * Δ Resonantia — Loading Screen (JS v4)
 * - Multi-triangle logo rotation
 * - Dynamic glitch text
 * - Boot sequence
 * - Footer with Visitor ID & permission
 * - Bottom-most warning in English
 */

export default function LoaderResonantia({ onComplete, minDurationMs = 3000 }: { onComplete?: () => void; minDurationMs?: number }) {
  const [progress, setProgress] = useState(0);
  const [showAccessButton, setShowAccessButton] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [hasStartedLoading, setHasStartedLoading] = useState(false);
  const bootMessages = useMemo(
    () => [
      "Initializing core protocols…",
      "Program start: OK",
      "Calibrating lattice parameters…",
      "Establishing neural link…",
      "Neural link: SYNCHRONIZED [100%]",
      "Deploying AR modules…",
      "Querying user biometric streams…",
      "Cognitive guardrails: NOMINAL",
      "Model selected: resonantia-echo-enhanced v3.5",
      "Echo amplifier: WARMING",
      "Entropy dampener: ACTIVE",
      "Permissions: CLASSIFIED // LIMITED",
    ],
    []
  );
  const [currentMessage, setCurrentMessage] = useState(bootMessages[0]);

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const initialDelay = 800; // 800ms initial delay before starting progress
    let hasStarted = false; // Local variable to track loading state
    
    const tick = (t: number) => {
      const elapsed = t - start;
      
      // Wait for initial delay before starting progress
      if (elapsed < initialDelay) {
        setProgress(0);
        setCurrentMessage(bootMessages[0]);
        if (hasStarted) {
          setHasStartedLoading(false);
          hasStarted = false;
        }
        raf = requestAnimationFrame(tick);
        return;
      }
      
      // Start loading after delay
      if (!hasStarted) {
        setHasStartedLoading(true);
        hasStarted = true;
      }
      
      // Calculate progress based on remaining time after delay
      const loadingElapsed = elapsed - initialDelay;
      const loadingDuration = minDurationMs - initialDelay;
      const base = Math.min(1, loadingElapsed / loadingDuration);
      
      // Simple, reliable progress calculation - no wobble, no regression
      let progressValue;
      if (base >= 0.85) {
        // In the final 15%, always show 100% to prevent any regression
        progressValue = 100;
      } else {
        // During loading, smooth linear progress
        progressValue = Math.min(100, Math.round(base * 100));
      }
      
      setProgress(progressValue);

      const idx = Math.min(bootMessages.length - 1, Math.floor(bootMessages.length * base));
      setCurrentMessage(bootMessages[idx]);

      if (elapsed >= minDurationMs) {
        setShowAccessButton(true);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [minDurationMs, onComplete, bootMessages]);


  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-neutral-200">
      {/* Dynamic Background - same as main page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Multiple random ripple points with varying sizes and ultra-subtle colors */}
        
        {/* Center point ripples */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-3 h-3 border border-white/20 rounded-full" style={{ animation: 'ripple-expand 3.2s ease-out infinite', animationDelay: '0s' }}></div>
          <div className="absolute w-6 h-6 border border-white/15 rounded-full" style={{ animation: 'ripple-expand 3.2s ease-out infinite', animationDelay: '0.4s' }}></div>
          <div className="absolute w-12 h-12 border border-white/12 rounded-full" style={{ animation: 'ripple-expand 3.2s ease-out infinite', animationDelay: '0.8s' }}></div>
          <div className="absolute w-24 h-24 border border-white/10 rounded-full" style={{ animation: 'ripple-expand 3.2s ease-out infinite', animationDelay: '1.2s' }}></div>
          <div className="absolute w-48 h-48 border border-white/8 rounded-full" style={{ animation: 'ripple-expand 3.2s ease-out infinite', animationDelay: '1.6s' }}></div>
          <div className="absolute w-96 h-96 border border-white/6 rounded-full" style={{ animation: 'ripple-expand 3.2s ease-out infinite', animationDelay: '2s' }}></div>
        </div>

        {/* Top-left ripples */}
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-2 h-2 border border-white/18 rounded-full" style={{ animation: 'ripple-expand 4.1s ease-out infinite', animationDelay: '0.3s' }}></div>
          <div className="absolute w-5 h-5 border border-white/15 rounded-full" style={{ animation: 'ripple-expand 4.1s ease-out infinite', animationDelay: '0.7s' }}></div>
          <div className="absolute w-10 h-10 border border-white/12 rounded-full" style={{ animation: 'ripple-expand 4.1s ease-out infinite', animationDelay: '1.1s' }}></div>
          <div className="absolute w-20 h-20 border border-white/10 rounded-full" style={{ animation: 'ripple-expand 4.1s ease-out infinite', animationDelay: '1.5s' }}></div>
          <div className="absolute w-40 h-40 border border-white/8 rounded-full" style={{ animation: 'ripple-expand 4.1s ease-out infinite', animationDelay: '1.9s' }}></div>
        </div>

        {/* Top-right ripples */}
        <div className="absolute top-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-4 h-4 border border-white/16 rounded-full" style={{ animation: 'ripple-expand 3.8s ease-out infinite', animationDelay: '0.6s' }}></div>
          <div className="absolute w-8 h-8 border border-white/14 rounded-full" style={{ animation: 'ripple-expand 3.8s ease-out infinite', animationDelay: '1s' }}></div>
          <div className="absolute w-16 h-16 border border-white/12 rounded-full" style={{ animation: 'ripple-expand 3.8s ease-out infinite', animationDelay: '1.4s' }}></div>
          <div className="absolute w-32 h-32 border border-white/10 rounded-full" style={{ animation: 'ripple-expand 3.8s ease-out infinite', animationDelay: '1.8s' }}></div>
        </div>

        {/* Bottom-right ripples */}
        <div className="absolute bottom-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-3 h-3 border border-white/18 rounded-full" style={{ animation: 'ripple-expand 4.5s ease-out infinite', animationDelay: '0.2s' }}></div>
          <div className="absolute w-7 h-7 border border-white/15 rounded-full" style={{ animation: 'ripple-expand 4.5s ease-out infinite', animationDelay: '0.8s' }}></div>
          <div className="absolute w-14 h-14 border border-white/12 rounded-full" style={{ animation: 'ripple-expand 4.5s ease-out infinite', animationDelay: '1.4s' }}></div>
          <div className="absolute w-28 h-28 border border-white/10 rounded-full" style={{ animation: 'ripple-expand 4.5s ease-out infinite', animationDelay: '2s' }}></div>
          <div className="absolute w-56 h-56 border border-white/8 rounded-full" style={{ animation: 'ripple-expand 4.5s ease-out infinite', animationDelay: '2.6s' }}></div>
        </div>

        {/* Bottom-left ripples */}
        <div className="absolute bottom-1/3 left-1/5 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-2 h-2 border border-white/20 rounded-full" style={{ animation: 'ripple-expand 5.2s ease-out infinite', animationDelay: '0.4s' }}></div>
          <div className="absolute w-6 h-6 border border-white/16 rounded-full" style={{ animation: 'ripple-expand 5.2s ease-out infinite', animationDelay: '1s' }}></div>
          <div className="absolute w-12 h-12 border border-white/14 rounded-full" style={{ animation: 'ripple-expand 5.2s ease-out infinite', animationDelay: '1.6s' }}></div>
          <div className="absolute w-24 h-24 border border-white/12 rounded-full" style={{ animation: 'ripple-expand 5.2s ease-out infinite', animationDelay: '2.2s' }}></div>
          <div className="absolute w-48 h-48 border border-white/10 rounded-full" style={{ animation: 'ripple-expand 5.2s ease-out infinite', animationDelay: '2.8s' }}></div>
        </div>

        {/* Additional random ripple points */}
        <div className="absolute top-1/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-1 h-1 border border-white/22 rounded-full" style={{ animation: 'ripple-expand 3.5s ease-out infinite', animationDelay: '0.1s' }}></div>
          <div className="absolute w-4 h-4 border border-white/18 rounded-full" style={{ animation: 'ripple-expand 3.5s ease-out infinite', animationDelay: '0.5s' }}></div>
          <div className="absolute w-9 h-9 border border-white/15 rounded-full" style={{ animation: 'ripple-expand 3.5s ease-out infinite', animationDelay: '0.9s' }}></div>
          <div className="absolute w-18 h-18 border border-white/12 rounded-full" style={{ animation: 'ripple-expand 3.5s ease-out infinite', animationDelay: '1.3s' }}></div>
        </div>

        <div className="absolute top-2/3 right-1/6 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-2 h-2 border border-white/20 rounded-full" style={{ animation: 'ripple-expand 4.8s ease-out infinite', animationDelay: '0.7s' }}></div>
          <div className="absolute w-5 h-5 border border-white/16 rounded-full" style={{ animation: 'ripple-expand 4.8s ease-out infinite', animationDelay: '1.2s' }}></div>
          <div className="absolute w-11 h-11 border border-white/14 rounded-full" style={{ animation: 'ripple-expand 4.8s ease-out infinite', animationDelay: '1.7s' }}></div>
          <div className="absolute w-22 h-22 border border-white/12 rounded-full" style={{ animation: 'ripple-expand 4.8s ease-out infinite', animationDelay: '2.2s' }}></div>
        </div>

        <div className="absolute bottom-1/6 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-3 h-3 border border-white/18 rounded-full" style={{ animation: 'ripple-expand 3.7s ease-out infinite', animationDelay: '0.2s' }}></div>
          <div className="absolute w-7 h-7 border border-white/15 rounded-full" style={{ animation: 'ripple-expand 3.7s ease-out infinite', animationDelay: '0.6s' }}></div>
          <div className="absolute w-15 h-15 border border-white/12 rounded-full" style={{ animation: 'ripple-expand 3.7s ease-out infinite', animationDelay: '1s' }}></div>
          <div className="absolute w-30 h-30 border border-white/10 rounded-full" style={{ animation: 'ripple-expand 3.7s ease-out infinite', animationDelay: '1.4s' }}></div>
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
      </div>

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

      {/* Center */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center gap-6 px-6 text-center">
          {/* Multi-Δ logo */}
          <div className="relative h-[120px] w-[120px]">
            <motion.div
              className="absolute inset-0 grid place-items-center font-serif text-[96px] leading-none text-white/25 select-none"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
            >
              Δ
            </motion.div>
            <motion.div
              className="absolute inset-0 grid place-items-center font-serif text-[96px] leading-none text-white/60 select-none"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              Δ
            </motion.div>
            <motion.div
              className="absolute inset-0 grid place-items-center font-serif text-[96px] leading-none text-white select-none"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            >
              Δ
            </motion.div>
          </div>

          {/* Glitch title */}
          <div className="text-center">
            <GlitchText text="Δ RESONANTIA" className="text-xl md:text-2xl" />
            <GlitchText text="INTERNAL INTERFACE" className="text-lg md:text-xl mt-1" />
          </div>
          <div className="text-sm uppercase tracking-[0.25em] text-neutral-400">Noesis Institute</div>
          <div className="text-xs text-neutral-500 font-mono">Resonance: An Experimental Interactive Novel</div>

          {/* Progress / Stability or Access Button */}
          {!showAccessButton ? (
            <div className="w-[min(560px,90vw)]">
              <div className="mb-2 flex items-center justify-between text-xs text-neutral-400">
                <span>Boot sequence</span>
                <motion.span
                  animate={{ 
                    opacity: hasStartedLoading ? 1 : 0.6,
                    scale: hasStartedLoading ? 1 : 0.95
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {progress}%
                </motion.span>
              </div>
              <div className="relative h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-white/70"
                  animate={{ 
                    width: `${progress}%`,
                    opacity: hasStartedLoading ? 1 : 0.3
                  }}
                  transition={{ 
                    width: { ease: "easeOut", duration: 0.3 },
                    opacity: { duration: 0.5 }
                  }}
                />
              </div>
              <div className="mt-2 text-[11px] text-neutral-500 h-4 flex items-center">
                <motion.span 
                  className="font-mono"
                  animate={{ 
                    opacity: hasStartedLoading ? 1 : 0.7
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {currentMessage}
                </motion.span>
              </div>
            </div>
          ) : (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                x: isGlitching ? [0, -2, 2, -1, 1, 0] : 0,
                scale: isGlitching ? [1, 1.02, 0.98, 1] : 1
              }}
              transition={{ 
                opacity: { duration: 1.2, ease: "easeOut" },
                x: isGlitching ? { duration: 0.3, repeat: 2 } : undefined,
                scale: isGlitching ? { duration: 0.3, repeat: 2 } : undefined
              }}
              onClick={() => {
                setIsGlitching(true);
                setTimeout(() => {
                  onComplete && onComplete();
                }, 600);
              }}
              className={`relative px-8 py-3 bg-gradient-to-r from-white/5 to-white/10 border border-white/20 text-white font-mono text-sm hover:from-white/10 hover:to-white/15 hover:border-white/40 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 tracking-widest uppercase backdrop-blur-sm group overflow-hidden ${
                isGlitching ? 'text-red-400 border-red-400/60 shadow-red-400/20' : ''
              }`}
            >
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              
              {/* Button text */}
              <span className="relative z-10">
                {isGlitching ? 'ACCESS' : 'Access'}
              </span>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30" />
            </motion.button>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex items-center justify-center text-[11px] uppercase tracking-[0.2em] text-neutral-500">
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
          <span className="mr-3">Visitor ID: ⊚-████</span>
          <span>Permission: MEDIUM</span>
        </div>
      </div>

      {/* Warning at very bottom */}
      <div className="absolute bottom-2 left-0 right-0 z-20 flex items-center justify-center text-[11px] text-red-400">
        WARNING: Maintain hallucination levels at all times during use.
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.75)_100%)]" />
    </div>
  );
}

function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`relative select-none font-mono ${className}`}>
      <motion.span
        className="relative z-20"
        animate={{ x: [0, 0.2, -0.2, 0], y: [0, -0.2, 0.2, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      >
        {text}
      </motion.span>
      <motion.span
        aria-hidden
        className="absolute left-0 top-0 z-10 text-red-400/40 blur-[0.4px]"
        animate={{ x: [-1, 0, -1], y: [0, -0.6, 0] }}
        transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }}
      >
        {text}
      </motion.span>
      <motion.span
        aria-hidden
        className="absolute left-0 top-0 z-0 text-cyan-300/40 blur-[0.4px]"
        animate={{ x: [1, 0, 1], y: [0, 0.6, 0] }}
        transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut" }}
      >
        {text}
      </motion.span>
    </div>
  );
}
