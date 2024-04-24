import { useState } from "react";

import BgSelector from "./Components/bgSelector";
import PasswordGenerator from "./Components/passwordGenerator";

function App() {
  const [color, setColor] = useState("gray");
  return (
    <div className=" w-full h-screen" style={{ backgroundColor: color }}>
      <PasswordGenerator />
      <BgSelector setColor={setColor} />
    </div>
  );
}

export default App;
