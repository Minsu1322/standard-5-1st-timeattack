import { useState } from "react";

export default function App() {
  const [cur, setCurrent] = useState(0);
  const [input, setInput] = useState(0);

  const HandlePlus = () => {
    setCurrent(cur + input);
  };
  const HandleMinus = () => {
    setCurrent(cur - input);
  };
  const HandleReset = () => {
    setCurrent(0);
    setInput(0);
  };

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>

      <div>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />{" "}
        만큼을
        <button onClick={HandlePlus}>더할게요</button>
        <button onClick={HandleMinus}>뺄게요</button>
        <button onClick={HandleReset}>초기화</button>
      </div>

      <hr />

      <div>
        <h3>결과</h3>
        <p>{cur}</p>
      </div>
    </div>
  );
}
