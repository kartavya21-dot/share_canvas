import { useRef, useEffect, useState } from "react";

export default function Canvas({isPencil}) {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = isPencil ? "white" : "blue";
    context.lineWidth = 3;

    contextRef.current = context;
  }, []);

  useEffect(()=>{
    contextRef.current.strokeStyle = isPencil ? "white" : "blue";
  }, [isPencil])

  const startDrawing = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;

    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);

    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const { offsetX, offsetY } = e.nativeEvent;

    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
      style={{ cursor: "crosshair", backgroundColor: "black" }}
    />
  );
}
