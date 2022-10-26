import React from "react";
import iconStyle from "../icons/icons.module.css";
export default function TypeIndicator({ typeList }) {
  function getIcons(fromArr) {
    return fromArr.map((x) => {
      return (
        <div className={`${iconStyle[x]} ${iconStyle.icon}`}>
          <img src={require("../icons/" + x + ".svg")} title={x} alt="" />
        </div>
      );
    });
  }
  return (
    <div style={{ position: "absolute", top: "160px", left: "10px" }}>
      {getIcons(typeList)}
    </div>
  );
}
