'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FilterInputs } from '../types/university';
import { COUNTRIES, ALL_FIELDS, FIELD_SUBJECTS } from '../data/universities';

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
  const [showFields, setShowFields] = useState(false);

  const handleChange = (field: keyof FilterInputs, value: string) =>
    onChange({ ...filters, [field]: value });

  const toggleField = (field: string) => {
    const current = filters.selectedFields;
    const updated  = current.includes(field)
      ? current.filter(f => f !== field)
      : [...current, field];

    // Remove subjects that no longer belong to selected fields
    const validSubjects = updated.flatMap(f => FIELD_SUBJECTS[f] || []);
    const filteredSubjects = filters.selectedSubjects.filter(s => validSubjects.includes(s));

    onChange({ ...filters, selectedFields: updated, selectedSubjects: filteredSubjects });
  };

  const toggleSubject = (subject: string) => {
    const current = filters.selectedSubjects;
    const updated  = current.includes(subject)
      ? current.filter(s => s !== subject)
      : [...current, subject];
    onChange({ ...filters, selectedSubjects: updated });
  };

  // Subjects available based on selected fields
  const availableSubjects = filters.selectedFields.length > 0
    ? filters.selectedFields.flatMap(f => FIELD_SUBJECTS[f] || [])
    : [];

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 16px', borderRadius: 12, fontSize: 14,
    background: 'rgba(30,77,140,0.05)', border: `1.5px solid ${N.border}`,
    color: N.navy, outline: 'none', fontFamily: 'inherit', fontWeight: 600,
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 10, fontWeight: 800, textTransform: 'uppercase',
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
          <p style={{ color: N.dim, fontSize: 12, margin: '4px 0 0', fontWeight: 600 }}>Filter by Country · CGPA · IELTS · Field · Subject</p>
        </div>
      </div>

      {/* Row 1: Country, CGPA, IELTS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 20, position: 'relative', zIndex: 1 }}>
        <div>
          <label style={labelStyle}>Country</label>
          <select value={filters.country} onChange={e => handleChange('country', e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}
            onFocus={e => { e.target.style.border = `1.5px solid ${N.blueBright}`; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,176,0.10)'; }}
            onBlur={e => { e.target.style.border = `1.5px solid ${N.border}`; e.target.style.boxShadow = 'none'; }}>
            <option value="">All Countries</option>
            {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label style={labelStyle}>Your CGPA (out of 4.0)</label>
          <input type="number" min="0" max="4.0" step="0.01" placeholder="e.g. 3.2"
            value={filters.cgpa} onChange={e => handleChange('cgpa', e.target.value)} style={inputStyle}
            onFocus={e => { e.target.style.border = `1.5px solid ${N.blueBright}`; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,176,0.10)'; }}
            onBlur={e => { e.target.style.border = `1.5px solid ${N.border}`; e.target.style.boxShadow = 'none'; }} />
        </div>
        <div>
          <label style={labelStyle}>Your IELTS Score</label>
          <input type="number" min="0" max="9.0" step="0.5" placeholder="e.g. 6.5"
            value={filters.ielts} onChange={e => handleChange('ielts', e.target.value)} style={inputStyle}
            onFocus={e => { e.target.style.border = `1.5px solid ${N.blueBright}`; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,176,0.10)'; }}
            onBlur={e => { e.target.style.border = `1.5px solid ${N.border}`; e.target.style.boxShadow = 'none'; }} />
        </div>
      </div>

      {/* Row 2: Field Selection */}
      <div style={{ position: 'relative', zIndex: 1, marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <label style={labelStyle}>Field of Study
            {filters.selectedFields.length > 0 && (
              <span style={{ marginLeft: 8, background: N.blueBright, color: '#fff', borderRadius: 50, padding: '1px 8px', fontSize: 10 }}>
                {filters.selectedFields.length} selected
              </span>
            )}
          </label>
          <button onClick={() => setShowFields(!showFields)}
            style={{ fontSize: 11, color: N.blueBright, fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
            {showFields ? 'Hide ▲' : 'Show All ▼'}
          </button>
        </div>

        {/* Selected field pills */}
        {filters.selectedFields.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 6, marginBottom: 10 }}>
            {filters.selectedFields.map(f => (
              <span key={f} onClick={() => toggleField(f)} style={{
                fontSize: 12, padding: '5px 12px', borderRadius: 50, fontWeight: 700, cursor: 'pointer',
                background: N.navyMid, color: '#fff', border: `1.5px solid ${N.blueBright}`,
              }}>
                {f} ✕
              </span>
            ))}
          </div>
        )}

        <AnimatePresence>
          {showFields && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
              style={{ overflow: 'hidden' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8, padding: '12px', borderRadius: 14, background: 'rgba(30,77,140,0.04)', border: `1px solid ${N.border}` }}>
                {ALL_FIELDS.map(field => {
                  const active = filters.selectedFields.includes(field);
                  return (
                    <motion.button key={field} whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}
                      onClick={() => toggleField(field)}
                      style={{
                        padding: '8px 16px', borderRadius: 50, fontSize: 13, fontWeight: 700,
                        cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s',
                        background: active ? `linear-gradient(135deg, ${N.navyMid}, ${N.blueBright})` : 'rgba(30,77,140,0.06)',
                        border: active ? 'none' : `1.5px solid ${N.border}`,
                        color: active ? '#ffffff' : N.navy,
                        boxShadow: active ? '0 4px 12px rgba(37,99,176,0.25)' : 'none',
                      }}>
                      {field}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Row 3: Subject Selection (only if fields selected) */}
      <AnimatePresence>
        {filters.selectedFields.length > 0 && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            style={{ overflow: 'hidden', marginBottom: 20, position: 'relative', zIndex: 1 }}>
            <div style={{ borderRadius: 16, background: 'rgba(30,77,140,0.03)', border: `1px solid ${N.border}`, padding: 16 }}>
              <label style={{ ...labelStyle, marginBottom: 14 }}>
                Subjects
                {filters.selectedSubjects.length > 0 && (
                  <span style={{ marginLeft: 8, background: '#166534', color: '#fff', borderRadius: 50, padding: '1px 8px', fontSize: 10 }}>
                    {filters.selectedSubjects.length} selected
                  </span>
                )}
              </label>

              {filters.selectedFields.map(field => (
                <div key={field} style={{ marginBottom: 14 }}>
                  <p style={{ fontSize: 11, fontWeight: 800, color: N.blueBright, margin: '0 0 8px', letterSpacing: '0.05em' }}>
                    📚 {field}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 6 }}>
                    {(FIELD_SUBJECTS[field] || []).map(subject => {
                      const active = filters.selectedSubjects.includes(subject);
                      return (
                        <motion.button key={subject} whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}
                          onClick={() => toggleSubject(subject)}
                          style={{
                            padding: '6px 14px', borderRadius: 50, fontSize: 12, fontWeight: 600,
                            cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s',
                            background: active ? 'rgba(22,101,52,0.12)' : 'rgba(30,77,140,0.05)',
                            border: active ? '1.5px solid #166534' : `1.5px solid ${N.border}`,
                            color: active ? '#166534' : N.navy,
                          }}>
                          {active ? '✓ ' : ''}{subject}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
        <motion.div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)', backgroundSize: '200% 100%' }}
          animate={{ backgroundPosition: ['200% 0','-200% 0'] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
        />
        <span style={{ position: 'relative' }}>Search Universities →</span>
      </motion.button>

      <AnimBorder reverse />
    </motion.div>
  );
}