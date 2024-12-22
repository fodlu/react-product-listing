import SelectedItem from './SelectedItem';

function SelectedCart({ selected, dispatch }) {
  const totalPrice =
    selected.length !== 0
      ? selected.reduce((acc, cur) => acc + cur.price * cur.numbers, 0)
      : 0;
  // console.log(selected);
  return (
    <div className="SelectedCart">
      {selected.map((selected, i) => (
        <SelectedItem selected={selected} key={i} />
      ))}
      <div className="totalSelected">
        <p>Order total</p>
        <p className="totalPrice">
          $<span>{Math.round(totalPrice).toFixed(2)}</span>
        </p>
      </div>

      <div className="carbon">
        <img src="assets/images/icon-carbon-neutral.svg" alt="carbon" />
        <p>
          This is a <span className="bold">carbon-neutral</span> delivery
        </p>
      </div>

      <button
        className="confirm"
        onClick={() => dispatch({ type: 'confirmation' })}
      >
        Confirm Order
      </button>
    </div>
  );
}

export default SelectedCart;
