import React, { useState, useEffect, Suspense } from "react";
import io from "socket.io-client";
import "./App.css";

// Lazy-load components
const ShipmentList = React.lazy(() => import("./components/ShipmentList"));
const ThemeToggle = React.lazy(() => import("./components/ThemeToggle"));

const socket = io("http://localhost:5000"); // WebSocket server URL

const App = () => {
  const [shipments, setShipments] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Fetch initial shipment data
    fetch("/mockData.json")
      .then((res) => res.json())
      .then((data) => setShipments(data));

    // Listen for real-time updates
    socket.on("shipmentUpdate", (updatedShipment) => {
      console.log("Received update:", updatedShipment); // Debugging
      setShipments((prev) =>
        prev.map((shipment) =>
          shipment.id === updatedShipment.id ? updatedShipment : shipment
        )
      );
    });

    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    console.log("Shipments updated:", shipments); // Debugging
  }, [shipments]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="dashboard" data-theme={theme}>
      <header className="header">
        <div className="logo">
          <img src="/favicon.ico" alt="Logo" />
          <p>Logistics</p>
        </div>

        <h3>Dashboard</h3>
        <Suspense fallback={<div>Loading Theme Toggle...</div>}>
          <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        </Suspense>
      </header>
      <main className="main-content">
        <Suspense fallback={<div>Loading Shipments...</div>}>
          <ShipmentList shipments={shipments} />
        </Suspense>
      </main>
    </div>
  );
};

export default App;
