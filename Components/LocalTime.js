"use client";
import { useEffect, useState } from "react";

const LocalTime = () => {
  const [time, setTime] = useState("");

  const updateTime = () => {
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      timeZoneName: "short",
      hour12: true,
    };
    const localTime = now.toLocaleString("en-US", options);
    setTime(localTime);
  };

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <span
      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
      style={{
        textDecoration: "none",
        color: "white",
        fontSize: "larger",
      }}
    >
      {time}
    </span>
  );
};

export default LocalTime;
