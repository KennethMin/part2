import React from "react";

const SucsessNotification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className="sucsessMessage">{message}</div>;
};

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className="error">{message}</div>;
};

export { Notification, SucsessNotification };
