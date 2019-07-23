import React from "react";
import "./Messages.css";

export default function Messages(props) {
  const badge = props.unread ? (
    <span className="badge">{props.unread}</span>
  ) : null;
  return (
    <div className="Messages">
      {props.name}
      {badge}
    </div>
  );
}
