import { useEffect, useRef } from "react";

export default function useSocket(onMessage) {
  const socketRef = useRef(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8000/ws");
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("Connected");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      onMessage(data);
    };

    socket.onclose = () => {
      console.log("Disconnected");
    };

    return () => socket.close();
  }, []);

  const sendMessage = (data) => {
    if (socketRef.current?.readyState === 1) {
      socketRef.current.send(JSON.stringify(data));
    }
  };

  return { sendMessage };
}