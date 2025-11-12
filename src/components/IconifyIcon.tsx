import React from 'react';

interface IconifyIconProps {
  icon: string;
  style?: React.CSSProperties;
  className?: string;
}

// Component wrapper untuk iconify-icon
export default function IconifyIcon({ icon, style, className, ...props }: IconifyIconProps) {
  return React.createElement('iconify-icon', {
    icon,
    style,
    className,
    ...props
  });
}