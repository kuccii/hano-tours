"use client"

import React from 'react'

export const BackgroundShapes = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Morphing Primary Circle */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl animate-morphing" />
      
      {/* Floating Secondary Circle */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-lg rotate-45 animate-float" />
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-secondary/10 rounded-full animate-float-delayed" style={{ animation: 'moveRightLeft 18s linear infinite' }}/>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-accent/10 rounded-lg -rotate-12 animate-float" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl animate-floating" />
      
      {/* Glowing Accent Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl animate-glow" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20 animate-gradient-shift" />
      
      {/* Moving Dots Pattern */}
      <div className="absolute inset-0 dots-pattern opacity-20">
        <div className="absolute w-full h-2 bg-primary/5" style={{ animation: 'moveLeftRight 15s linear infinite' }} />
        <div className="absolute w-full h-2 bg-secondary/5" style={{ animation: 'moveRightLeft 18s linear infinite' }} />
        <div className="absolute w-2 h-full bg-accent/5" style={{ animation: 'moveTopBottom 20s linear infinite' }} />
      </div>
      
      {/* Animated Lines Pattern */}
      <div className="absolute inset-0 lines-pattern opacity-10 animate-gradient-shift" />
      
      {/* Interactive Floating Shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-lg rotate-45 animate-floating glass-morphic" 
           style={{ animationDelay: '0s', animationDuration: '15s' }} />
      
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-secondary/10 rounded-full animate-floating glass-morphic" 
           style={{ animationDelay: '2s', animationDuration: '10s' }} />
      
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-accent/10 rounded-lg -rotate-12 animate-floating glass-morphic" 
           style={{ animationDelay: '1s', animationDuration: '12s' }} />

      {/* Spinning Shapes */}
      <div className="absolute top-1/4 left-1/3 w-20 h-20 bg-primary/10 rounded-lg"
           style={{ animation: 'spin 15s linear infinite, float 8s ease-in-out infinite' }} />
           
      <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-secondary/10 rounded-full"
           style={{ animation: 'spin 20s linear infinite, float 10s ease-in-out infinite', animationDelay: '2s' }} />

      {/* Moving Dots */}
      <div className="absolute h-2 w-2 bg-accent/20 rounded-full"
           style={{ animation: 'moveLeftRight 8s linear infinite', top: '30%' }} />
      <div className="absolute h-2 w-2 bg-primary/20 rounded-full"
           style={{ animation: 'moveRightLeft 12s linear infinite', top: '60%' }} />
      <div className="absolute h-2 w-2 bg-secondary/20 rounded-full"
           style={{ animation: 'moveTopBottom 10s linear infinite', left: '40%' }} />
      
      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/80 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/80 to-transparent" />
    </div>
  )
} 