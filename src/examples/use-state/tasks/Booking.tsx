import { useState } from "react";

/**
 * Вы разрабатываете компонент для системы бронирования мест в кинотеатре. 
 * Пользователь может выбрать несколько мест (например, кликнув по кнопке "Забронировать"), 
 * и каждое место должно увеличивать счётчик забронированных мест.
 * Однако из-за особенностей API бронирования выбор мест обрабатывается асинхронно,
 * и несколько запросов могут отправляться почти одновременно.
 * Вам нужно реализовать компонент,который корректно обновляет счётчик забронированных мест,
 *  даже если пользователь быстро выбирает несколько мест.
 */

const mockBookingApi = (numSeats: number): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(numSeats);
    }, 500);
  });
};

export const Booking = () => {
  const [seatsBooked, setSeatsBooked] = useState<number>(0);
  const [isBooking, setIsBooking] = useState<boolean>(false);

  const bookSeats = async (numSeats: number) => {
    setIsBooking(true);
    try {
      const booked = await mockBookingApi(numSeats);
      setSeatsBooked((prev) => prev + booked);
      console.log(
        `Забронировано ${booked} мест, всего: ${seatsBooked + booked}`
      );
    } catch (error) {
      console.error("Ошибка бронирования:", error);
    } finally {
      setIsBooking(false);
    }
  };

  const handleQuickBooking = () => {
    bookSeats(2);
    bookSeats(3);
  };

  return (
    <div>
      <h4>Забронировано мест: {seatsBooked}</h4>
      <button onClick={handleQuickBooking} disabled={isBooking}>
        Быстро забронировать 5 мест (2+3)
      </button>
    </div>
  );
};
