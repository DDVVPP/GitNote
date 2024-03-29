type SettingsType = {
  backgroundStyle?: string;
  padding?: string;
  strokeOrFill?: string;
};

const IconWrapper = (
  OriginalComponent: React.ComponentType<any>,
  settings?: SettingsType
) => {
  const backgroundStyle =
    settings?.backgroundStyle ?? "bg-black-700 rounded border-none";
  const padding = settings?.padding ?? "p-1";
  const strokeOrFill = settings?.strokeOrFill ?? "";

  const newComponent = ({ size = 24, ...rest }: { size?: number }) => {
    return (
      <div
        className={`${backgroundStyle} ${padding} flex ${strokeOrFill}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        <OriginalComponent {...rest} />
      </div>
    );
  };
  return newComponent;
};

export default IconWrapper;
