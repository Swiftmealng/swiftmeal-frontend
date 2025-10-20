import { Button } from "@headlessui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { assets } from "../assets/assets";

export const TrackOrder = () => {
  const [orderID, setOrderID] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateOrderNumber = (value) => {
    // Format: ORD-XXXXX
    const regex = /^ORD-\d{3,}$/;
    return regex.test(value);
  };

  const handleTrack = () => {
    setError('');
    
    if (!orderID.trim()) {
      setError('Please enter an order number');
      return;
    }

    if (!validateOrderNumber(orderID)) {
      setError('Invalid format. Use: ORD-12345');
      return;
    }

    navigate(`/OrderDetails/${orderID}`);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div className="relative h-full max-w-7xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Input Your Order ID to</span>{" "}
              <br className=" xl:block hidden" />
              <span className="block text-indigo-600 xl:inline">
                Track Your Order
              </span>
            </h1>
            <br />
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mt-2">
              ✨ New Feature: Live Tracking
            </div>{" "}
            <br />
            <input
              type="text"
              className="border border-secondary w-70 sm:w-100 p-3 mt-5 rounded-md"
              name=""
              id=""
              value={orderID}
              onChange={(e) => {
                setOrderID(e.target.value.toUpperCase());
                setError("");
              }}
              placeholder="ORD ---- --- ----"
              onKeyPress={(e) => e.key === "Enter" && handleTrack()}
            />{" "}
            <br />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Button
                  onClick={handleTrack}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-solid hover:bg-secondary md:py-4 md:text-lg md:px-10"
                >
                  Track Order
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
