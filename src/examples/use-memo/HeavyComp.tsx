import { useMemo, useState, type FC } from "react";

const bigList = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

const HeavyComp: FC<{ items: Array<string> }> = ({ items }) => {
  const [filter, setFilter] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const filteredItems = useMemo(() => {
    console.log("фильтр из useMemo");
    return items.filter((item) => {
      return item.toLowerCase().includes(filter.toLowerCase());
    });
  }, [items, filter]);

  // В такой конфигурации items.filter будет запускаться при каждом рендере, даже если
  // - items не менялся
  // - filter не менялся
  // const filteredItems = (() => {
  //   console.log("Фильтр без мемо");
  //   return items.filter((item) =>
  //     item.toLowerCase().includes(filter.toLowerCase())
  //   );
  // })();

  return (
    <div>
      <h2>Список (всего: {filteredItems.length})</h2>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Поиск..."
      />
      <ul>
        {filteredItems.slice(0, 20).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          setCount(count + 1);
          console.log("setcount");
        }}
      >
        add {count}
      </button>
    </div>
  );
};

export const HeavyCompApp = () => {
  return <HeavyComp items={bigList} />;
};
