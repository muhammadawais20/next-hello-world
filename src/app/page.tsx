"use client";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      setMessage("");
      const data = await (
        await fetch(
          "https://laravel-hello-world-main-q6jbrx.laravel.cloud/api/hello"
        )
      ).json();
      setMessage(data?.message);
    } catch (error) {
      alert("Something went wrong.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
        Next/Laravel Hello World
      </h2>

      {loading ? (
        <p>Getting Data...</p>
      ) : (
        <button
          className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-sm transition-colors"
          disabled={loading}
          onClick={getData}
        >
          Get Data
        </button>
      )}
      {message && (
        <p className="text-lg text-gray-600 mb-6 mt-10">
          Here is the message from the server: {message}
        </p>
      )}
    </div>
  );
}
