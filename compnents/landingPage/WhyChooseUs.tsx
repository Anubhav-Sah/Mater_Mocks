// "use client";

// export default function WhyChooseUs() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
//             How Are We Different? 
//           </h2>
//           <p className="text-lg text-slate-600">
//             Just like any other platform, we also provide FREE mocks, FREE PDFs and PAID mocks. The difference here is that if you perform good in PAID mocks, you can earn cashback rewards .
//           </p>
//         </div>

//         <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
//           <h4 className="font-bold text-xl mb-3 text-white">Reward Split Distribution Example (Per 100 Students) </h4>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
//             <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
//               <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Top 5% of Students </p>
//               <p className="text-lg font-black text-green-400">Gets ₹25 Cashback Each </p>
//             </div>
//             <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
//               <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Next 5% of Students </p>
//               <p className="text-lg font-black text-green-400">Gets ₹20 Cashback Each </p>
//             </div>
//             <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
//               <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Following 5% of Students </p>
//               <p className="text-lg font-black text-green-400">Gets ₹15 Cashback Each </p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

export default function WhyChooseUs() {
  const rewardDistribution = [
    { range: "Top 5% of Students", amount: "₹25" },
    { range: "Next 5% of Students", amount: "₹20" },
    { range: "Following 5% of Students", amount: "₹15" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#DC2626] bg-[#DC2626]/5 px-3 py-1.5 rounded-md mb-3 inline-block">
            The Performance Edge
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#1A1A1A] tracking-tight mb-4 leading-tight">
            How Are We Different?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            Just like any other platform, we provide free mock tests, premium material, and essential PDFs. 
            The difference? When you perform exceptionally well on our paid mocks, 
            <span className="text-[#DC2626] font-bold"> you instantly earn direct cashback rewards.</span>
          </p>
        </div>

        {/* Technical Data Block (White Theme Grid Style) */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-4 mb-6 gap-2">
            <h4 className="font-extrabold text-base text-[#1A1A1A] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-4 bg-[#DC2626] rounded-sm inline-block" />
              Reward Split Distribution Example
            </h4>
            <span className="text-[11px] font-mono font-bold text-slate-400 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded w-fit">
              PER 100 PARTICIPATING STUDENTS
            </span>
          </div>

          {/* Minimal Distribution Rows */}
          <div className="space-y-3">
            {rewardDistribution.map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-white border border-slate-200 hover:border-slate-300 rounded-xl transition-all duration-200 group shadow-sm"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {/* Performance Ranking Bullet */}
                  <span className="w-7 h-7 rounded-lg bg-[#1A1A1A] text-white flex items-center justify-center text-xs font-black shrink-0">
                    0{index + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wide truncate">
                    {item.range}
                  </p>
                </div>
                
                {/* Reward Metric Tag */}
                <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-lg px-3 py-1.5 shrink-0 ml-4 group-hover:bg-green-100/60 transition-colors">
                  <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider hidden xs:inline">Each Gets</span>
                  <span className="font-mono font-black text-green-600 text-sm sm:text-base">
                    {item.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Micro Caption */}
          <p className="text-[10px] font-medium text-slate-400 mt-4 text-left sm:text-center italic">
            * Cashback distribution adjusts dynamically based on the exact pool parameters of live mock sessions.
          </p>
        </div>

      </div>
    </section>
  );
}