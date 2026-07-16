import React from "react";

interface LordIconProps {
  src: string;
  trigger?: string;
  colors?: string;
  style?: React.CSSProperties;
}

export default function LordIcon({
  src,
  trigger = "hover",
  colors,
  style,
}: LordIconProps) {
  return React.createElement("lord-icon", {
    src,
    trigger,
    colors,
    style,
  });
}
