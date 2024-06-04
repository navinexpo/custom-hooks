import { useTransition, useState } from "react";

const UseTransition = () => {
  const [items, setItems] = useState([]);
  const [isPending, startTranistion] = useTransition();

  const addItems = () => {
    startTranistion(() => {
      const newItems = Array.from({ length: 5000 }, (_, i) => `Item ${i + 1}`);
      setItems(newItems);
    });
  };
//   console.log(setItems);

  return (
    <div>
      <h1>Heavy List</h1>
      <button onClick={addItems}>Load Items</button>
      {isPending ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item}> {item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UseTransition;

/*
   - allows you to defer state updates for less urgent parts of the UI. 
   - Rendering the heavy list component withouth blocking the main UI components. 
   - Its similar to the useDeferredValue() hook. 
   - By default all the states are urgent. 
   - Certain states aren't urgent and we can use this hook for them. 

*/
