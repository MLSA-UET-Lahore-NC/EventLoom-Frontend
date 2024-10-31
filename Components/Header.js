import React from "react";
import Link from "next/link";
import { SiEventbrite } from "react-icons/si";
import LocalTime from "./LocalTime";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaFlickr } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


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
            
              <a href="https://www.facebook.com/a2zevents" target="_blank" rel="noopener noreferrer">
            <FaFacebookF style={{position: "absolute", top: "22px", left: "90rem", color: "white", fontSize: "x-large"}}/>
              </a>

              <a href="https://www.instagram.com/a2zevents/" target="_blank" rel="noopener noreferrer">
            < FaInstagram style={{position: "absolute", top: "22px", left: "92rem", color: "white", fontSize: "x-large"}}/>
              </a>

              <a href="https://www.pinterest.com/a2zevent/" target="_blank" rel="noopener noreferrer">
            < FaPinterestP style={{position: "absolute", top: "22px", left: "94rem", color: "white", fontSize: "x-large"}}/>
              </a>

              <a href="https://www.flickr.com/photos/a2zeventssolutions" target="_blank" rel="noopener noreferrer">
            < FaFlickr style={{position: "absolute", top: "22px", left: "96rem", color: "white", fontSize: "x-large"}}/>
              </a>

              <a href="https://www.youtube.com/user/a2zeventssolutions" target="_blank" rel="noopener noreferrer">
            < FaYoutube style={{position: "absolute", top: "22px", left: "98rem", color: "white", fontSize: "x-large"}}/>
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
