'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { University } from '../types/university';
import { FIELD_SUBJECTS } from '../data/universities';

const N = {
  navy: '#0a1f44', navyMid: '#1a3a6b',
  blueBright: '#2563b0', dim: 'rgba(10,31,68,0.45)',
  border: 'rgba(30,77,140,0.14)',
};

const intakeStyle: Record<string, { bg: string; color: string; border: string }> = {
  Fall:   { bg: '#fff8f0', color: '#92400e', border: '#f5d0a0' },
  Winter: { bg: '#eff6ff', color: '#1e40af', border: '#bfdbfe' },
  Spring: { bg: '#f0fdf4', color: '#166534', border: '#bbf7d0' },
  Summer: { bg: '#fefce8', color: '#854d0e', border: '#fde68a' },
};

const countryFlags: Record<string, string> = {
  Germany: '🇩🇪', Canada: '🇨🇦', Australia: '🇦🇺', UK: '🇬🇧',
  USA: '🇺🇸', Spain: '🇪🇸', Italy: '🇮🇹', Japan: '🇯🇵',
  China: '🇨🇳', Sweden: '🇸🇪', Netherlands: '🇳🇱', France: '🇫🇷',
};

const fieldIcons: Record<string, string> = {
  'Engineering & Technology': '⚙️',
  'Business & Economics': '💼',
  'Medicine & Health Sciences': '🏥',
  'Natural Sciences': '🔬',
  'Social Sciences & Humanities': '🌐',
  'Arts & Design': '🎨',
  'Law': '⚖️',
  'Agriculture & Environment': '🌱',
  'Computer Science & IT': '💻',
  'Mathematics & Statistics': '📊',
};

interface ModalProps {
  university: University;
  onClose: () => void;
  onApply: (fields: string[], subjects: string[]) => void;
}

