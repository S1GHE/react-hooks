import { useState } from "react";

interface ServerResponse {
  clickId: number;
  clickNumber: number;
}
// Пример Функционального обновления в асинхронных операциях
export const ClickTracker = () => {
  // Состояние с типизацией
  const [clickCount, setClickCount] = useState<number>(0);
  const [clickLog, setClickLog] = useState<string[]>([]);

  // Асинхронная функция для имитации отправки данных на сервер
  const sendClickToServer = async (clickNumber: number): Promise<ServerResponse> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { clickId: Date.now(), clickNumber };
  };

  const handleClick = async (): Promise<void> => {
    try {
      // Функциональное обновление счётчика -> Зависимость от пред. состояния
      setClickCount(prevCount => {
        const newCount = prevCount + 1;
        // Отправка данных на сервер
        sendClickToServer(newCount).then(response => { // -> Асинхронные операция
          // Функциональное обновление лога -> Иммутабельность
          setClickLog(prevLog => [
            ...prevLog,
            `Клик #${response.clickNumber} отправлен с ID: ${response.clickId}`,
          ]);
        });
        return newCount;
      });


        // НЕПРАВИЛЬНЫЙ ПРИМЕР: использование устаревшего состояния без функционального обновления
//        setClickCount(clickCount + 1); // Может использовать старое значение clickCount
//        sendClickToServer(clickCount + 1).then(response => {
//          setClickLog([...clickLog, `Клик #${response.clickNumber} отправлен с ID: ${response.clickId}`]); // Может потерять данные лога
//        });
        // Проблема: при быстрых кликах замыкание фиксирует устаревшие clickCount и clickLog, вызывая баги

    } catch (err) {
      console.error('Ошибка при отправке клика:', err);
    }
  };

  return (
    <div>
      <h2>Трекер кликов</h2>
      <button onClick={handleClick}>Кликни меня!</button>
      <p>Количество кликов: {clickCount}</p>
      <h3>Лог кликов:</h3>
      <ul>
        {clickLog.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
};