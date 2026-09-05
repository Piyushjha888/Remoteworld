import Image from "next/image";

/**
 * Reusable component that renders a custom logo image from /public/logos/
 * as a drop-in replacement for Lucide icons.
 *
 * Usage: <LogoIcon src="/logos/home.jpg" alt="Home" className="w-6 h-6" />
 */
export default function LogoIcon({
  src,
  alt,
  className = "w-6 h-6",
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={48}
      height={48}
      className={`object-contain ${className}`}
      style={style}
      draggable={false}
      loading="lazy"
    />
  );
}
