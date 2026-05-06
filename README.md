# 🎓 University Filtering System

A structured university filtering web application that helps students find suitable universities based on their academic profile. Built as part of an internship task.

🔗 **Live Demo:** [https://university-filter.vercel.app](https://university-filter.vercel.app)

---

## 📌 Project Overview

This system supports a **two-stage output**:
1. **Stage 1** — Shows filtered universities with core eligibility details
2. **Stage 2** — Reveals detailed application information on card click

---

## 🌍 Countries Covered

| # | Country | Universities |
|---|---------|-------------|
| 1 | 🇩🇪 Germany | 10+ |
| 2 | 🇨🇦 Canada | 10+ |
| 3 | 🇦🇺 Australia | 10+ |
| 4 | 🇬🇧 UK | 10+ |
| 5 | 🇺🇸 USA | 10+ |
| 6 | 🇪🇸 Spain | 10+ |
| 7 | 🇮🇹 Italy | 10+ |
| 8 | 🇯🇵 Japan | 10+ |
| 9 | 🇨🇳 China | 10+ |
| 10 | 🇸🇪 Sweden | 10+ |
| 11 | 🇳🇱 Netherlands | 10+ |
| 12 | 🇫🇷 France | 10+ |

**Total: 120+ universities** researched from official and reliable university sources.

---

## 🔄 Filtering Flow

### Step 1 — User Input Filters
Users provide:
- **Country** — dropdown with all 12 countries
- **CGPA** — numeric input (0.0 – 4.0 scale)
- **IELTS Score** — numeric input (0.0 – 9.0 scale)

### Step 2 — Filtered Results (Stage 1)
Matching universities are displayed with core eligibility info:
- ✅ University Name
- ✅ Country
- ✅ Required CGPA
- ✅ Required IELTS

### Step 3 — Additional Details (Stage 2)
Click any university card to reveal:
- ✅ Field of Study
- ✅ Subjects
- ✅ Application Deadline
- ✅ Intake (Fall / Winter / Spring / Summer)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** (App Router) | Framework |
| **React 18** | UI Library |
| **TypeScript** | Type Safety |
| **Tailwind CSS** | Base Styling |
| **Framer Motion** | Animations |
| **Vercel** | Deployment |

---

## 📁 Project Structure

```
university-filter/
├── app/
│   ├── components/
│   │   ├── FilterForm.tsx       # Country, CGPA, IELTS input form
│   │   ├── UniversityCard.tsx   # Expandable university card
│   │   └── ResultsList.tsx      # Renders filtered results
│   ├── data/
│   │   └── universities.ts      # 120+ university dataset
│   ├── hooks/
│   │   └── useUniversityFilter.ts  # Filtering logic
│   ├── types/
│   │   └── university.ts        # TypeScript interfaces
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main page
├── public/
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18.17 or higher
- npm v9+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/AmanaAkterKona/university-filter-task.git

# 2. Navigate into the project
cd university-filter-task

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint
```

---

## 🗃️ Data Structure

Each university follows this TypeScript interface:

```typescript
interface University {
  id: number;
  name: string;
  country: string;
  requiredCGPA: number;
  requiredIELTS: number;
  fieldOfStudy: string;
  subjects: string[];
  applicationDeadline: string;
  intake: ('Fall' | 'Winter' | 'Spring' | 'Summer')[];
}
```

---

## ✅ Requirements Fulfilled

| Requirement | Status |
|-------------|--------|
| 12 countries covered | ✅ |
| 10+ universities per country | ✅ |
| CGPA filter | ✅ |
| IELTS filter | ✅ |
| Country filter | ✅ |
| Two-stage output | ✅ |
| Field of Study shown | ✅ |
| Subjects shown | ✅ |
| Application Deadline shown | ✅ |
| Intake cycles shown | ✅ |
| Researched from official sources | ✅ |

---

## 🌐 Deployment

Deployed on **Vercel** with automatic CI/CD via GitHub.

Every `git push` to `main` triggers an automatic redeployment.

```bash
# Manual deploy
vercel --prod
```

---

## 👩‍💻 Author

**Amena Akter Kona**
Internship Task — University Filtering System
