type ButtonPropsType = {
  title?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  isLike?: boolean;
};

export const Button = ({
  title,
  onClick,
  className,
  isLike,
}: ButtonPropsType) => {
  const buttonClassName = `${className} ${isLike ? "liked" : className}`.trim();
  return (
    <button className={buttonClassName} onClick={onClick}>
      {title}
    </button>
  );
};
