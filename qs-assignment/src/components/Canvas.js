import "./Canvas.css";
import Block from "./Block";

function Canvas({ data }) {
  return (
    <div className="canvas">
      <div className="canvas-container">
        <Block data={data} />
      </div>
    </div>
  );
}

export default Canvas;
