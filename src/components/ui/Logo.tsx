import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo({ className = "", textClass = "text-2xl" }: { className?: string, textClass?: string }) {
  return (
    <Link href="/" className={`flex items-center group ${className}`}>
      <Image
        src="/remoteWard.svg"
        alt="RemoteWard Logo"
        width={160}
        height={68}
        priority
        className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-95"
      />
    </Link>
  );
}
