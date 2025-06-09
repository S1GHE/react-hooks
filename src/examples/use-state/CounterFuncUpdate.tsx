import { useState } from "react";

export const CounterFuncUpdate = () => {
  const [value, setValue] = useState<number>(0);

  const incrementX2 = () => {
    // Function update (Функциональное обноваление)
    setValue((prev) => prev + 1);
    setValue((prev) => prev + 1);

    // Direction update (Прямое обновление) и оно не сработает :(
    // Потому что они оба обращаются к старому значению
    setValue(value + 1);
    setValue(value + 1);
  };
  return (
    <div>
      <h4>Counter {value}</h4>

      <button onClick={incrementX2}>increment</button>
    </div>
  );
};
