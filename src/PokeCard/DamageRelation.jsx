import React from "react";
import iconStyle from "../icons/icons.module.css";

export default function DamageRelation({ title, icons }) {
  return (
    <>
      <p className={iconStyle.damageRelation}>{title}</p>
      <div style={{ height: "32px" }}>{icons}</div>
    </>
  );
}
