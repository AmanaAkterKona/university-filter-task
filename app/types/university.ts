export interface University {
  id: number;
  name: string;
  country: string;
  requiredCGPA: number;
  requiredIELTS: number;
  fieldOfStudy: string;
  subjects: string[];
  applicationDeadline: string;
  intake: string[];
}

export interface FilterInputs {
  country: string;
  cgpa: string;
  ielts: string;
}