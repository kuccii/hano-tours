"use client"

import React from 'react';
import { useAnimation } from '../lib/useAnimation';

type AnimationType = 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'cardReveal' | 'sectionReveal' | 'imageReveal';

interface AnimatedElementProps {
  animationType: AnimationType;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  scale?: number;
  as?: React.ElementType;
}

export const AnimatedElement = React.forwardRef<HTMLElement, AnimatedElementProps>(
  ({ animationType, children, className, delay, scale, as: Component = 'div' }, ref) => {
    const elementRef = useAnimation(animationType, {
      delay,
      scale,
    });

    return (
      <Component ref={elementRef} className={className}>
        {children}
      </Component>
    );
  }
);

// Helper components for common animation patterns
export const AnimatedCard = React.forwardRef<HTMLElement, Omit<AnimatedElementProps, 'animationType'>>(
  (props, ref) => <AnimatedElement {...props} animationType="cardReveal" ref={ref} />
);

export const AnimatedSection = React.forwardRef<HTMLElement, Omit<AnimatedElementProps, 'animationType'>>(
  (props, ref) => <AnimatedElement {...props} animationType="sectionReveal" ref={ref} />
);

export const AnimatedImage = React.forwardRef<HTMLElement, Omit<AnimatedElementProps, 'animationType'>>(
  (props, ref) => <AnimatedElement {...props} animationType="imageReveal" ref={ref} />
);

AnimatedElement.displayName = 'AnimatedElement'; 