import { useState } from "react";
import Canvas from "./Canvas/Canvas";

function App() {
  const [isPencil, setIsPencil] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsPencil(!isPencil)}
        style={{ border: "1px solid black", cursor: "pointer" }}
      >
        ✏️{isPencil ? "p" : "f"}
      </div>
      <Canvas isPencil={isPencil} />
    </div>
  );
}

export default App;
