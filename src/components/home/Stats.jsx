import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 7, suffix: '+', label: 'Years of Excellence', description: 'Decades of pharmaceutical expertise' },
  { value: 500, suffix: '+', label: 'Trusted Clients', description: 'Pan India business partners' },
  { value: 80, suffix: '+', label: 'Dedicated Staff', description: 'Skilled professionals across India' },
  { value: 500, suffix: '+', label: 'Formulations', description: 'Comprehensive product portfolio' },
];

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [start, target, duration]);
  return count;
}

function StatCard({ value, suffix, label, description, start }) {
  const count = useCountUp(value, 2000, start);
  return (
    <div className="text-center px-8 py-6 flex-1 min-w-[160px]">
      <div className="font-display text-5xl md:text-6xl font-bold text-white mb-2">
        {count}<span className="text-teal-400">{suffix}</span>
      </div>
      <div className="font-semibold text-white text-base mb-1">{label}</div>
      <div className="text-white/50 text-sm">{description}</div>
    </div>
  );
}

export default function Stats() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center divide-x divide-white/20">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} start={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
