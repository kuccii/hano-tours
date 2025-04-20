"use client"

import React from 'react'

export const BackgroundShapes = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Simple dark background */}
      <div className="absolute inset-0 bg-background" />
    </div>
  )
} 