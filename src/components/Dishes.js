import Dish from './Dish';

function Dishes({ cartList, dispatch, cartIndex }) {
  return cartList.map((d, i) => (
    <Dish d={d} i={i} key={i} dispatch={dispatch} cartIndex={cartIndex} />
  ));
}

export default Dishes;
