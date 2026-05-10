'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FilterForm from './components/FilterForm';
import ResultsList from './components/ResultsList';
import { useUniversityFilter } from './hooks/useUniversityFilter';

const N = {
  navy:       '#0a1f44',
  navyMid:    '#1a3a6b',
  blue:       '#1e4d8c',
  blueBright: '#2563b0',
  dim:        'rgba(10,31,68,0.55)',
  border:     'rgba(30,77,140,0.22)',
};

const SLIDE_SETS = [
  [
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=95",
    "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&q=95",
    "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=95",
  ],
  [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=95",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=95",
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=700&q=95",
  ],
  [
    "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=95",
    "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=700&q=95",
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=95",
  ],
];

function ImageGallery() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState<number | null>(null);
  const total = SLIDE_SETS.length;

  useEffect(() => {
    SLIDE_SETS.flat().forEach(src => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(c => {
        setPrev(c);
        return (c + 1) % total;
      });
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const set     = SLIDE_SETS[current];
  const prevSet = prev !== null ? SLIDE_SETS[prev] : null;

  const boxStyle = (spanRow: boolean): React.CSSProperties => ({
    borderRadius: 20,
    overflow:     'hidden',
    position:     'relative',
    background:   '#dde8f5',
    boxShadow:    spanRow
      ? '0 12px 40px rgba(10,31,68,0.18)'
      : '0 8px 28px rgba(10,31,68,0.12)',
  });

  const overlay: React.CSSProperties = {
    position:   'absolute', inset: 0, zIndex: 2,
    background: 'linear-gradient(to top, rgba(10,31,68,0.32) 0%, transparent 55%)',
    pointerEvents: 'none',
  };

  return (
    <div style={{
      display:             'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows:    '254px 254px',
      gap:                 12,
      width:               '100%',
    }}>

      {/* Big left — spans 2 rows */}
      <div style={{ ...boxStyle(true), gridColumn: '1', gridRow: '1 / 3' }}>
        <AnimatePresence>
          {prevSet && (
            <motion.img key={`p0-${prev}`} src={prevSet[0]} alt=""
              initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
            />
          )}
        </AnimatePresence>
        <motion.img key={`c0-${current}`} src={set[0]} alt=""
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
        />
        <div style={overlay} />
        {/* Live badge */}
        <div style={{ position: 'absolute', top: 14, left: 14, zIndex: 4, background: 'rgba(10,31,68,0.65)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 50, padding: '5px 14px', display: 'flex', alignItems: 'center', gap: 7 }}>
          <motion.div style={{ width: 6, height: 6, borderRadius: '50%', background: '#60a5fa' }}
            animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
          <span style={{ color: '#fff', fontSize: 11, fontWeight: 700 }}>Live Preview</span>
        </div>
        {/* Slide dots */}
        <div style={{ position: 'absolute', bottom: 14, left: 16, zIndex: 4, display: 'flex', gap: 6 }}>
          {SLIDE_SETS.map((_, i) => (
            <motion.div key={i}
              animate={{ width: i === current ? 22 : 6, opacity: i === current ? 1 : 0.38 }}
              transition={{ duration: 0.35 }}
              onClick={() => { setPrev(current); setCurrent(i); }}
              style={{ height: 5, borderRadius: 3, background: '#fff', cursor: 'pointer' }}
            />
          ))}
        </div>
      </div>

      {/* Top right */}
      <div style={{ ...boxStyle(false), gridColumn: '2', gridRow: '1' }}>
        <AnimatePresence>
          {prevSet && (
            <motion.img key={`p1-${prev}`} src={prevSet[1]} alt=""
              initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
            />
          )}
        </AnimatePresence>
        <motion.img key={`c1-${current}`} src={set[1]} alt="University"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.1 }}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
        />
        <div style={overlay} />
      </div>

      {/* Bottom right */}
      <div style={{ ...boxStyle(false), gridColumn: '2', gridRow: '2' }}>
        <AnimatePresence>
          {prevSet && (
            <motion.img key={`p2-${prev}`} src={prevSet[2]} alt=""
              initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
            />
          )}
        </AnimatePresence>
        <motion.img key={`c2-${current}`} src={set[2]} alt="Students"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.2 }}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
        />
        <div style={overlay} />
      </div>
    </div>
  );
}

