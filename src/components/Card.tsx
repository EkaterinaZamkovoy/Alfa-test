type CardPropsType = {
  id: number;
  title: string;
  description: string;
  image: string;
  liked: boolean;
};

export const Card = ({
  id,
  title,
  description,
  image,
  liked,
}: CardPropsType) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
