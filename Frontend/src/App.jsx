import { useState } from "react";
import Canvas from "./Canvas/Canvas";

function App() {
  const [isPencil, setIsPencil] = useState(false);

  return (
    <div>
      {/* Tool Toggle */}
      <div
        onClick={() => setIsPencil((prev) => !prev)}
        style={{
          position: "fixed",
          top: 10,
          left: 10,
          padding: "10px 15px",
          background: "white",
          borderRadius: "8px",
          cursor: "pointer",
          zIndex: 10,
          fontWeight: "bold",
        }}
      >
        {isPencil ? "✏️ Pencil" : "🧽 Eraser"}
      </div>

      <Canvas isPencil={isPencil} />
    </div>
  );
}

export default App;