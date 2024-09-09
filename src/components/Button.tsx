type ButtonPropsType = {
  title?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  isLike?: boolean;
  type?: string;
};

export const Button = ({
  title,
  onClick,
  className,
  isLike,
  type,
}: ButtonPropsType) => {
  const buttonClassName = `${className} ${isLike ? "liked" : className}`.trim();
  return (
    <button className={buttonClassName} onClick={onClick} type="submit">
      {title}
    </button>
  );
};
