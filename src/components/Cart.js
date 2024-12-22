import SelectedCart from './SelectedCart';
import Empty from './Empty';

function Cart({ selected, dispatch }) {
  return (
    <div className="cart">
      <header className="cart-header">Your Cart ({selected.length})</header>

      {selected.length === 0 ? (
        <Empty />
      ) : (
        <SelectedCart selected={selected} dispatch={dispatch} />
      )}
    </div>
  );
}

export default Cart;
