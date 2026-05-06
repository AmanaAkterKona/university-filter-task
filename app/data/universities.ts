import { University } from '../types/university';

export const COUNTRIES = [
  'Germany','Canada','Australia','UK','USA',
  'Spain','Italy','Japan','China','Sweden','Netherlands','France'
];

export const ALL_FIELDS = [
  'Engineering & Technology',
  'Business & Economics',
  'Medicine & Health Sciences',
  'Natural Sciences',
  'Social Sciences & Humanities',
  'Arts & Design',
  'Law',
  'Agriculture & Environment',
  'Computer Science & IT',
  'Mathematics & Statistics',
];

export const FIELD_SUBJECTS: Record<string, string[]> = {
  'Engineering & Technology': [
    'Mechanical Engineering','Electrical Engineering','Civil Engineering',
    'Aerospace Engineering','Chemical Engineering','Automotive Engineering',
    'Biomedical Engineering','Industrial Engineering','Materials Engineering',
    'Naval Architecture','Petroleum Engineering','Robotics',
  ],
  'Business & Economics': [
    'Business Administration','Finance','Accounting','Economics',
    'International Business','Marketing','MBA','Management',
    'Commerce','Actuarial Science','Supply Chain Management',
  ],
  'Medicine & Health Sciences': [
    'Medicine','Public Health','Nursing','Pharmacy',
    'Dentistry','Biomedical Science','Veterinary Medicine',
    'Medical Science','Pharmaceutical Science','Neuroscience',
  ],
  'Natural Sciences': [
    'Physics','Chemistry','Biology','Biochemistry',
    'Biotechnology','Marine Biology','Environmental Science',
    'Astrophysics','Geology','Material Sciences',
  ],
  'Social Sciences & Humanities': [
    'Political Science','Sociology','Psychology','Economics',
    'International Relations','History','Linguistics',
    'Journalism','Communication','Philosophy',
  ],
  'Arts & Design': [
    'Architecture','Industrial Design','Fine Arts',
    'Art History','Film Studies','Fashion Design',
    'Urban Studies','Graphic Design',
  ],
  'Law': [
    'Common Law','International Law','European Law',
    'Business Law','Constitutional Law',
  ],
  'Agriculture & Environment': [
    'Food Science','Agronomy','Food Technology',
    'Agricultural Science','Environmental Management',
    'Marine Sciences','Water Resources','Remote Sensing',
  ],
  'Computer Science & IT': [
    'Computer Science','Software Engineering','Data Science',
    'Artificial Intelligence','Cybersecurity','Information Technology',
    'Telecommunications','Computer Engineering',
  ],
  'Mathematics & Statistics': [
    'Mathematics','Statistics','Applied Mathematics',
    'Actuarial Science','Operations Research',
  ],
};

