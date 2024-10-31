import React from "react";
import Layout from "../../../Components/Layout";

const page = () => {
  return (
    <Layout>
      <title>Event . EventLoom</title>

<div style={{height: "48px"}}>
<div className="flex items-center justify-center bg-gray-100">
  <form className="space-y-6 bg-white p-8 rounded shadow-lg w-full max-w-md" style={{marginTop: "-12rem", position: "absolute",  top: "27rem"}}>
    <h1 className="text-1xl font-bold text-center text-gray-800">Book Your Event</h1>
    <div className="flex flex-col">
      <input type="text" id="full-name" placeholder="Enter your full name" className="mt-1 border border-gray-300 rounded-md py-2 px-3 w-full" required />
    </div>
    <div className="flex flex-col">
      <input type="number" id="phone-number" placeholder="Enter your phone number" className="mt-1 border border-gray-300 rounded-md py-2 px-3 w-full" required />
    </div>
    <div className="flex flex-col">
      <input type="date" id="event-date" className="mt-1 border border-gray-300 rounded-md py-2 px-3 w-full" required />
    </div>
    <div className="flex flex-col">
      <input type="number" id="budget" placeholder="Enter your budget" className="mt-1 border border-gray-300 rounded-md py-2 px-3 w-full" />
    </div>
    <button type="submit" className="w-full hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded focus:ring focus:ring-gray-300" style={{backgroundColor: "#212529"}}>
      Submit
    </button>
  </form>
</div>

</div>
    </Layout>
  );
};

export default page;
