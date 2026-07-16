import React from 'react';
import Link from 'next/link';

export default function Logo({ className = "", textClass = "text-2xl" }: { className?: string, textClass?: string }) {
  return (
    <Link href="/" className={`flex items-center group ${className}`}>
      <img src="/favicon.ico" alt="Logo" className="w-10 h-10 object-contain mr-2 transition-transform group-hover:scale-90" />
      {/* Logo Text */}
      <div className={`flex items-center font-bold tracking-tight ${textClass}`}>
        <span className="text-[#3AB2B4]">Remote</span>
        <span className="bg-[#588B8C] text-white px-1.5 py-0.5 rounded-md ml-0.5 leading-tight shadow-sm">Ward</span>
      </div>
    </Link>
  );
}
