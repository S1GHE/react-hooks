import { useEffect, useState, useRef } from "react";

interface ChatMessage {
  id: string;
  text: string;
}

export const ChatMessages = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [count, setCount] = useState(0);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [sendIntervalId, setSendIntervalId] = useState<NodeJS.Timeout | null>(
    null
  );
  const [connectionCount, setConnectionCount] = useState(0); // Счетчик подключений
  const renderCount = useRef(0);

  useEffect(() => {
    setConnectionCount((prev) => prev + 1);

    const newSocket = new WebSocket("wss://echo.websocket.org");
    setSocket(newSocket);
    console.log(`Создан новый WebSocket (подключение #${connectionCount + 1})`);

    newSocket.onopen = () => {
      console.log(`WebSocket подключён (подключение #${connectionCount + 1})`);

      const interval = setInterval(() => {
        if (newSocket.readyState === WebSocket.OPEN) {
          const message = `Сообщение #${messages.length + 1} от клиента`;
          newSocket.send(message);
          console.log(`Отправлено (подкл. #${connectionCount + 1}):`, message);
        }
      }, 2000);

      setSendIntervalId(interval);
    };

    newSocket.onmessage = (event: MessageEvent) => {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        text: event.data,
      };
      setMessages((prev) => [...prev, newMessage]);
    };

    newSocket.onclose = () => {
      console.log(`WebSocket отключён (подключение #${connectionCount + 1})`);
    };

    return () => {
      console.log(`Очистка (подключение #${connectionCount + 1})`);
      if (newSocket) {
        newSocket.close();
      }
      if (sendIntervalId) {
        clearInterval(sendIntervalId);
      }
    };
  }, []);

  renderCount.current += 1;
  console.log(`Рендер компонента: ${renderCount.current}`);

  return (
    <div style={{ border: "1px solid red", padding: "20px", margin: "10px" }}>
      <h3>Версия с useState (проблемы)</h3>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setCount(count + 1)}>
          Кликни меня (count: {count})
        </button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <p>
          Количество подключений: <strong>{connectionCount}</strong>
        </p>
        <p>
          Компонент перерендерился: <strong>{renderCount.current}</strong> раз
        </p>
        <p>
          Получено сообщений: <strong>{messages.length}</strong>
        </p>
      </div>

      <div
        style={{
          maxHeight: "200px",
          overflowY: "auto",
          border: "1px solid #ddd",
        }}
      >
        <h4>Сообщения:</h4>
        <ul>
          {messages.map((msg) => (
            <li key={msg.id}>{msg.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
