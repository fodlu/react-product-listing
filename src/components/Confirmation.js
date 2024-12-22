import Summaries from './Summaries';

function Confirmation({ selected, dispatch }) {
  const totalPrice = selected.reduce(
    (acc, cur) => acc + cur.price * cur.numbers,
    0
  );

  return (
    <div className="confirmationPage">
      <div className="overlay"></div>
      <div className="confirmation">
        <img src="assets\images\icon-order-confirmed.svg" alt="success" />
        <p class="heading">Order Confirmed</p>
        <span>We hope you enjoyed our food!</span>
        <Summaries selected={selected} />
        <div className="totalSelected">
          <p>Order total</p>
          <p className="totalPrice">
            $<span>{totalPrice.toFixed(2)}</span>
          </p>
        </div>
        <button onClick={() => dispatch({ type: 'newCart' })}>
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default Confirmation;
