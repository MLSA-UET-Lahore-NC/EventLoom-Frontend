import React from "react";
import Link from "next/link";
import { SiEventbrite } from "react-icons/si";
import LocalTime from "./LocalTime";

const Header = () => {
  return (
    <div>
      <div
        className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        style={{ height: "4rem", backgroundColor: "#212529" }}
      >
        <div className="hidden sm:ml-6 sm:block">
          <a href="/">
            <SiEventbrite
              className="mr-5"
              color="#fff"
              style={{
                fontSize: "30px",
                position: "relative",
                top: "1rem",
                left: "-29rem",
                cursor: "pointer",
              }}
            />
          </a>

          <div
            className="flex space-x-4 text-center justify-center items-center p-3"
            style={{ marginTop: "-2rem" }}
          >
            <LocalTime/>
            <a
              href="/event"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300  hover:text-white"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "larger",
              }}
            >
              Event
            </a>
            <a
              href="/ticket"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300  hover:text-white"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "larger",
              }}
            >
              Ticket
            </a>
            <a
              href="/registration"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300  hover:text-white "
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "larger",
              }}
            >
              Registration
            </a>
            <a
              href="/management"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300  hover:text-white"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "larger",
              }}
            >
              Management
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
