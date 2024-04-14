export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding som items to your packing list 🌴</em>
      </p>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      {percentPacked === 100 ? (
        <em>You got everything! Ready to go ✈️</em>
      ) : (
        <em>
          You have {numItems} items on your list, and you already packed
          {" " + packedItems} ({percentPacked}%)
        </em>
      )}
    </footer>
  );
}
