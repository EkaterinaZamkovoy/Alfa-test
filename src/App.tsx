import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { Card } from "./components/Card";
import { fetchDogs } from "./redux/slices/DogsSlice";

function App() {
  const dispatch: AppDispatch = useDispatch();
  const { dogs, loading, error } = useSelector(
    (state: RootState) => state.dogs
  );

  useEffect(() => {
    dispatch(fetchDogs());
  }, [dispatch]);

  return (
    <div className="app">
      <h1>Dog Breeds</h1>
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
          />
        ))}
      </div>
    </div>
  );
}

export default App;
