'use client';
import { useState } from 'react';
import { University, FilterInputs } from '../types/university';
import { universities } from '../data/universities';

export function useUniversityFilter() {
  const [filters, setFilters] = useState<FilterInputs>({
    country: '', cgpa: '', ielts: '',
    selectedFields: [], selectedSubjects: [],
  });
  const [results, setResults] = useState<University[]>([]);
  const [searched, setSearched] = useState(false);

  const search = () => {
    const cgpa  = parseFloat(filters.cgpa);
    const ielts = parseFloat(filters.ielts);

    const filtered = universities.filter((u) => {
      if (filters.country && u.country !== filters.country) return false;
      if (!isNaN(cgpa)  && cgpa  < u.requiredCGPA)  return false;
      if (!isNaN(ielts) && ielts < u.requiredIELTS) return false;

      // Field filter
      if (filters.selectedFields.length > 0) {
        const hasField = filters.selectedFields.some(f => u.fields.includes(f));
        if (!hasField) return false;
      }

      // Subject filter
      if (filters.selectedSubjects.length > 0) {
        const allSubjects = u.subjects.flatMap(s => s.subjects);
        const hasSubject = filters.selectedSubjects.some(s => allSubjects.includes(s));
        if (!hasSubject) return false;
      }

      return true;
    });

    setResults(filtered);
    setSearched(true);
  };

  return { filters, setFilters, results, searched, search };
}