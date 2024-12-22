function SelectedItem({ selected }) {
  // console.log(selected);

  if (selected === undefined) return;
  return (
    <div className="selected">
      <div>
        <p className="dishName">{selected.name}</p>
        <p className="amount">
          <span className="quantity">{selected.numbers}</span>
          <span className="eachPrice">
            ${Math.round(Number(selected.price)).toFixed(2)}
          </span>
          <span className="totalEachPrice">
            {Math.round(Number(selected.price * selected.numbers)).toFixed(2)}
          </span>
        </p>
      </div>
      <button>
        <img src="assets\images\icon-remove-item.svg" alt="close button" />
      </button>
    </div>
  );
}

export default SelectedItem;
