function SummaryDish({ sum }) {
  return (
    <div>
      <div className="summaryDish">
        <div className="summaryDetail">
          <img src={sum.image.thumbnail} alt="thumbnail" />
          <div className="summaryText">
            <p>{sum.name}</p>
            <p>
              {sum.numbers}x<span>${Math.round(sum.price).toFixed(2)}</span>
            </p>
          </div>
        </div>
        <p>{Math.round(sum.numbers * sum.price).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default SummaryDish;
