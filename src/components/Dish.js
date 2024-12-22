import { useState } from 'react';

function Dish({ d, i, dispatch }) {
  const [index, setIndex] = useState(1);
  const [isClicked, setIsClicked] = useState(false);

  function handleIncreament() {
    setIndex(() => index + 1);
  }

  function handleDecrement() {
    setIndex(index === 1 ? index : index - 1);
    // setCartList((d.count = index));
  }

  // console.log(d);

  return (
    <div className="dish" key={i}>
      <div className={isClicked ? 'displayImage active' : 'displayImage'}>
        <img src={`${d.image.desktop}`} alt={d.name} />
        {!isClicked ? (
          <button
            onClick={() => {
              // handleDecrement();
              setIsClicked(!isClicked);
              dispatch({
                type: 'addToCart',
                payload: d,
                index: index
              });
            }}
          >
            <span>
              <img src="assets/images/icon-add-to-cart.svg" alt="cart"></img>
            </span>
            <span>Add to Cart</span>
          </button>
        ) : (
          <button>
            <span>
              <img
                src="assets\images\icon-decrement-quantity.svg"
                alt="decrement"
                onClick={() => {
                  handleDecrement();
                }}
              />
            </span>
            <span className="count">{index}</span>
            <span
              onClick={() => {
                handleIncreament();
                dispatch({
                  type: 'increaseCount',
                  payload: index + 1
                });
              }}
            >
              <img
                src="assets\images\icon-increment-quantity.svg"
                alt="increment"
              />
            </span>
          </button>
        )}
      </div>

      <div className="details">
        <p className="category">{d.category}</p>
        <p className="dishName">{d.name}</p>
        <p className="price">${Number(d.price).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Dish;
