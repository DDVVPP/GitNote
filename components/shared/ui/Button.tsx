import PlusIcon from '@/components/shared/icons/PlusIcon';
import GoogleIcon from '@/components/shared/icons/GoogleIcon';
import GithubIcon from '@/components/shared/icons/GithubIcon';
import github from '@/public/providers/github.svg';
import google from 'next-auth/providers/google';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: 'plus' | 'github' | 'google';
  color?: 'blue' | 'gray' | 'darkGray' | 'gradient';
}

const colorClassMap = {
  blue: 'bg-primary-500 text-black-900',
  gray: 'bg-gray-600 text-white-100',
  darkGray: 'bg-black-700 text-white-100',
  gradient: 'text-white-100 primary-gradient',
  default: 'bg-black-700 text-white-300',
};

const iconMap = {
  plus: PlusIcon,
  github: GithubIcon,
  google: GoogleIcon,
  default: null,
};

const baseclass =
  'paragraph-4-medium flex w-full items-center justify-center gap-2 rounded border border-none py-2 font-bold';

const Button = ({ children, icon, color, onClick }: ButtonProps) => {
  const colorClass = colorClassMap[color || 'default'];
  const IconComponent = iconMap[icon || 'default'];
  const iconColorClass = (() => {
    switch (color) {
      case 'blue':
        return 'fill-white-100';
      case 'gradient':
        return 'fill-white-100';
      case 'gray':
        return 'fill-primary-500';
      case 'darkGray':
        return 'fill-primary-500';
    }
  })();

  return (
    <button className={`${colorClass} ${baseclass}`} onClick={onClick}>
      {IconComponent && (
        <IconComponent className={icon === 'plus' ? iconColorClass : ''} />
      )}
      {children}
    </button>
  );
};

export default Button;
