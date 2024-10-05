import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="heading">Counter App</h1>
      <div className="counter">
        <h1>your count is </h1>
        <h1>
          <span>{count}</span>
        </h1>

        <div className="btn-holder">
          <button
            onClick={() => {
              setCount((prev) => prev + 1);
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              setCount((prev) => {
                if (prev <= 0) {
                  return 0;
                }
                return prev - 1;
              });
            }}
          >
            Decrement
          </button>
          <button
            onClick={() => {
              setCount(0);
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
