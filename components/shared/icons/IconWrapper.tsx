const IconWrapper = (
  OriginalComponent: React.ComponentType<any>,
  backgroundStyle?: string,
  padding?: string,
  strokeOrFill?: string
) => {
  const newComponent = ({ size = 24, ...rest }: { size?: number }) => {
    return (
      <div
        className={`${
          backgroundStyle ? backgroundStyle : "bg-black-700 rounded border-none"
        } ${padding ? padding : "p-1"} flex ${strokeOrFill}`}
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
