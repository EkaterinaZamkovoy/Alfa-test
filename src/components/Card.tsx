import React from "react";
import { Button } from "./Button";

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
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="btn-block">
        <Button className="like" onClick={onToggleLike} isLike={liked} />
        <Button className="delete" onClick={OnDelete}  />
      </div>
    </div>
  );
};
