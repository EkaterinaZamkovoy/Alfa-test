import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppRootStateType } from "../../redux/store";
import { Card } from "../Card";
import { toggleLike, deleteDog } from "../../redux/slices/DogsSlice";
import { Button } from "../Button";

export const ProductsPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { dogs, loading, error } = useSelector(
    (state: AppRootStateType) => state.dogs
  );

  const [filter, setFilter] = useState<"all" | "favorites">("all");

  const filteredDogs =
    filter === "favorites" ? dogs.filter((dog) => dog.liked) : dogs;

  const handleToggleLike = (id: number) => {
    dispatch(toggleLike(id));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteDog(id));
  };

  const onAllClickHandler = () => {
    setFilter("all");
  };

  const onFavoritesClickHandler = () => {
    setFilter("favorites");
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="filterBlockBtn">
        <Button className="all" title="All Dogs" onClick={onAllClickHandler} />
        <Button
          className="favorites"
          title="Favorites"
          onClick={onFavoritesClickHandler}
        />
      </div>
      <div className="card-list">
        {filteredDogs.map((dog) => (
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
