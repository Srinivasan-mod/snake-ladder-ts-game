import React from "react";
import "./Popup.css";

interface propsForTrigger {
  trigger: boolean;
  children: any;
}
const Popup = (props: propsForTrigger) => {
  return (
    <div>
      {props.trigger && (
        <div className="popup">
          <div className="popup-inner">{props.children}</div>
        </div>
      )}
    </div>
  );
};
export default Popup;
