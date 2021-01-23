import { Item, Itemimg } from "../style";

const CakeItem = (props) => {
  return (
    <Item>
      <p>
        <Itemimg src={props.cake.image} alt="cakeindex" />
      </p>

      <p>{props.cake.name}</p>

      <p className="price"> Price:{props.cake.price}</p>
    </Item>
  );
};
export default CakeItem;
