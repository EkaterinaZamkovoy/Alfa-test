import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../Button";
import { addDog } from "../../redux/slices/DogsSlice";

export const CreateProduct = () => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    image: "",
    name: "",
    description: "",
    origin: "",
    breedGroup: "",
    lifeSpan: "",
    height: "",
    weight: "",
  });

  const [errors, setErrors] = useState({
    image: "",
    name: "",
    description: "",
    origin: "",
    breedGroup: "",
    lifeSpan: "",
    height: "",
    weight: "",
  });

  const validateForm = () => {
    const newErrors: any = {};
    if (!formState.name) newErrors.name = "Breed Name is required";
    if (!formState.description)
      newErrors.description = "Description is required";
    // добавьте дополнительные проверки для других полей, если нужно
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addDog({ ...formState, id: Date.now(), liked: false }));
  };

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="form-block">
      <h2>Create a new dog breed:</h2>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formState.image}
          onChange={onChangeHandler}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Breed Name"
          value={formState.name}
          onChange={onChangeHandler}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formState.description}
          onChange={onChangeHandler}
          required
        />
        <input
          type="text"
          name="origin"
          placeholder="Origin"
          value={formState.origin}
          onChange={onChangeHandler}
          required
        />
        <input
          type="text"
          name="breedGroup"
          placeholder="Breed Group"
          value={formState.breedGroup}
          onChange={onChangeHandler}
          required
        />
        <input
          type="text"
          name="lifeSpan"
          placeholder="Life Span"
          value={formState.lifeSpan}
          onChange={onChangeHandler}
          required
        />
        <input
          type="text"
          name="height"
          placeholder="Height"
          value={formState.height}
          onChange={onChangeHandler}
          required
        />
        <input
          type="text"
          name="weight"
          placeholder="Weight"
          value={formState.weight}
          onChange={onChangeHandler}
          required
        />
        <button title="Add Dog" type="submit" className="add-batton" />
      </form>
    </div>
  );
};