export default function HomePage() {
  const { filters, setFilters, results, searched, search, goBack, applyFieldSubjectFilter } = useUniversityFilter();

  return (
    <main style={{
      background: '#fafafa',
      minHeight: '100vh', padding: '80px 20px',
      fontFamily: 'system-ui, sans-serif',
      position: 'relative', overflow: 'hidden',
    }}>

      {/* Ambient background */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <motion.div style={{
          position: 'absolute', top: '-20%', left: '-10%', width: '55%', height: '55%',
          borderRadius: '50%', filter: 'blur(140px)',
          background: 'radial-gradient(circle, rgba(30,77,140,0.07), transparent 70%)',
        }}
          animate={{ scale: [1, 1.15, 1], x: [0, 40, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div style={{
          position: 'absolute', bottom: '-20%', right: '-10%', width: '55%', height: '55%',
          borderRadius: '50%', filter: 'blur(140px)',
          background: 'radial-gradient(circle, rgba(10,31,68,0.06), transparent 70%)',
        }}
          animate={{ scale: [1, 1.2, 1], x: [0, -40, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(30,77,140,0.035) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }} />
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 68, height: 68, borderRadius: '50%', marginBottom: 22,
            background: `linear-gradient(135deg, ${N.navyMid}, ${N.blue})`,
            boxShadow: '0 8px 32px rgba(30,77,140,0.28), inset 0 1px 0 rgba(255,255,255,0.12)',
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ width: 32, height: 1.5, background: N.blueBright, borderRadius: 1 }} />
            <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase' as const, color: N.blueBright }}>
              Global University Search
            </span>
            <div style={{ width: 32, height: 1.5, background: N.blueBright, borderRadius: 1 }} />
          </div>

          <h1 style={{
            fontSize: 'clamp(32px,4.5vw,56px)', fontWeight: 900,
            color: N.navy, margin: '0 0 18px', lineHeight: 1.08, letterSpacing: '-1px',
          }}>
            Find Your{' '}
            <span style={{
              background: `linear-gradient(135deg, ${N.navyMid}, ${N.blueBright})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Perfect University
            </span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: N.dim, maxWidth: 480, margin: '0 auto', lineHeight: 1.75, fontWeight: 500 }}>
            Filter 120+ universities across 12 countries by CGPA, IELTS score, and country preference.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">

          {/* Filter page */}
          {!searched && (
            <motion.div key="filter-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              style={{ position: 'relative' }}
            >
              {/* Dashed decoration */}
              <div style={{
                position: 'absolute', top: 0, left: '42%', right: -8, bottom: -24,
                border: `1px dashed ${N.border}`,
                borderRadius: 24, pointerEvents: 'none', zIndex: 0,
              }}>
                {[{ top: 10, left: 10 }, { top: 10, right: 10 }, { bottom: 10, left: 10 }, { bottom: 10, right: 10 }].map((pos, i) => (
                  <div key={i} style={{ position: 'absolute', width: 7, height: 7, borderRadius: '50%', background: N.blueBright, opacity: 0.5, ...pos }} />
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 36, alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>

                {/* LEFT: Form */}
               <div style={{ marginTop: 60 }}>
                  <FilterForm filters={filters} onChange={setFilters} onSearch={search} />
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                    style={{ display: 'flex', gap: 40, marginTop: 28, paddingLeft: 4 }}
                  >
                    {[
                      { label: 'Universities Listed', value: '120+' },
                      { label: 'Countries Covered',   value: '12'   },
                      { label: 'Fields of Study',     value: '30+'  },
                    ].map((s, i) => (
                      <div key={i}>
                        <div style={{ color: N.navy, fontWeight: 900, fontSize: 26, letterSpacing: '-0.5px' }}>{s.value}</div>
                        <div style={{ color: N.dim, fontSize: 12, fontWeight: 600, marginTop: 2 }}>{s.label}</div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* RIGHT: Slideshow */}
<div style={{ position: 'relative', paddingTop: 0, marginTop: 0 }}>                  <ImageGallery />
                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
                    style={{
                      position: 'absolute', bottom: -18, left: '50%', transform: 'translateX(-50%)',
                      background: '#ffffff', border: `1.5px solid ${N.border}`,
                      borderRadius: 50, padding: '7px 22px',
                      display: 'flex', alignItems: 'center', gap: 9,
                      whiteSpace: 'nowrap', zIndex: 10,
                      boxShadow: '0 4px 20px rgba(10,31,68,0.12)',
                    }}>
                    <motion.div
                      style={{ width: 8, height: 8, borderRadius: '50%', background: N.blueBright }}
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span style={{ color: N.navy, fontSize: 12, fontWeight: 800 }}>120+ Universities Ready</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Results page */}
          {searched && (
            <motion.div key="results-section"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <ResultsList
                results={results}
                searched={searched}
                filters={filters}
                onBack={goBack}
                onApplyFilter={applyFieldSubjectFilter}
              />
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </main>
  );
}