"use client"

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type AnimationType = 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'cardReveal' | 'sectionReveal' | 'imageReveal';

interface AnimationOptions {
  delay?: number;
  duration?: number;
  ease?: string;
  scale?: number;
  opacity?: number;
  y?: number | string;
  x?: number | string;
  scrollTrigger?: boolean;
  start?: string;
  end?: string;
  markers?: boolean;
  scrub?: boolean | number;
}

export const useAnimation = (
  animationType: AnimationType,
  options: AnimationOptions = {}
) => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!element.current) return;

    const defaults = {
      delay: 0,
      duration: 0.6,
      ease: 'power2.out',
      opacity: 0,
      scale: 1,
      y: 0,
      x: 0,
      scrollTrigger: true,
      start: 'top 80%',
      end: 'bottom 20%',
      markers: false,
      scrub: false,
    };

    const settings = { ...defaults, ...options };
    let animation: gsap.core.Tween;

    const createAnimation = () => {
      const baseConfig = {
        opacity: 1,
        duration: settings.duration,
        delay: settings.delay,
        ease: settings.ease,
      };

      const scrollConfig = settings.scrollTrigger ? {
        scrollTrigger: {
          trigger: element.current,
          start: settings.start,
          end: settings.end,
          markers: settings.markers,
          scrub: settings.scrub,
        }
      } : {};

      switch (animationType) {
        case 'fadeIn':
          animation = gsap.fromTo(element.current,
            { opacity: 0 },
            { ...baseConfig, ...scrollConfig }
          );
          break;

        case 'fadeInUp':
          animation = gsap.fromTo(element.current,
            { opacity: 0, y: 50 },
            { ...baseConfig, y: 0, ...scrollConfig }
          );
          break;

        case 'fadeInDown':
          animation = gsap.fromTo(element.current,
            { opacity: 0, y: -50 },
            { ...baseConfig, y: 0, ...scrollConfig }
          );
          break;

        case 'fadeInLeft':
          animation = gsap.fromTo(element.current,
            { opacity: 0, x: -50 },
            { ...baseConfig, x: 0, ...scrollConfig }
          );
          break;

        case 'fadeInRight':
          animation = gsap.fromTo(element.current,
            { opacity: 0, x: 50 },
            { ...baseConfig, x: 0, ...scrollConfig }
          );
          break;

        case 'cardReveal':
          animation = gsap.fromTo(element.current,
            { opacity: 0, y: 30, scale: 0.95 },
            { ...baseConfig, y: 0, scale: 1, ...scrollConfig }
          );
          break;

        case 'sectionReveal':
          animation = gsap.fromTo(element.current,
            { opacity: 0, y: 100 },
            { ...baseConfig, y: 0, ...scrollConfig }
          );
          break;

        case 'imageReveal':
          animation = gsap.fromTo(element.current,
            { opacity: 0, scale: 1.1, y: 30 },
            { ...baseConfig, scale: 1, y: 0, ...scrollConfig }
          );
          break;

        default:
          animation = gsap.fromTo(element.current,
            { opacity: 0 },
            { ...baseConfig, ...scrollConfig }
          );
      }
    };

    createAnimation();

    return () => {
      if (animation) {
        animation.kill();
      }
    };
  }, [animationType, options]);

  return element;
}; 