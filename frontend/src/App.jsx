import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/items")
      .then(res => res.json())
      .then(data => setItems(data));
      console.log(items);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Frontend Interview Tasks</h1>

      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      {/* TASK 1:
          Disable the button when count reaches 5
      */}

      {/* TASK 2:
          Add a Reset button
      */}

      {/* TASK 3:
          Show "Even" or "Odd"
      */}

      <hr />

      <h2>Downloadable Items</h2>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {/* TASK 4:
          Show a loading indicator while fetching
      */}

      {/* TASK 5:
          Handle fetch error gracefully
      */}
    </div>
  );
}