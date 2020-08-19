import React from "react";
import "../assets/sass/Notification.scss";

function Notification(props) {
  let color = {
    success: "",
    error: "",
  };

  if (props.color === 200) {
    color.success = "green";
  } else if (props.color === 400) {
    color.error = "red";
  } else {
    color.success = "";
    color.error = "";
  }
  return (
    <div className={`toastr ${color.success} ${color.error}`}>
      <div className="content">
        <h4>{props.title}</h4>
        <span>{props.content}</span>
      </div>
    </div>
  );
}

export default Notification;
