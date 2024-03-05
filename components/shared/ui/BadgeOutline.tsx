import InfoIcon from '../Icons/InfoIcon';
import DotIcon from '../Icons/DotIcon';
import { Badge } from './badge';

type Icon = 'none' | 'info' | 'dot';
type Props = {
  children: React.ReactNode;
  strokeColor?: string;
  outlineColor?: string;
  size: 'small' | 'medium';
  icon: Icon;
};

const BadgeOutline = ({
  children,
  strokeColor = 'blue-900',
  outlineColor = 'border-blue-200',
  size,
  icon,
}: Props): JSX.Element => {
  const iconVars = (icon: Icon) => {
    switch (icon) {
      case 'none':
        return null;
      case 'info':
        return <InfoIcon className={`stroke-${strokeColor}`} />;
      case 'dot':
        return <DotIcon className={`fill-${strokeColor}`} />;
    }
  };

  return (
    <Badge
      variant="outline"
      className={`text-${strokeColor} ${outlineColor} justify-center w-min ${size === 'small' ? 'paragraph-4-medium' : 'paragraph-3-medium'} gap-2`}
    >
      {iconVars(icon)}
      {children}
    </Badge>
  );
};

export default BadgeOutline;
