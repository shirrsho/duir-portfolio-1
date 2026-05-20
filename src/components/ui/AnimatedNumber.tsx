import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring, animate } from 'framer-motion';

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedNumber({ value, suffix = '', duration = 2, className = '' }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(0);
  const spring = useSpring(count, { stiffness: 50, damping: 15 });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration });
      return controls.stop;
    }
  }, [isInView, value, duration, count]);

  useEffect(() => {
    return spring.on('change', (v) => {
      setDisplay(Math.round(v).toLocaleString());
    });
  }, [spring]);

  return (
    <span ref={ref} className={className}>
      {display}{suffix}
    </span>
  );
}
