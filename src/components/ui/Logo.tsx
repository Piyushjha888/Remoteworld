import React from 'react';
import Link from 'next/link';

export default function Logo({ className = "", textClass = "text-2xl" }: { className?: string, textClass?: string }) {
  return (
    <Link href="/" className={`flex items-center group ${className}`}>
      {/* Logo Graphic: Pill/Swirl */}
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 transition-transform group-hover:scale-105">
        <path d="M 50 30 A 20 20 0 1 0 70 50 V 50 A 20 20 0 0 0 50 30" stroke="#3AB2B4" strokeWidth="12" strokeLinecap="round" />
        <path d="M 65 50 L 50 65 A 25 25 0 0 1 25 40" stroke="#3AB2B4" strokeWidth="8" strokeLinecap="round" />
        <path d="M 55 60 L 75 40 A 20 20 0 0 1 80 65 A 20 20 0 0 1 60 80" stroke="#588B8C" strokeWidth="14" strokeLinecap="round" />
      </svg>
      {/* Logo Text */}
      <div className={`flex items-center font-bold tracking-tight ${textClass}`}>
        <span className="text-[#3AB2B4]">Remote</span>
        <span className="bg-[#588B8C] text-white px-1.5 py-0.5 rounded-md ml-0.5 leading-tight shadow-sm">Ward</span>
      </div>
    </Link>
  );
}
