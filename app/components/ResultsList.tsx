import { motion } from 'framer-motion';
import { University } from '../types/university';
import UniversityCard from './UniversityCard';

const N = { navy: '#0a1f44', blueBright: '#2563b0', border: 'rgba(30,77,140,0.18)', dim: 'rgba(10,31,68,0.50)' };

interface Props { results: University[]; searched: boolean; }

export default function ResultsList({ results, searched }: Props) {
  if (!searched) return null;

  if (results.length === 0) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        style={{ textAlign: 'center', padding: '72px 20px' }}>
        <div style={{ fontSize: 52, marginBottom: 18 }}>🔎</div>
        <p style={{ color: N.navy, fontSize: 22, fontWeight: 900, margin: '0 0 10px', letterSpacing: '-0.3px' }}>
          No universities found
        </p>
        <p style={{ color: N.dim, fontSize: 15, fontWeight: 500 }}>
          Try lowering your CGPA or IELTS score
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 36, height: 3, background: `linear-gradient(90deg, ${N.navy}, ${N.blueBright})`, borderRadius: 2 }} />
          <span style={{ color: N.navy, fontSize: 12, fontWeight: 900, letterSpacing: '2.5px', textTransform: 'uppercase' as const }}>
            Eligible Universities
          </span>
          <div style={{ width: 36, height: 3, background: `linear-gradient(90deg, ${N.blueBright}, ${N.navy})`, borderRadius: 2 }} />
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '6px 18px', borderRadius: 50,
          background: '#ffffff',
          border: `1.5px solid ${N.border}`,
          boxShadow: '0 2px 12px rgba(10,31,68,0.08)',
        }}>
          <motion.div
            style={{ width: 7, height: 7, borderRadius: '50%', background: N.blueBright }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span style={{ color: N.navy, fontSize: 13, fontWeight: 900 }}>
            {results.length} found
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {results.map((u, i) => (
          <UniversityCard key={u.id} university={u} index={i} />
        ))}
      </div>
    </motion.div>
  );
}