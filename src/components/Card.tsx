import React from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

type CardPropsType = {
  id: number;
  title: string;
  description: string;
  image: string;
  liked: boolean;
  onToggleLike: () => void;
  OnDelete: () => void;
};

export const Card = ({
  id,
  title,
  description,
  image,
  liked,
  onToggleLike,
  OnDelete,
}: CardPropsType) => {
  const navigate = useNavigate();

  const cardClickNandler = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".like, .delete")) {
      return;
    }
    navigate(`/products/${id}`);
  };
  return (
    <div className="card" onClick={cardClickNandler}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="card-description">{description.slice(0, 50)}</p>
      <div className="btn-block">
        <Button className="like" onClick={onToggleLike} isLike={liked} />
        <Button className="delete" onClick={OnDelete} />
      </div>
    </div>
  );
};
