export interface Subject {
  name: string;
  field: string;
}

export interface University {
  id: number;
  name: string;
  country: string;
  requiredCGPA: number;
  requiredIELTS: number;
  fields: string[];
  subjects: { field: string; subjects: string[] }[];
  applicationDeadline: string;
  intake: ('Fall' | 'Winter' | 'Spring' | 'Summer')[];
}

export interface FilterInputs {
  country: string;
  cgpa: string;
  ielts: string;
  selectedFields: string[];
  selectedSubjects: string[];
}