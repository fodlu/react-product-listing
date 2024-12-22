import Dishes from './Dishes';

function Dessert({ cartList, dispatch, cartIndex }) {
  return (
    <div className="dessert">
      <header className="header">Desserts</header>
      <div className="desserts">
        <Dishes cartList={cartList} dispatch={dispatch} cartIndex={cartIndex} />
      </div>
    </div>
  );
}

export default Dessert;
