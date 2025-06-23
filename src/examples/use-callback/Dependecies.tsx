import { useCallback, useEffect, useState } from "react";

export const Dependecies = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  // Данная функция будет создаваться кажлый раз, при ре-рендре компонента
  // const fetchData = async () => {
  //   const response = await fetch(`https://api.example.com/data/${count}`);
  //   const result = await response.json();
  //   setData(result);
  // };

  const fetchData = useCallback(async () => {
    const response = await fetch(`https://api.example.com/data/${count}`);
    const result = await response.json();
    setData(result);
  }, [count]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Увеличить: {count}</button>
      <p>Данные: {JSON.stringify(data)}</p>
    </div>
  );
};