export const universities: University[] = [
  // ── GERMANY ──
  {
    id: 1, name: 'Technical University of Munich', country: 'Germany',
    requiredCGPA: 3.3, requiredIELTS: 6.5,
    fields: ['Engineering & Technology','Computer Science & IT','Natural Sciences'],
    subjects: [
      { field: 'Engineering & Technology', subjects: ['Mechanical Engineering','Chemical Engineering','Aerospace Engineering'] },
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Robotics'] },
      { field: 'Natural Sciences',         subjects: ['Physics','Chemistry'] },
    ],
    applicationDeadline: 'Jan 15 / Jul 15', intake: ['Winter','Summer'],
  },
  {
    id: 2, name: 'RWTH Aachen University', country: 'Germany',
    requiredCGPA: 3.2, requiredIELTS: 6.5,
    fields: ['Engineering & Technology','Computer Science & IT'],
    subjects: [
      { field: 'Engineering & Technology', subjects: ['Electrical Engineering','Civil Engineering','Mechanical Engineering'] },
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Telecommunications'] },
    ],
    applicationDeadline: 'Jan 15 / Jul 15', intake: ['Winter','Summer'],
  },
  {
    id: 3, name: 'LMU Munich', country: 'Germany',
    requiredCGPA: 3.0, requiredIELTS: 6.0,
    fields: ['Natural Sciences','Business & Economics','Medicine & Health Sciences'],
    subjects: [
      { field: 'Natural Sciences',         subjects: ['Physics','Biology'] },
      { field: 'Business & Economics',     subjects: ['Economics','Management'] },
      { field: 'Medicine & Health Sciences', subjects: ['Medicine','Pharmacy'] },
    ],
    applicationDeadline: 'May 31 / Nov 30', intake: ['Winter','Summer'],
  },
  {
    id: 4, name: 'Heidelberg University', country: 'Germany',
    requiredCGPA: 3.0, requiredIELTS: 6.0,
    fields: ['Natural Sciences','Medicine & Health Sciences','Social Sciences & Humanities'],
    subjects: [
      { field: 'Natural Sciences',           subjects: ['Biology','Chemistry','Biochemistry'] },
      { field: 'Medicine & Health Sciences', subjects: ['Medicine','Pharmacy'] },
      { field: 'Social Sciences & Humanities', subjects: ['Political Science','Philosophy'] },
    ],
    applicationDeadline: 'May 31', intake: ['Winter'],
  },
  {
    id: 5, name: 'Humboldt University Berlin', country: 'Germany',
    requiredCGPA: 3.0, requiredIELTS: 6.0,
    fields: ['Social Sciences & Humanities','Natural Sciences','Law'],
    subjects: [
      { field: 'Social Sciences & Humanities', subjects: ['Political Science','Linguistics','Philosophy'] },
      { field: 'Natural Sciences',             subjects: ['Physics','Mathematics'] },
      { field: 'Law',                          subjects: ['International Law','Constitutional Law'] },
    ],
    applicationDeadline: 'May 31', intake: ['Winter'],
  },
  {
    id: 6, name: 'University of Hamburg', country: 'Germany',
    requiredCGPA: 2.8, requiredIELTS: 6.0,
    fields: ['Business & Economics','Natural Sciences','Law'],
    subjects: [
      { field: 'Business & Economics', subjects: ['Business Administration','Finance','Economics'] },
      { field: 'Natural Sciences',     subjects: ['Chemistry','Biology'] },
      { field: 'Law',                  subjects: ['International Law','Business Law'] },
    ],
    applicationDeadline: 'May 31 / Nov 30', intake: ['Winter','Summer'],
  },
  {
    id: 7, name: 'University of Stuttgart', country: 'Germany',
    requiredCGPA: 3.1, requiredIELTS: 6.5,
    fields: ['Engineering & Technology','Arts & Design'],
    subjects: [
      { field: 'Engineering & Technology', subjects: ['Aerospace Engineering','Automotive Engineering','Civil Engineering'] },
      { field: 'Arts & Design',            subjects: ['Architecture','Urban Studies'] },
    ],
    applicationDeadline: 'Jan 15', intake: ['Winter'],
  },
  {
    id: 8, name: 'Karlsruhe Institute of Technology', country: 'Germany',
    requiredCGPA: 3.2, requiredIELTS: 6.5,
    fields: ['Computer Science & IT','Engineering & Technology','Mathematics & Statistics'],
    subjects: [
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Information Technology'] },
      { field: 'Engineering & Technology', subjects: ['Electrical Engineering','Mechanical Engineering'] },
      { field: 'Mathematics & Statistics', subjects: ['Mathematics','Applied Mathematics'] },
    ],
    applicationDeadline: 'Jan 15 / Jul 15', intake: ['Winter','Summer'],
  },
  {
    id: 9, name: 'TU Berlin', country: 'Germany',
    requiredCGPA: 3.0, requiredIELTS: 6.5,
    fields: ['Engineering & Technology','Arts & Design','Computer Science & IT'],
    subjects: [
      { field: 'Engineering & Technology', subjects: ['Industrial Engineering','Mechanical Engineering'] },
      { field: 'Arts & Design',            subjects: ['Architecture','Urban Studies'] },
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Data Science'] },
    ],
    applicationDeadline: 'Jan 15 / Jul 15', intake: ['Winter','Summer'],
  },
  {
    id: 10, name: 'University of Freiburg', country: 'Germany',
    requiredCGPA: 2.9, requiredIELTS: 6.0,
    fields: ['Natural Sciences','Agriculture & Environment','Medicine & Health Sciences'],
    subjects: [
      { field: 'Natural Sciences',          subjects: ['Biology','Chemistry'] },
      { field: 'Agriculture & Environment', subjects: ['Environmental Management','Environmental Science'] },
      { field: 'Medicine & Health Sciences',subjects: ['Medicine','Pharmacy'] },
    ],
    applicationDeadline: 'May 31', intake: ['Winter'],
  },

  // ── CANADA ──
  {
    id: 11, name: 'University of Toronto', country: 'Canada',
    requiredCGPA: 3.0, requiredIELTS: 6.5,
    fields: ['Engineering & Technology','Computer Science & IT','Medicine & Health Sciences'],
    subjects: [
      { field: 'Engineering & Technology', subjects: ['Electrical Engineering','Chemical Engineering'] },
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Data Science'] },
      { field: 'Medicine & Health Sciences',subjects: ['Medicine','Public Health'] },
    ],
    applicationDeadline: 'Nov 1 / Feb 1', intake: ['Fall','Winter'],
  },
  {
    id: 12, name: 'University of British Columbia', country: 'Canada',
    requiredCGPA: 3.2, requiredIELTS: 6.5,
    fields: ['Natural Sciences','Business & Economics','Agriculture & Environment'],
    subjects: [
      { field: 'Natural Sciences',          subjects: ['Biology','Chemistry','Biochemistry'] },
      { field: 'Business & Economics',      subjects: ['Economics','Finance'] },
      { field: 'Agriculture & Environment', subjects: ['Environmental Management','Food Science'] },
    ],
    applicationDeadline: 'Dec 1', intake: ['Fall'],
  },
  {
    id: 13, name: 'McGill University', country: 'Canada',
    requiredCGPA: 3.3, requiredIELTS: 6.5,
    fields: ['Medicine & Health Sciences','Computer Science & IT','Natural Sciences'],
    subjects: [
      { field: 'Medicine & Health Sciences', subjects: ['Medicine','Pharmacy','Nursing'] },
      { field: 'Computer Science & IT',      subjects: ['Computer Science','Software Engineering'] },
      { field: 'Natural Sciences',           subjects: ['Biochemistry','Chemistry'] },
    ],
    applicationDeadline: 'Nov 15 / Feb 1', intake: ['Fall','Winter'],
  },
  {
    id: 14, name: 'University of Alberta', country: 'Canada',
    requiredCGPA: 3.0, requiredIELTS: 6.5,
    fields: ['Engineering & Technology','Agriculture & Environment','Business & Economics'],
    subjects: [
      { field: 'Engineering & Technology',  subjects: ['Chemical Engineering','Civil Engineering','Petroleum Engineering'] },
      { field: 'Agriculture & Environment', subjects: ['Agricultural Science','Environmental Management'] },
      { field: 'Business & Economics',      subjects: ['Business Administration','Finance'] },
    ],
    applicationDeadline: 'Mar 1', intake: ['Fall'],
  },
  {
    id: 15, name: 'University of Waterloo', country: 'Canada',
    requiredCGPA: 3.3, requiredIELTS: 7.0,
    fields: ['Mathematics & Statistics','Engineering & Technology','Computer Science & IT'],
    subjects: [
      { field: 'Mathematics & Statistics',  subjects: ['Mathematics','Statistics','Actuarial Science'] },
      { field: 'Engineering & Technology',  subjects: ['Electrical Engineering','Mechanical Engineering'] },
      { field: 'Computer Science & IT',     subjects: ['Computer Science','Software Engineering'] },
    ],
    applicationDeadline: 'Jan 15', intake: ['Fall'],
  },
  {
    id: 16, name: 'McMaster University', country: 'Canada',
    requiredCGPA: 3.0, requiredIELTS: 6.5,
    fields: ['Medicine & Health Sciences','Engineering & Technology','Natural Sciences'],
    subjects: [
      { field: 'Medicine & Health Sciences', subjects: ['Nursing','Biomedical Science','Medicine'] },
      { field: 'Engineering & Technology',   subjects: ['Biomedical Engineering','Chemical Engineering'] },
      { field: 'Natural Sciences',           subjects: ['Chemistry','Biology'] },
    ],
    applicationDeadline: 'Nov 1', intake: ['Fall'],
  },
  {
    id: 17, name: "Queen's University", country: 'Canada',
    requiredCGPA: 3.0, requiredIELTS: 6.5,
    fields: ['Business & Economics','Engineering & Technology','Law'],
    subjects: [
      { field: 'Business & Economics',     subjects: ['Commerce','Finance','Accounting'] },
      { field: 'Engineering & Technology', subjects: ['Civil Engineering','Mechanical Engineering'] },
      { field: 'Law',                      subjects: ['Common Law','International Law'] },
    ],
    applicationDeadline: 'Nov 1', intake: ['Fall'],
  },
  {
    id: 18, name: 'University of Calgary', country: 'Canada',
    requiredCGPA: 2.8, requiredIELTS: 6.5,
    fields: ['Engineering & Technology','Natural Sciences','Business & Economics'],
    subjects: [
      { field: 'Engineering & Technology', subjects: ['Petroleum Engineering','Mechanical Engineering'] },
      { field: 'Natural Sciences',         subjects: ['Geology','Chemistry'] },
      { field: 'Business & Economics',     subjects: ['Business Administration','Finance'] },
    ],
    applicationDeadline: 'Feb 1', intake: ['Fall','Winter'],
  },
  {
    id: 19, name: 'Dalhousie University', country: 'Canada',
    requiredCGPA: 2.7, requiredIELTS: 6.0,
    fields: ['Agriculture & Environment','Engineering & Technology','Medicine & Health Sciences'],
    subjects: [
      { field: 'Agriculture & Environment', subjects: ['Marine Sciences','Environmental Management'] },
      { field: 'Engineering & Technology',  subjects: ['Civil Engineering','Electrical Engineering'] },
      { field: 'Medicine & Health Sciences',subjects: ['Medicine','Nursing'] },
    ],
    applicationDeadline: 'Mar 1', intake: ['Fall','Winter'],
  },
  {
    id: 20, name: 'University of Ottawa', country: 'Canada',
    requiredCGPA: 2.8, requiredIELTS: 6.5,
    fields: ['Law','Social Sciences & Humanities','Medicine & Health Sciences'],
    subjects: [
      { field: 'Law',                          subjects: ['Common Law','International Law'] },
      { field: 'Social Sciences & Humanities', subjects: ['Political Science','International Relations'] },
      { field: 'Medicine & Health Sciences',   subjects: ['Medicine','Public Health'] },
    ],
    applicationDeadline: 'Feb 1', intake: ['Fall','Winter'],
  },

  // ── AUSTRALIA ──
  {
    id: 21, name: 'University of Melbourne', country: 'Australia',
    requiredCGPA: 3.0, requiredIELTS: 6.5,
    fields: ['Arts & Design','Business & Economics','Engineering & Technology'],
    subjects: [
      { field: 'Arts & Design',            subjects: ['Architecture','Urban Studies'] },
      { field: 'Business & Economics',     subjects: ['Commerce','Finance','Accounting'] },
      { field: 'Engineering & Technology', subjects: ['Civil Engineering','Electrical Engineering'] },
    ],
    applicationDeadline: 'Oct 31 / Mar 31', intake: ['Fall','Spring'],
  },
  {
    id: 22, name: 'Australian National University', country: 'Australia',
    requiredCGPA: 3.2, requiredIELTS: 6.5,
    fields: ['Social Sciences & Humanities','Natural Sciences','Business & Economics'],
    subjects: [
      { field: 'Social Sciences & Humanities', subjects: ['International Relations','Political Science'] },
      { field: 'Natural Sciences',             subjects: ['Chemistry','Physics','Biology'] },
      { field: 'Business & Economics',         subjects: ['Economics','Finance'] },
    ],
    applicationDeadline: 'Oct 31', intake: ['Fall'],
  },
  {
    id: 23, name: 'University of Sydney', country: 'Australia',
    requiredCGPA: 3.0, requiredIELTS: 6.5,
    fields: ['Engineering & Technology','Law','Business & Economics'],
    subjects: [
      { field: 'Engineering & Technology', subjects: ['Biomedical Engineering','Civil Engineering','Mechanical Engineering'] },
      { field: 'Law',                      subjects: ['Business Law','International Law'] },
      { field: 'Business & Economics',     subjects: ['Business Administration','Finance'] },
    ],
    applicationDeadline: 'Oct 31 / Apr 30', intake: ['Fall','Spring'],
  },
  {
    id: 24, name: 'University of Queensland', country: 'Australia',
    requiredCGPA: 2.8, requiredIELTS: 6.5,
    fields: ['Agriculture & Environment','Engineering & Technology','Natural Sciences'],
    subjects: [
      { field: 'Agriculture & Environment', subjects: ['Environmental Management','Agricultural Science','Food Science'] },
      { field: 'Engineering & Technology',  subjects: ['Civil Engineering','Chemical Engineering'] },
      { field: 'Natural Sciences',          subjects: ['Biology','Chemistry'] },
    ],
    applicationDeadline: 'Oct 31', intake: ['Fall','Spring'],
  },
  {
    id: 25, name: 'Monash University', country: 'Australia',
    requiredCGPA: 3.0, requiredIELTS: 6.5,
    fields: ['Medicine & Health Sciences','Engineering & Technology','Business & Economics'],
    subjects: [
      { field: 'Medicine & Health Sciences', subjects: ['Pharmaceutical Science','Nursing','Medicine'] },
      { field: 'Engineering & Technology',   subjects: ['Electrical Engineering','Mechanical Engineering'] },
      { field: 'Business & Economics',       subjects: ['Business Administration','Accounting'] },
    ],
    applicationDeadline: 'Oct 31 / Apr 30', intake: ['Fall','Spring'],
  },
  {
    id: 26, name: 'University of New South Wales', country: 'Australia',
    requiredCGPA: 3.0, requiredIELTS: 6.5,
    fields: ['Business & Economics','Engineering & Technology','Computer Science & IT'],
    subjects: [
      { field: 'Business & Economics',     subjects: ['Finance','Accounting','Business Administration'] },
      { field: 'Engineering & Technology', subjects: ['Mechanical Engineering','Chemical Engineering'] },
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Data Science'] },
    ],
    applicationDeadline: 'Oct 31', intake: ['Fall'],
  },
  {
    id: 27, name: 'University of Adelaide', country: 'Australia',
    requiredCGPA: 2.7, requiredIELTS: 6.0,
    fields: ['Medicine & Health Sciences','Engineering & Technology','Agriculture & Environment'],
    subjects: [
      { field: 'Medicine & Health Sciences', subjects: ['Dentistry','Nursing','Medicine'] },
      { field: 'Engineering & Technology',   subjects: ['Civil Engineering','Petroleum Engineering'] },
      { field: 'Agriculture & Environment',  subjects: ['Agricultural Science','Environmental Management'] },
    ],
    applicationDeadline: 'Oct 31 / Apr 30', intake: ['Fall','Spring'],
  },
  {
    id: 28, name: 'University of Western Australia', country: 'Australia',
    requiredCGPA: 2.8, requiredIELTS: 6.5,
    fields: ['Engineering & Technology','Natural Sciences','Mathematics & Statistics'],
    subjects: [
      { field: 'Engineering & Technology', subjects: ['Civil Engineering','Electrical Engineering'] },
      { field: 'Natural Sciences',         subjects: ['Geology','Chemistry','Physics'] },
      { field: 'Mathematics & Statistics', subjects: ['Mathematics','Statistics'] },
    ],
    applicationDeadline: 'Nov 30', intake: ['Fall'],
  },
  {
    id: 29, name: 'Macquarie University', country: 'Australia',
    requiredCGPA: 2.7, requiredIELTS: 6.0,
    fields: ['Business & Economics','Natural Sciences','Social Sciences & Humanities'],
    subjects: [
      { field: 'Business & Economics',         subjects: ['Accounting','Finance','Business Administration'] },
      { field: 'Natural Sciences',             subjects: ['Biology','Chemistry'] },
      { field: 'Social Sciences & Humanities', subjects: ['Psychology','Linguistics'] },
    ],
    applicationDeadline: 'Nov 30 / May 31', intake: ['Fall','Spring'],
  },
  {
    id: 30, name: 'Queensland University of Technology', country: 'Australia',
    requiredCGPA: 2.7, requiredIELTS: 6.0,
    fields: ['Computer Science & IT','Engineering & Technology','Arts & Design'],
    subjects: [
      { field: 'Computer Science & IT',    subjects: ['Information Technology','Data Science','Software Engineering'] },
      { field: 'Engineering & Technology', subjects: ['Civil Engineering','Electrical Engineering'] },
      { field: 'Arts & Design',            subjects: ['Industrial Design','Graphic Design'] },
    ],
    applicationDeadline: 'Nov 30 / May 31', intake: ['Fall','Spring'],
  },

  // ── UK ──
  {
    id: 31, name: 'University of Oxford', country: 'UK',
    requiredCGPA: 3.7, requiredIELTS: 7.5,
    fields: ['Social Sciences & Humanities','Natural Sciences','Medicine & Health Sciences','Law'],
    subjects: [
      { field: 'Social Sciences & Humanities', subjects: ['Philosophy','International Relations','History'] },
      { field: 'Natural Sciences',             subjects: ['Biochemistry','Physics','Chemistry'] },
      { field: 'Medicine & Health Sciences',   subjects: ['Medicine','Public Health'] },
      { field: 'Law',                          subjects: ['International Law','Constitutional Law'] },
    ],
    applicationDeadline: 'Jan 20', intake: ['Fall'],
  },
  {
    id: 32, name: 'University of Cambridge', country: 'UK',
    requiredCGPA: 3.7, requiredIELTS: 7.5,
    fields: ['Natural Sciences','Engineering & Technology','Computer Science & IT','Mathematics & Statistics'],
    subjects: [
      { field: 'Natural Sciences',         subjects: ['Chemistry','Biology','Physics'] },
      { field: 'Engineering & Technology', subjects: ['Mechanical Engineering','Civil Engineering'] },
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Artificial Intelligence'] },
      { field: 'Mathematics & Statistics', subjects: ['Mathematics','Applied Mathematics'] },
    ],
    applicationDeadline: 'Dec 5', intake: ['Fall'],
  },
  {
    id: 33, name: 'Imperial College London', country: 'UK',
    requiredCGPA: 3.5, requiredIELTS: 7.0,
    fields: ['Engineering & Technology','Medicine & Health Sciences','Natural Sciences'],
    subjects: [
      { field: 'Engineering & Technology',   subjects: ['Biomedical Engineering','Electrical Engineering','Mechanical Engineering'] },
      { field: 'Medicine & Health Sciences', subjects: ['Medicine','Public Health','Pharmacy'] },
      { field: 'Natural Sciences',           subjects: ['Physics','Chemistry'] },
    ],
    applicationDeadline: 'Jan 15', intake: ['Fall'],
  },
  {
    id: 34, name: 'University College London', country: 'UK',
    requiredCGPA: 3.3, requiredIELTS: 7.0,
    fields: ['Arts & Design','Mathematics & Statistics','Social Sciences & Humanities'],
    subjects: [
      { field: 'Arts & Design',                subjects: ['Architecture','Urban Studies'] },
      { field: 'Mathematics & Statistics',     subjects: ['Statistics','Applied Mathematics'] },
      { field: 'Social Sciences & Humanities', subjects: ['Political Science','Economics'] },
    ],
    applicationDeadline: 'Jan 26', intake: ['Fall'],
  },
  {
    id: 35, name: 'University of Edinburgh', country: 'UK',
    requiredCGPA: 3.2, requiredIELTS: 6.5,
    fields: ['Social Sciences & Humanities','Business & Economics','Computer Science & IT'],
    subjects: [
      { field: 'Social Sciences & Humanities', subjects: ['Sociology','Political Science','Philosophy'] },
      { field: 'Business & Economics',         subjects: ['Economics','Finance','Business Administration'] },
      { field: 'Computer Science & IT',        subjects: ['Computer Science','Artificial Intelligence'] },
    ],
    applicationDeadline: 'Jan 15', intake: ['Fall'],
  },
  {
    id: 36, name: "King's College London", country: 'UK',
    requiredCGPA: 3.3, requiredIELTS: 7.0,
    fields: ['Law','Medicine & Health Sciences','Social Sciences & Humanities'],
    subjects: [
      { field: 'Law',                          subjects: ['International Law','Business Law','Constitutional Law'] },
      { field: 'Medicine & Health Sciences',   subjects: ['Medicine','Pharmacy','Nursing'] },
      { field: 'Social Sciences & Humanities', subjects: ['Political Science','International Relations'] },
    ],
    applicationDeadline: 'Jan 26', intake: ['Fall'],
  },
  {
    id: 37, name: 'University of Manchester', country: 'UK',
    requiredCGPA: 3.0, requiredIELTS: 6.5,
    fields: ['Business & Economics','Engineering & Technology','Natural Sciences'],
    subjects: [
      { field: 'Business & Economics',     subjects: ['Management','Accounting','Finance'] },
      { field: 'Engineering & Technology', subjects: ['Chemical Engineering','Mechanical Engineering'] },
      { field: 'Natural Sciences',         subjects: ['Chemistry','Biology','Physics'] },
    ],
    applicationDeadline: 'Jan 26', intake: ['Fall'],
  },
  {
    id: 38, name: 'University of Bristol', country: 'UK',
    requiredCGPA: 3.0, requiredIELTS: 6.5,
    fields: ['Arts & Design','Engineering & Technology','Social Sciences & Humanities'],
    subjects: [
      { field: 'Arts & Design',                subjects: ['Architecture','Fine Arts'] },
      { field: 'Engineering & Technology',     subjects: ['Aerospace Engineering','Civil Engineering'] },
      { field: 'Social Sciences & Humanities', subjects: ['Sociology','Politics'] },
    ],
    applicationDeadline: 'Jan 26', intake: ['Fall'],
  },
  {
    id: 39, name: 'University of Warwick', country: 'UK',
    requiredCGPA: 3.2, requiredIELTS: 6.5,
    fields: ['Business & Economics','Mathematics & Statistics','Engineering & Technology'],
    subjects: [
      { field: 'Business & Economics',     subjects: ['Economics','Business Administration','Finance'] },
      { field: 'Mathematics & Statistics', subjects: ['Mathematics','Statistics'] },
      { field: 'Engineering & Technology', subjects: ['Mechanical Engineering','Electrical Engineering'] },
    ],
    applicationDeadline: 'Jan 15', intake: ['Fall'],
  },
  {
    id: 40, name: 'University of Glasgow', country: 'UK',
    requiredCGPA: 2.8, requiredIELTS: 6.0,
    fields: ['Computer Science & IT','Social Sciences & Humanities','Medicine & Health Sciences'],
    subjects: [
      { field: 'Computer Science & IT',        subjects: ['Computer Science','Software Engineering'] },
      { field: 'Social Sciences & Humanities', subjects: ['History','Philosophy','Linguistics'] },
      { field: 'Medicine & Health Sciences',   subjects: ['Medicine','Nursing','Dentistry'] },
    ],
    applicationDeadline: 'Jan 31', intake: ['Fall'],
  },

  // ── USA ──
  {
    id: 41, name: 'Massachusetts Institute of Technology', country: 'USA',
    requiredCGPA: 3.7, requiredIELTS: 7.0,
    fields: ['Engineering & Technology','Computer Science & IT','Natural Sciences','Mathematics & Statistics'],
    subjects: [
      { field: 'Engineering & Technology', subjects: ['Mechanical Engineering','Electrical Engineering','Aerospace Engineering'] },
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Artificial Intelligence','Data Science'] },
      { field: 'Natural Sciences',         subjects: ['Physics','Chemistry','Biology'] },
      { field: 'Mathematics & Statistics', subjects: ['Mathematics','Applied Mathematics'] },
    ],
    applicationDeadline: 'Dec 15', intake: ['Fall'],
  },
  {
    id: 42, name: 'Stanford University', country: 'USA',
    requiredCGPA: 3.7, requiredIELTS: 7.0,
    fields: ['Engineering & Technology','Business & Economics','Computer Science & IT'],
    subjects: [
      { field: 'Engineering & Technology', subjects: ['Electrical Engineering','Mechanical Engineering','Biomedical Engineering'] },
      { field: 'Business & Economics',     subjects: ['MBA','Finance','Management'] },
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Artificial Intelligence','Data Science'] },
    ],
    applicationDeadline: 'Dec 1', intake: ['Fall'],
  },
  {
    id: 43, name: 'Harvard University', country: 'USA',
    requiredCGPA: 3.8, requiredIELTS: 7.5,
    fields: ['Law','Medicine & Health Sciences','Business & Economics','Social Sciences & Humanities'],
    subjects: [
      { field: 'Law',                          subjects: ['International Law','Constitutional Law','Business Law'] },
      { field: 'Medicine & Health Sciences',   subjects: ['Medicine','Public Health'] },
      { field: 'Business & Economics',         subjects: ['MBA','Finance','Economics'] },
      { field: 'Social Sciences & Humanities', subjects: ['Political Science','International Relations','History'] },
    ],
    applicationDeadline: 'Dec 1', intake: ['Fall'],
  },
  {
    id: 44, name: 'UC Berkeley', country: 'USA',
    requiredCGPA: 3.5, requiredIELTS: 7.0,
    fields: ['Engineering & Technology','Natural Sciences','Computer Science & IT','Business & Economics'],
    subjects: [
      { field: 'Engineering & Technology', subjects: ['Electrical Engineering','Civil Engineering','Chemical Engineering'] },
      { field: 'Natural Sciences',         subjects: ['Chemistry','Physics','Biology'] },
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Data Science'] },
      { field: 'Business & Economics',     subjects: ['Economics','Business Administration'] },
    ],
    applicationDeadline: 'Dec 1', intake: ['Fall'],
  },
  {
    id: 45, name: 'University of Michigan', country: 'USA',
    requiredCGPA: 3.3, requiredIELTS: 6.5,
    fields: ['Engineering & Technology','Business & Economics','Medicine & Health Sciences'],
    subjects: [
      { field: 'Engineering & Technology',   subjects: ['Mechanical Engineering','Electrical Engineering','Aerospace Engineering'] },
      { field: 'Business & Economics',       subjects: ['Business Administration','Finance','Accounting'] },
      { field: 'Medicine & Health Sciences', subjects: ['Medicine','Public Health','Nursing'] },
    ],
    applicationDeadline: 'Feb 1', intake: ['Fall'],
  },
  {
    id: 46, name: 'Georgia Institute of Technology', country: 'USA',
    requiredCGPA: 3.3, requiredIELTS: 6.5,
    fields: ['Computer Science & IT','Engineering & Technology','Mathematics & Statistics'],
    subjects: [
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Cybersecurity','Data Science'] },
      { field: 'Engineering & Technology', subjects: ['Industrial Engineering','Electrical Engineering','Mechanical Engineering'] },
      { field: 'Mathematics & Statistics', subjects: ['Applied Mathematics','Statistics'] },
    ],
    applicationDeadline: 'Jan 15', intake: ['Fall','Spring'],
  },
  {
    id: 47, name: 'Carnegie Mellon University', country: 'USA',
    requiredCGPA: 3.5, requiredIELTS: 7.0,
    fields: ['Computer Science & IT','Engineering & Technology','Arts & Design'],
    subjects: [
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Artificial Intelligence','Software Engineering'] },
      { field: 'Engineering & Technology', subjects: ['Electrical Engineering','Mechanical Engineering'] },
      { field: 'Arts & Design',            subjects: ['Fine Arts','Industrial Design','Architecture'] },
    ],
    applicationDeadline: 'Dec 15', intake: ['Fall'],
  },
  {
    id: 48, name: 'University of Washington', country: 'USA',
    requiredCGPA: 3.2, requiredIELTS: 7.0,
    fields: ['Medicine & Health Sciences','Computer Science & IT','Engineering & Technology'],
    subjects: [
      { field: 'Medicine & Health Sciences', subjects: ['Medicine','Public Health','Biomedical Science'] },
      { field: 'Computer Science & IT',      subjects: ['Computer Science','Data Science','Information Technology'] },
      { field: 'Engineering & Technology',   subjects: ['Biomedical Engineering','Electrical Engineering'] },
    ],
    applicationDeadline: 'Dec 15', intake: ['Fall'],
  },
  {
    id: 49, name: 'Purdue University', country: 'USA',
    requiredCGPA: 3.0, requiredIELTS: 6.5,
    fields: ['Engineering & Technology','Agriculture & Environment','Computer Science & IT'],
    subjects: [
      { field: 'Engineering & Technology',  subjects: ['Aerospace Engineering','Chemical Engineering','Mechanical Engineering'] },
      { field: 'Agriculture & Environment', subjects: ['Food Science','Agricultural Science'] },
      { field: 'Computer Science & IT',     subjects: ['Computer Science','Data Science'] },
    ],
    applicationDeadline: 'Dec 31', intake: ['Fall','Spring'],
  },
  {
    id: 50, name: 'Texas A&M University', country: 'USA',
    requiredCGPA: 3.0, requiredIELTS: 6.0,
    fields: ['Engineering & Technology','Agriculture & Environment','Business & Economics'],
    subjects: [
      { field: 'Engineering & Technology',  subjects: ['Petroleum Engineering','Civil Engineering','Mechanical Engineering'] },
      { field: 'Agriculture & Environment', subjects: ['Agricultural Science','Food Science'] },
      { field: 'Business & Economics',      subjects: ['Business Administration','Finance'] },
    ],
    applicationDeadline: 'Mar 1', intake: ['Fall','Spring'],
  },

  // ── SPAIN ──
  {
    id: 51, name: 'University of Barcelona', country: 'Spain',
    requiredCGPA: 2.8, requiredIELTS: 6.0,
    fields: ['Natural Sciences','Social Sciences & Humanities','Medicine & Health Sciences'],
    subjects: [
      { field: 'Natural Sciences',             subjects: ['Biology','Chemistry','Biochemistry'] },
      { field: 'Social Sciences & Humanities', subjects: ['History','Philosophy','Linguistics'] },
      { field: 'Medicine & Health Sciences',   subjects: ['Medicine','Pharmacy','Nursing'] },
    ],
    applicationDeadline: 'Jun 30', intake: ['Fall'],
  },
  {
    id: 52, name: 'Autonomous University of Madrid', country: 'Spain',
    requiredCGPA: 2.8, requiredIELTS: 6.0,
    fields: ['Natural Sciences','Mathematics & Statistics','Social Sciences & Humanities'],
    subjects: [
      { field: 'Natural Sciences',             subjects: ['Physics','Chemistry','Biology'] },
      { field: 'Mathematics & Statistics',     subjects: ['Mathematics','Statistics'] },
      { field: 'Social Sciences & Humanities', subjects: ['Political Science','Economics'] },
    ],
    applicationDeadline: 'Jun 30', intake: ['Fall'],
  },
  {
    id: 53, name: 'University of Granada', country: 'Spain',
    requiredCGPA: 2.5, requiredIELTS: 5.5,
    fields: ['Social Sciences & Humanities','Business & Economics'],
    subjects: [
      { field: 'Social Sciences & Humanities', subjects: ['Linguistics','History','Philosophy'] },
      { field: 'Business & Economics',         subjects: ['Business Administration','Economics'] },
    ],
    applicationDeadline: 'Jul 31', intake: ['Fall'],
  },
  {
    id: 54, name: 'Complutense University of Madrid', country: 'Spain',
    requiredCGPA: 2.7, requiredIELTS: 6.0,
    fields: ['Social Sciences & Humanities','Law','Medicine & Health Sciences'],
    subjects: [
      { field: 'Social Sciences & Humanities', subjects: ['Political Science','Journalism','Sociology'] },
      { field: 'Law',                          subjects: ['Constitutional Law','International Law'] },
      { field: 'Medicine & Health Sciences',   subjects: ['Medicine','Pharmacy'] },
    ],
    applicationDeadline: 'Jun 30', intake: ['Fall'],
  },
  {
    id: 55, name: 'University of Valencia', country: 'Spain',
    requiredCGPA: 2.6, requiredIELTS: 5.5,
    fields: ['Business & Economics','Natural Sciences'],
    subjects: [
      { field: 'Business & Economics', subjects: ['Business Administration','Economics','Finance'] },
      { field: 'Natural Sciences',     subjects: ['Chemistry','Biology','Physics'] },
    ],
    applicationDeadline: 'Jul 15', intake: ['Fall'],
  },
  {
    id: 56, name: 'University of Salamanca', country: 'Spain',
    requiredCGPA: 2.5, requiredIELTS: 5.5,
    fields: ['Social Sciences & Humanities','Law'],
    subjects: [
      { field: 'Social Sciences & Humanities', subjects: ['Linguistics','History','Philosophy'] },
      { field: 'Law',                          subjects: ['Constitutional Law','International Law'] },
    ],
    applicationDeadline: 'Jul 31', intake: ['Fall'],
  },
  {
    id: 57, name: 'University of Seville', country: 'Spain',
    requiredCGPA: 2.5, requiredIELTS: 5.5,
    fields: ['Engineering & Technology','Arts & Design'],
    subjects: [
      { field: 'Engineering & Technology', subjects: ['Aerospace Engineering','Civil Engineering'] },
      { field: 'Arts & Design',            subjects: ['Architecture','Urban Studies'] },
    ],
    applicationDeadline: 'Jul 31', intake: ['Fall'],
  },
  {
    id: 58, name: 'Polytechnic University of Catalonia', country: 'Spain',
    requiredCGPA: 3.0, requiredIELTS: 6.0,
    fields: ['Computer Science & IT','Engineering & Technology'],
    subjects: [
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Telecommunications','Data Science'] },
      { field: 'Engineering & Technology', subjects: ['Civil Engineering','Industrial Engineering'] },
    ],
    applicationDeadline: 'Jun 30', intake: ['Fall'],
  },
  {
    id: 59, name: 'IE University', country: 'Spain',
    requiredCGPA: 3.0, requiredIELTS: 7.0,
    fields: ['Business & Economics','Arts & Design','Law'],
    subjects: [
      { field: 'Business & Economics', subjects: ['Business Administration','Finance','International Business'] },
      { field: 'Arts & Design',        subjects: ['Architecture'] },
      { field: 'Law',                  subjects: ['International Law','Business Law'] },
    ],
    applicationDeadline: 'Jun 1', intake: ['Fall'],
  },
  {
    id: 60, name: 'University of Navarra', country: 'Spain',
    requiredCGPA: 2.8, requiredIELTS: 6.0,
    fields: ['Medicine & Health Sciences','Social Sciences & Humanities'],
    subjects: [
      { field: 'Medicine & Health Sciences',   subjects: ['Medicine','Pharmacy','Nursing'] },
      { field: 'Social Sciences & Humanities', subjects: ['Journalism','Communication','Philosophy'] },
    ],
    applicationDeadline: 'Jun 30', intake: ['Fall'],
  },

  // ── ITALY ──
  {
    id: 61, name: 'University of Bologna', country: 'Italy',
    requiredCGPA: 2.8, requiredIELTS: 6.0,
    fields: ['Law','Agriculture & Environment','Natural Sciences'],
    subjects: [
      { field: 'Law',                       subjects: ['International Law','Business Law','Constitutional Law'] },
      { field: 'Agriculture & Environment', subjects: ['Environmental Management','Food Science'] },
      { field: 'Natural Sciences',          subjects: ['Chemistry','Biology','Physics'] },
    ],
    applicationDeadline: 'May 31', intake: ['Fall'],
  },
  {
    id: 62, name: 'Sapienza University of Rome', country: 'Italy',
    requiredCGPA: 2.8, requiredIELTS: 6.0,
    fields: ['Arts & Design','Engineering & Technology','Social Sciences & Humanities'],
    subjects: [
      { field: 'Arts & Design',                subjects: ['Architecture','Urban Studies','Fine Arts'] },
      { field: 'Engineering & Technology',     subjects: ['Civil Engineering','Electrical Engineering'] },
      { field: 'Social Sciences & Humanities', subjects: ['Political Science','Sociology'] },
    ],
    applicationDeadline: 'May 31', intake: ['Fall'],
  },
  {
    id: 63, name: 'Politecnico di Milano', country: 'Italy',
    requiredCGPA: 3.0, requiredIELTS: 6.5,
    fields: ['Arts & Design','Engineering & Technology','Computer Science & IT'],
    subjects: [
      { field: 'Arts & Design',            subjects: ['Industrial Design','Architecture','Graphic Design'] },
      { field: 'Engineering & Technology', subjects: ['Civil Engineering','Mechanical Engineering','Chemical Engineering'] },
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Information Technology'] },
    ],
    applicationDeadline: 'Apr 30', intake: ['Fall'],
  },
  {
    id: 64, name: 'University of Milan', country: 'Italy',
    requiredCGPA: 2.7, requiredIELTS: 5.5,
    fields: ['Natural Sciences','Medicine & Health Sciences','Law'],
    subjects: [
      { field: 'Natural Sciences',           subjects: ['Chemistry','Biology','Biochemistry'] },
      { field: 'Medicine & Health Sciences', subjects: ['Medicine','Pharmacy','Biomedical Science'] },
      { field: 'Law',                        subjects: ['International Law','Constitutional Law'] },
    ],
    applicationDeadline: 'May 31', intake: ['Fall'],
  },
  {
    id: 65, name: 'University of Padua', country: 'Italy',
    requiredCGPA: 2.8, requiredIELTS: 6.0,
    fields: ['Medicine & Health Sciences','Mathematics & Statistics','Natural Sciences'],
    subjects: [
      { field: 'Medicine & Health Sciences', subjects: ['Medicine','Pharmacy','Nursing'] },
      { field: 'Mathematics & Statistics',   subjects: ['Statistics','Applied Mathematics'] },
      { field: 'Natural Sciences',           subjects: ['Biology','Chemistry','Physics'] },
    ],
    applicationDeadline: 'May 31', intake: ['Fall'],
  },
  {
    id: 66, name: 'University of Florence', country: 'Italy',
    requiredCGPA: 2.7, requiredIELTS: 5.5,
    fields: ['Arts & Design','Agriculture & Environment'],
    subjects: [
      { field: 'Arts & Design',             subjects: ['Architecture','Fine Arts','Art History'] },
      { field: 'Agriculture & Environment', subjects: ['Agricultural Science','Food Science','Environmental Management'] },
    ],
    applicationDeadline: 'Jun 30', intake: ['Fall'],
  },
  {
    id: 67, name: 'University of Turin', country: 'Italy',
    requiredCGPA: 2.7, requiredIELTS: 5.5,
    fields: ['Business & Economics','Law','Medicine & Health Sciences'],
    subjects: [
      { field: 'Business & Economics',     subjects: ['Economics','Management','Finance'] },
      { field: 'Law',                      subjects: ['International Law','Constitutional Law'] },
      { field: 'Medicine & Health Sciences',subjects: ['Medicine','Pharmacy'] },
    ],
    applicationDeadline: 'May 31', intake: ['Fall'],
  },
  {
    id: 68, name: 'Politecnico di Torino', country: 'Italy',
    requiredCGPA: 3.0, requiredIELTS: 6.5,
    fields: ['Engineering & Technology','Computer Science & IT'],
    subjects: [
      { field: 'Engineering & Technology', subjects: ['Mechanical Engineering','Civil Engineering','Aerospace Engineering'] },
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Information Technology'] },
    ],
    applicationDeadline: 'Apr 30 / Oct 31', intake: ['Fall','Spring'],
  },
  {
    id: 69, name: 'University of Naples Federico II', country: 'Italy',
    requiredCGPA: 2.6, requiredIELTS: 5.5,
    fields: ['Engineering & Technology','Social Sciences & Humanities','Natural Sciences'],
    subjects: [
      { field: 'Engineering & Technology',     subjects: ['Aerospace Engineering','Civil Engineering'] },
      { field: 'Social Sciences & Humanities', subjects: ['Sociology','Political Science'] },
      { field: 'Natural Sciences',             subjects: ['Chemistry','Physics','Biology'] },
    ],
    applicationDeadline: 'Jun 30', intake: ['Fall'],
  },
  {
    id: 70, name: 'University of Pisa', country: 'Italy',
    requiredCGPA: 2.8, requiredIELTS: 6.0,
    fields: ['Computer Science & IT','Engineering & Technology','Agriculture & Environment'],
    subjects: [
      { field: 'Computer Science & IT',     subjects: ['Computer Science','Data Science'] },
      { field: 'Engineering & Technology',  subjects: ['Electrical Engineering','Mechanical Engineering'] },
      { field: 'Agriculture & Environment', subjects: ['Marine Sciences','Environmental Management'] },
    ],
    applicationDeadline: 'May 31', intake: ['Fall'],
  },

  // ── JAPAN ──
  {
    id: 71, name: 'University of Tokyo', country: 'Japan',
    requiredCGPA: 3.3, requiredIELTS: 6.5,
    fields: ['Engineering & Technology','Natural Sciences','Computer Science & IT'],
    subjects: [
      { field: 'Engineering & Technology', subjects: ['Mechanical Engineering','Electrical Engineering','Civil Engineering'] },
      { field: 'Natural Sciences',         subjects: ['Physics','Chemistry','Biology'] },
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Data Science','Artificial Intelligence'] },
    ],
    applicationDeadline: 'Nov 1', intake: ['Spring','Fall'],
  },
  {
    id: 72, name: 'Kyoto University', country: 'Japan',
    requiredCGPA: 3.3, requiredIELTS: 6.5,
    fields: ['Natural Sciences','Medicine & Health Sciences','Computer Science & IT'],
    subjects: [
      { field: 'Natural Sciences',           subjects: ['Chemistry','Biology','Biochemistry'] },
      { field: 'Medicine & Health Sciences', subjects: ['Medicine','Pharmacy','Biomedical Science'] },
      { field: 'Computer Science & IT',      subjects: ['Computer Science','Data Science'] },
    ],
    applicationDeadline: 'Nov 1', intake: ['Spring'],
  },
  {
    id: 73, name: 'Osaka University', country: 'Japan',
    requiredCGPA: 3.0, requiredIELTS: 6.0,
    fields: ['Medicine & Health Sciences','Engineering & Technology','Natural Sciences'],
    subjects: [
      { field: 'Medicine & Health Sciences', subjects: ['Medicine','Dentistry','Pharmacy'] },
      { field: 'Engineering & Technology',   subjects: ['Electrical Engineering','Mechanical Engineering'] },
      { field: 'Natural Sciences',           subjects: ['Physics','Chemistry'] },
    ],
    applicationDeadline: 'Nov 30', intake: ['Spring'],
  },
  {
    id: 74, name: 'Tohoku University', country: 'Japan',
    requiredCGPA: 3.0, requiredIELTS: 6.0,
    fields: ['Natural Sciences','Engineering & Technology','Mathematics & Statistics'],
    subjects: [
      { field: 'Natural Sciences',         subjects: ['Physics','Chemistry','Biology'] },
      { field: 'Engineering & Technology', subjects: ['Electrical Engineering','Civil Engineering'] },
      { field: 'Mathematics & Statistics', subjects: ['Mathematics','Applied Mathematics'] },
    ],
    applicationDeadline: 'Oct 31', intake: ['Spring'],
  },
  {
    id: 75, name: 'Tokyo Institute of Technology', country: 'Japan',
    requiredCGPA: 3.3, requiredIELTS: 6.5,
    fields: ['Computer Science & IT','Engineering & Technology'],
    subjects: [
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Robotics','Artificial Intelligence'] },
      { field: 'Engineering & Technology', subjects: ['Electrical Engineering','Mechanical Engineering','Chemical Engineering'] },
    ],
    applicationDeadline: 'Nov 1', intake: ['Spring'],
  },
  {
    id: 76, name: 'Nagoya University', country: 'Japan',
    requiredCGPA: 3.0, requiredIELTS: 6.0,
    fields: ['Engineering & Technology','Natural Sciences','Medicine & Health Sciences'],
    subjects: [
      { field: 'Engineering & Technology',   subjects: ['Automotive Engineering','Electrical Engineering','Mechanical Engineering'] },
      { field: 'Natural Sciences',           subjects: ['Physics','Chemistry','Biology'] },
      { field: 'Medicine & Health Sciences', subjects: ['Medicine','Pharmacy'] },
    ],
    applicationDeadline: 'Oct 31', intake: ['Spring'],
  },
  {
    id: 77, name: 'Kyushu University', country: 'Japan',
    requiredCGPA: 2.8, requiredIELTS: 5.5,
    fields: ['Agriculture & Environment','Computer Science & IT','Engineering & Technology'],
    subjects: [
      { field: 'Agriculture & Environment', subjects: ['Agricultural Science','Food Science','Environmental Management'] },
      { field: 'Computer Science & IT',     subjects: ['Computer Science','Data Science'] },
      { field: 'Engineering & Technology',  subjects: ['Mechanical Engineering','Chemical Engineering'] },
    ],
    applicationDeadline: 'Nov 30', intake: ['Spring'],
  },
  {
    id: 78, name: 'Hokkaido University', country: 'Japan',
    requiredCGPA: 2.8, requiredIELTS: 5.5,
    fields: ['Agriculture & Environment','Medicine & Health Sciences','Natural Sciences'],
    subjects: [
      { field: 'Agriculture & Environment', subjects: ['Food Science','Agricultural Science','Environmental Management'] },
      { field: 'Medicine & Health Sciences',subjects: ['Veterinary Medicine','Medicine'] },
      { field: 'Natural Sciences',          subjects: ['Biology','Chemistry'] },
    ],
    applicationDeadline: 'Nov 30', intake: ['Spring'],
  },
  {
    id: 79, name: 'Waseda University', country: 'Japan',
    requiredCGPA: 3.0, requiredIELTS: 6.5,
    fields: ['Social Sciences & Humanities','Business & Economics','Engineering & Technology'],
    subjects: [
      { field: 'Social Sciences & Humanities', subjects: ['Political Science','International Relations','Journalism'] },
      { field: 'Business & Economics',         subjects: ['Business Administration','Economics','Finance'] },
      { field: 'Engineering & Technology',     subjects: ['Mechanical Engineering','Electrical Engineering'] },
    ],
    applicationDeadline: 'Nov 1', intake: ['Fall','Spring'],
  },
  {
    id: 80, name: 'Keio University', country: 'Japan',
    requiredCGPA: 3.0, requiredIELTS: 6.5,
    fields: ['Medicine & Health Sciences','Business & Economics','Computer Science & IT'],
    subjects: [
      { field: 'Medicine & Health Sciences', subjects: ['Medicine','Pharmacy','Nursing'] },
      { field: 'Business & Economics',       subjects: ['Economics','Business Administration','Finance'] },
      { field: 'Computer Science & IT',      subjects: ['Computer Science','Data Science'] },
    ],
    applicationDeadline: 'Nov 1', intake: ['Spring'],
  },

  // ── CHINA ──
  {
    id: 81, name: 'Peking University', country: 'China',
    requiredCGPA: 3.3, requiredIELTS: 6.5,
    fields: ['Social Sciences & Humanities','Natural Sciences','Law'],
    subjects: [
      { field: 'Social Sciences & Humanities', subjects: ['International Relations','Political Science','History'] },
      { field: 'Natural Sciences',             subjects: ['Physics','Chemistry','Biology'] },
      { field: 'Law',                          subjects: ['International Law','Constitutional Law'] },
    ],
    applicationDeadline: 'Mar 31', intake: ['Fall'],
  },
  {
    id: 82, name: 'Tsinghua University', country: 'China',
    requiredCGPA: 3.5, requiredIELTS: 6.5,
    fields: ['Engineering & Technology','Computer Science & IT','Arts & Design'],
    subjects: [
      { field: 'Engineering & Technology', subjects: ['Civil Engineering','Electrical Engineering','Mechanical Engineering'] },
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Artificial Intelligence','Data Science'] },
      { field: 'Arts & Design',            subjects: ['Architecture','Urban Studies'] },
    ],
    applicationDeadline: 'Mar 31', intake: ['Fall'],
  },
  {
    id: 83, name: 'Fudan University', country: 'China',
    requiredCGPA: 3.2, requiredIELTS: 6.0,
    fields: ['Medicine & Health Sciences','Business & Economics','Social Sciences & Humanities'],
    subjects: [
      { field: 'Medicine & Health Sciences',   subjects: ['Public Health','Medicine','Pharmacy'] },
      { field: 'Business & Economics',         subjects: ['Finance','Business Administration','Economics'] },
      { field: 'Social Sciences & Humanities', subjects: ['International Relations','Political Science'] },
    ],
    applicationDeadline: 'Apr 30', intake: ['Fall'],
  },
  {
    id: 84, name: 'Shanghai Jiao Tong University', country: 'China',
    requiredCGPA: 3.2, requiredIELTS: 6.0,
    fields: ['Engineering & Technology','Medicine & Health Sciences','Computer Science & IT'],
    subjects: [
      { field: 'Engineering & Technology',   subjects: ['Naval Architecture','Electrical Engineering','Mechanical Engineering'] },
      { field: 'Medicine & Health Sciences', subjects: ['Medicine','Biomedical Science'] },
      { field: 'Computer Science & IT',      subjects: ['Computer Science','Data Science','Artificial Intelligence'] },
    ],
    applicationDeadline: 'Apr 30', intake: ['Fall'],
  },
  {
    id: 85, name: 'Zhejiang University', country: 'China',
    requiredCGPA: 3.0, requiredIELTS: 6.0,
    fields: ['Natural Sciences','Engineering & Technology','Agriculture & Environment'],
    subjects: [
      { field: 'Natural Sciences',          subjects: ['Chemistry','Biology','Biochemistry'] },
      { field: 'Engineering & Technology',  subjects: ['Chemical Engineering','Electrical Engineering'] },
      { field: 'Agriculture & Environment', subjects: ['Agricultural Science','Food Science'] },
    ],
    applicationDeadline: 'May 31', intake: ['Fall'],
  },
  {
    id: 86, name: 'Nanjing University', country: 'China',
    requiredCGPA: 3.0, requiredIELTS: 6.0,
    fields: ['Agriculture & Environment','Natural Sciences','Social Sciences & Humanities'],
    subjects: [
      { field: 'Agriculture & Environment', subjects: ['Remote Sensing','Water Resources','Environmental Management'] },
      { field: 'Natural Sciences',          subjects: ['Chemistry','Physics','Biology'] },
      { field: 'Social Sciences & Humanities', subjects: ['Political Science','History'] },
    ],
    applicationDeadline: 'Apr 30', intake: ['Fall'],
  },
  {
    id: 87, name: "Xi'an Jiaotong University", country: 'China',
    requiredCGPA: 2.8, requiredIELTS: 5.5,
    fields: ['Engineering & Technology','Medicine & Health Sciences'],
    subjects: [
      { field: 'Engineering & Technology',   subjects: ['Electrical Engineering','Mechanical Engineering'] },
      { field: 'Medicine & Health Sciences', subjects: ['Medicine','Biomedical Science','Public Health'] },
    ],
    applicationDeadline: 'May 31', intake: ['Fall'],
  },
  {
    id: 88, name: 'Wuhan University', country: 'China',
    requiredCGPA: 2.8, requiredIELTS: 5.5,
    fields: ['Agriculture & Environment','Computer Science & IT','Law'],
    subjects: [
      { field: 'Agriculture & Environment', subjects: ['Remote Sensing','Water Resources','Environmental Management'] },
      { field: 'Computer Science & IT',     subjects: ['Computer Science','Data Science'] },
      { field: 'Law',                       subjects: ['International Law','Constitutional Law'] },
    ],
    applicationDeadline: 'May 31', intake: ['Fall'],
  },
  {
    id: 89, name: 'Sun Yat-sen University', country: 'China',
    requiredCGPA: 2.8, requiredIELTS: 5.5,
    fields: ['Business & Economics','Medicine & Health Sciences','Natural Sciences'],
    subjects: [
      { field: 'Business & Economics',       subjects: ['Business Administration','Finance','Economics'] },
      { field: 'Medicine & Health Sciences', subjects: ['Medicine','Public Health'] },
      { field: 'Natural Sciences',           subjects: ['Biology','Chemistry'] },
    ],
    applicationDeadline: 'May 31', intake: ['Fall'],
  },
  {
    id: 90, name: 'Tongji University', country: 'China',
    requiredCGPA: 2.8, requiredIELTS: 5.5,
    fields: ['Arts & Design','Engineering & Technology','Computer Science & IT'],
    subjects: [
      { field: 'Arts & Design',            subjects: ['Architecture','Urban Studies','Industrial Design'] },
      { field: 'Engineering & Technology', subjects: ['Automotive Engineering','Civil Engineering','Mechanical Engineering'] },
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Information Technology'] },
    ],
    applicationDeadline: 'May 31', intake: ['Fall'],
  },

  // ── SWEDEN ──
  {
    id: 91, name: 'KTH Royal Institute of Technology', country: 'Sweden',
    requiredCGPA: 3.2, requiredIELTS: 6.5,
    fields: ['Engineering & Technology','Computer Science & IT','Mathematics & Statistics'],
    subjects: [
      { field: 'Engineering & Technology', subjects: ['Electrical Engineering','Mechanical Engineering','Civil Engineering'] },
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Data Science','Artificial Intelligence'] },
      { field: 'Mathematics & Statistics', subjects: ['Applied Mathematics','Statistics'] },
    ],
    applicationDeadline: 'Jan 15', intake: ['Fall'],
  },
  {
    id: 92, name: 'Lund University', country: 'Sweden',
    requiredCGPA: 3.0, requiredIELTS: 6.5,
    fields: ['Arts & Design','Business & Economics','Engineering & Technology','Natural Sciences'],
    subjects: [
      { field: 'Arts & Design',            subjects: ['Architecture','Industrial Design'] },
      { field: 'Business & Economics',     subjects: ['Business Administration','Economics','Finance'] },
      { field: 'Engineering & Technology', subjects: ['Mechanical Engineering','Chemical Engineering'] },
      { field: 'Natural Sciences',         subjects: ['Biology','Chemistry','Physics'] },
    ],
    applicationDeadline: 'Jan 15', intake: ['Fall'],
  },
  {
    id: 93, name: 'Uppsala University', country: 'Sweden',
    requiredCGPA: 3.0, requiredIELTS: 6.5,
    fields: ['Natural Sciences','Social Sciences & Humanities','Medicine & Health Sciences'],
    subjects: [
      { field: 'Natural Sciences',             subjects: ['Biology','Chemistry','Physics'] },
      { field: 'Social Sciences & Humanities', subjects: ['History','Philosophy','Political Science'] },
      { field: 'Medicine & Health Sciences',   subjects: ['Medicine','Pharmacy','Public Health'] },
    ],
    applicationDeadline: 'Jan 15', intake: ['Fall'],
  },
  {
    id: 94, name: 'Stockholm University', country: 'Sweden',
    requiredCGPA: 2.8, requiredIELTS: 6.0,
    fields: ['Social Sciences & Humanities','Natural Sciences','Law'],
    subjects: [
      { field: 'Social Sciences & Humanities', subjects: ['Psychology','Sociology','Political Science'] },
      { field: 'Natural Sciences',             subjects: ['Biology','Chemistry'] },
      { field: 'Law',                          subjects: ['International Law','Constitutional Law'] },
    ],
    applicationDeadline: 'Jan 15', intake: ['Fall'],
  },
  {
    id: 95, name: 'Chalmers University of Technology', country: 'Sweden',
    requiredCGPA: 3.2, requiredIELTS: 6.5,
    fields: ['Engineering & Technology','Computer Science & IT','Agriculture & Environment'],
    subjects: [
      { field: 'Engineering & Technology', subjects: ['Mechanical Engineering','Electrical Engineering','Chemical Engineering'] },
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Data Science'] },
      { field: 'Agriculture & Environment',subjects: ['Environmental Management','Food Technology'] },
    ],
    applicationDeadline: 'Jan 15', intake: ['Fall'],
  },
  {
    id: 96, name: 'University of Gothenburg', country: 'Sweden',
    requiredCGPA: 2.8, requiredIELTS: 6.5,
    fields: ['Agriculture & Environment','Arts & Design','Social Sciences & Humanities'],
    subjects: [
      { field: 'Agriculture & Environment',    subjects: ['Marine Sciences','Environmental Management'] },
      { field: 'Arts & Design',                subjects: ['Fine Arts','Architecture'] },
      { field: 'Social Sciences & Humanities', subjects: ['Psychology','Sociology'] },
    ],
    applicationDeadline: 'Jan 15', intake: ['Fall'],
  },
  {
    id: 97, name: 'Linköping University', country: 'Sweden',
    requiredCGPA: 2.8, requiredIELTS: 6.0,
    fields: ['Engineering & Technology','Computer Science & IT','Business & Economics'],
    subjects: [
      { field: 'Engineering & Technology', subjects: ['Mechanical Engineering','Electrical Engineering','Industrial Engineering'] },
      { field: 'Computer Science & IT',    subjects: ['Computer Engineering','Information Technology'] },
      { field: 'Business & Economics',     subjects: ['Business Administration','Economics'] },
    ],
    applicationDeadline: 'Jan 15', intake: ['Fall'],
  },
  {
    id: 98, name: 'Umeå University', country: 'Sweden',
    requiredCGPA: 2.7, requiredIELTS: 6.0,
    fields: ['Medicine & Health Sciences','Mathematics & Statistics','Natural Sciences'],
    subjects: [
      { field: 'Medicine & Health Sciences', subjects: ['Dentistry','Medicine','Nursing'] },
      { field: 'Mathematics & Statistics',   subjects: ['Mathematics','Statistics'] },
      { field: 'Natural Sciences',           subjects: ['Biology','Chemistry'] },
    ],
    applicationDeadline: 'Jan 15', intake: ['Fall'],
  },
  {
    id: 99, name: 'Örebro University', country: 'Sweden',
    requiredCGPA: 2.5, requiredIELTS: 5.5,
    fields: ['Business & Economics','Computer Science & IT'],
    subjects: [
      { field: 'Business & Economics',  subjects: ['Business Administration','Economics','Accounting'] },
      { field: 'Computer Science & IT', subjects: ['Information Technology','Computer Science'] },
    ],
    applicationDeadline: 'Jan 15', intake: ['Fall'],
  },
  {
    id: 100, name: 'Malmö University', country: 'Sweden',
    requiredCGPA: 2.5, requiredIELTS: 5.5,
    fields: ['Arts & Design','Computer Science & IT','Social Sciences & Humanities'],
    subjects: [
      { field: 'Arts & Design',                subjects: ['Urban Studies','Industrial Design'] },
      { field: 'Computer Science & IT',        subjects: ['Computer Science','Information Technology'] },
      { field: 'Social Sciences & Humanities', subjects: ['Sociology','International Relations'] },
    ],
    applicationDeadline: 'Jan 15', intake: ['Fall'],
  },

  // ── NETHERLANDS ──
  {
    id: 101, name: 'Delft University of Technology', country: 'Netherlands',
    requiredCGPA: 3.3, requiredIELTS: 6.5,
    fields: ['Engineering & Technology','Arts & Design','Computer Science & IT'],
    subjects: [
      { field: 'Engineering & Technology', subjects: ['Aerospace Engineering','Civil Engineering','Mechanical Engineering'] },
      { field: 'Arts & Design',            subjects: ['Industrial Design','Architecture'] },
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Data Science'] },
    ],
    applicationDeadline: 'Jan 15', intake: ['Fall'],
  },
  {
    id: 102, name: 'University of Amsterdam', country: 'Netherlands',
    requiredCGPA: 3.0, requiredIELTS: 6.5,
    fields: ['Social Sciences & Humanities','Business & Economics','Natural Sciences'],
    subjects: [
      { field: 'Social Sciences & Humanities', subjects: ['Political Science','Psychology','Sociology'] },
      { field: 'Business & Economics',         subjects: ['Economics','Finance','Business Administration'] },
      { field: 'Natural Sciences',             subjects: ['Chemistry','Biology','Physics'] },
    ],
    applicationDeadline: 'Jan 15', intake: ['Fall'],
  },
  {
    id: 103, name: 'Leiden University', country: 'Netherlands',
    requiredCGPA: 3.0, requiredIELTS: 6.5,
    fields: ['Law','Natural Sciences','Social Sciences & Humanities'],
    subjects: [
      { field: 'Law',                          subjects: ['International Law','European Law','Constitutional Law'] },
      { field: 'Natural Sciences',             subjects: ['Biology','Chemistry','Biochemistry'] },
      { field: 'Social Sciences & Humanities', subjects: ['Political Science','International Relations'] },
    ],
    applicationDeadline: 'Jan 15', intake: ['Fall'],
  },
  {
    id: 104, name: 'Utrecht University', country: 'Netherlands',
    requiredCGPA: 3.0, requiredIELTS: 6.5,
    fields: ['Medicine & Health Sciences','Agriculture & Environment','Natural Sciences'],
    subjects: [
      { field: 'Medicine & Health Sciences', subjects: ['Pharmacy','Medicine','Veterinary Medicine'] },
      { field: 'Agriculture & Environment',  subjects: ['Environmental Management','Food Technology'] },
      { field: 'Natural Sciences',           subjects: ['Biology','Chemistry','Physics'] },
    ],
    applicationDeadline: 'Jan 15', intake: ['Fall'],
  },
  {
    id: 105, name: 'Wageningen University', country: 'Netherlands',
    requiredCGPA: 2.8, requiredIELTS: 6.0,
    fields: ['Agriculture & Environment','Natural Sciences'],
    subjects: [
      { field: 'Agriculture & Environment', subjects: ['Food Technology','Agricultural Science','Water Resources','Environmental Management'] },
      { field: 'Natural Sciences',          subjects: ['Biochemistry','Biology','Chemistry'] },
    ],
    applicationDeadline: 'Apr 1', intake: ['Fall'],
  },
  {
    id: 106, name: 'Erasmus University Rotterdam', country: 'Netherlands',
    requiredCGPA: 3.0, requiredIELTS: 6.5,
    fields: ['Business & Economics','Law','Medicine & Health Sciences'],
    subjects: [
      { field: 'Business & Economics',     subjects: ['Business Administration','Finance','Economics','International Business'] },
      { field: 'Law',                      subjects: ['International Law','European Law','Business Law'] },
      { field: 'Medicine & Health Sciences',subjects: ['Public Health','Medicine'] },
    ],
    applicationDeadline: 'Jan 15', intake: ['Fall'],
  },
  {
    id: 107, name: 'Eindhoven University of Technology', country: 'Netherlands',
    requiredCGPA: 3.2, requiredIELTS: 6.5,
    fields: ['Engineering & Technology','Computer Science & IT'],
    subjects: [
      { field: 'Engineering & Technology', subjects: ['Electrical Engineering','Industrial Engineering','Mechanical Engineering'] },
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Data Science','Artificial Intelligence'] },
    ],
    applicationDeadline: 'Jan 15', intake: ['Fall'],
  },
  {
    id: 108, name: 'University of Groningen', country: 'Netherlands',
    requiredCGPA: 2.8, requiredIELTS: 6.0,
    fields: ['Natural Sciences','Social Sciences & Humanities','Medicine & Health Sciences'],
    subjects: [
      { field: 'Natural Sciences',             subjects: ['Physics','Chemistry','Biology'] },
      { field: 'Social Sciences & Humanities', subjects: ['Philosophy','Psychology','History'] },
      { field: 'Medicine & Health Sciences',   subjects: ['Medicine','Pharmacy'] },
    ],
    applicationDeadline: 'Apr 1', intake: ['Fall'],
  },
  {
    id: 109, name: 'Maastricht University', country: 'Netherlands',
    requiredCGPA: 2.8, requiredIELTS: 6.0,
    fields: ['Medicine & Health Sciences','Law','Business & Economics'],
    subjects: [
      { field: 'Medicine & Health Sciences', subjects: ['Medicine','Public Health','Nursing'] },
      { field: 'Law',                        subjects: ['European Law','International Law','Business Law'] },
      { field: 'Business & Economics',       subjects: ['Business Administration','Finance'] },
    ],
    applicationDeadline: 'Jan 15', intake: ['Fall'],
  },
  {
    id: 110, name: 'Radboud University', country: 'Netherlands',
    requiredCGPA: 2.8, requiredIELTS: 6.0,
    fields: ['Natural Sciences','Medicine & Health Sciences','Social Sciences & Humanities'],
    subjects: [
      { field: 'Natural Sciences',           subjects: ['Physics','Chemistry','Mathematics'] },
      { field: 'Medicine & Health Sciences', subjects: ['Medicine','Neuroscience','Pharmacy'] },
      { field: 'Social Sciences & Humanities',subjects: ['Political Science','Psychology'] },
    ],
    applicationDeadline: 'Apr 1', intake: ['Fall'],
  },

  // ── FRANCE ──
  {
    id: 111, name: 'Paris Sciences et Lettres University', country: 'France',
    requiredCGPA: 3.5, requiredIELTS: 7.0,
    fields: ['Natural Sciences','Social Sciences & Humanities','Mathematics & Statistics'],
    subjects: [
      { field: 'Natural Sciences',             subjects: ['Physics','Chemistry','Biology'] },
      { field: 'Social Sciences & Humanities', subjects: ['Philosophy','History','Political Science'] },
      { field: 'Mathematics & Statistics',     subjects: ['Mathematics','Applied Mathematics'] },
    ],
    applicationDeadline: 'Jan 20', intake: ['Fall'],
  },
  {
    id: 112, name: 'Sorbonne University', country: 'France',
    requiredCGPA: 3.0, requiredIELTS: 6.5,
    fields: ['Social Sciences & Humanities','Natural Sciences','Medicine & Health Sciences'],
    subjects: [
      { field: 'Social Sciences & Humanities', subjects: ['History','Philosophy','Linguistics','Political Science'] },
      { field: 'Natural Sciences',             subjects: ['Biology','Chemistry','Physics'] },
      { field: 'Medicine & Health Sciences',   subjects: ['Medicine','Pharmacy'] },
    ],
    applicationDeadline: 'Mar 31', intake: ['Fall'],
  },
  {
    id: 113, name: 'University of Paris-Saclay', country: 'France',
    requiredCGPA: 3.3, requiredIELTS: 6.5,
    fields: ['Natural Sciences','Engineering & Technology','Computer Science & IT','Mathematics & Statistics'],
    subjects: [
      { field: 'Natural Sciences',         subjects: ['Physics','Chemistry','Biology'] },
      { field: 'Engineering & Technology', subjects: ['Electrical Engineering','Mechanical Engineering'] },
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Data Science','Artificial Intelligence'] },
      { field: 'Mathematics & Statistics', subjects: ['Mathematics','Applied Mathematics'] },
    ],
    applicationDeadline: 'Feb 28', intake: ['Fall'],
  },
  {
    id: 114, name: 'Grenoble Alpes University', country: 'France',
    requiredCGPA: 3.0, requiredIELTS: 6.0,
    fields: ['Natural Sciences','Computer Science & IT','Mathematics & Statistics'],
    subjects: [
      { field: 'Natural Sciences',         subjects: ['Physics','Chemistry'] },
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Information Technology','Data Science'] },
      { field: 'Mathematics & Statistics', subjects: ['Mathematics','Applied Mathematics'] },
    ],
    applicationDeadline: 'Mar 31', intake: ['Fall'],
  },
  {
    id: 115, name: 'Aix-Marseille University', country: 'France',
    requiredCGPA: 2.8, requiredIELTS: 6.0,
    fields: ['Medicine & Health Sciences','Agriculture & Environment','Natural Sciences'],
    subjects: [
      { field: 'Medicine & Health Sciences', subjects: ['Medicine','Pharmacy','Public Health'] },
      { field: 'Agriculture & Environment',  subjects: ['Marine Sciences','Environmental Management'] },
      { field: 'Natural Sciences',           subjects: ['Chemistry','Biology','Physics'] },
    ],
    applicationDeadline: 'Apr 30', intake: ['Fall'],
  },
  {
    id: 116, name: 'University of Bordeaux', country: 'France',
    requiredCGPA: 2.8, requiredIELTS: 6.0,
    fields: ['Natural Sciences','Agriculture & Environment'],
    subjects: [
      { field: 'Natural Sciences',          subjects: ['Chemistry','Biology','Physics'] },
      { field: 'Agriculture & Environment', subjects: ['Environmental Management','Food Technology'] },
    ],
    applicationDeadline: 'Apr 30', intake: ['Fall'],
  },
  {
    id: 117, name: 'University of Lyon', country: 'France',
    requiredCGPA: 2.8, requiredIELTS: 6.0,
    fields: ['Engineering & Technology','Computer Science & IT','Natural Sciences'],
    subjects: [
      { field: 'Engineering & Technology', subjects: ['Chemical Engineering','Mechanical Engineering','Civil Engineering'] },
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Data Science'] },
      { field: 'Natural Sciences',         subjects: ['Chemistry','Physics','Biology'] },
    ],
    applicationDeadline: 'Apr 30', intake: ['Fall'],
  },
  {
    id: 118, name: 'University of Strasbourg', country: 'France',
    requiredCGPA: 2.8, requiredIELTS: 6.0,
    fields: ['Natural Sciences','Medicine & Health Sciences'],
    subjects: [
      { field: 'Natural Sciences',           subjects: ['Chemistry','Physics','Biology','Biochemistry'] },
      { field: 'Medicine & Health Sciences', subjects: ['Medicine','Pharmacy','Neuroscience'] },
    ],
    applicationDeadline: 'Apr 30', intake: ['Fall'],
  },
  {
    id: 119, name: 'INSEAD', country: 'France',
    requiredCGPA: 3.3, requiredIELTS: 7.0,
    fields: ['Business & Economics'],
    subjects: [
      { field: 'Business & Economics', subjects: ['MBA','Finance','International Business','Management'] },
    ],
    applicationDeadline: 'Oct 1 / Jan 6', intake: ['Fall','Spring'],
  },
  {
    id: 120, name: 'CentraleSupélec', country: 'France',
    requiredCGPA: 3.3, requiredIELTS: 6.5,
    fields: ['Engineering & Technology','Computer Science & IT','Mathematics & Statistics'],
    subjects: [
      { field: 'Engineering & Technology', subjects: ['Electrical Engineering','Industrial Engineering','Mechanical Engineering'] },
      { field: 'Computer Science & IT',    subjects: ['Computer Science','Data Science'] },
      { field: 'Mathematics & Statistics', subjects: ['Applied Mathematics','Statistics'] },
    ],
    applicationDeadline: 'Mar 31', intake: ['Fall'],
  },
];