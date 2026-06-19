// "use client";

// import Link from "next/link";

// export default function CourseCards() {
//   const specializedMocks = [
//     {
//       id: 1,
//       title: "High-Tier Logical & Analytical Reasoning Mastery Series",
//       subject: "Reasoning Ability",
//       totalTests: "65 Premium Mocks",
//       freeResources: "12 Free PDFs Available",
//       rating: "4.9",
//       features: ["Puzzles & Seating Arrangements", "Detailed Video Explanations", "Performance Cashback Eligible "]
//     },
//     {
//       id: 2,
//       title: "Advanced Quantitative Aptitude Core Drill Pack",
//       subject: "Quantitative Aptitude",
//       totalTests: "80 Chapter Tests",
//       freeResources: "15 Formulas Modules",
//       rating: "4.8",
//       features: ["Data Interpretation Focus", "Speed Calculation Trick Mocks", "Performance Cashback Eligible "]
//     },
//     {
//       id: 3,
//       title: "Daily & Weekly Current Affairs Master Repository",
//       subject: "Current Affairs & GA",
//       totalTests: "120 Sectional Capsule Tests",
//       freeResources: "Monthly Mega PDF Digests",
//       rating: "4.9",
//       features: ["Banking & Insurance Updates", "AI Performance Analytics ", "Real-Time Ranking Checks"]
//     }
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
//             Specialized Mock Packs for Banking & Insurance
//           </h2>
//           <p className="text-lg text-slate-600">
//             Target your weakest areas with real exam-level questions curated by elite faculty .
//           </p>
//         </div>

//         {/* Testbook Inspired Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {specializedMocks.map((mock) => (
//             <div 
//               key={mock.id} 
//               className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col hover:border-red-300 hover:shadow-xl transition-all duration-200 group"
//             >
//               <div className="h-2 w-full bg-brand" />
//               <div className="p-6 flex-1 flex flex-col">
//                 <span className="text-xs font-bold uppercase tracking-wide text-brand mb-2 block">
//                   {mock.subject}
//                 </span>
//                 <h3 className="font-bold text-slate-900 text-lg mb-3 line-clamp-2 min-h-[56px] group-hover:text-brand transition-colors">
//                   {mock.title}
//                 </h3>

//                 <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-4 bg-slate-50 p-2 rounded-md w-fit">
//                   <span className="text-amber-500">★</span>
//                   <span className="text-slate-900 font-bold">{mock.rating}</span>
//                 </div>

//                 <div className="grid grid-cols-1 gap-2 py-3 my-2 border-y border-slate-100 text-xs font-bold text-slate-700">
//                   <div className="flex items-center gap-2">
//                     <span className="text-brand">📄</span> {mock.totalTests}
//                   </div>
//                   <div className="flex items-center gap-2 text-green-600">
//                     <span>✓</span> {mock.freeResources}
//                   </div>
//                 </div>

//                 <ul className="space-y-2 my-4 text-xs font-medium text-slate-500 flex-1">
//                   {mock.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center gap-2">
//                       <span className="text-brand text-lg">•</span> {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 <Link 
//                   href="/signup" 
//                   className="w-full py-2.5 rounded-md bg-slate-50 hover:bg-brand text-slate-800 hover:text-white font-bold text-sm text-center border border-slate-200 group-hover:border-brand transition-all"
//                 >
//                   Unlock Mock Test Pack
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Global Explore More CTA */}
//         <div className="mt-14 text-center">
//           <Link 
//             href="/signup" 
//             className="inline-flex items-center gap-2 px-10 py-4 bg-brand hover:bg-brand-hover text-white font-black rounded-lg text-base shadow-md hover:shadow-xl transition-all group"
//           >
//             Explore More Test Series
//             <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
//             </svg>
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";

export default function CourseCards() {
  const specializedMocks = [
    {
      id: 1,
      title: "High-Tier Logical & Analytical Reasoning Mastery Series",
      subject: "Reasoning Ability",
      totalTests: "65 Premium Mocks",
      freeResources: "12 Free PDFs Available",
      rating: "4.9",
      features: ["Puzzles & Seating Arrangements", "Detailed Video Explanations", "Performance Cashback Eligible"]
    },
    {
      id: 2,
      title: "Advanced Quantitative Aptitude Core Drill Pack",
      subject: "Quantitative Aptitude",
      totalTests: "80 Chapter Tests",
      freeResources: "15 Formulas Modules",
      rating: "4.8",
      features: ["Data Interpretation Focus", "Speed Calculation Trick Mocks", "Performance Cashback Eligible"]
    },
    {
      id: 3,
      title: "Daily & Weekly Current Affairs Master Repository",
      subject: "Current Affairs & GA",
      totalTests: "120 Sectional Capsule Tests",
      freeResources: "Monthly Mega PDF Digests",
      rating: "4.9",
      features: ["Banking & Insurance Updates", "AI Performance Analytics", "Real-Time Ranking Checks"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#DC2626] bg-[#DC2626]/5 px-3 py-1.5 rounded-md mb-3 inline-block">
            Targeted Preparation
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#1A1A1A] tracking-tight mb-4 leading-tight">
            Specialized Mock Packs for Banking &amp; Insurance
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 font-medium">
            Target your weakest areas with real exam-level questions curated by elite faculty.
          </p>
        </div>

        {/* Premium Geometric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {specializedMocks.map((mock) => (
            <div 
              key={mock.id} 
              className="bg-white border border-slate-200/90 rounded-2xl flex flex-col hover:border-slate-300 hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                
                {/* Card Meta Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-[#DC2626]/5 px-2 py-1 rounded">
                    {mock.subject}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                    <span className="text-amber-500">★</span>
                    <span>{mock.rating}</span>
                  </div>
                </div>

                {/* Headline */}
                <h3 className="font-extrabold text-[#1A1A1A] text-base sm:text-lg mb-4 line-clamp-2 md:min-h-[56px] group-hover:text-[#DC2626] transition-colors duration-200">
                  {mock.title}
                </h3>

                {/* Quick Info Grid Dashboard style */}
                <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50/80 rounded-xl border border-slate-100 text-[11px] sm:text-xs font-bold text-slate-700 mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#DC2626] text-sm">📋</span>
                    <span className="truncate">{mock.totalTests}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-green-700 border-l border-slate-200 pl-2">
                    <span className="text-sm">⚡</span>
                    <span className="truncate">{mock.freeResources}</span>
                  </div>
                </div>

                {/* Feature Checkpoints */}
                <ul className="space-y-2.5 my-2 text-xs font-medium text-slate-600 flex-1">
                  {mock.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-tight">
                      <svg className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Primary Pack CTA Button */}
                <Link 
                  href="/register" 
                  className="w-full mt-6 py-3 rounded-xl bg-[#1A1A1A] hover:bg-[#DC2626] text-white font-bold text-xs sm:text-sm text-center transition-all duration-300 tracking-wide shadow-sm flex items-center justify-center gap-1 group/btn"
                >
                  Unlock Mock Pack
                  <svg className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Global Hub CTA Anchor */}
        <div className="mt-12 md:mt-16 text-center">
          <Link 
            href="/register" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#DC2626] hover:bg-[#1A1A1A] text-white font-extrabold rounded-xl text-sm sm:text-base shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            Explore Full Test Catalogs
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}