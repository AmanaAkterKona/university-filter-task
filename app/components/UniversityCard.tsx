'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { University } from '../types/university';

const N = {
  navy:       '#0a1f44',
  navyMid:    '#1a3a6b',
  blueBright: '#2563b0',
  dim:        'rgba(10,31,68,0.45)',
  border:     'rgba(30,77,140,0.14)',
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

// ── Modal ──
function UniversityModal({ university: u, onClose }: { university: University; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
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
            width: '100%', maxWidth: 680,
            maxHeight: '90vh', overflowY: 'auto',
            borderRadius: 24, position: 'relative',
            background: '#ffffff',
            boxShadow: '0 32px 80px rgba(10,31,68,0.30), 0 0 0 1px rgba(37,99,176,0.15)',
          }}
        >
          {/* ── Modal Header ── */}
          <div style={{
            background: `linear-gradient(135deg, ${N.navy} 0%, ${N.navyMid} 50%, #0f2d5a 100%)`,
            borderRadius: '24px 24px 0 0',
            padding: '32px 36px 28px',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Background glow */}
            <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, borderRadius: '50%', filter: 'blur(60px)', opacity: 0.15, background: `radial-gradient(circle, ${N.blueBright}, transparent 70%)`, transform: 'translate(30%,-30%)', pointerEvents: 'none' }} />

            {/* Animated top border */}
            <motion.div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 2,
              background: `linear-gradient(90deg, transparent, ${N.blueBright}, #60a5fa, ${N.blueBright}, transparent)`,
              backgroundSize: '200% 100%',
            }}
              animate={{ backgroundPosition: ['0% 0', '200% 0'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />

            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1, background: 'rgba(255,255,255,0.20)' }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              style={{
                position: 'absolute', top: 20, right: 20,
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)',
                border: '1.5px solid rgba(255,255,255,0.20)',
                color: '#ffffff', fontSize: 16, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'inherit',
              }}
            >✕</motion.button>

            {/* Rank badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '4px 12px', borderRadius: 50, marginBottom: 14,
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.20)',
            }}>
              <motion.div
                style={{ width: 6, height: 6, borderRadius: '50%', background: '#60a5fa' }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em' }}>
                UNIVERSITY DETAILS
              </span>
            </div>

            {/* University name */}
            <h2 style={{
              color: '#ffffff', fontWeight: 900, fontSize: 24,
              margin: '0 0 10px', letterSpacing: '-0.4px', lineHeight: 1.2,
              paddingRight: 40,
            }}>
              {u.name}
            </h2>

            {/* Country */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 20 }}>{countryFlags[u.country] || '🌍'}</span>
              <span style={{ color: 'rgba(191,219,254,0.90)', fontSize: 15, fontWeight: 700 }}>
                {u.country}
              </span>
            </div>

            {/* CGPA & IELTS badges */}
            <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
              <div style={{
                padding: '8px 18px', borderRadius: 50, fontWeight: 800, fontSize: 13,
                background: 'rgba(187,247,208,0.15)',
                border: '1.5px solid rgba(187,247,208,0.30)',
                color: '#bbf7d0',
              }}>
                🎓 Min CGPA {u.requiredCGPA.toFixed(1)}
              </div>
              <div style={{
                padding: '8px 18px', borderRadius: 50, fontWeight: 800, fontSize: 13,
                background: 'rgba(191,219,254,0.15)',
                border: '1.5px solid rgba(191,219,254,0.30)',
                color: '#bfdbfe',
              }}>
                📝 Min IELTS {u.requiredIELTS.toFixed(1)}
              </div>
              <div style={{
                padding: '8px 18px', borderRadius: 50, fontWeight: 800, fontSize: 13,
                background: 'rgba(253,230,138,0.15)',
                border: '1.5px solid rgba(253,230,138,0.25)',
                color: '#fde68a',
              }}>
                📅 {u.applicationDeadline}
              </div>
            </div>
          </div>

          {/* ── Modal Body ── */}
          <div style={{ padding: '28px 36px 32px' }}>

            {/* Intake */}
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 11, fontWeight: 800, color: N.dim, textTransform: 'uppercase' as const, letterSpacing: '0.16em', margin: '0 0 10px' }}>
                Intake Cycles
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const }}>
                {u.intake.map(i => (
                  <span key={i} style={{
                    fontSize: 13, padding: '6px 16px', borderRadius: 50, fontWeight: 700,
                    background: intakeStyle[i]?.bg || '#eff6ff',
                    color: intakeStyle[i]?.color || '#1e40af',
                    border: `1.5px solid ${intakeStyle[i]?.border || '#bfdbfe'}`,
                  }}>{i}</span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: 'rgba(30,77,140,0.10)', marginBottom: 24 }} />

            {/* Fields & Subjects */}
            <p style={{ fontSize: 11, fontWeight: 800, color: N.dim, textTransform: 'uppercase' as const, letterSpacing: '0.16em', margin: '0 0 16px' }}>
              Fields of Study & Subjects
            </p>

            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
              {u.subjects.map((fieldGroup, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 }}
                  style={{
                    borderRadius: 16,
                    border: '1px solid rgba(30,77,140,0.10)',
                    overflow: 'hidden',
                  }}
                >
                  {/* Field header */}
                  <div style={{
                    padding: '12px 18px',
                    background: 'linear-gradient(135deg, rgba(30,77,140,0.05), rgba(37,99,176,0.03))',
                    borderBottom: '1px solid rgba(30,77,140,0.08)',
                    display: 'flex', alignItems: 'center', gap: 8,
                  }}>
                    <span style={{ fontSize: 16 }}>{fieldIcons[fieldGroup.field] || '📚'}</span>
                    <span style={{ fontSize: 13, fontWeight: 800, color: N.navyMid, letterSpacing: '-0.1px' }}>
                      {fieldGroup.field}
                    </span>
                  </div>

                  {/* Subjects */}
                  <div style={{ padding: '14px 18px', display: 'flex', flexWrap: 'wrap' as const, gap: 7 }}>
                    {fieldGroup.subjects.map(subject => (
                      <span key={subject} style={{
                        fontSize: 12, padding: '5px 13px', borderRadius: 50, fontWeight: 600,
                        background: 'rgba(37,99,176,0.06)',
                        border: '1.5px solid rgba(37,99,176,0.14)',
                        color: N.navy,
                      }}>
                        {subject}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: 'rgba(30,77,140,0.10)', margin: '24px 0' }} />

            {/* Tags */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const, marginBottom: 24 }}>
              {['✅ Eligible for International Students', '🌍 Global Recognition', '🎓 Scholarships Available', '📋 Official Admission Open'].map(tag => (
                <span key={tag} style={{
                  fontSize: 12, padding: '5px 13px', borderRadius: 50, fontWeight: 600,
                  background: 'rgba(37,99,176,0.06)',
                  border: '1px solid rgba(37,99,176,0.16)',
                  color: N.navyMid,
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.98 }}
              onClick={onClose}
              style={{
                width: '100%', padding: '14px', borderRadius: 14,
                border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                fontSize: 15, fontWeight: 800, color: '#ffffff',
                background: `linear-gradient(135deg, ${N.navyMid} 0%, ${N.blueBright} 60%, ${N.navyMid} 100%)`,
                boxShadow: '0 6px 24px rgba(37,99,176,0.28)',
                position: 'relative', overflow: 'hidden',
              }}
            >
              <motion.div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)',
                backgroundSize: '200% 100%',
              }}
                animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              />
              <span style={{ position: 'relative' }}>Close Details</span>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Card ──
interface Props { university: University; index: number; }

export default function UniversityCard({ university: u, index }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Modal */}
      {showModal && (
        <UniversityModal university={u} onClose={() => setShowModal(false)} />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.04 }}
        style={{ borderRadius: 20, overflow: 'hidden', cursor: 'pointer' }}
        onClick={() => setExpanded(!expanded)}
      >
        {/* ── Main Card ── */}
        <motion.div
          whileHover={{ y: -2 }}
          style={{
            background: expanded
              ? `linear-gradient(135deg, ${N.navyMid} 0%, #0f2d5a 50%, ${N.navyMid} 100%)`
              : '#ffffff',
            boxShadow: expanded
              ? '0 20px 60px rgba(10,31,68,0.25), 0 0 0 1px rgba(37,99,176,0.30)'
              : '0 2px 16px rgba(10,31,68,0.08), 0 0 0 1px rgba(30,77,140,0.10)',
            borderRadius: expanded ? '20px 20px 0 0' : 20,
            transition: 'all 0.3s ease',
            padding: '22px 28px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, flex: 1 }}>
            <div style={{
              width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: expanded
                ? 'rgba(255,255,255,0.15)'
                : `linear-gradient(135deg, ${N.navyMid}, ${N.blueBright})`,
              border: expanded ? '1.5px solid rgba(255,255,255,0.25)' : 'none',
              boxShadow: expanded ? 'none' : '0 4px 12px rgba(37,99,176,0.25)',
              fontSize: 14, fontWeight: 900, color: '#ffffff',
            }}>
              {index + 1}
            </div>
            <div>
              <p style={{
                color: expanded ? '#ffffff' : N.navy,
                fontWeight: 800, fontSize: 16, margin: 0,
                letterSpacing: '-0.3px', lineHeight: 1.3,
                transition: 'color 0.3s',
              }}>
                {u.name}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 5 }}>
                <span style={{ fontSize: 15 }}>{countryFlags[u.country] || '🌍'}</span>
                <span style={{
                  color: expanded ? 'rgba(191,219,254,0.90)' : N.blueBright,
                  fontSize: 13, fontWeight: 700, transition: 'color 0.3s',
                }}>
                  {u.country}
                </span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
            <div style={{
              padding: '6px 14px', borderRadius: 50, fontWeight: 800, fontSize: 12,
              background: expanded ? 'rgba(187,247,208,0.15)' : '#f0fdf4',
              border: expanded ? '1.5px solid rgba(187,247,208,0.35)' : '1.5px solid #bbf7d0',
              color: expanded ? '#bbf7d0' : '#166534', transition: 'all 0.3s',
            }}>
              CGPA {u.requiredCGPA.toFixed(1)}+
            </div>
            <div style={{
              padding: '6px 14px', borderRadius: 50, fontWeight: 800, fontSize: 12,
              background: expanded ? 'rgba(191,219,254,0.15)' : '#eff6ff',
              border: expanded ? '1.5px solid rgba(191,219,254,0.35)' : '1.5px solid #bfdbfe',
              color: expanded ? '#bfdbfe' : '#1e40af', transition: 'all 0.3s',
            }}>
              IELTS {u.requiredIELTS.toFixed(1)}+
            </div>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              style={{
                width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: expanded ? 'rgba(255,255,255,0.15)' : 'rgba(37,99,176,0.08)',
                border: expanded ? '1.5px solid rgba(255,255,255,0.25)' : `1.5px solid ${N.border}`,
                color: expanded ? '#ffffff' : N.blueBright,
                fontSize: 11, marginLeft: 4, transition: 'all 0.3s',
              }}
            >▼</motion.div>
          </div>
        </motion.div>

        {/* ── Expanded Panel ── */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{
                background: 'linear-gradient(135deg, #f8faff 0%, #eef3fc 100%)',
                border: '1px solid rgba(30,77,140,0.12)',
                borderTop: 'none',
                borderRadius: '0 0 20px 20px',
                padding: '28px 28px 24px',
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>

                  <div style={{ padding: '0 24px 0 0', borderRight: '1px solid rgba(30,77,140,0.10)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 8, background: `linear-gradient(135deg, ${N.navyMid}, ${N.blueBright})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: 13 }}>📚</span>
                      </div>
                      <span style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase' as const, letterSpacing: '0.14em', color: N.dim }}>Field</span>
                    </div>
                    <p style={{ fontSize: 13, color: N.navy, fontWeight: 800, margin: 0, lineHeight: 1.4 }}>
                      {u.fields.join(', ')}
                    </p>
                  </div>

                  <div style={{ padding: '0 24px', borderRight: '1px solid rgba(30,77,140,0.10)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #166534, #16a34a)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: 13 }}>🎓</span>
                      </div>
                      <span style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase' as const, letterSpacing: '0.14em', color: N.dim }}>Subjects</span>
                    </div>
                    <p style={{ fontSize: 12, color: 'rgba(10,31,68,0.75)', fontWeight: 600, margin: 0, lineHeight: 1.5 }}>
                      {u.subjects.flatMap(s => s.subjects).join(', ')}
                    </p>
                  </div>

                  <div style={{ padding: '0 24px', borderRight: '1px solid rgba(30,77,140,0.10)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #854d0e, #d97706)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: 13 }}>🗓️</span>
                      </div>
                      <span style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase' as const, letterSpacing: '0.14em', color: N.dim }}>Intake</span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 5 }}>
                      {u.intake.map(i => (
                        <span key={i} style={{
                          fontSize: 12, padding: '4px 12px', borderRadius: 50, fontWeight: 700,
                          background: intakeStyle[i]?.bg || '#eff6ff',
                          color: intakeStyle[i]?.color || '#1e40af',
                          border: `1.5px solid ${intakeStyle[i]?.border || '#bfdbfe'}`,
                        }}>{i}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{ padding: '0 0 0 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #92400e, #d97706)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: 13 }}>⏰</span>
                      </div>
                      <span style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase' as const, letterSpacing: '0.14em', color: N.dim }}>Deadline</span>
                    </div>
                    <p style={{ fontSize: 13, color: '#92400e', fontWeight: 800, margin: 0 }}>
                      {u.applicationDeadline}
                    </p>
                  </div>
                </div>

                {/* Bottom bar */}
                <div style={{
                  marginTop: 22, paddingTop: 18,
                  borderTop: '1px solid rgba(30,77,140,0.10)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {['Eligible', 'International', 'Scholarships Available'].map(tag => (
                      <span key={tag} style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 50, fontWeight: 700,
                        background: 'rgba(37,99,176,0.07)',
                        border: '1px solid rgba(37,99,176,0.18)',
                        color: N.blueBright,
                      }}>{tag}</span>
                    ))}
                  </div>

                  {/* View Details button — opens modal */}
                  <motion.div
                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                    onClick={(e) => { e.stopPropagation(); setShowModal(true); }}
                    style={{
                      padding: '8px 20px', borderRadius: 50,
                      background: `linear-gradient(135deg, ${N.navyMid}, ${N.blueBright})`,
                      color: '#ffffff', fontSize: 12, fontWeight: 800,
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(37,99,176,0.28)',
                    }}
                  >
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