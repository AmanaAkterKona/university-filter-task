'use client';
import { useState } from 'react';
import { University, FilterInputs } from '../types/university';
import { universities } from '../data/universities';

export function useUniversityFilter() {
  const [filters, setFilters] = useState<FilterInputs>({
    country: '',
    cgpa: '',
    ielts: '',
  });
  const [results, setResults] = useState<University[]>([]);
  const [searched, setSearched] = useState(false);

  const search = () => {
    const cgpa = parseFloat(filters.cgpa);
    const ielts = parseFloat(filters.ielts);

    const filtered = universities.filter((u) => {
      if (filters.country && u.country !== filters.country) return false;
      if (!isNaN(cgpa) && cgpa < u.requiredCGPA) return false;
      if (!isNaN(ielts) && ielts < u.requiredIELTS) return false;
      return true;
    });

    setResults(filtered);
    setSearched(true);
  };

  return { filters, setFilters, results, searched, search };
}