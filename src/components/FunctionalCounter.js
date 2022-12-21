import { useState } from "react";

function FunctionalCounter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>current counter is: {counter}</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
}

export default FunctionalCounter;
