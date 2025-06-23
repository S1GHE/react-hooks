import { useCallback, useState } from "react";

export const Antipatterns = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const logMessage = useCallback(() => {
    console.log("Кнопка нажата");
  }, []);

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button
        onClick={() => {
          handleClick();
          logMessage();
        }}
      >
        Увеличить
      </button>
    </div>
  );
};
