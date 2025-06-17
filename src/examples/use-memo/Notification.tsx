import React, { useState, useEffect } from "react";

const mockNotifications = [
  {
    id: "NOTIF001",
    message: "Ваш заказ доставлен",
    timestamp: "2025-06-17T10:30:00Z",
  },
  {
    id: "NOTIF002",
    message: "Новый комментарий к посту",
    timestamp: "2025-06-17T12:15:00Z",
  },
  {
    id: "NOTIF003",
    message: "Система обновлена",
    timestamp: "2025-06-17T14:00:00Z",
  },
];

// Дочерний компонент, обернутый в React.memo
const NotificationCard: React.FC<{
  notification: (typeof mockNotifications)[0];
}> = React.memo(({ notification }) => {
  console.log(`Рендеринг уведомления: ${notification.id}`);
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "12px",
        margin: "8px 0",
        borderRadius: "6px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <p>
        <strong>{notification.message}</strong>
      </p>
      <p style={{ fontSize: "0.9em", color: "#555" }}>
        {new Date(notification.timestamp).toLocaleString()}
      </p>
    </div>
  );
});

export const NotificationList: React.FC = () => {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((t) => t + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  console.log("Рендеринг NotificationList");

  return (
    <div style={{ padding: "16px" }}>
      <h2>Уведомления</h2>
      <p>Обновлений: {tick}</p>
      {mockNotifications.map((notification) => (
        <NotificationCard key={notification.id} notification={notification} />
      ))}
    </div>
  );
};
