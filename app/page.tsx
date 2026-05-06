'use client';
import { motion, AnimatePresence } from 'framer-motion';
import FilterForm from './components/FilterForm';
import ResultsList from './components/ResultsList';
import { useUniversityFilter } from './hooks/useUniversityFilter';

const N = {
  navy:    '#0a1f44',
  navyMid: '#1a3a6b',
  blue:    '#1e4d8c',
  blueBright: '#2563b0',
  dim:     'rgba(10,31,68,0.55)',
  border:  'rgba(30,77,140,0.22)',
};

const universityImages = [
  "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=95",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=95",
  "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=700&q=95",
];

export default function HomePage() {
  const { filters, setFilters, results, searched, search } = useUniversityFilter();

  return (
    <main style={{
      background: '#fafafa',
      minHeight: '100vh', padding: '80px 20px',
      fontFamily: 'system-ui, sans-serif',
      position: 'relative', overflow: 'hidden',
    }}>

      {/* Subtle ambient */}
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

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          {/* Icon badge */}
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

          {/* Eyebrow label */}
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
              color: N.blueBright,
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

        {/* ── Filter + Images ── */}
        <AnimatePresence>
          {!searched && (
            <motion.div key="filter"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{ position: 'relative' }}
            >
              {/* Dashed decoration */}
              <div style={{
                position: 'absolute', top: 60, left: '42%', right: -8, bottom: -24,
                border: `1px dashed ${N.border}`,
                borderRadius: 24, pointerEvents: 'none', zIndex: 0,
              }}>
                {[{ top: 10, left: 10 }, { top: 10, right: 10 }, { bottom: 10, left: 10 }, { bottom: 10, right: 10 }].map((pos, i) => (
                  <div key={i} style={{ position: 'absolute', width: 7, height: 7, borderRadius: '50%', background: N.blueBright, opacity: 0.5, ...pos }} />
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 36, alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>

                {/* LEFT */}
                <div style={{ marginTop: 120 }}>
                  <FilterForm filters={filters} onChange={setFilters} onSearch={search} />

                  {/* Stats */}
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

                {/* RIGHT: Images */}
                <div style={{ position: 'relative', paddingTop: 60 }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, height: 520 }}
                  >
                    <motion.div whileHover={{ scale: 1.02 }}
                      style={{ gridRow: '1/3', borderRadius: 20, overflow: 'hidden', position: 'relative', boxShadow: '0 12px 40px rgba(10,31,68,0.18)' }}>
                      <img src={universityImages[0]} alt="Campus"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.07)')}
                        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,31,68,0.30) 0%, transparent 55%)' }} />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }}
                      style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', boxShadow: '0 12px 40px rgba(10,31,68,0.14)' }}>
                      <img src={universityImages[1]} alt="University"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.07)')}
                        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,31,68,0.22) 0%, transparent 55%)' }} />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }}
                      style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', boxShadow: '0 12px 40px rgba(10,31,68,0.14)' }}>
                      <img src={universityImages[2]} alt="Students"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.07)')}
                        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,31,68,0.22) 0%, transparent 55%)' }} />
                    </motion.div>
                  </motion.div>

                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
                    style={{
                      position: 'absolute', bottom: -20, left: '50%', transform: 'translateX(-50%)',
                      background: '#ffffff',
                      border: `1.5px solid ${N.border}`,
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
        </AnimatePresence>

        {/* ── Results ── */}
        <AnimatePresence>
          {searched && (
            <motion.div key="results"
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              {/* Filter pill bar */}
              <div style={{
                background: '#ffffff',
                border: `1px solid ${N.border}`,
                borderRadius: 16, padding: '14px 24px',
                display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32,
                boxShadow: '0 4px 20px rgba(10,31,68,0.07)',
              }}>
                <span style={{ color: N.dim, fontSize: 12, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Active Filters</span>
                {filters.country && (
                  <span style={{ fontSize: 12, padding: '4px 13px', borderRadius: 50, background: 'rgba(30,77,140,0.08)', border: `1px solid ${N.border}`, color: N.navy, fontWeight: 700 }}>
                    🌍 {filters.country}
                  </span>
                )}
                {filters.cgpa && (
                  <span style={{ fontSize: 12, padding: '4px 13px', borderRadius: 50, background: 'rgba(30,77,140,0.08)', border: `1px solid ${N.border}`, color: N.navy, fontWeight: 700 }}>
                    CGPA {filters.cgpa}
                  </span>
                )}
                {filters.ielts && (
                  <span style={{ fontSize: 12, padding: '4px 13px', borderRadius: 50, background: 'rgba(30,77,140,0.08)', border: `1px solid ${N.border}`, color: N.navy, fontWeight: 700 }}>
                    IELTS {filters.ielts}
                  </span>
                )}
                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={() => window.location.reload()}
                  style={{
                    marginLeft: 'auto', padding: '6px 18px', borderRadius: 50,
                    background: N.navy, border: 'none',
                    color: '#fff', fontSize: 12, fontWeight: 700,
                    cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  ← New Search
                </motion.button>
              </div>

              <ResultsList results={results} searched={searched} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}