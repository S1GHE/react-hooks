import { useEffect, useState, useRef } from "react";

interface WebSocketState {
  isConnected: boolean;
  lastMessage: string | null;
  error: string | null;
}

export const useWebSocketHook = (url: string = 'wss://echo.websocket.org') => {
  const wsRef = useRef<WebSocket | null>(null);
  const [state, setState] = useState<WebSocketState>({
    isConnected: false,
    lastMessage: null,
    error: null,
  });
  const connectionCountRef = useRef(0); 
  const renderCountRef = useRef(0);

  useEffect(() => {
    connectionCountRef.current += 1;
    const currentConnectionId = connectionCountRef.current;

    console.log(`[Connection ${currentConnectionId}] Создаем новый WebSocket`);
    wsRef.current = new WebSocket(url);

    wsRef.current.onopen = () => {
      console.log(`[Connection ${currentConnectionId}] WebSocket подключен`, wsRef.current);
      setState((prev) => ({ ...prev, isConnected: true, error: null }));
    };

    wsRef.current.onmessage = (event: MessageEvent) => {
      const message = event.data;
      console.log(`[Connection ${currentConnectionId}] Получено сообщение:`, message);
      setState((prev) => ({ ...prev, lastMessage: message }));
    };

    wsRef.current.onerror = (error) => {
      console.error(`[Connection ${currentConnectionId}] Ошибка WebSocket:`, error);
      setState((prev) => ({ ...prev, error: 'Connection error', isConnected: false }));
    };

    wsRef.current.onclose = () => {
      console.log(`[Connection ${currentConnectionId}] WebSocket отключен`);
      setState((prev) => ({ ...prev, isConnected: false }));
    };

    const sendInterval = setInterval(() => {
      if (wsRef.current?.readyState === WebSocket.OPEN) {
        const message = `Привет от клиента (${new Date().toLocaleTimeString()})`;
        console.log(`[Connection ${currentConnectionId}] Отправка:`, message);
        wsRef.current.send(message);
      }
    }, 2000);

    return () => {
      console.log(`[Connection ${currentConnectionId}] Выполняем cleanup`);
      if (wsRef.current) {
        wsRef.current.close();
      }
      clearInterval(sendInterval);
    };
  }, [url]);

  renderCountRef.current += 1;
  console.log(`Хук был вызван (рендер ${renderCountRef.current})`);

  return {
    ...state,
    connectionCount: connectionCountRef.current,
    renderCount: renderCountRef.current,
  };
};