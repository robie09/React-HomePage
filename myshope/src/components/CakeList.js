import cakes from "../shop";
import CakeItem from "./CakeItem";

const CakeList = () => {
  const cakeslist = cakes.map((cake) => {
    return <CakeItem key={cake.id} cake={cake} />;
  });

  return <div>{cakeslist}</div>;
};

export default CakeList;
