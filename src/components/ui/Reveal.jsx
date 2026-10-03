import { motion, useReducedMotion } from 'framer-motion';

/** Fades and slides its children in when they scroll into view. `delay` is in seconds. */
export default function Reveal({ children, delay = 0, y = 24, className = '', as = 'div', once = true, ...rest }) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
