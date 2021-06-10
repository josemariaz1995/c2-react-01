import { useState } from "react";

function App() {
  let [puntos, setPuntos] = useState(0);
  let [top, setTop] = useState(61);
  let [left, setLeft] = useState(0);
  const randomPosition = () => {
    setTimeout(() => {
      setTop(Math.floor(Math.random() * document.body.clientHeight + 61));
      setLeft(Math.floor(Math.random() * document.body.clientWidth + 1));
    }, 50);
  };
  return (
    <>
      <div className="container">
        <div className="puntos">{`Puntos ${puntos}`}</div>
      </div>
      <i
        className="fab fa-fly"
        onMouseOver={randomPosition}
        onClick={() => {
          setPuntos(++puntos);
        }}
        style={{
          top: top,
          left: left,
        }}
      ></i>
    </>
  );
}

export default App;
