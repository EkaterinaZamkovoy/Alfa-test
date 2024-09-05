import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { PATH } from "../../App";

export const Main = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/products");
  };
  return (
    <div>
      <h2>What breed of dog is your favorite</h2>
      <Button onClick={handleClick} title="Find" className="find" />
    </div>
  );
};
