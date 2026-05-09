import { motion } from 'framer-motion';
import { University } from '../types/university';
import UniversityCard from './UniversityCard';

const N = { navy: '#0a1f44', navyMid: '#1a3a6b', blueBright: '#2563b0', border: 'rgba(30,77,140,0.18)', dim: 'rgba(10,31,68,0.50)' };

interface Props {
  results: University[];
  searched: boolean;
  filters: { country: string; cgpa: string; ielts: string; selectedFields: string[]; selectedSubjects: string[] };
  onBack: () => void;
  onApplyFilter: (fields: string[], subjects: string[]) => void;
}

export default function ResultsList({ results, searched, filters, onBack, onApplyFilter }: Props) {
  if (!searched) return null;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>

      {/* Top bar */}
      <div style={{ background: '#ffffff', border: `1px solid ${N.border}`, borderRadius: 16, padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, boxShadow: '0 4px 20px rgba(10,31,68,0.07)', flexWrap: 'wrap' as const }}>
        <motion.button whileHover={{ scale: 1.03, x: -2 }} whileTap={{ scale: 0.97 }} onClick={onBack}
          style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '7px 16px', borderRadius: 50, cursor: 'pointer', fontFamily: 'inherit', border: `1.5px solid ${N.border}`, background: '#ffffff', color: N.navy, fontSize: 13, fontWeight: 700 }}>
          <span style={{ fontSize: 14 }}>←</span> Back to Search
        </motion.button>

        <div style={{ width: 1, height: 20, background: N.border }} />
        <span style={{ color: N.dim, fontSize: 12, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Active Filters</span>

        {filters.country && <span style={{ fontSize: 12, padding: '4px 13px', borderRadius: 50, background: 'rgba(30,77,140,0.08)', border: `1px solid ${N.border}`, color: N.navy, fontWeight: 700 }}>🌍 {filters.country}</span>}
        {filters.cgpa && <span style={{ fontSize: 12, padding: '4px 13px', borderRadius: 50, background: 'rgba(30,77,140,0.08)', border: `1px solid ${N.border}`, color: N.navy, fontWeight: 700 }}>CGPA {filters.cgpa}</span>}
        {filters.ielts && <span style={{ fontSize: 12, padding: '4px 13px', borderRadius: 50, background: 'rgba(30,77,140,0.08)', border: `1px solid ${N.border}`, color: N.navy, fontWeight: 700 }}>IELTS {filters.ielts}</span>}

        {/* Active field/subject filter badges */}
        {filters.selectedFields.length > 0 && (
          <span style={{ fontSize: 12, padding: '4px 13px', borderRadius: 50, background: 'rgba(37,99,176,0.10)', border: '1px solid rgba(37,99,176,0.25)', color: N.blueBright, fontWeight: 700 }}>
            📚 {filters.selectedFields.length} Field{filters.selectedFields.length > 1 ? 's' : ''}
          </span>
        )}
        {filters.selectedSubjects.length > 0 && (
          <span style={{ fontSize: 12, padding: '4px 13px', borderRadius: 50, background: 'rgba(22,101,52,0.08)', border: '1px solid rgba(22,101,52,0.22)', color: '#166534', fontWeight: 700 }}>
            🎓 {filters.selectedSubjects.length} Subject{filters.selectedSubjects.length > 1 ? 's' : ''}
          </span>
        )}
      </div>

      {results.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '72px 20px' }}>
          <div style={{ fontSize: 52, marginBottom: 18 }}>🔎</div>
          <p style={{ color: N.navy, fontSize: 22, fontWeight: 900, margin: '0 0 10px' }}>No universities found</p>
          <p style={{ color: N.dim, fontSize: 15 }}>Try different fields or subjects</p>
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={onBack}
            style={{ marginTop: 20, padding: '10px 24px', borderRadius: 50, background: `linear-gradient(135deg, ${N.navyMid}, ${N.blueBright})`, color: '#fff', fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
            ← Back to Search
          </motion.button>
        </motion.div>
      ) : (
        <>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 36, height: 3, background: `linear-gradient(90deg, ${N.navy}, ${N.blueBright})`, borderRadius: 2 }} />
              <span style={{ color: N.navy, fontSize: 12, fontWeight: 900, letterSpacing: '2.5px', textTransform: 'uppercase' as const }}>Eligible Universities</span>
              <div style={{ width: 36, height: 3, background: `linear-gradient(90deg, ${N.blueBright}, ${N.navy})`, borderRadius: 2 }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 18px', borderRadius: 50, background: '#ffffff', border: `1.5px solid ${N.border}`, boxShadow: '0 2px 12px rgba(10,31,68,0.08)' }}>
              <motion.div style={{ width: 7, height: 7, borderRadius: '50%', background: N.blueBright }}
                animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
              <span style={{ color: N.navy, fontSize: 13, fontWeight: 900 }}>{results.length} found</span>
            </div>
          </div>

          <div style={{ marginBottom: 16, padding: '10px 16px', borderRadius: 12, background: 'rgba(37,99,176,0.04)', border: '1px dashed rgba(37,99,176,0.18)', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 16 }}>💡</span>
            <p style={{ fontSize: 12, color: N.dim, fontWeight: 600, margin: 0 }}>
              Click <strong style={{ color: N.blueBright }}>View Details</strong> on any card to select Fields & Subjects — results will update automatically.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
            {results.map((u, i) => (
              <UniversityCard key={u.id} university={u} index={i} onApplyFilter={onApplyFilter} />
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}