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

interface Props { university: University; index: number; }

export default function UniversityCard({ university: u, index }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
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
        {/* Left: rank + info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, flex: 1 }}>

          {/* Rank circle */}
          <div style={{
            width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: expanded
              ? 'rgba(255,255,255,0.15)'
              : `linear-gradient(135deg, ${N.navyMid}, ${N.blueBright})`,
            border: expanded ? '1.5px solid rgba(255,255,255,0.25)' : 'none',
            boxShadow: expanded ? 'none' : '0 4px 12px rgba(37,99,176,0.25)',
            fontSize: 14, fontWeight: 900,
            color: '#ffffff',
          }}>
            {index + 1}
          </div>

          {/* Name + country */}
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
                fontSize: 13, fontWeight: 700,
                transition: 'color 0.3s',
              }}>
                {u.country}
              </span>
            </div>
          </div>
        </div>

        {/* Right: badges + arrow */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
          <div style={{
            padding: '6px 14px', borderRadius: 50, fontWeight: 800, fontSize: 12,
            background: expanded ? 'rgba(187,247,208,0.15)' : '#f0fdf4',
            border: expanded ? '1.5px solid rgba(187,247,208,0.35)' : '1.5px solid #bbf7d0',
            color: expanded ? '#bbf7d0' : '#166534',
            transition: 'all 0.3s',
          }}>
            CGPA {u.requiredCGPA.toFixed(1)}+
          </div>
          <div style={{
            padding: '6px 14px', borderRadius: 50, fontWeight: 800, fontSize: 12,
            background: expanded ? 'rgba(191,219,254,0.15)' : '#eff6ff',
            border: expanded ? '1.5px solid rgba(191,219,254,0.35)' : '1.5px solid #bfdbfe',
            color: expanded ? '#bfdbfe' : '#1e40af',
            transition: 'all 0.3s',
          }}>
            IELTS {u.requiredIELTS.toFixed(1)}+
          </div>

          {/* Arrow */}
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            style={{
              width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: expanded ? 'rgba(255,255,255,0.15)' : 'rgba(37,99,176,0.08)',
              border: expanded ? '1.5px solid rgba(255,255,255,0.25)' : `1.5px solid ${N.border}`,
              color: expanded ? '#ffffff' : N.blueBright,
              fontSize: 11, marginLeft: 4,
              transition: 'all 0.3s',
            }}
          >▼</motion.div>
        </div>
      </motion.div>

      {/* ── Expanded Detail Panel ── */}
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

              {/* Detail grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>

                {/* Field of Study */}
                <div style={{ padding: '0 24px 0 0', borderRight: '1px solid rgba(30,77,140,0.10)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: `linear-gradient(135deg, ${N.navyMid}, ${N.blueBright})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: 13 }}>📚</span>
                    </div>
                    <span style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase' as const, letterSpacing: '0.14em', color: N.dim }}>Field</span>
                  </div>
                  <p style={{ fontSize: 14, color: N.navy, fontWeight: 800, margin: 0, lineHeight: 1.4 }}>
                    {u.fieldOfStudy}
                  </p>
                </div>

                {/* Subjects */}
                <div style={{ padding: '0 24px', borderRight: '1px solid rgba(30,77,140,0.10)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #166534, #16a34a)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: 13 }}>🎓</span>
                    </div>
                    <span style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase' as const, letterSpacing: '0.14em', color: N.dim }}>Subjects</span>
                  </div>
                  <p style={{ fontSize: 13, color: 'rgba(10,31,68,0.75)', fontWeight: 600, margin: 0, lineHeight: 1.5 }}>
                    {u.subjects.join(', ')}
                  </p>
                </div>

                {/* Intake */}
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

                {/* Deadline */}
                <div style={{ padding: '0 0 0 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #92400e, #d97706)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: 13 }}>⏰</span>
                    </div>
                    <span style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase' as const, letterSpacing: '0.14em', color: N.dim }}>Deadline</span>
                  </div>
                  <p style={{ fontSize: 14, color: '#92400e', fontWeight: 800, margin: 0 }}>
                    {u.applicationDeadline}
                  </p>
                </div>
              </div>

              {/* Bottom action bar */}
              <div style={{
                marginTop: 22, paddingTop: 18,
                borderTop: '1px solid rgba(30,77,140,0.10)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  {['Eligible', 'International', 'Scholarships Available'].map(tag => (
                    <span key={tag} style={{
                      fontSize: 11, padding: '3px 10px', borderRadius: 50, fontWeight: 700,
                      background: 'rgba(37,99,176,0.07)', border: '1px solid rgba(37,99,176,0.18)',
                      color: N.blueBright,
                    }}>{tag}</span>
                  ))}
                </div>
                <motion.div
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  style={{
                    padding: '8px 20px', borderRadius: 50,
                    background: `linear-gradient(135deg, ${N.navyMid}, ${N.blueBright})`,
                    color: '#ffffff', fontSize: 12, fontWeight: 800,
                    cursor: 'pointer', boxShadow: '0 4px 14px rgba(37,99,176,0.28)',
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
  );
}