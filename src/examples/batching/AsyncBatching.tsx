import { useState } from "react";

export const AsyncBatching = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const updateState = () => {
    // Пример без батчинга (в асинхронном коде) до React 18:
    setTimeout(() => {
      setCount((c) => c + 1); // → 1 рендер
      setMessage("Updated"); // → 2 рендер (без батчинга!)
    }, 1000);

    // React 18 и выше: Введён автоматический батчинг (Automatic Batching),
    // который распространяется на все обновления,
    // включая асинхронные (в setTimeout, Promise, async/await),
    // если они происходят в рамках одного цикла событий.

    setTimeout(() => {
      setCount((prev) => prev + 1);
      setCount((prev) => prev + 1); // Батчатся, один рендер
      setMessage("Значение обновлено");
    }, 1000);
  };

  return (
    <div>
      <p>{count}</p>
      <p>{message}</p>
      <button onClick={updateState}>Обновить</button>
    </div>
  );
};