function UniversityModal({ university: u, onClose, onApply }: ModalProps) {
  const [selectedFields, setSelectedFields]     = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [applied, setApplied]                   = useState(false);

  const toggleField = (field: string) => {
    const updated = selectedFields.includes(field)
      ? selectedFields.filter(f => f !== field)
      : [...selectedFields, field];
    const validSubjects = updated.flatMap(f => FIELD_SUBJECTS[f] || []);
    setSelectedFields(updated);
    setSelectedSubjects(prev => prev.filter(s => validSubjects.includes(s)));
    setApplied(false);
  };

  const toggleSubject = (subject: string) => {
    setSelectedSubjects(prev =>
      prev.includes(subject) ? prev.filter(s => s !== subject) : [...prev, subject]
    );
    setApplied(false);
  };

  const handleApply = () => {
    onApply(selectedFields, selectedSubjects);
    setApplied(true);
    setTimeout(() => onClose(), 800);
  };

  const handleReset = () => {
    setSelectedFields([]);
    setSelectedSubjects([]);
    onApply([], []);
    setApplied(false);
  };

  const hasSelection = selectedFields.length > 0 || selectedSubjects.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(10,31,68,0.55)',
        backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 700,
          maxHeight: '90vh', overflowY: 'auto',
          borderRadius: 24, background: '#ffffff',
          boxShadow: '0 32px 80px rgba(10,31,68,0.30), 0 0 0 1px rgba(37,99,176,0.15)',
        }}
      >
        {/* Header */}
        <div style={{
          background: `linear-gradient(135deg, ${N.navy} 0%, ${N.navyMid} 50%, #0f2d5a 100%)`,
          borderRadius: '24px 24px 0 0', padding: '32px 36px 28px',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, borderRadius: '50%', filter: 'blur(60px)', opacity: 0.15, background: `radial-gradient(circle, ${N.blueBright}, transparent 70%)`, transform: 'translate(30%,-30%)', pointerEvents: 'none' }} />
          <motion.div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${N.blueBright}, #60a5fa, ${N.blueBright}, transparent)`, backgroundSize: '200% 100%' }}
            animate={{ backgroundPosition: ['0% 0', '200% 0'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={onClose}
            style={{ position: 'absolute', top: 20, right: 20, width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.20)', color: '#ffffff', fontSize: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'inherit' }}>
            ✕
          </motion.button>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', borderRadius: 50, marginBottom: 14, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.20)' }}>
            <motion.div style={{ width: 6, height: 6, borderRadius: '50%', background: '#60a5fa' }}
              animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em' }}>UNIVERSITY DETAILS</span>
          </div>

          <h2 style={{ color: '#ffffff', fontWeight: 900, fontSize: 22, margin: '0 0 10px', paddingRight: 40 }}>{u.name}</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
            <span style={{ fontSize: 20 }}>{countryFlags[u.country] || '🌍'}</span>
            <span style={{ color: 'rgba(191,219,254,0.90)', fontSize: 15, fontWeight: 700 }}>{u.country}</span>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' as const }}>
            <div style={{ padding: '7px 16px', borderRadius: 50, fontWeight: 800, fontSize: 12, background: 'rgba(187,247,208,0.15)', border: '1.5px solid rgba(187,247,208,0.30)', color: '#bbf7d0' }}>🎓 Min CGPA {u.requiredCGPA.toFixed(1)}</div>
            <div style={{ padding: '7px 16px', borderRadius: 50, fontWeight: 800, fontSize: 12, background: 'rgba(191,219,254,0.15)', border: '1.5px solid rgba(191,219,254,0.30)', color: '#bfdbfe' }}>📝 Min IELTS {u.requiredIELTS.toFixed(1)}</div>
            <div style={{ padding: '7px 16px', borderRadius: 50, fontWeight: 800, fontSize: 12, background: 'rgba(253,230,138,0.15)', border: '1.5px solid rgba(253,230,138,0.25)', color: '#fde68a' }}>📅 {u.applicationDeadline}</div>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '28px 36px 32px' }}>

          {/* Intake */}
          <div style={{ marginBottom: 22 }}>
            <p style={{ fontSize: 11, fontWeight: 800, color: N.dim, textTransform: 'uppercase' as const, letterSpacing: '0.16em', margin: '0 0 10px' }}>Intake Cycles</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const }}>
              {u.intake.map(i => (
                <span key={i} style={{ fontSize: 13, padding: '6px 16px', borderRadius: 50, fontWeight: 700, background: intakeStyle[i]?.bg || '#eff6ff', color: intakeStyle[i]?.color || '#1e40af', border: `1.5px solid ${intakeStyle[i]?.border || '#bfdbfe'}` }}>{i}</span>
              ))}
            </div>
          </div>

          <div style={{ height: 1, background: 'rgba(30,77,140,0.10)', marginBottom: 22 }} />

          {/* Field Selection */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `linear-gradient(135deg, ${N.navyMid}, ${N.blueBright})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, flexShrink: 0 }}>📚</div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 13, fontWeight: 800, color: N.navy, margin: 0 }}>Select Fields of Study</p>
                <p style={{ fontSize: 11, color: N.dim, margin: '2px 0 0' }}>Choose one or more fields available at this university</p>
              </div>
              {selectedFields.length > 0 && (
                <span style={{ fontSize: 11, background: N.blueBright, color: '#fff', borderRadius: 50, padding: '2px 10px', fontWeight: 800 }}>
                  {selectedFields.length} selected
                </span>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              {u.fields.map(field => {
                const active = selectedFields.includes(field);
                return (
                  <motion.div key={field} whileHover={{ x: 2 }} whileTap={{ scale: 0.99 }}
                    onClick={() => toggleField(field)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '12px 16px', borderRadius: 14, cursor: 'pointer',
                      border: active ? `1.5px solid ${N.blueBright}` : '1.5px solid rgba(30,77,140,0.12)',
                      background: active ? 'linear-gradient(135deg, rgba(30,77,140,0.07), rgba(37,99,176,0.04))' : '#fafbff',
                      transition: 'all 0.2s',
                    }}>
                    <div style={{ width: 20, height: 20, borderRadius: 6, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: active ? `linear-gradient(135deg, ${N.navyMid}, ${N.blueBright})` : '#ffffff', border: active ? 'none' : '2px solid rgba(30,77,140,0.25)', transition: 'all 0.2s' }}>
                      {active && <span style={{ color: '#fff', fontSize: 11, fontWeight: 900 }}>✓</span>}
                    </div>
                    <span style={{ fontSize: 16 }}>{fieldIcons[field] || '📚'}</span>
                    <span style={{ fontSize: 14, fontWeight: active ? 700 : 600, color: active ? N.navy : 'rgba(10,31,68,0.70)', flex: 1 }}>{field}</span>
                    {active && (
                      <span style={{ fontSize: 11, color: N.blueBright, fontWeight: 700 }}>
                        {(FIELD_SUBJECTS[field] || []).length} subjects →
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Subject Selection */}
          <AnimatePresence>
            {selectedFields.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{ overflow: 'hidden', marginBottom: 20 }}
              >
                <div style={{ height: 1, background: 'rgba(30,77,140,0.10)', marginBottom: 20 }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #166534, #16a34a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, flexShrink: 0 }}>🎓</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 13, fontWeight: 800, color: N.navy, margin: 0 }}>Select Subjects</p>
                    <p style={{ fontSize: 11, color: N.dim, margin: '2px 0 0' }}>Organized by field — "Available" means this university offers it</p>
                  </div>
                  {selectedSubjects.length > 0 && (
                    <span style={{ fontSize: 11, background: '#166534', color: '#fff', borderRadius: 50, padding: '2px 10px', fontWeight: 800 }}>
                      {selectedSubjects.length} selected
                    </span>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 14 }}>
                  {selectedFields.map(field => (
                    <div key={field} style={{ borderRadius: 16, border: '1px solid rgba(30,77,140,0.10)', overflow: 'hidden' }}>
                      <div style={{ padding: '10px 16px', background: 'linear-gradient(135deg, rgba(30,77,140,0.05), rgba(37,99,176,0.03))', borderBottom: '1px solid rgba(30,77,140,0.08)', display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontSize: 14 }}>{fieldIcons[field] || '📚'}</span>
                        <span style={{ fontSize: 12, fontWeight: 800, color: N.navyMid }}>{field}</span>
                      </div>
                      <div style={{ padding: '8px', display: 'flex', flexDirection: 'column' as const, gap: 3 }}>
                        {(FIELD_SUBJECTS[field] || []).map(subject => {
                          const active = selectedSubjects.includes(subject);
                          const availableInUni = u.subjects.find(s => s.field === field)?.subjects.includes(subject);
                          return (
                            <motion.div key={subject} whileHover={{ x: 2 }}
                              onClick={() => toggleSubject(subject)}
                              style={{
                                display: 'flex', alignItems: 'center', gap: 10,
                                padding: '9px 12px', borderRadius: 10, cursor: 'pointer',
                                background: active ? 'rgba(22,101,52,0.07)' : 'transparent',
                                border: active ? '1px solid rgba(22,101,52,0.20)' : '1px solid transparent',
                                transition: 'all 0.15s',
                              }}>
                              <div style={{ width: 18, height: 18, borderRadius: 5, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: active ? '#166534' : '#ffffff', border: active ? 'none' : '1.5px solid rgba(30,77,140,0.20)', transition: 'all 0.15s' }}>
                                {active && <span style={{ color: '#fff', fontSize: 10, fontWeight: 900 }}>✓</span>}
                              </div>
                              <span style={{ fontSize: 13, fontWeight: active ? 700 : 500, color: active ? '#166534' : N.navy, flex: 1 }}>{subject}</span>
                              {availableInUni && (
                                <span style={{ fontSize: 10, color: '#16a34a', fontWeight: 700, background: 'rgba(22,163,74,0.10)', padding: '2px 8px', borderRadius: 50 }}>Available</span>
                              )}
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div style={{ height: 1, background: 'rgba(30,77,140,0.10)', margin: '8px 0 20px' }} />

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: 12 }}>
            {/* Reset */}
            {hasSelection && (
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                onClick={handleReset}
                style={{
                  flex: 1, padding: '13px', borderRadius: 14, cursor: 'pointer',
                  fontFamily: 'inherit', fontSize: 14, fontWeight: 700,
                  background: '#ffffff', color: N.navy,
                  border: `1.5px solid rgba(30,77,140,0.20)`,
                  boxShadow: '0 2px 8px rgba(10,31,68,0.06)',
                }}>
                ↺ Reset Filter
              </motion.button>
            )}

            {/* Apply */}
            <motion.button whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.98 }}
              onClick={hasSelection ? handleApply : onClose}
              style={{
                flex: 2, padding: '13px', borderRadius: 14,
                border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                fontSize: 15, fontWeight: 800, color: '#ffffff',
                background: applied
                  ? 'linear-gradient(135deg, #166534, #16a34a)'
                  : hasSelection
                    ? `linear-gradient(135deg, ${N.navyMid} 0%, ${N.blueBright} 60%, ${N.navyMid} 100%)`
                    : 'rgba(30,77,140,0.15)',
                boxShadow: hasSelection ? '0 6px 24px rgba(37,99,176,0.28)' : 'none',
                position: 'relative', overflow: 'hidden',
                transition: 'background 0.3s',
              }}>
              {applied ? (
                <span>✓ Filter Applied — Updating Results...</span>
              ) : hasSelection ? (
                <>
                  <motion.div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)', backgroundSize: '200% 100%' }}
                    animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                  />
                  <span style={{ position: 'relative' }}>
                    Apply Filter — Show {selectedFields.length > 0 ? `${selectedFields.length} Field${selectedFields.length > 1 ? 's' : ''}` : ''}{selectedSubjects.length > 0 ? ` · ${selectedSubjects.length} Subject${selectedSubjects.length > 1 ? 's' : ''}` : ''} →
                  </span>
                </>
              ) : (
                <span style={{ color: N.navy }}>Close Details</span>
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Card ──
interface Props {
  university: University;
  index: number;
  onApplyFilter: (fields: string[], subjects: string[]) => void;
}

export default function UniversityCard({ university: u, index, onApplyFilter }: Props) {
  const [expanded, setExpanded]   = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <UniversityModal
          university={u}
          onClose={() => setShowModal(false)}
          onApply={(fields, subjects) => {
            onApplyFilter(fields, subjects);
          }}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.04 }}
        style={{ borderRadius: 20, overflow: 'hidden', cursor: 'pointer' }}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Main Card */}
        <motion.div whileHover={{ y: -2 }} style={{
          background: expanded ? `linear-gradient(135deg, ${N.navyMid} 0%, #0f2d5a 50%, ${N.navyMid} 100%)` : '#ffffff',
          boxShadow: expanded ? '0 20px 60px rgba(10,31,68,0.25), 0 0 0 1px rgba(37,99,176,0.30)' : '0 2px 16px rgba(10,31,68,0.08), 0 0 0 1px rgba(30,77,140,0.10)',
          borderRadius: expanded ? '20px 20px 0 0' : 20,
          transition: 'all 0.3s ease', padding: '22px 28px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, flex: 1 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: expanded ? 'rgba(255,255,255,0.15)' : `linear-gradient(135deg, ${N.navyMid}, ${N.blueBright})`, border: expanded ? '1.5px solid rgba(255,255,255,0.25)' : 'none', boxShadow: expanded ? 'none' : '0 4px 12px rgba(37,99,176,0.25)', fontSize: 14, fontWeight: 900, color: '#ffffff' }}>
              {index + 1}
            </div>
            <div>
              <p style={{ color: expanded ? '#ffffff' : N.navy, fontWeight: 800, fontSize: 16, margin: 0, letterSpacing: '-0.3px', transition: 'color 0.3s' }}>{u.name}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 5 }}>
                <span style={{ fontSize: 15 }}>{countryFlags[u.country] || '🌍'}</span>
                <span style={{ color: expanded ? 'rgba(191,219,254,0.90)' : N.blueBright, fontSize: 13, fontWeight: 700, transition: 'color 0.3s' }}>{u.country}</span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
            <div style={{ padding: '6px 14px', borderRadius: 50, fontWeight: 800, fontSize: 12, background: expanded ? 'rgba(187,247,208,0.15)' : '#f0fdf4', border: expanded ? '1.5px solid rgba(187,247,208,0.35)' : '1.5px solid #bbf7d0', color: expanded ? '#bbf7d0' : '#166534', transition: 'all 0.3s' }}>
              CGPA {u.requiredCGPA.toFixed(1)}+
            </div>
            <div style={{ padding: '6px 14px', borderRadius: 50, fontWeight: 800, fontSize: 12, background: expanded ? 'rgba(191,219,254,0.15)' : '#eff6ff', border: expanded ? '1.5px solid rgba(191,219,254,0.35)' : '1.5px solid #bfdbfe', color: expanded ? '#bfdbfe' : '#1e40af', transition: 'all 0.3s' }}>
              IELTS {u.requiredIELTS.toFixed(1)}+
            </div>
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}
              style={{ width: 34, height: 34, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: expanded ? 'rgba(255,255,255,0.15)' : 'rgba(37,99,176,0.08)', border: expanded ? '1.5px solid rgba(255,255,255,0.25)' : `1.5px solid ${N.border}`, color: expanded ? '#ffffff' : N.blueBright, fontSize: 11, marginLeft: 4, transition: 'all 0.3s' }}>
              ▼
            </motion.div>
          </div>
        </motion.div>

        {/* Expanded Panel */}
        <AnimatePresence>
          {expanded && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}>
              <div style={{ background: 'linear-gradient(135deg, #f8faff 0%, #eef3fc 100%)', border: '1px solid rgba(30,77,140,0.12)', borderTop: 'none', borderRadius: '0 0 20px 20px', padding: '24px 28px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
                  <div style={{ padding: '0 20px 0 0', borderRight: '1px solid rgba(30,77,140,0.10)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                      <div style={{ width: 24, height: 24, borderRadius: 7, background: `linear-gradient(135deg, ${N.navyMid}, ${N.blueBright})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>📚</div>
                      <span style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: N.dim }}>Fields</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 4 }}>
                      {u.fields.map(f => (
                        <span key={f} style={{ fontSize: 11, fontWeight: 700, color: N.navy, lineHeight: 1.4 }}>{fieldIcons[f] || '•'} {f}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ padding: '0 20px', borderRight: '1px solid rgba(30,77,140,0.10)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                      <div style={{ width: 24, height: 24, borderRadius: 7, background: 'linear-gradient(135deg, #166534, #16a34a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>🎓</div>
                      <span style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: N.dim }}>Subjects</span>
                    </div>
                    <p style={{ fontSize: 12, color: 'rgba(10,31,68,0.70)', fontWeight: 500, margin: 0, lineHeight: 1.5 }}>
                      {u.subjects.flatMap(s => s.subjects).slice(0, 4).join(', ')}
                      {u.subjects.flatMap(s => s.subjects).length > 4 && ` +${u.subjects.flatMap(s => s.subjects).length - 4} more`}
                    </p>
                  </div>
                  <div style={{ padding: '0 20px', borderRight: '1px solid rgba(30,77,140,0.10)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                      <div style={{ width: 24, height: 24, borderRadius: 7, background: 'linear-gradient(135deg, #854d0e, #d97706)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>🗓️</div>
                      <span style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: N.dim }}>Intake</span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 4 }}>
                      {u.intake.map(i => (
                        <span key={i} style={{ fontSize: 11, padding: '3px 9px', borderRadius: 50, fontWeight: 700, background: intakeStyle[i]?.bg || '#eff6ff', color: intakeStyle[i]?.color || '#1e40af', border: `1px solid ${intakeStyle[i]?.border || '#bfdbfe'}` }}>{i}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ padding: '0 0 0 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                      <div style={{ width: 24, height: 24, borderRadius: 7, background: 'linear-gradient(135deg, #92400e, #d97706)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>⏰</div>
                      <span style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: N.dim }}>Deadline</span>
                    </div>
                    <p style={{ fontSize: 13, color: '#92400e', fontWeight: 800, margin: 0 }}>{u.applicationDeadline}</p>
                  </div>
                </div>

                <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(30,77,140,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {['Eligible', 'International', 'Scholarships'].map(tag => (
                      <span key={tag} style={{ fontSize: 11, padding: '3px 10px', borderRadius: 50, fontWeight: 700, background: 'rgba(37,99,176,0.07)', border: '1px solid rgba(37,99,176,0.18)', color: N.blueBright }}>{tag}</span>
                    ))}
                  </div>
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                    onClick={(e) => { e.stopPropagation(); setShowModal(true); }}
                    style={{ padding: '8px 20px', borderRadius: 50, background: `linear-gradient(135deg, ${N.navyMid}, ${N.blueBright})`, color: '#ffffff', fontSize: 12, fontWeight: 800, cursor: 'pointer', boxShadow: '0 4px 14px rgba(37,99,176,0.28)' }}>
                    View Details →
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}