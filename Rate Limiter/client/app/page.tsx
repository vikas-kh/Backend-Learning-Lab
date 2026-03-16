"use client";
import { useState } from "react";

export default function Home() {

  const [result, setResult] = useState("No request yet");
  const [requests, setRequests] = useState(0);

  const sendRequest = async () => {
    try {
      const res = await fetch("http://localhost:8080");
      const data = await res.text();

      setResult(data);
      setRequests(prev => prev + 1);

    } catch (err) {
      setResult("Server not reachable");
    }
  };

  return (

    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >

      <div style={{ fontSize: "120px", fontWeight: "bold" }}>
        {requests}
      </div>

      <div style={{ fontSize: "28px", marginBottom: "40px" }}>
        Total Requests
      </div>

      <button
        onClick={sendRequest}
        style={{
          padding: "20px 50px",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        Send Request
      </button>

      <div
        style={{
          marginTop: "60px",
          fontSize: "50px",
          fontWeight: "bold",
        }}
      >
        {result}
      </div>

    </div>
  );
}