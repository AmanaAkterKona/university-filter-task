'use client';
import { motion } from 'framer-motion';
import { FilterInputs } from '../types/university';
import { COUNTRIES } from '../data/universities';

const N = {
  navy: '#0a1f44', navyMid: '#1a3a6b', blue: '#1e4d8c',
  blueBright: '#2563b0', dim: 'rgba(10,31,68,0.50)', border: 'rgba(30,77,140,0.22)',
};

interface Props {
  filters: FilterInputs;
  onChange: (f: FilterInputs) => void;
  onSearch: () => void;
}

const AnimBorder = ({ reverse = false }: { reverse?: boolean }) => (
  <motion.div style={{
    position: 'absolute', [reverse ? 'bottom' : 'top']: 0,
    left: 0, right: 0, height: 1.5,
    background: `linear-gradient(90deg, transparent, ${N.blueBright}, ${N.navyMid}, ${N.blueBright}, transparent)`,
    backgroundSize: '200% 100%',
  }}
    animate={{ backgroundPosition: reverse ? ['200% 0','0% 0'] : ['0% 0','200% 0'] }}
    transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
  />
);

export default function FilterForm({ filters, onChange, onSearch }: Props) {
  const handleChange = (field: keyof FilterInputs, value: string) =>
    onChange({ ...filters, [field]: value });

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 16px', borderRadius: 12, fontSize: 14,
    background: 'rgba(30,77,140,0.05)', border: `1.5px solid ${N.border}`,
    color: N.navy, outline: 'none', fontFamily: 'inherit', fontWeight: 600,
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 10, fontWeight: 800, textTransform: 'uppercase' as const,
    letterSpacing: '0.18em', color: N.dim, display: 'block', marginBottom: 8,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      style={{
        borderRadius: 24, padding: '40px 44px', position: 'relative', overflow: 'hidden',
        background: '#ffffff',
        boxShadow: '0 0 0 1px rgba(30,77,140,0.12), 0 32px 80px rgba(10,31,68,0.09)',
      }}
    >
      <AnimBorder />
      <div style={{ position: 'absolute', top: 0, left: 0, width: 220, height: 220, borderRadius: '50%', filter: 'blur(80px)', opacity: 0.07, background: `radial-gradient(circle, ${N.blueBright}, transparent 70%)`, transform: 'translate(-30%,-30%)', pointerEvents: 'none' }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28, position: 'relative', zIndex: 1 }}>
        <div style={{ width: 42, height: 42, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(135deg, ${N.navyMid}, ${N.blue})`, boxShadow: '0 4px 14px rgba(30,77,140,0.22)' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>
        <div>
          <h2 style={{ color: N.navy, fontWeight: 800, fontSize: 19, margin: 0 }}>University Finder</h2>
          <p style={{ color: N.dim, fontSize: 12, margin: '4px 0 0', fontWeight: 600 }}>
            Filter by Country · CGPA · IELTS
          </p>
        </div>
      </div>

      {/* Step indicators */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, position: 'relative', zIndex: 1 }}>
        {[
          { num: 1, label: 'Basic Filter' },
          { num: 2, label: 'View Results' },
          { num: 3, label: 'Field & Subject' },
        ].map((step, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{
                width: 24, height: 24, borderRadius: '50%', fontSize: 11, fontWeight: 900,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: i === 0
                  ? `linear-gradient(135deg, ${N.navyMid}, ${N.blueBright})`
                  : 'rgba(30,77,140,0.08)',
                color: i === 0 ? '#fff' : N.dim,
                border: i === 0 ? 'none' : `1.5px solid rgba(30,77,140,0.18)`,
              }}>{step.num}</div>
              <span style={{ fontSize: 11, color: i === 0 ? N.navy : N.dim, fontWeight: i === 0 ? 700 : 500 }}>
                {step.label}
              </span>
            </div>
            {i < 2 && <div style={{ width: 20, height: 1.5, background: 'rgba(30,77,140,0.15)', borderRadius: 1 }} />}
          </div>
        ))}
      </div>

      {/* Inputs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 24, position: 'relative', zIndex: 1 }}>
        <div>
          <label style={labelStyle}>Country</label>
          <select value={filters.country} onChange={e => handleChange('country', e.target.value)}
            style={{ ...inputStyle, cursor: 'pointer' }}
            onFocus={e => { e.target.style.border = `1.5px solid ${N.blueBright}`; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,176,0.10)'; }}
            onBlur={e => { e.target.style.border = `1.5px solid ${N.border}`; e.target.style.boxShadow = 'none'; }}>
            <option value="">All Countries</option>
            {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label style={labelStyle}>Your CGPA (out of 4.0)</label>
          <input type="number" min="0" max="4.0" step="0.01" placeholder="e.g. 3.2"
            value={filters.cgpa} onChange={e => handleChange('cgpa', e.target.value)}
            style={inputStyle}
            onFocus={e => { e.target.style.border = `1.5px solid ${N.blueBright}`; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,176,0.10)'; }}
            onBlur={e => { e.target.style.border = `1.5px solid ${N.border}`; e.target.style.boxShadow = 'none'; }} />
        </div>
        <div>
          <label style={labelStyle}>Your IELTS Score</label>
          <input type="number" min="0" max="9.0" step="0.5" placeholder="e.g. 6.5"
            value={filters.ielts} onChange={e => handleChange('ielts', e.target.value)}
            style={inputStyle}
            onFocus={e => { e.target.style.border = `1.5px solid ${N.blueBright}`; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,176,0.10)'; }}
            onBlur={e => { e.target.style.border = `1.5px solid ${N.border}`; e.target.style.boxShadow = 'none'; }} />
        </div>
      </div>

      {/* Info hint */}
      <div style={{
        marginBottom: 20, padding: '10px 16px', borderRadius: 12,
        background: 'rgba(37,99,176,0.05)', border: '1px dashed rgba(37,99,176,0.20)',
        display: 'flex', alignItems: 'center', gap: 10,
        position: 'relative', zIndex: 1,
      }}>
        <span style={{ fontSize: 16 }}>💡</span>
        <p style={{ fontSize: 12, color: N.dim, fontWeight: 600, margin: 0, lineHeight: 1.5 }}>
          After searching, click <strong style={{ color: N.blueBright }}>View Details</strong> on any university to filter by <strong style={{ color: N.blueBright }}>Field & Subject</strong>.
        </p>
      </div>

      {/* Search Button */}
      <motion.button whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.98 }} onClick={onSearch}
        style={{
          width: '100%', padding: '14px', borderRadius: 14, border: 'none', cursor: 'pointer',
          fontFamily: 'inherit', fontSize: 15, fontWeight: 800,
          background: `linear-gradient(135deg, ${N.navyMid} 0%, ${N.blueBright} 60%, ${N.navyMid} 100%)`,
          color: '#ffffff',
          boxShadow: '0 6px 24px rgba(37,99,176,0.30)',
          position: 'relative', overflow: 'hidden', zIndex: 1,
        }}>
        <motion.div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)',
          backgroundSize: '200% 100%',
        }}
          animate={{ backgroundPosition: ['200% 0','-200% 0'] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
        />
        <span style={{ position: 'relative' }}>Search Universities →</span>
      </motion.button>

      <AnimBorder reverse />
    </motion.div>
  );
}