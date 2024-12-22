import SummaryDish from './SummaryDish';

function Summaries({ selected }) {
  return (
    <div className="summaryDishes">
      {selected.map((sum, index) => (
        <SummaryDish sum={sum} key={index} />
      ))}
    </div>
  );
}

export default Summaries;
