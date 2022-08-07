import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";

import "./Buttons.css";

export default function Buttons() {
  return (
    <div className="btn-wrapper">
      <div className="btn-container">
        <Button1 />
      </div>
      <div className="btn-container">
        <Button2 />
      </div>
      <div className="btn-container">
        <Button3 />
      </div>
    </div>
  );
}
