import {useWebSocketHook} from "./useWebSocketHook.ts";
import { useState } from "react";

export const WebSoketDemo = () => {
    const { isConnected, lastMessage, error, connectionCount, renderCount } = useWebSocketHook();
    const [count, setCount] = useState(0)


    return (
      <div style={{ border: '1px solid black', padding: '20px', margin: '10px' }}>
        <h2>WebSocket Demo</h2>
        <p>Status: {isConnected ? 'Connected' : 'Disconnected'}</p>
        <p>Last Message: {lastMessage || 'No messages yet'}</p>
        <p>Error: {error || 'No errors'}</p>

        <button onClick={() => {
          setCount(count + 1)
          console.log('rerender')
        }}>add {count}</button>
        <p><strong>Количество рендеров:</strong> {renderCount}</p>
        <p><strong>Количество подключений:</strong> {connectionCount}</p>
      </div>
    );
}