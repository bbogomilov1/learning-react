function FunctionEvent() {
  function clickHandler() {
    console.log("button clicked");
  }
  return (
    <div>
      <p>Handling a function event</p>
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
}

export default FunctionEvent;
