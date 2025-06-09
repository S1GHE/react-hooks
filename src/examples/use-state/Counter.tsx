import { useState } from "react";

/**
 * Компонент демонстрирует базовый паттерн управления состоянием в React:
 * 1. Объявление состояния
 * 2. Рендер текущего занчения
 * 3. Обновление через обработчики событий
 */
export const Counter = () => {
  const [value, setValue] = useState<number>(0);
  //      ↑      ↑            ↑              ↑
  //      |      |            |              Начальное значение
  //      |      |            Хук состояния
  //      |      Функция-сеттер
  //      Текущее значение

  const increment = () => {
    setValue(value + 1);
    // ↑        ↑
    // |        Новое значение на основе текущего
    // Функция обновления (вызывает перерендер)
  };

  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <h4>Counter {value}</h4>

      <button onClick={increment}>increment</button>
      {/* 
                                ↑
                                Передаем функцию, а не результат вызова
                                (без скобок в ссылке на функцию)
       */}
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
