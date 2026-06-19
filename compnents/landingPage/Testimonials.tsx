// "use client";

// export default function Testimonials() {
//   const studentReviews = [
//     {
//       name: "Rohit Yadav",
//       tag: "Preparing for 2 Years  ",
//       text: "Performance based rewards!!!!! Wow!!!!. Nice concept team Mastermocks. Till now I have got 10-12 times Rs 25 cashback. I have been preparing for the last 2 years, struggling in mains. Just one request, include MAINS level questions more. Rest, everything is good.  "
//     },
//     {
//       name: "Deepak Meena",
//       tag: "Daily Paid Mock User  ",
//       text: "Nice bro. First time I am seeing this concept. Loving it. I give daily the paid mock. It is addictive in a positive way especially when you get the cashback. Good concept. Just one suggestion, increases the number of questions is possible.  "
//     }
//   ];

//   return (
//     <section className="py-20 bg-slate-50 border-y border-slate-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
//             What Serious Aspirants Say About Us 
//           </h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {studentReviews.map((t, idx) => (
//             <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
//               <p className="text-slate-700 italic text-sm sm:text-base leading-relaxed font-medium">
//                 "{t.text}"
//               </p>
//               <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-100">
//                 <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700 uppercase">
//                   {t.name[0]}
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
//                   <p className="text-xs font-semibold text-brand">{t.tag}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

export default function Testimonials() {
  const studentReviews = [
    {
      name: "Rohit Yadav",
      tag: "Preparing for 2 Years",
      text: "Performance based rewards!!!!! Wow!!!!. Nice concept team Mastermocks. Till now I have got 10-12 times Rs 25 cashback. I have been preparing for the last 2 years, struggling in mains. Just one request, include MAINS level questions more. Rest, everything is good."
    },
    {
      name: "Deepak Meena",
      tag: "Daily Paid Mock User",
      text: "Nice bro. First time I am seeing this concept. Loving it. I give daily the paid mock. It is addictive in a positive way especially when you get the cashback. Good concept. Just one suggestion, increases the number of questions is possible."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#DC2626] bg-[#DC2626]/5 px-3 py-1.5 rounded-md mb-3 inline-block">
            Verified Feedback
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#1A1A1A] tracking-tight mb-4 leading-tight">
            What Serious Aspirants Say About Us
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Real feedback from students optimizing their preparation with our live mock system.
          </p>
        </div>

        {/* Testimonials Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {studentReviews.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Dynamic Feature Badging */}
              <div className="absolute top-6 right-6 text-[#DC2626]/10 group-hover:text-[#DC2626]/20 transition-colors pointer-events-none hidden sm:block">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"/>
                </svg>
              </div>

              {/* Review Text */}
              <div className="flex-1">
                <p className="text-[#1A1A1A] text-sm sm:text-base leading-relaxed font-medium tracking-wide pr-0 sm:pr-6">
                  "{t.text}"
                </p>
              </div>

              {/* User Bio Footer */}
              <div className="flex items-center gap-3 pt-5 mt-6 border-t border-slate-100">
                {/* Structural Clean Avatar */}
                <div className="w-10 h-10 shrink-0 rounded-xl bg-[#1A1A1A] text-white flex items-center justify-center font-black text-sm tracking-wider">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                
                <div className="min-w-0">
                  <h4 className="font-extrabold text-[#1A1A1A] text-sm truncate">
                    {t.name}
                  </h4>
                  <div className="inline-flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    <p className="text-[10px] sm:text-xs font-bold text-[#DC2626] uppercase tracking-wider">
                      {t.tag}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}