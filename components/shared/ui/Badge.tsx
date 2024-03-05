import React from 'react';
import { DotIcon, InfoIcon } from 'lucide-react';

interface BadgeProps extends React.PropsWithChildren {
  icon?: 'info' | 'dot';
  color?: 'blue' | 'orange' | 'red' | 'green' | 'gray';
  size?: 'small' | 'medium';
  variant?: 'outline' | 'solid';
}

const colorClassMap = {
  blue: 'bg-blue-100 text-blue-800',
  orange: 'bg-orange-100 text-orange-900',
  red: 'bg-red-100 text-red-900',
  green: 'bg-green-100 text-green-800',
  gray: 'bg-gray-100 text-gray-900',
  default: 'bg-gray-100 text-gray-900',
};

const outlineColorClassMap = {
  blue: 'border border-blue-200 text-blue-800',
  orange: 'border border-orange-200 text-orange-900',
  red: 'border border-red-200 text-red-900',
  green: 'border border-green-500 text-green-800',
  gray: 'border border-gray-100/20 text-gray-600',
  default: 'border border-gray-100/20 text-gray-600',
};

const textSizeClassMap = {
  small: 'paragraph-4-medium',
  medium: 'paragraph-3-medium',
  default: 'paragraph-4-medium',
};

const iconSizeClassMap = {
  small: '12px',
  medium: '16px',
  default: '12px',
};

const IconMap = {
  info: InfoIcon,
  dot: DotIcon,
  default: null,
};

const baseclass =
  'flex items-center content-center px-2 py-1 rounded-2xl w-min text-nowrap';

const Badge = ({ children, icon, color, size, variant }: BadgeProps) => {
  const colorClass = colorClassMap[color || 'default'];
  const outlineColorClass = outlineColorClassMap[color || 'default'];
  const textSizeClass = textSizeClassMap[size || 'default'];
  const iconSizeClass = iconSizeClassMap[size || 'default'];
  const IconComponent = IconMap[icon || 'default'];

  return (
    <div
      className={`${baseclass} ${textSizeClass} ${variant === 'outline' ? outlineColorClass : colorClass} ${icon !== 'dot' ? 'gap-1' : 'pr-4'} `}
    >
      {IconComponent && (
        <IconComponent size={icon === 'dot' ? '24px' : iconSizeClass} />
      )}
      {children}
    </div>
  );
};

export default Badge;
