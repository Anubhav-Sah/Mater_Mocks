"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const highlights = [
    "Full-length mock tests based on the latest Banking & Insurance exam pattern.",
    "Compete with aspirants across India and see where you stand.",
    "Earn cashback by finishing among the top performers in Reward Mocks.",
    "Detailed analytics to improve your speed, accuracy, and overall score.",
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % highlights.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 md:pt-20 md:pb-24 lg:pt-28 lg:pb-36 border-b border-slate-200">
      {/* Structural Minimalist Grid Overlay */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="w-full h-full border-x border-slate-100/70 flex justify-between">
          <div className="w-px h-full bg-slate-100/50 hidden lg:block ml-[58%]" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Meta Tag */}
        <div className="inline-flex items-center gap-2 mb-6 md:mb-8 bg-slate-50 border border-slate-200/80 pl-2 pr-4 py-1.5 rounded-full shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-[#DC2626] animate-pulse" />
          <span className="text-[11px] md:text-xs font-bold tracking-wider uppercase text-slate-600">
            About Master Mocks
          </span>
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* LEFT: Heading, Dynamic Insights & CTA Actions */}
          <div className="lg:col-span-7 pr-0 lg:pr-8">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1A1A1A] leading-[1.15] md:leading-[1.1]">
              Practice Like the <br className="hidden sm:inline" />
              <span className="relative inline-block text-[#DC2626]">
                Real Exam.
                <span className="absolute left-0 bottom-1 h-1.5 w-full bg-[#DC2626]/10 -z-10" />
              </span>
              <br />
              <span className="text-slate-700 font-bold text-2xl sm:text-4xl lg:text-5xl block mt-3 md:mt-4">
                Get Rewarded for Performance.
              </span>
            </h1>

            {/* Carousel Display System */}
            <div className="mt-8 min-h-[100px] sm:min-h-[110px] bg-slate-50 border-l-4 border-[#DC2626] rounded-r-xl p-5 sm:p-6 transition-all duration-300">
              <span className="text-[10px] sm:text-xs font-bold text-[#DC2626] uppercase tracking-widest block mb-1.5">
                Core Feature Insights
              </span>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                {highlights[active]} Every mock test is carefully designed to match the latest exam pattern.
              </p>
            </div>

            {/* Interactive Call-to-Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-8">
              <Link
                href="/register"
                className="bg-[#DC2626] hover:bg-[#1A1A1A] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-md text-center group flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Start Practicing
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </Link>

              <Link
                href="/tests"
                className="bg-transparent hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-300 px-8 py-[14px] rounded-xl font-bold text-slate-800 text-center transition-all duration-200 text-sm sm:text-base"
              >
                Explore Mock Tests
              </Link>
            </div>

            {/* Performance Metric Counters */}
            <div className="grid grid-cols-3 gap-2 sm:gap-8 mt-12 md:mt-16 pt-6 md:pt-8 border-t border-slate-200/80">
              <div>
                <p className="text-xl sm:text-3xl font-black text-[#1A1A1A]">50+</p>
                <p className="text-[10px] sm:text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">Premium Mocks</p>
              </div>
              <div className="border-l border-slate-200 pl-3 sm:pl-8">
                <p className="text-xl sm:text-3xl font-black text-[#1A1A1A]">10K+</p>
                <p className="text-[10px] sm:text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">Questions</p>
              </div>
              <div className="border-l border-slate-200 pl-3 sm:pl-8">
                <p className="text-xl sm:text-3xl font-black text-[#DC2626]">₹25</p>
                <p className="text-[10px] sm:text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">Max Cashback</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Live UI Test Engine Preview Mockup */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 w-full">
            
            {/* Structural Ambience Backdrop Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-[#DC2626]/5 blur-3xl -z-10" />

            {/* Main Application Container */}
            <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
              
              {/* Decorative Window Titlebar */}
              <div className="bg-slate-50 px-4 sm:px-6 py-3 border-b border-slate-200 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                </div>
                <div className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold">Live Exam Arena</div>
              </div>

              {/* Module Canvas Area */}
              <div className="p-5 sm:p-8">
                <div className="flex justify-between items-start gap-4 mb-6">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                      Live Reward Mock
                    </p>
                    <h3 className="font-black text-xl sm:text-2xl text-[#1A1A1A] tracking-tight">
                      SBI PO Full Mock
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-2.5 py-1 rounded-md text-[10px] font-black border border-green-200 tracking-wide">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                    LIVE
                  </span>
                </div>

                {/* Grid Metric Cards */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 mb-6 text-center">
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase">Questions</p>
                    <p className="text-sm sm:text-base font-extrabold text-[#1A1A1A] mt-0.5">100</p>
                  </div>
                  <div className="border-x border-slate-200">
                    <p className="text-[9px] font-bold text-slate-400 uppercase">Duration</p>
                    <p className="text-sm sm:text-base font-extrabold text-[#1A1A1A] mt-0.5">60 Mins</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase">Difficulty</p>
                    <p className="text-sm sm:text-base font-extrabold text-amber-500 mt-0.5">4.0/5</p>
                  </div>
                </div>

                {/* Linear Performance Track */}
                <div className="mb-6">
                  <div className="flex justify-between mb-1.5 items-baseline">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Completion Progress
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-slate-900">
                      68%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 border border-slate-200/60 p-0.5">
                    <div className="bg-[#DC2626] h-full w-2/3 rounded-full transition-all duration-500" />
                  </div>
                </div>

                {/* Metric Scoring Deck */}
                <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 space-y-2.5">
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-slate-500 font-medium">Current Standing</span>
                    <span className="font-mono font-black text-[#1A1A1A]">
                      #18 <span className="text-[10px] font-normal text-slate-400">/ 752</span>
                    </span>
                  </div>
                  <div className="h-px bg-slate-200" />
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-slate-500 font-medium">Estimated Cashback</span>
                    <span className="font-bold text-green-600">
                      ₹25
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Overlay Floating Badges (Hidden cleanly on smaller viewports) */}
            <div className="absolute -top-5 -left-5 bg-white shadow-lg rounded-xl p-3.5 border border-slate-200 hidden xl:block transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Avg Accuracy</p>
              <h3 className="text-xl font-black text-[#DC2626] tracking-tight mt-0.5">84%</h3>
            </div>

            <div className="absolute -bottom-5 right-4 bg-[#1A1A1A] text-white rounded-xl shadow-lg p-3.5 hidden xl:block transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Top Reward Tier</p>
              <h3 className="text-xl font-black text-green-400 tracking-tight mt-0.5">₹25</h3>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}