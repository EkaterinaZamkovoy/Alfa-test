import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppRootStateType } from "../../redux/store";
import { Card } from "../Card";
import { toggleLike, deleteDog } from "../../redux/slices/DogsSlice";

export const ProductsPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { dogs, loading, error } = useSelector(
    (state: AppRootStateType) => state.dogs
  );

  const handleToggleLike = (id: number) => {
    dispatch(toggleLike(id));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteDog(id));
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="card-list">
        {dogs.map((dog) => (
          <Card
            key={dog.id}
            id={dog.id}
            title={dog.name}
            description={dog.description}
            image={dog.image}
            liked={dog.liked}
            onToggleLike={() => handleToggleLike(dog.id)}
            OnDelete={() => handleDelete(dog.id)}
          />
        ))}
      </div>
    </div>
  );
};
