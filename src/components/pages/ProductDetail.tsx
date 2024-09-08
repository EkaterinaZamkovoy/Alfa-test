import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, AppRootStateType } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button";
import { useEffect } from "react";
import { fetchDogs } from "../../redux/slices/DogsSlice";

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const dog = useSelector((state: AppRootStateType) =>
    state.dogs.dogs.find((dog) => dog.id === Number(id))
  );

  useEffect(() => {
    if (!dog) {
      dispatch(fetchDogs());
    }
  }, [dispatch, dog]);

  if (!dog) {
    return <p>Loading...</p>;
  }

  const onBackClickHandler = () => {
    navigate("/products");
  };

  return (
    <div className="product-info">
      <h2>{dog.name}</h2>
      <img src={dog.image} alt={dog.name} />
      <p>{dog.description}</p>
      <p>
        <strong>Origin:</strong> {dog.origin}
      </p>
      <p>
        <strong>Group:</strong> {dog.breedGroup}
      </p>
      <p>
        <strong>Life Span:</strong> {dog.lifeSpan}
      </p>
      <p>
        <strong>Height:</strong> {dog.height} cm
      </p>
      <p>
        <strong>Weight:</strong> {dog.weight} kg
      </p>
      <Button
        onClick={onBackClickHandler}
        title="Back to Main"
        className="back-button"
      />
    </div>
  );
};
