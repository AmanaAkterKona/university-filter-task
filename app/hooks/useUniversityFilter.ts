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

      // Field filter (if selected)
      if (filters.selectedFields.length > 0) {
        const hasField = filters.selectedFields.some(f => u.fields.includes(f));
        if (!hasField) return false;
      }

      // Subject filter (if selected)
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

  const applyFieldSubjectFilter = (fields: string[], subjects: string[]) => {
    setFilters(prev => ({ ...prev, selectedFields: fields, selectedSubjects: subjects }));

    const cgpa  = parseFloat(filters.cgpa);
    const ielts = parseFloat(filters.ielts);

    const filtered = universities.filter((u) => {
      if (filters.country && u.country !== filters.country) return false;
      if (!isNaN(cgpa)  && cgpa  < u.requiredCGPA)  return false;
      if (!isNaN(ielts) && ielts < u.requiredIELTS) return false;

      if (fields.length > 0) {
        const hasField = fields.some(f => u.fields.includes(f));
        if (!hasField) return false;
      }

      if (subjects.length > 0) {
        const allSubjects = u.subjects.flatMap(s => s.subjects);
        const hasSubject = subjects.some(s => allSubjects.includes(s));
        if (!hasSubject) return false;
      }

      return true;
    });

    setResults(filtered);
  };

  const clearFieldSubjectFilter = () => {
    setFilters(prev => ({ ...prev, selectedFields: [], selectedSubjects: [] }));
    search();
  };

  const goBack = () => {
    setSearched(false);
    setFilters(prev => ({ ...prev, selectedFields: [], selectedSubjects: [] }));
  };

  return { filters, setFilters, results, searched, search, goBack, applyFieldSubjectFilter, clearFieldSubjectFilter };
}